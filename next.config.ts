import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/TOUZOUZ-Adnane",
  assetPrefix: "/TOUZOUZ-Adnane/out",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
