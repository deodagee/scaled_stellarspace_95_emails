/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js configuration options here
  webpack: (config, { isServer }) => {
    // Enable source maps for better debugging in development and production
    if (!isServer) {
      config.devtool = 'source-map';
    }

    return config;
  },
};

module.exports = nextConfig;
