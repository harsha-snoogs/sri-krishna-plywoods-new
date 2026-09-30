import React from 'react';
import { BUSINESS_DATA } from '@/data/business';

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export default function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const siteUrl = BUSINESS_DATA.meta.siteUrl.replace(/\/$/, '');

  const breadcrumbs = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteUrl,
    },
    ...items.map((b, idx) => ({
      '@type': 'ListItem',
      position: idx + 2,
      name: b.name,
      item: b.item.startsWith('http') ? b.item : `${siteUrl}${b.item}`,
    })),
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
