import type { NextConfig } from 'next';
// import path from 'path';

const nextConfig: NextConfig = {
  // No output configuration - use default for SSR
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
  compress: false,
};

export default nextConfig;
