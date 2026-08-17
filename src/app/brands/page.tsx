import React from 'react';
import Link from 'next/link';
import { BUSINESS_DATA, TRUSTED_BRANDS } from '@/data/business';

export const metadata = {
  title: 'Authorized Greenply Dealer & Brand Stockist | Hosur',
  description: `Sri Krishna Plywoods & Hardwares is the authorized Greenply dealer in Hosur (verifiable on Greenply.com) and dealer for Fevicol, Greenlam, Century, Godrej, Ebco & Faber.`,
  alternates: {
    canonical: '/brands',
  },
};

export default function BrandsPage() {
  const authorizedBrands = TRUSTED_BRANDS.filter((b) => b.isAuthorized);
  const dealerBrands = TRUSTED_BRANDS.filter((b) => !b.isAuthorized);

  return (
    <>
      <section style={{ backgroundColor: 'var(--stone-ivory-light)', padding: '4rem 0 3rem' }}>
        <div className="container">
          <span className="badge" style={{ marginBottom: '1rem' }}>
            Authorized Dealership &amp; Leading Brand Stockists
          </span>
          <h1 style={{ marginBottom: '1rem' }}>Leading Interior Material Brands in Hosur</h1>
          <p style={{ maxWidth: '720px', fontSize: '1.15rem', color: 'var(--graphite-muted)' }}>
            Serving Hosur for over {BUSINESS_DATA.yearsInBusiness} years (Est. {BUSINESS_DATA.establishedYear}) as authorized Greenply dealers and trusted stockists for top plywood, laminate, adhesive, and hardware brands.
          </p>
        </div>
      </section>

      {/* 1. AUTHORIZED DEALERSHIP SECTION (GREENPLY) */}
      <section className="section-padding">
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="badge" style={{ marginBottom: '0.5rem', backgroundColor: 'var(--stone-ivory)', color: 'var(--olive-green)' }}>
              100% Verified Direct Supply
            </span>
            <h2 style={{ fontSize: '2rem' }}>Authorized Brand Dealership</h2>
            <p style={{ maxWidth: '640px', color: 'var(--graphite-muted)', marginTop: '0.5rem' }}>
              We are official authorized dealers with direct factory supply, full manufacturer warranties, and verified directory listing.
            </p>
          </div>

          <div style={{ marginBottom: '4rem' }}>
            {authorizedBrands.map((brand) => (
              <div
                key={brand.name}
                style={{
                  backgroundColor: 'var(--card-bg)',
                  padding: '2.5rem',
                  borderRadius: 'var(--radius-md)',
                  border: '2px solid var(--champagne-gold)',
                  boxShadow: 'var(--shadow-card)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '2rem',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        color: 'var(--deep-walnut)',
                        backgroundColor: 'var(--stone-ivory)',
                        border: '1px solid var(--champagne-gold)',
                        padding: '0.3rem 0.75rem',
                        borderRadius: '4px',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                      }}
                    >
                      <span style={{ color: 'var(--champagne-gold)', fontWeight: 900 }}>✓</span> Authorized Dealer
                    </span>
                    <span className="badge" style={{ backgroundColor: 'var(--stone-ivory-light)', color: 'var(--olive-green)', margin: 0 }}>
                      {brand.category}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '2.2rem', color: 'var(--deep-walnut)', marginBottom: '0.25rem' }}>
                    {brand.name}
                  </h3>
                  <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--olive-green)', marginBottom: '1rem' }}>
                    {brand.tagline}
                  </p>
                  <p style={{ fontSize: '1rem', color: 'var(--graphite-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                    {brand.description}
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--stone-ivory)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--deep-walnut)' }}>
                    Official Dealer Verification
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--graphite-muted)', marginBottom: '1.25rem', lineHeight: '1.6' }}>
                    Verify Sri Krishna Plywoods &amp; Hardwares directly on Greenply&apos;s official store locator directory for Hosur, Tamil Nadu.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <a
                      href={brand.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{ textAlign: 'center', justifyContent: 'center', fontSize: '0.88rem' }}
                    >
                      Verify on Greenply Directory ↗
                    </a>
                    <a href={BUSINESS_DATA.telLink} className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center', fontSize: '0.88rem' }}>
                      Inquire Greenply Products
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 2. TRUSTED BRAND DEALERS & STOCKISTS SECTION */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.8rem' }}>Trusted Brand Dealers &amp; Stocked Materials</h2>
            <p style={{ maxWidth: '640px', color: 'var(--graphite-muted)', marginTop: '0.5rem' }}>
              We stock authentic materials from top plywood, laminate, adhesive, and hardware brands with GST billing.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {dealerBrands.map((brand) => (
              <div
                key={brand.name}
                style={{
                  backgroundColor: 'var(--card-bg)',
                  padding: '2rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'var(--shadow-subtle)',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: 'var(--deep-walnut)',
                      backgroundColor: 'var(--stone-ivory-light)',
                      border: '1px solid var(--border-light)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Dealer / Stockist
                  </span>
                  <span className="badge" style={{ backgroundColor: 'var(--stone-ivory)', color: 'var(--olive-green)', margin: 0, fontSize: '0.75rem' }}>
                    {brand.category}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.4rem', color: 'var(--deep-walnut)', marginBottom: '0.25rem' }}>
                  {brand.name}
                </h3>
                <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--olive-green)', marginBottom: '0.75rem' }}>
                  {brand.tagline}
                </p>
                <p style={{ fontSize: '0.92rem', color: 'var(--graphite-muted)', lineHeight: '1.6', flexGrow: 1, marginBottom: '1.25rem' }}>
                  {brand.description}
                </p>

                <div style={{ paddingTop: '0.85rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <a href={BUSINESS_DATA.telLink} className="btn-secondary" style={{ width: '100%', textAlign: 'center', justifyContent: 'center', fontSize: '0.85rem', padding: '0.5rem 1rem' }}>
                    Inquire {brand.name}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action box */}
          <div
            style={{
              marginTop: '4rem',
              backgroundColor: 'var(--deep-walnut)',
              color: 'var(--linen-white)',
              padding: '3.5rem 2rem',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center',
            }}
          >
            <h2 style={{ color: 'var(--linen-white)', marginBottom: '1rem' }}>Need Material Catalogs or Specific Brand Quotes?</h2>
            <p style={{ maxWidth: '640px', margin: '0 auto 2rem', color: 'rgba(252, 251, 248, 0.88)', fontSize: '1.05rem' }}>
              Visit Sri Krishna Plywoods &amp; Hardwares at Avalapalli Hudco, Hosur or call 9944057507. 100% tax paid GST billing provided on all items.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={BUSINESS_DATA.telLink} className="btn-primary" style={{ backgroundColor: 'var(--champagne-gold)', color: 'var(--graphite)' }}>
                Call {BUSINESS_DATA.phone}
              </a>
              <a href={BUSINESS_DATA.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-light">
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
