import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS_DATA, PRODUCTS_LIST } from '@/data/business';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';

export const metadata = {
  title: 'Door Fittings & Hardware Shop in Hosur | Godrej, Ebco & Häfele',
  description: 'Sri Krishna Plywoods & Hardwares in Hosur supplies architectural door fittings, brass door handles, SS 304 hinges, mortise locks, hydraulic door closers, and Godrej security locks.',
  alternates: {
    canonical: '/products/hardware',
  },
  openGraph: {
    title: 'Door Fittings & Hardware Shop in Hosur | Sri Krishna Plywoods & Hardwares',
    description: 'Sri Krishna Plywoods & Hardwares in Hosur supplies architectural door fittings, brass door handles, SS 304 hinges, mortise locks, hydraulic door closers, and Godrej security locks.',
    url: `${BUSINESS_DATA.meta.siteUrl}/products/hardware`,
  },
};

export default function HardwarePage() {
  const hardwareItems = PRODUCTS_LIST.filter((p) => p.category === 'hardware');

  const doorFittingsFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where can I buy genuine door fittings and mortise locks in Hosur?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sri Krishna Plywoods & Hardwares at Indira Nagar, Hosur supplies genuine architectural door fittings, SS 304 ball-bearing hinges, designer brass door handles, hydraulic door closers, tower bolts, and high-security Godrej & Europa mortise locks with 100% GST invoice.',
        },
      },
      {
        '@type': 'Question',
        name: 'What hinge grade should be used for heavy main teak wood doors?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Heavy teak wood main doors require grade SS 304 stainless steel ball-bearing hinges (typically 5 inches x 3 inches x 3mm thickness) to support door weight smoothly without sagging or squeaking over time.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which locks are best for main entrance security doors?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For main entrance doors, Godrej and Europa double-turn mortise locks with computerized key cylinders or smart digital locks provide maximum protection against pick attempts and forced entry.',
        },
      },
    ],
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Products', item: '/products' },
          { name: 'Hardware & Door Fittings', item: '/products/hardware' },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doorFittingsFaqSchema) }}
      />
      <section style={{ backgroundColor: 'var(--stone-ivory-light)', padding: '4rem 0 3rem' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--graphite-muted)', marginBottom: '1rem' }}>
            <Link href="/">Home</Link> / <Link href="/products">Products</Link> / <span style={{ color: 'var(--deep-walnut)', fontWeight: 600 }}>Door Fittings &amp; Hardware</span>
          </div>
          <h1 style={{ marginBottom: '1rem' }}>Door Fittings &amp; Architectural Hardware Shop in Hosur</h1>
          <p style={{ maxWidth: '750px', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Authorized stockist of premium door fittings, SS 304 hinges, designer brass door handles, hydraulic door closers, mortise locks, and Godrej security hardware in Hosur.
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
            {hardwareItems.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: 'var(--card-bg)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  padding: '2.5rem',
                  boxShadow: 'var(--shadow-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <span className="badge" style={{ marginBottom: '1rem' }}>
                    Architectural Grade
                  </span>
                  <h2 style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>{item.name}</h2>
                  <p style={{ fontSize: '1rem', color: 'var(--graphite-muted)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                    {item.description}
                  </p>

                  <h3 style={{ fontSize: '1rem', color: 'var(--deep-walnut)', marginBottom: '0.75rem' }}>
                    Specifications &amp; Testing:
                  </h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
                    {item.features.map((f, i) => (
                      <li key={i} style={{ fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--olive-green)', fontWeight: 'bold' }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                  <a href={BUSINESS_DATA.telLink} className="btn-primary" style={{ flex: 1, textAlign: 'center', justifyContent: 'center' }}>
                    Get Quote
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
              marginBottom: '4rem',
            }}
          >
            <Image
              src="/images/hardware.jpg"
              alt={`Architectural door fittings and hinges layout at ${BUSINESS_DATA.name} Hosur`}
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Educational SEO & Guide Section for Door Fittings in Hosur */}
          <div
            style={{
              backgroundColor: 'var(--stone-ivory)',
              padding: '3rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-light)',
            }}
          >
            <h2 style={{ marginBottom: '1rem', fontSize: '1.75rem' }}>
              Guide to Selecting High-Quality Door Fittings &amp; Hardware in Hosur
            </h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--graphite-muted)', lineHeight: '1.7' }}>
              Choosing the right door fittings is essential for security, smooth daily operation, and long-term durability. At Sri Krishna Plywoods &amp; Hardwares in Hosur, we supply complete architectural door fitting hardware packages for residential homes, apartments, and commercial projects.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--deep-walnut)' }}>1. SS 304 Ball Bearing Door Hinges</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--graphite-muted)', lineHeight: '1.6' }}>
                  Heavy main entrance teak doors and flush doors require 4-inch or 5-inch SS 304 grade stainless steel ball-bearing hinges. SS 304 provides rust resistance against Hosur monsoon humidity and prevents door sagging.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--deep-walnut)' }}>2. Mortise Handles &amp; High Security Locks</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--graphite-muted)', lineHeight: '1.6' }}>
                  Upgrade entrance doors with designer brass lever mortise handles and Godrej / Europa multi-bolt mortise locksets featuring computer-pin key technology for tamper-proof security.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--deep-walnut)' }}>3. Hydraulic Door Closers &amp; Magnetic Stoppers</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--graphite-muted)', lineHeight: '1.6' }}>
                  Prevent violent door slamming and wall damage using rack-and-pinion hydraulic overhead door closers and heavy-duty floor/wall-mounted magnetic door stoppers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
