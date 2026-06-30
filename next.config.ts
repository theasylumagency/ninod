import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/work",
        destination: "/visual-archive",
        permanent: true,
      },
      {
        source: "/works",
        destination: "/visual-archive",
        permanent: true,
      },
      {
        source: "/scarves",
        destination: "/wearable-archive",
        permanent: true,
      },
      {
        source: "/wearable",
        destination: "/wearable-archive",
        permanent: true,
      },
      {
        source: "/inquire",
        destination: "/acquire",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
