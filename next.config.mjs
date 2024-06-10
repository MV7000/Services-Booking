/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    images: {
      unoptimized: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'eu-central-1-shared-euc1-02.graphassets.com',
            port: '',
            pathname: '/**',
          },
        ],
        domains:['lh3.googleusercontent.com','github.com']
      },
};

export default nextConfig;
