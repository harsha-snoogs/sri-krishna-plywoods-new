import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS_DATA, PRODUCTS_LIST } from '@/data/business';

export const metadata = {
  title: 'Fevicol & Wood Adhesives in Hosur | Synthetic Resin Bonding',
  description: 'Sri Krishna Plywoods & Hardwares in Hosur offers genuine Fevicol SH, Marine, Heatproof, and D3 industrial wood adhesives for interior carpentry.',
  alternates: {
    canonical: '/products/adhesives',
  },
};

export default function AdhesivesPage() {
  const adhesiveItems = PRODUCTS_LIST.filter((p) => p.category === 'adhesives');

  return (
    <>
      <section style={{ backgroundColor: 'var(--stone-ivory-light)', padding: '4rem 0 3rem' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--graphite-muted)', marginBottom: '1rem' }}>
            <Link href="/">Home</Link> / <Link href="/products">Products</Link> / <span style={{ color: 'var(--deep-walnut)', fontWeight: 600 }}>Adhesives</span>
          </div>
          <h1 style={{ marginBottom: '1rem' }}>Fevicol &amp; Wood Adhesives Supplier in Hosur</h1>
          <p style={{ maxWidth: '720px', fontSize: '1.1rem' }}>
            Unmatched bond strength for wood joinery, laminate pressing, and veneer pasting. Stocking genuine Fevicol SH, Marine, and heatproof resins.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              marginBottom: '4rem',
            }}
          >
            {adhesiveItems.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: 'var(--card-bg)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  padding: '2.5rem',
                  boxShadow: 'var(--shadow-subtle)',
                }}
              >
                <span className="badge" style={{ marginBottom: '1rem' }}>
                  Industrial Strength
                </span>
                <h2 style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>{item.name}</h2>
                <p style={{ fontSize: '1rem', color: 'var(--graphite-muted)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                  {item.description}
                </p>

                <h3 style={{ fontSize: '1rem', color: 'var(--deep-walnut)', marginBottom: '0.75rem' }}>
                  Performance Highlights:
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
                  {item.features.map((f, i) => (
                    <li key={i} style={{ fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--olive-green)', fontWeight: 'bold' }}>✓</span> {f}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href={BUSINESS_DATA.telLink} className="btn-primary" style={{ flex: 1, textAlign: 'center', justifyContent: 'center' }}>
                    Call {BUSINESS_DATA.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              aspectRatio: '16/8',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <Image
              src="/images/adhesives.jpg"
              alt={`Wood adhesives and carpentry tools at ${BUSINESS_DATA.name} Hosur`}
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
