import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Explicitly set the root directory to prevent module resolution issues
  webpack: (config, { isServer }) => {
    // Ensure webpack resolves modules from the correct directory
    const projectRoot = path.resolve(__dirname);
    
    // Set resolve modules to prioritize project's node_modules
    if (!config.resolve) {
      config.resolve = {};
    }
    config.resolve.modules = [
      path.resolve(projectRoot, 'node_modules'),
      ...(Array.isArray(config.resolve.modules) ? config.resolve.modules : []),
      'node_modules',
    ];
    
    // Set resolveLoader to ensure loaders are found correctly
    if (!config.resolveLoader) {
      config.resolveLoader = {};
    }
    config.resolveLoader.modules = [
      path.resolve(projectRoot, 'node_modules'),
      ...(Array.isArray(config.resolveLoader.modules) ? config.resolveLoader.modules : []),
      'node_modules',
    ];
    
    // Explicitly resolve tailwindcss
    config.resolve.alias = {
      ...config.resolve.alias,
      tailwindcss: path.resolve(projectRoot, 'node_modules/tailwindcss'),
    };
    
    return config;
  },
  // Add empty turbopack config to silence warning (using webpack for module resolution)
  turbopack: {},
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache
    // Enable faster image loading
    unoptimized: false,
    // Faster loading with modern formats
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        pathname: '/**',
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@/components/ui'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
