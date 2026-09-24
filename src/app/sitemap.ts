import { MetadataRoute } from 'next';
import { BUSINESS_DATA } from '@/data/business';
import { MATERIAL_GUIDES } from '@/data/guides';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BUSINESS_DATA.meta.siteUrl.replace(/\/$/, '');

  const staticRoutes = [
    '',
    '/products',
    '/products/plywood',
    '/products/laminates',
    '/products/hardware',
    '/products/adhesives',
    '/faq',
    '/guides',
    '/about',
    '/brands',
    '/contact',
    '/privacy',
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  const guideEntries: MetadataRoute.Sitemap = MATERIAL_GUIDES.map((g) => ({
    url: `${baseUrl}/guides/${g.slug}`,
    lastModified: g.publishDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticEntries, ...guideEntries];
}
