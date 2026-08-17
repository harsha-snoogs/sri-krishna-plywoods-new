import React from 'react';
import Metadata from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS_DATA, PRODUCT_CATEGORIES, PRODUCTS_LIST } from '@/data/business';

export const metadata = {
  title: 'Product Catalog | Sri Krishna Plywoods & Hardwares Hosur',
  description: 'Explore our catalog of BWP marine plywood, commercial plywood, decorative laminates, architectural door hardware, and Fevicol adhesives in Hosur.',
  alternates: {
    canonical: '/products',
  },
};

export default function ProductsPage() {
  return (
    <>
      <section style={{ backgroundColor: 'var(--stone-ivory-light)', padding: '4rem 0 3rem' }}>
        <div className="container">
          <span className="badge" style={{ marginBottom: '1rem' }}>
            Complete Material Range
          </span>
          <h1 style={{ marginBottom: '1rem' }}>Product Catalog</h1>
          <p style={{ maxWidth: '680px', fontSize: '1.1rem' }}>
            High-durability structural plywoods, surface laminates, precision hardware, and industrial adhesives serving residential and commercial projects across Hosur.
          </p>
        </div>
      </section>

      {/* Category Grid */}
      <section className="section-padding">
        <div className="container">
          <h2 style={{ marginBottom: '2.5rem' }}>Browse Categories</h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {PRODUCT_CATEGORIES.map((category) => (
              <div
                key={category.slug}
                style={{
                  backgroundColor: 'var(--card-bg)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ position: 'relative', height: '220px', width: '100%' }}>
                  <Image
                    src={category.image}
                    alt={`${category.title} catalog at ${BUSINESS_DATA.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>{category.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--graphite-muted)', marginBottom: '1.5rem', flexGrow: 1 }}>
                    {category.description}
                  </p>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--olive-green)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
                      Key Features
                    </h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      {category.highlights.map((h, i) => (
                        <li key={i} style={{ fontSize: '0.88rem', color: 'var(--graphite)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ color: 'var(--champagne-gold)', fontWeight: 'bold' }}>✓</span> {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={`/products/${category.slug}`} className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                    View {category.title} Products &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Table / Cards */}
      <section className="section-padding" style={{ backgroundColor: 'var(--stone-ivory-light)' }}>
        <div className="container">
          <h2 style={{ marginBottom: '2rem' }}>Featured Material Specifications</h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem',
            }}
          >
            {PRODUCTS_LIST.map((prod) => (
              <div
                key={prod.id}
                style={{
                  backgroundColor: 'var(--card-bg)',
                  padding: '2rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                }}
              >
                <div className="badge" style={{ marginBottom: '0.75rem' }}>
                  {prod.category.toUpperCase()}
                </div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>{prod.name}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--graphite-muted)', marginBottom: '1.25rem' }}>
                  {prod.description}
                </p>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', marginBottom: '1.25rem' }}>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--deep-walnut)', display: 'block', marginBottom: '0.5rem' }}>
                    Available Brands:
                  </strong>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {prod.brandsAvailable.map((b) => (
                      <span
                        key={b}
                        style={{
                          fontSize: '0.78rem',
                          backgroundColor: 'var(--stone-ivory)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '4px',
                          fontWeight: 500,
                        }}
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--deep-walnut)', display: 'block', marginBottom: '0.5rem' }}>
                    Specifications:
                  </strong>
                  <dl style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '0.35rem', fontSize: '0.85rem' }}>
                    {Object.entries(prod.specifications).map(([key, val]) => (
                      <React.Fragment key={key}>
                        <dt style={{ color: 'var(--graphite-muted)' }}>{key}:</dt>
                        <dd style={{ fontWeight: 500, color: 'var(--graphite)' }}>{val}</dd>
                      </React.Fragment>
                    ))}
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call CTA */}
      <section className="section-padding" style={{ backgroundColor: 'var(--linen-white)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '1rem' }}>Inquire About Bulk Orders & Custom Sizes</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Looking for specific plywood sheet thickness or custom laminate swatches? Call our team at Indira Nagar, Hosur.
          </p>
          <a href={BUSINESS_DATA.telLink} className="btn-primary">
            Call {BUSINESS_DATA.phone}
          </a>
        </div>
      </section>
    </>
  );
}
