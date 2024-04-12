/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // Use the prefix '/<repository-name>' in production and '' in development.
  basePath: isProd ? '/no-round-corners' : '',
  assetPrefix: isProd ? '/no-round-corners/' : '',
};

export default nextConfig;
