/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.graphassets.com"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "media.graphassets.com",
    //     port: "",
    //   },
    // ],
  },
};

module.exports = nextConfig;
