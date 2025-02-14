/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true, // Mencegah error terkait Next.js Image Optimization
  },
  basePath: "/fasel-app", // Ganti dengan nama repository GitHub kamu
  trailingSlash: true, // Menambahkan trailing slash agar routing lebih stabil
};

module.exports = nextConfig;
