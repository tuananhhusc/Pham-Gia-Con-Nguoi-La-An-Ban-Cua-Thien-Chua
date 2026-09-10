/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/Pham-Gia-Con-Nguoi-La-An-Ban-Cua-Thien-Chua' : '',
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
