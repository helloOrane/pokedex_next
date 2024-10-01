/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['raw.githubusercontent.com'],
      formats: ['image/webp'],
      imageSizes: [28],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      remotePatterns: [
        {
            protocol: 'https',
            hostname: 'raw.githubusercontent.com',
            pathname: '/PokeMiners/pogo_assets/master/Images/Pokemon/**',
          },
          {
            protocol: 'https',
            hostname: 'github.com',
            pathname: '/PokeMiners/pogo_assets/blob/master/Images/Types/**',
          },
      ],
    },
  };
  
  export default nextConfig;
  