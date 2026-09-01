/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages deployment
  output: "export",
  // GitHub Pages serves from a subdirectory — set basePath to the repo name
  basePath: "/sarcs-iiith.github.io",
  trailingSlash: true,
  images: {
    // Static export requires unoptimized images (no server-side processing)
    unoptimized: true,
  },
};

export default nextConfig;
