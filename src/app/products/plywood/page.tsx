import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS_DATA, PRODUCTS_LIST } from '@/data/business';

export const metadata = {
  title: 'Plywood Dealers in Hosur | BWP Marine & Commercial Plywood',
  description: 'Sri Krishna Plywoods & Hardwares in Hosur supplies IS:710 BWP waterproof marine plywood, IS:303 commercial MR plywood, and blockboards from Greenply & Century.',
  alternates: {
    canonical: '/products/plywood',
  },
};

export default function PlywoodPage() {
  const plywoodItems = PRODUCTS_LIST.filter((p) => p.category === 'plywood');

  return (
    <>
      <section style={{ backgroundColor: 'var(--stone-ivory-light)', padding: '4rem 0 3rem' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--graphite-muted)', marginBottom: '1rem' }}>
            <Link href="/">Home</Link> / <Link href="/products">Products</Link> / <span style={{ color: 'var(--deep-walnut)', fontWeight: 600 }}>Plywood</span>
          </div>
          <h1 style={{ marginBottom: '1rem' }}>Plywood Dealers &amp; Suppliers in Hosur</h1>
          <p style={{ maxWidth: '720px', fontSize: '1.1rem' }}>
            High-density structural plywoods engineered for dimensional stability, high screw retention, and complete boiling water proof protection against termites and borers.
          </p>
        </div>
      </section>

      {/* Guide Banner */}
      <section style={{ backgroundColor: 'var(--stone-ivory)', borderBottom: '1px solid var(--border-light)', padding: '1.5rem 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <strong style={{ fontSize: '0.9rem', color: 'var(--olive-green)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Not sure which plywood grade to choose?
            </strong>
            <p style={{ fontSize: '0.98rem', color: 'var(--graphite)', margin: 0 }}>
              Read our practical buying guides for kitchen cabinets and commercial vs waterproof boards.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link href="/guides/best-plywood-for-kitchen" className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
              Kitchen Plywood Guide &rarr;
            </Link>
            <Link href="/guides/commercial-vs-waterproof-plywood" className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
              Commercial vs Waterproof &rarr;
            </Link>
          </div>
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
            {plywoodItems.map((item) => (
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
                  IS Standard Certified
                </span>
                <h2 style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>{item.name}</h2>
                <p style={{ fontSize: '1rem', color: 'var(--graphite-muted)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                  {item.description}
                </p>

                <h3 style={{ fontSize: '1rem', color: 'var(--deep-walnut)', marginBottom: '0.75rem' }}>
                  Key Features &amp; Warranty:
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
                  {item.features.map((f, i) => (
                    <li key={i} style={{ fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--olive-green)', fontWeight: 'bold' }}>✓</span> {f}
                    </li>
                  ))}
                </ul>

                <h3 style={{ fontSize: '1rem', color: 'var(--deep-walnut)', marginBottom: '0.75rem' }}>
                  Recommended Applications:
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                  {item.applications.map((app, i) => (
                    <span
                      key={i}
                      style={{
                        backgroundColor: 'var(--stone-ivory)',
                        fontSize: '0.82rem',
                        padding: '0.3rem 0.75rem',
                        borderRadius: 'var(--radius-pill)',
                        fontWeight: 500,
                      }}
                    >
                      {app}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href={BUSINESS_DATA.telLink} className="btn-primary" style={{ flex: 1, textAlign: 'center', justifyContent: 'center' }}>
                    Call for Price Quote
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Educational Content for Local SEO */}
          <div
            style={{
              backgroundColor: 'var(--stone-ivory)',
              padding: '3rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-light)',
            }}
          >
            <h2 style={{ marginBottom: '1rem', fontSize: '1.75rem' }}>
              Choosing the Right Plywood Grade in Hosur
            </h2>
            <p style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
              When building interior wardrobes, kitchen cabinets, or office partitions in Hosur, selecting the correct plywood grade ensures your woodwork withstands local climate variations and humidity.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--deep-walnut)', marginBottom: '0.5rem' }}>
                  BWP Grade (IS:710)
                </h3>
                <p style={{ fontSize: '0.92rem' }}>
                  Boiling Water Proof marine plywood bonded with phenolic resins. Ideal for modular kitchens, vanity units, and areas directly exposed to moisture.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--deep-walnut)', marginBottom: '0.5rem' }}>
                  MR Commercial Grade (IS:303)
                </h3>
                <p style={{ fontSize: '0.92rem' }}>
                  Moisture Resistant interior grade plywood suitable for bedroom wardrobes, living room TV units, wall panelling, and dry storage furniture.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--deep-walnut)', marginBottom: '0.5rem' }}>
                  Calibrated Plywood
                </h3>
                <p style={{ fontSize: '0.92rem' }}>
                  Sand-surfaced and uniformly thick sheets ensuring zero thickness variation when applying 1mm decorative laminates or acrylic sheets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
