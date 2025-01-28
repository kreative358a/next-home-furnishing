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
          protocol: 'https',
          hostname: 'images.pexels.com',
        },
        {
          protocol: 'https',
          hostname: 'wqmssjooaxpowhrpllrj.supabase.co',
        },
        {
          protocol: 'https',
          hostname: 'img.clerk.com',
        }, // www.course-api.com
        {
          protocol: 'https',
          hostname: 'www.course-api.com',
          port: '',
          pathname: '/images/**',
        },        
        {
          protocol: 'https',
          hostname: 'www.ikea.com/us/en',
          port: '',
          pathname: '/images/**',
        },     
        // 	https://ak1.ostkcdn.com/images        
        {
          protocol: 'https',
          hostname: 'ak1.ostkcdn.com',
          port: '',
          pathname: '/images/**',
        }, 
        {
          protocol: 'https',
          hostname: 'raw.githubusercontent.com',
      },          
      ],
    },
  };
  
  export default nextConfig;
