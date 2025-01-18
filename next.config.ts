import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'suitmedia.static-assets.id'
      },
      {
        hostname: 'images.unsplash.com',
      }
    ]
  }
};

export default nextConfig;
