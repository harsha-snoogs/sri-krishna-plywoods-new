import React from 'react';
import { MaterialGuide } from '@/data/guides';
import { BUSINESS_DATA } from '@/data/business';

interface ArticleJsonLdProps {
  guide: MaterialGuide;
}

export default function ArticleJsonLd({ guide }: ArticleJsonLdProps) {
  const siteUrl = BUSINESS_DATA.meta.siteUrl.replace(/\/$/, '');
  const guideUrl = `${siteUrl}/guides/${guide.slug}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `${guideUrl}#article`,
    headline: guide.title,
    description: guide.metaDescription,
    image: `${siteUrl}${guide.heroImage}`,
    datePublished: guide.publishDate,
    dateModified: guide.publishDate,
    inLanguage: 'en-IN',
    author: {
      '@type': 'Organization',
      name: `${BUSINESS_DATA.name} Material Desk`,
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: BUSINESS_DATA.name,
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': guideUrl,
    },
    about: {
      '@type': 'Thing',
      name: guide.category,
    },
    articleSection: guide.category,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
