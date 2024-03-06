/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"trekmunk.b-cdn.net"
            }
        ]
    }
};

export default nextConfig;
