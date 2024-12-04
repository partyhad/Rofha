/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SESSION_NAME: 'TFH Web',
    SESSION_KEY: 'TFH_WEB_USER',
    API_URL: 'https://www.goldenogbeka.com/api/v2',
    // API_URL: 'http://localhost:5000/api/v2',
    API_KEY: 'TFH_ADMIN',
    YOUTUBE_API_KEY: 'AIzaSyBLVYMcnDyJ6xbBJ42P7mhMxfbajccXZy8',
    YOUTUBE_UPLOAD_KEY: 'UULFIrW0trZAxTPLpJYXFksQ',
    YOUTUBE_CHANNEL_ID: 'UCLFIrW0trZAxTPLpJYXFksQ',
  },
  images: {
    domains: ['i.ytimg.com', 'res.cloudinary.com'],
  },
};

module.exports = nextConfig;
