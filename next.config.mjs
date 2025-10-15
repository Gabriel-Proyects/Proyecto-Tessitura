/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // fuerza a Next a servir la imagen tal cual, sin procesarla
  },
};

export default nextConfig;