import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MATERIAL_GUIDES } from '@/data/guides';
import { BUSINESS_DATA } from '@/data/business';

export const metadata = {
  title: 'Interior Material Guides | Sri Krishna Plywoods & Hardwares Hosur',
  description: 'Practical guides on choosing kitchen plywood, commercial vs waterproof boards, laminate finishes, hardware fittings, and buying materials in Hosur.',
  alternates: {
    canonical: '/guides',
  },
};

export default function GuidesHubPage() {
  return (
    <>
      <section style={{ backgroundColor: 'var(--stone-ivory-light)', padding: '4rem 0 3rem' }}>
        <div className="container">
          <span className="badge" style={{ marginBottom: '1rem' }}>
            Knowledge Hub
          </span>
          <h1 style={{ marginBottom: '1rem' }}>Interior Material Guides</h1>
          <p style={{ maxWidth: '720px', fontSize: '1.15rem', color: 'var(--graphite-muted)' }}>
            Practical advice from material experts to help home builders, carpenters, interior designers, and contractors choose the right plywood, laminates, and hardware in Hosur.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {MATERIAL_GUIDES.map((guide) => (
              <article
                key={guide.slug}
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
                    src={guide.heroImage}
                    alt={guide.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                    <span className="badge" style={{ backgroundColor: 'var(--linen-white)', color: 'var(--deep-walnut)' }}>
                      {guide.category}
                    </span>
                  </div>
                </div>

                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.82rem', color: 'var(--graphite-muted)', marginBottom: '0.75rem' }}>
                    <span>{guide.readTime}</span>
                  </div>

                  <h2 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', lineHeight: '1.3' }}>
                    <Link href={`/guides/${guide.slug}`} style={{ color: 'var(--deep-walnut)' }}>
                      {guide.title}
                    </Link>
                  </h2>

                  <p style={{ fontSize: '0.95rem', color: 'var(--graphite-muted)', marginBottom: '1.5rem', flexGrow: 1, lineHeight: '1.6' }}>
                    {guide.subtitle}
                  </p>

                  <Link href={`/guides/${guide.slug}`} className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                    Read Guide &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div
            style={{
              marginTop: '4rem',
              backgroundColor: 'var(--stone-ivory)',
              padding: '3rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-light)',
              textAlign: 'center',
            }}
          >
            <h2 style={{ marginBottom: '1rem' }}>Have Questions About Your Project Materials?</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
              Speak with our material specialists at Sri Krishna Plywoods &amp; Hardwares in Hosur. We assist with plywood sheet calculations, laminate matching, and hardware quotes.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={BUSINESS_DATA.telLink} className="btn-primary">
                Call {BUSINESS_DATA.phone}
              </a>
              <Link href="/faq" className="btn-secondary">
                View All FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
