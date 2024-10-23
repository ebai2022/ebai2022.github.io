/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static export
    basePath: process.env.NODE_ENV === 'production' ? '/ebai2022.github.io' : '', // Base path for GitHub Pages
    assetPrefix: process.env.NODE_ENV === 'production' ? '/ebai2022.github.io/' : '', // Prefix for assets in GitHub Pages
    images: {
        unoptimized: true, // Disable Image Optimization since Next.js image optimization doesn't work with static export
    },
};

export default nextConfig;