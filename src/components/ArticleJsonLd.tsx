import React from 'react';
import { MaterialGuide } from '@/data/guides';
import { BUSINESS_DATA } from '@/data/business';

interface ArticleJsonLdProps {
  guide: MaterialGuide;
}

export default function ArticleJsonLd({ guide }: ArticleJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.metaDescription,
    image: `${BUSINESS_DATA.meta.siteUrl}${guide.heroImage}`,
    datePublished: guide.publishDate,
    dateModified: guide.publishDate,
    author: {
      '@type': 'Organization',
      name: BUSINESS_DATA.name,
      url: BUSINESS_DATA.meta.siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_DATA.name,
      url: BUSINESS_DATA.meta.siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${BUSINESS_DATA.meta.siteUrl}/images/hero.jpg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BUSINESS_DATA.meta.siteUrl}/guides/${guide.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
