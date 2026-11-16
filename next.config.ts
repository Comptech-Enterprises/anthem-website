import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev",
      },
    ],
  },
};

export default nextConfig;
