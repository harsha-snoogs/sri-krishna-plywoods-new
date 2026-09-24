import React from 'react';
import { BUSINESS_DATA } from '@/data/business';

export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HardwareStore',
    name: BUSINESS_DATA.name,
    description: BUSINESS_DATA.meta.defaultDescription,
    url: BUSINESS_DATA.meta.siteUrl,
    telephone: BUSINESS_DATA.telLink.replace('tel:', ''),
    priceRange: '₹₹',
    image: `${BUSINESS_DATA.meta.siteUrl}/images/hero.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_DATA.address.street,
      addressLocality: BUSINESS_DATA.address.city,
      addressRegion: BUSINESS_DATA.address.state,
      postalCode: BUSINESS_DATA.address.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_DATA.geo.latitude,
      longitude: BUSINESS_DATA.geo.longitude,
    },
    hasMap: BUSINESS_DATA.mapsUrl,
    openingHoursSpecification: BUSINESS_DATA.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      ...h,
    })),
    areaServed: BUSINESS_DATA.serviceArea.map((area) => ({
      '@type': 'AdministrativeArea',
      name: `${area}, Hosur, Tamil Nadu`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
