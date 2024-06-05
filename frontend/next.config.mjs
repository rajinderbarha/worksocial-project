// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{remotePatterns:[
        {
            protocol: "http",
            hostname: "localhost",
            port: "1337",
            pathname: "/uploads/**/*"
        },
        {
            protocol:"https",
            hostname: "placehold.co"
        },
        // {
        //     protocol:"https",
        //     hostname: "passionate-warmth-6fc3e2d1f7.media.strapiapp.com"
        // }
    ]}
};

export default nextConfig;
