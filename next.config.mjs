/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Khaled_portfolio',
  assetPrefix: '/Khaled_portfolio',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/Khaled_portfolio',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig