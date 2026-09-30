import { MetadataRoute } from 'next';
import { BUSINESS_DATA } from '@/data/business';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = BUSINESS_DATA.meta.siteUrl.replace(/\/$/, '');

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: [
          'Googlebot',
          'Google-Extended',
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'anthropic-ai',
          'Applebot',
          'Bingbot',
        ],
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
