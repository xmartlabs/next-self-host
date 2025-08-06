import type { NextConfig } from 'next';
// import path from 'path';

const nextConfig: NextConfig = {
  // Comment out standalone for now to get Amplify working
  // output: 'standalone',
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
