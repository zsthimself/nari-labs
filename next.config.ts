import type { NextConfig } from "next";

// 判断是否为生产环境
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  images: { unoptimized: true },
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  assetPrefix: isProd ? 'https://naridiaai.pro' : '',
};

export default nextConfig;
