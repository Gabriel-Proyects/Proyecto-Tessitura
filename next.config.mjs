/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // fuerza a Next a servir la imagen tal cual, sin procesarla
  },
  basePath: '/Proyecto-Tessitura',
  assetPrefix: '/Proyecto-Tessitura/',
};

export default nextConfig;