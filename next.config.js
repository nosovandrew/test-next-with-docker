/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    experimental: {
        outputStandalone: true,
    },
};

module.exports = nextConfig;
