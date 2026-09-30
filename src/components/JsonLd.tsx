import React from 'react';
import { BUSINESS_DATA, PRODUCT_CATEGORIES } from '@/data/business';

export default function JsonLd() {
  const siteUrl = BUSINESS_DATA.meta.siteUrl.replace(/\/$/, '');

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HardwareStore',
    '@id': `${siteUrl}/#organization`,
    name: BUSINESS_DATA.name,
    alternateName: ['Sri Krishna Plywoods and Hardwares', 'SKPH'],
    legalName: BUSINESS_DATA.name,
    description: BUSINESS_DATA.meta.defaultDescription,
    url: siteUrl,
    telephone: `+91${BUSINESS_DATA.phone}`,
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Credit Card, Debit Card, Net Banking',
    foundingDate: `${BUSINESS_DATA.establishedYear}`,
    image: [
      `${siteUrl}/images/hero.jpg`,
      `${siteUrl}/images/showroom.jpg`,
      `${siteUrl}/images/plywood.jpg`,
    ],
    logo: `${siteUrl}/images/logo.png`,
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
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: BUSINESS_DATA.serviceArea.map((area) => ({
      '@type': 'AdministrativeArea',
      name: `${area}, Hosur, Tamil Nadu`,
    })),
    knowsAbout: [
      'Plywood',
      'Boiling Water Proof (BWP) Marine Plywood',
      'Moisture Resistant (MR) Commercial Plywood',
      'Blockboards',
      'Decorative High-Pressure Laminates',
      'Natural Timber Veneers',
      'Architectural Door Hardware',
      'Godrej Security Locks',
      'Ebco Modular Kitchen Fittings',
      'Faber Kitchen Chimneys',
      'Fevicol Synthetic Wood Adhesives',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Plywood, Laminate, Hardware & Adhesive Offerings',
      itemListElement: PRODUCT_CATEGORIES.map((cat, idx) => ({
        '@type': 'OfferCatalog',
        name: cat.title,
        description: cat.description,
        position: idx + 1,
        url: `${siteUrl}/products/${cat.slug}`,
      })),
    },
    sameAs: [
      BUSINESS_DATA.mapsUrl,
      'https://www.greenply.com/dealers/tamil-nadu/hosur',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
