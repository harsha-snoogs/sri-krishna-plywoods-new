import React from 'react';
import Link from 'next/link';
import { BUSINESS_DATA, TRUSTED_BRANDS } from '@/data/business';

export const metadata = {
  title: 'Trusted Brands | Greenply, Fevicol, Greenlam & Century in Hosur',
  description: 'Sri Krishna Plywoods & Hardwares in Hosur carries established brands including Greenply plywoods, Fevicol adhesives, Greenlam laminates, and Century boards.',
  alternates: {
    canonical: '/brands',
  },
};

export default function BrandsPage() {
  return (
    <>
      <section style={{ backgroundColor: 'var(--stone-ivory-light)', padding: '4rem 0 3rem' }}>
        <div className="container">
          <span className="badge" style={{ marginBottom: '1rem' }}>
            Material Partners
          </span>
          <h1 style={{ marginBottom: '1rem' }}>Trusted Brands We Carry</h1>
          <p style={{ maxWidth: '680px', fontSize: '1.15rem', color: 'var(--graphite-muted)' }}>
            We stock high-performance material lines from India&apos;s leading manufacturers to guarantee durability and safety for your home interiors.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {TRUSTED_BRANDS.map((brand) => (
              <div
                key={brand.name}
                style={{
                  backgroundColor: 'var(--card-bg)',
                  padding: '2.5rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-subtle)',
                }}
              >
                <div className="badge" style={{ marginBottom: '1rem' }}>
                  {brand.category}
                </div>
                <h2 style={{ fontSize: '1.8rem', color: 'var(--deep-walnut)', marginBottom: '0.25rem' }}>
                  {brand.name}
                </h2>
                <p
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: 'var(--olive-green)',
                    marginBottom: '1.25rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  {brand.tagline}
                </p>
                <p style={{ fontSize: '0.98rem', color: 'var(--graphite-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                  {brand.description}
                </p>

                <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <a href={BUSINESS_DATA.telLink} className="btn-secondary" style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}>
                    Inquire {brand.name} Products
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: '4rem',
              backgroundColor: 'var(--stone-ivory)',
              padding: '3rem',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center',
              border: '1px solid var(--border-light)',
            }}
          >
            <h2 style={{ marginBottom: '1rem' }}>Need a Specific Brand Specification Sheet?</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
              Visit our store at Avalapalli Hudco, Hosur or contact us to verify current stock availability and technical details.
            </p>
            <a href={BUSINESS_DATA.telLink} className="btn-primary">
              Call {BUSINESS_DATA.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
