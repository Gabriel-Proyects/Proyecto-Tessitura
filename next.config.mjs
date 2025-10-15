/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Proyecto-Tessitura',
  assetPrefix: '/Proyecto-Tessitura/',
  images: {
    unoptimized: true, // fuerza a Next a servir la imagen tal cual, sin procesarla
  },
};

export default nextConfig;