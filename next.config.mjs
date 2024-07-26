/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['next-mdx-remote'],
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
      }
    ]
  },
}

export default nextConfig
