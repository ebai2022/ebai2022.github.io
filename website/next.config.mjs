// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Creates a static export
    images: {
      unoptimized: true, // Required for static export
    },
    // Remove basePath since this is a user site
}
  
export default nextConfig