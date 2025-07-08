/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true, // Needed for static hosting like GitHub Pages
  output: 'export',     // Enable next export
  images: {
    unoptimized: true,  // Avoid dynamic image handling for static exports
  },
};

export default nextConfig;
