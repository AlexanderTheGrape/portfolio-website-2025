import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Disable server-side features
  experimental: {
    appDir: true,
  },
  // devIndicators: false
};

export default nextConfig;