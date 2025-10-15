/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // fuerza a Next a servir la imagen tal cual, sin procesarla
  },
  basePath: '/PROYECTO-TESSITURA',
  assetPrefix: '/PROYECTO-TESSITURA/',
};

export default nextConfig;