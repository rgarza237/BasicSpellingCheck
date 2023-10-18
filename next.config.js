/** @type {import('next').NextConfig} */

const nextConfig = {
webpack: (config) => {
//    config.resolve.fallback = {fs: false, path: false};
config.module.rules.push({
    test: /\.(aff|dic)$/,
    use: 'raw-loader',
});
    return config;
},
};
module.exports = nextConfig
