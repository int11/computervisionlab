import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/computervisionlab",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
