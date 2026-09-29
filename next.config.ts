import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emits .next/standalone with a minimal server.js for the Docker image.
  output: "standalone",
  // Pin tracing to this project so a stray lockfile in a parent directory can't
  // change the standalone folder layout.
  outputFileTracingRoot: path.join(__dirname),
  turbopack: {
    root: path.join(__dirname)
  }
};

export default nextConfig;
