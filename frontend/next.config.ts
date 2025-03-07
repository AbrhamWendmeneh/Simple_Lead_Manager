import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    BACKEND_URL: process.env.BACKEND_URL || "http://localhost:3000",
  },
  server: {
    port: 3001,
  },
  // Ensure we're using Pages Router
  experimental: {
    
  },
};

export default nextConfig;
