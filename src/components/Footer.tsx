import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BUSINESS_DATA } from '@/data/business';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--deep-walnut-dark)',
        color: 'var(--stone-ivory)',
        paddingTop: '4rem',
        paddingBottom: '2rem',
        borderTop: '1px solid var(--deep-walnut)',
        marginTop: 'auto',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(245, 241, 235, 0.12)',
          }}
        >
          {/* Column 1: Brand Logo & NAP Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.85rem' }}>
              <div style={{ position: 'relative', width: '85px', height: '30px', flexShrink: 0 }}>
                <Image
                  src="/images/logo.png"
                  alt={`${BUSINESS_DATA.name} Logo`}
                  fill
                  sizes="85px"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--linen-white)',
                  margin: 0,
                  lineHeight: '1.2',
                }}
              >
                {BUSINESS_DATA.name}
              </h2>
            </div>
            <p style={{ color: 'rgba(245, 241, 235, 0.75)', fontSize: '0.92rem', marginBottom: '1.25rem' }}>
              Plywood • Laminates • Hardware • Interior Materials
            </p>
            <p style={{ color: 'rgba(245, 241, 235, 0.75)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Serving homeowners, interior designers, carpenters, and construction contractors across Hosur for over {BUSINESS_DATA.yearsInBusiness} years (Est. {BUSINESS_DATA.establishedYear}).
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3
              style={{
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'var(--champagne-gold)',
                marginBottom: '1.25rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              Quick Navigation
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link href="/" style={{ color: 'rgba(245, 241, 235, 0.85)', transition: 'color 0.2s ease' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" style={{ color: 'rgba(245, 241, 235, 0.85)', transition: 'color 0.2s ease' }}>
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link href="/faq" style={{ color: 'rgba(245, 241, 235, 0.85)', transition: 'color 0.2s ease' }}>
                  Plywood &amp; Hardware FAQs
                </Link>
              </li>
              <li>
                <Link href="/guides" style={{ color: 'rgba(245, 241, 235, 0.85)', transition: 'color 0.2s ease' }}>
                  Material Guides
                </Link>
              </li>
              <li>
                <Link href="/brands" style={{ color: 'rgba(245, 241, 235, 0.85)', transition: 'color 0.2s ease' }}>
                  Trusted Brands
                </Link>
              </li>
              <li>
                <Link href="/about" style={{ color: 'rgba(245, 241, 235, 0.85)', transition: 'color 0.2s ease' }}>
                  About Our Store
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: 'rgba(245, 241, 235, 0.85)', transition: 'color 0.2s ease' }}>
                  Contact &amp; Directions
                </Link>
              </li>
              <li>
                <Link href="/privacy" style={{ color: 'rgba(245, 241, 235, 0.85)', transition: 'color 0.2s ease' }}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div>
            <h3
              style={{
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'var(--champagne-gold)',
                marginBottom: '1.25rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              Material Categories
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link href="/products/plywood" style={{ color: 'rgba(245, 241, 235, 0.85)' }}>
                  BWP &amp; Commercial Plywood
                </Link>
              </li>
              <li>
                <Link href="/products/laminates" style={{ color: 'rgba(245, 241, 235, 0.85)' }}>
                  Decorative &amp; Matte Laminates
                </Link>
              </li>
              <li>
                <Link href="/products/hardware" style={{ color: 'rgba(245, 241, 235, 0.85)' }}>
                  Architectural Door &amp; Cabinet Hardware
                </Link>
              </li>
              <li>
                <Link href="/products/adhesives" style={{ color: 'rgba(245, 241, 235, 0.85)' }}>
                  Fevicol &amp; Synthetic Wood Adhesives
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Canonical Store Address & Phone */}
          <div>
            <h3
              style={{
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'var(--champagne-gold)',
                marginBottom: '1.25rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              Visit Store Location
            </h3>
            <address style={{ fontStyle: 'normal', color: 'rgba(245, 241, 235, 0.85)', fontSize: '0.92rem', lineHeight: '1.7' }}>
              <p style={{ fontWeight: 600, color: 'var(--linen-white)', marginBottom: '0.25rem' }}>
                {BUSINESS_DATA.name}
              </p>
              <p>{BUSINESS_DATA.address.street}</p>
              <p>
                {BUSINESS_DATA.address.city}, {BUSINESS_DATA.address.state} {BUSINESS_DATA.address.pincode}
              </p>
              <p style={{ marginTop: '0.85rem' }}>
                <strong>Phone:</strong>{' '}
                <a href={BUSINESS_DATA.telLink} style={{ color: 'var(--champagne-gold)', textDecoration: 'underline' }}>
                  {BUSINESS_DATA.phone}
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Copyright & Disclaimer Bar */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'rgba(245, 241, 235, 0.6)',
          }}
        >
          <p>© 2026 {BUSINESS_DATA.name}. All rights reserved.</p>
          <p>Local SEO &amp; Business Information Portal • Hosur, Tamil Nadu</p>
        </div>
      </div>
    </footer>
  );
}
