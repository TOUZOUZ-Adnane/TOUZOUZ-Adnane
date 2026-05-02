import type { NextConfig } from "next";

const repoName = "TOUZOUZ-Adnane"; // ← IMPORTANT

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
};

export default nextConfig;
