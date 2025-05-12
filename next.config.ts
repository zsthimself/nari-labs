import type { NextConfig } from "next";

// 判断是否为生产环境
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    // 在生产构建时忽略ESLint错误
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 在生产构建时忽略TypeScript错误
    ignoreBuildErrors: true,
  },
  // 只在生产环境中指定资源前缀为自定义域名，开发环境使用默认空字符串
  assetPrefix: isProd ? 'https://naridiaai.pro' : '',
};

export default nextConfig;
