import type { MetadataRoute } from 'next';
const base='https://primatours-khemis-miliana.vercel.app';
export default function sitemap(): MetadataRoute.Sitemap { const paths=['/','/voyages','/destinations','/omra','/billetterie','/hotels','/offres','/agences','/a-propos','/demande','/contact','/favorites','/compare']; return paths.map(path=>({url:base+path,lastModified:new Date()})); }
