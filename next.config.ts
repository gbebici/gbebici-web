import type { NextConfig } from "next";

const cspHeader = `
  default-src 'self' https://wa.me https://api.whatsapp.com;
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://www.googleadservices.com https://*.googleadservices.com https://googleads.g.doubleclick.net https://*.doubleclick.net https://www.google.com https://*.google.com;
  script-src-elem 'self' 'unsafe-inline' https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://www.googleadservices.com https://*.googleadservices.com https://googleads.g.doubleclick.net https://*.doubleclick.net https://www.google.com https://*.google.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://googleads.g.doubleclick.net https://*.doubleclick.net https://www.google.com https://*.google.com https://img.youtube.com;
  font-src 'self' data:;
  connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://region1.analytics.google.com https://*.analytics.google.com https://www.googletagmanager.com https://*.googletagmanager.com https://googleads.g.doubleclick.net https://*.doubleclick.net https://www.google.com https://*.google.com https://api.whatsapp.com https://wa.me/*;
  frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com;
`.replace(/\n/g, '').replace(/\s{2,}/g, ' ').trim();

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader,
          },
        ],
      },
    ];
  },
};

export default nextConfig;