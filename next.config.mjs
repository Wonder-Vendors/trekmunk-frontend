/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"trekmunk.b-cdn.net"
            },
            {
                protocol:"https",
                hostname:"www.trekmunk.com"
            }
        ]
    }
};

export default nextConfig;
