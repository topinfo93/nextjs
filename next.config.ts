import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },  
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "special-friends-d47d50ea86.strapiapp.com/admin/auth/login",
        pathname: '/**',
      },
    ],
    domains: ['ghosydney.com', 'anotherdomain.com','special-friends-d47d50ea86.strapiapp.com','strapiapp.com','special-friends-d47d50ea86.media.strapiapp.com'],
  },
};

export default nextConfig;



