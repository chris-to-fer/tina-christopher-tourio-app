/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    domains: [
      "img.etimg.com",
      "assets.vogue.com",
      "m.media-amazon.com",
      "upload.wikimedia.org",
      "de.wikipedia.org",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.unsplash.**",
        hostname: "**.wikipedia.**",
        hostname: "images.unsplash.com",
        hostname: "*",
      },
    ],
  },
};

module.exports = nextConfig;
