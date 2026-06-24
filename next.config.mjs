/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Khaled_Portfolio',
  assetPrefix: '/Khaled_Portfolio',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/Khaled_Portfolio',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig