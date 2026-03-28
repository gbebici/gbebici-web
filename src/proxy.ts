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
                {
                    error: 'Too many emails were sent, try again later',
                    message: 'Rate limit exceeded',
                },
                {
                    status: 429,
                    headers: {
                        'X-RateLimit-Limit': limit.toString(),
                        'X-RateLimit-Remaining': remaining.toString(),
                        'X-RateLimit-Reset': reset.toString(),
                    }
                }
            );
        }
    }

    const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

    const cspHeader = `
        default-src 'self' https://wa.me https://api.whatsapp.com;
        script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval' https: http:;
        style-src 'self' 'unsafe-inline';
        img-src 'self' blob: data: https://*.googletagmanager.com https://*.google-analytics.com https://*.doubleclick.net https://*.google.com https://img.youtube.com;
        connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.doubleclick.net https://*.google.com https://api.whatsapp.com;
        frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com;
    `.replace(/\s{2,}/g, ' ').trim();

    const requestHeaders = new Headers(req.headers);
    requestHeaders.set('x-nonce', nonce);
    requestHeaders.set('Content-Security-Policy', cspHeader);

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });

    response.headers.set('Content-Security-Policy', cspHeader);

    return response;
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
}