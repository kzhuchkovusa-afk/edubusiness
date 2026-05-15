/**
 * Canonical site URL, used for metadata, Open Graph, sitemap, and robots.
 * Set NEXT_PUBLIC_SITE_URL in the environment (e.g. Netlify env vars) to your
 * production domain. Falls back to a placeholder for local development.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://gocoding.example.com'
).replace(/\/+$/, '');
