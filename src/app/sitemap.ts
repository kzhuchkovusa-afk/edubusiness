import type { MetadataRoute } from 'next';
import { getProgramSlugs } from '@/lib/content';

const BASE = 'https://gocoding.example.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticUrls = [
    '/',
    '/for-tutoring-centers',
    '/programs',
    '/pricing',
    '/about',
    '/contact',
  ];

  const programUrls = getProgramSlugs().map((slug) => `/programs/${slug}`);

  return [...staticUrls, ...programUrls].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '/' || path === '/for-tutoring-centers' ? 1 : 0.7,
  }));
}
