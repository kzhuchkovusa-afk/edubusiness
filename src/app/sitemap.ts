import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    '/',
    '/for-tutoring-centers',
    '/programs',
    '/pricing',
    '/about',
    '/contact',
  ];

  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '/' || path === '/for-tutoring-centers' ? 1 : 0.7,
  }));
}
