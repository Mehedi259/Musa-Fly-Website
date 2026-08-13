import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://46.225.103.236:8001/api/:path*/',
      },
      {
        source: '/media/:path*', 
        destination: 'http://46.225.103.236:8001/media/:path*',
      },
      {
        source: '/api_dummy/:path*',
        destination: 'http://46.225.103.236:8001/api/:path*/',
      },
    ]
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
