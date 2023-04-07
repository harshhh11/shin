/** @type {import('next').NextConfig} */
const nextConfig = {
  dangerouslyAllowSVG: true,
  reactStrictMode: true,
  images: {
    domains: ['cdn.myanimelist.net']
  }
}

module.exports = nextConfig
