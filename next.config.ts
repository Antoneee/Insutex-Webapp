import type { NextConfig } from "next";
import dotenv from "dotenv";

// Initialize dotenv
dotenv.config();

const nextConfig: NextConfig = {
  distDir: 'build',
  experimental: {
    // This is experimental but can
    // be enabled to allow parallel threads
    // with nextjs automatic static generation
    workerThreads: false,
    cpus: 4
  }
};

export default nextConfig;
