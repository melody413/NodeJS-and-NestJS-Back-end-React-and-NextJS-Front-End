/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: 'http://194.163.164.189:27017/api/v1/',
  },
  // reactStrictMode: false,
};

module.exports = nextConfig;
