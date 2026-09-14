import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: '*', allow: '/' }, sitemap: 'https://primatours-khemis-miliana.vercel.app/sitemap.xml' }; }
