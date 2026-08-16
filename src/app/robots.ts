import { MetadataRoute } from 'next';
import { BUSINESS_DATA } from '@/data/business';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BUSINESS_DATA.meta.siteUrl.replace(/\/$/, '')}/sitemap.xml`,
  };
}
