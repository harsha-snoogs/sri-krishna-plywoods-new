import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS_DATA, PRODUCTS_LIST } from '@/data/business';

export const metadata = {
  title: 'Laminates & Decorative Surfaces in Hosur | 1mm & Acrylic Sheets',
  description: 'Sri Krishna Plywoods & Hardwares in Hosur supplies high-pressure decorative laminates, anti-fingerprint matte sheets, and woodgrain finishes from Greenlam & Century.',
  alternates: {
    canonical: '/products/laminates',
  },
};

export default function LaminatesPage() {
  const laminateItems = PRODUCTS_LIST.filter((p) => p.category === 'laminates');

  return (
    <>
      <section style={{ backgroundColor: 'var(--stone-ivory-light)', padding: '4rem 0 3rem' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--graphite-muted)', marginBottom: '1rem' }}>
            <Link href="/">Home</Link> / <Link href="/products">Products</Link> / <span style={{ color: 'var(--deep-walnut)', fontWeight: 600 }}>Laminates</span>
          </div>
          <h1 style={{ marginBottom: '1rem' }}>Decorative Laminates &amp; Surface Finishes in Hosur</h1>
          <p style={{ maxWidth: '720px', fontSize: '1.1rem' }}>
            Elevate modern furniture and interior architecture with high-pressure 1.0mm laminates, super-matte anti-fingerprint swatches, and realistic wood textures.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '3rem',
              marginBottom: '4rem',
            }}
          >
            {laminateItems.map((item) => (
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
                  1.0mm Premium Grade
                </span>
                <h2 style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>{item.name}</h2>
                <p style={{ fontSize: '1rem', color: 'var(--graphite-muted)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                  {item.description}
                </p>

                <h3 style={{ fontSize: '1rem', color: 'var(--deep-walnut)', marginBottom: '0.75rem' }}>
                  Surface Characteristics:
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
                    Call for Swatch Catalog
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
              src="/images/laminates.jpg"
              alt={`Decorative laminate swatches catalog at ${BUSINESS_DATA.name} Hosur`}
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
