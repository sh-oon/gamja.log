/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['next-mdx-remote'],
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }

    return config
  },
  images: {
    remotePatterns: [
      {
        hostname: 'velog.velcdn.com',
      },
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'media.geeksforgeeks.org',
      },
      {
        hostname: 'github.com',
      }
    ]
  },
}

export default nextConfig
