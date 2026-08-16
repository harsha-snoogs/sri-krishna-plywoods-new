import { MetadataRoute } from 'next';
import { BUSINESS_DATA } from '@/data/business';
import { MATERIAL_GUIDES } from '@/data/guides';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BUSINESS_DATA.meta.siteUrl;

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

  const guideRoutes = MATERIAL_GUIDES.map((g) => `/guides/${g.slug}`);

  const allRoutes = [...staticRoutes, ...guideRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith('/guides') ? ('monthly' as const) : ('weekly' as const),
    priority: route === '' ? 1.0 : route.startsWith('/guides') ? 0.7 : 0.8,
  }));
}
