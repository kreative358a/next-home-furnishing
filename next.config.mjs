// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "wqmssjooaxpowhrpllrj.supabase.co",
      },
      {
        protocol: "https",
        hostname: "cors-anywhere.herokuapp.com/https://www.ikea.com/us/en",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      }, // www.course-api.com
      {
        protocol: "https",
        hostname: "www.course-api.com",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "www.ikea.com",
        // hostname: "www.ikea.com/us/en",
        // port: "",
        // pathname: "/images/**",
      },
      // 	https://ak1.ostkcdn.com/images
      {
        protocol: "https",
        hostname: "ak1.ostkcdn.com",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
  // async headers() {
  //   return [
  //     {
  //       // matching all API routes
  //       // source: "/api/:path*",
  //       source: "/ikea-image/:path*",
  //       headers: [
  //         { key: "Access-Control-Allow-Credentials", value: "true" },
  //         {
  //           key: "Access-Control-Allow-Origin",
  //           value: "https://www.ikea.com",
  //         },
  //         {
  //           key: "Access-Control-Allow-Methods",
  //           value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  //         },
  //         {
  //           key: "Access-Control-Allow-Headers",
  //           value:
  //             "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  //         },
  //       ],
  //     },
  //   ];
  // },
  async rewrites() {
    return [
      {
        // source: "/api/:path*",
        // destination: "http://localhost:3002/:path*",
        source: "/ikea-image/:path*",
        destination: "https://www.ikea.com/us/en/images/products/:path*",
      },
    ];
  },
};

export default nextConfig;
