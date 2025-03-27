/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['res.cloudinary.com'], // Add Cloudinary domain
      // Optional: You can also add other domains if needed
      // domains: ['res.cloudinary.com', 'example.com', 'another-domain.com'],
    },
    // ... other Next.js config options
  };

export default nextConfig;
