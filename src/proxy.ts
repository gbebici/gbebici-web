import { NextRequest, NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const rateLimiter = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.slidingWindow(3, '1 h'),
    analytics: true,
    prefix: '@upstash/ratelimit',
});

export async function proxy(req: NextRequest) {

    if (req.nextUrl.pathname.startsWith('/api/send')) {
        const forwardedFor = req.headers.get('x-forwarded-for');
        const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';
        const { success, limit, remaining, reset } = await rateLimiter.limit(ip);

        if (!success) {
            return NextResponse.json(
                { error: 'Too many emails were sent, try again later', message: 'Rate limit exceeded' },
                { status: 429, headers: { 'X-RateLimit-Limit': limit.toString(), 'X-RateLimit-Remaining': remaining.toString(), 'X-RateLimit-Reset': reset.toString() } }
            );
        }
    }

    const cspHeader = `
        default-src 'self' https://wa.me https://api.whatsapp.com;
        script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://www.googleadservices.com https://*.googleadservices.com https://googleads.g.doubleclick.net https://*.doubleclick.net https://www.google.com https://*.google.com https://www.google.com.br https://*.google.com.br https://www.youtube.com;
        script-src-elem 'self' 'unsafe-inline' https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://www.googleadservices.com https://*.googleadservices.com https://googleads.g.doubleclick.net https://*.doubleclick.net https://www.google.com https://*.google.com https://www.google.com.br https://*.google.com.br https://www.youtube.com;
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
        font-src 'self' 'unsafe-inline' https://fonts.gstatic.com;
        img-src 'self' blob: data: https://*.googletagmanager.com https://*.google-analytics.com https://*.doubleclick.net https://*.google.com https://www.google.com.br https://*.google.com.br https://img.youtube.com;
        connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googleadservices.com https://*.googleadservices.com https://*.googletagmanager.com https://*.doubleclick.net https://*.google.com https://www.google.com.br https://*.google.com.br https://api.whatsapp.com https://wa.me/;
        frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com;
    `.replace(/\s{2,}/g, ' ').trim();

    const response = NextResponse.next();
    response.headers.set('Content-Security-Policy', cspHeader);

    return response;
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
}