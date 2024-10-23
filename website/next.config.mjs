/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/ebai2022.github.io', // Your GitHub repository name
    assetPrefix: '/ebai2022.github.io/', // Prefix for assets
};
  
export default nextConfig;