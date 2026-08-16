import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MATERIAL_GUIDES } from '@/data/guides';
import ArticleJsonLd from '@/components/ArticleJsonLd';
import { BUSINESS_DATA } from '@/data/business';

export async function generateStaticParams() {
  return MATERIAL_GUIDES.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const guide = MATERIAL_GUIDES.find((g) => g.slug === resolvedParams.slug);

  if (!guide) {
    return {
      title: 'Guide Not Found',
    };
  }

  return {
    title: `${guide.title} | Sri Krishna Plywoods Hosur`,
    description: guide.metaDescription,
    alternates: {
      canonical: `/guides/${guide.slug}`,
    },
    openGraph: {
      title: `${guide.title} | Sri Krishna Plywoods & Hardwares`,
      description: guide.metaDescription,
      url: `${BUSINESS_DATA.meta.siteUrl}/guides/${guide.slug}`,
      type: 'article',
      publishedTime: guide.publishDate,
      images: [
        {
          url: guide.heroImage,
          width: 1200,
          height: 675,
          alt: guide.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.title,
      description: guide.metaDescription,
      images: [guide.heroImage],
    },
  };
}

export default async function GuideDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const guide = MATERIAL_GUIDES.find((g) => g.slug === resolvedParams.slug);

  if (!guide) {
    notFound();
  }

  return (
    <>
      <ArticleJsonLd guide={guide} />

      {/* Guide Header */}
      <section style={{ backgroundColor: 'var(--stone-ivory-light)', padding: '4rem 0 3rem' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--graphite-muted)', marginBottom: '1rem' }}>
            <Link href="/">Home</Link> / <Link href="/guides">Guides</Link> / <span style={{ color: 'var(--deep-walnut)', fontWeight: 600 }}>{guide.category}</span>
          </div>

          <span className="badge" style={{ marginBottom: '1rem' }}>
            {guide.category} • {guide.readTime}
          </span>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '1.25rem', lineHeight: '1.15' }}>
            {guide.title}
          </h1>

          <p style={{ fontSize: '1.2rem', color: 'var(--graphite-muted)', lineHeight: '1.7' }}>
            {guide.subtitle}
          </p>
        </div>
      </section>

      {/* Guide Body */}
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '860px' }}>
          {/* Hero Image */}
          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              aspectRatio: '16/9',
              marginBottom: '3rem',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <Image
              src={guide.heroImage}
              alt={guide.title}
              fill
              priority
              sizes="(max-width: 860px) 100vw, 860px"
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Quick Summary Box */}
          <div
            style={{
              backgroundColor: 'var(--stone-ivory)',
              padding: '2rem',
              borderRadius: 'var(--radius-md)',
              borderLeft: '4px solid var(--deep-walnut)',
              marginBottom: '3rem',
            }}
          >
            <h2 style={{ fontSize: '1.15rem', color: 'var(--deep-walnut)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Quick Summary
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--graphite)', lineHeight: '1.75' }}>
              {guide.summary}
            </p>
          </div>

          {/* Sections Breakdown */}
          {guide.sections.map((sec, idx) => (
            <div key={idx} style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--deep-walnut-dark)' }}>
                {sec.heading}
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--graphite-muted)', marginBottom: '1.25rem' }}>
                {sec.content}
              </p>

              {sec.bullets && (
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  {sec.bullets.map((b, i) => (
                    <li key={i} style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--graphite)', display: 'flex', gap: '0.75rem' }}>
                      <span style={{ color: 'var(--olive-green)', fontWeight: 'bold' }}>•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              {sec.table && (
                <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
                  <table
                    style={{
                      width: '100%',
                      borderCollapse: 'collapse',
                      backgroundColor: 'var(--card-bg)',
                      borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.92rem',
                    }}
                  >
                    <thead>
                      <tr style={{ backgroundColor: 'var(--stone-ivory)', borderBottom: '1px solid var(--border-light)' }}>
                        {sec.table.headers.map((h, i) => (
                          <th key={i} style={{ padding: '0.85rem 1rem', textAlign: 'left', fontWeight: 600, color: 'var(--deep-walnut)' }}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {sec.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} style={{ padding: '0.85rem 1rem', color: 'var(--graphite)' }}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}

          {/* Common Mistakes */}
          <div
            style={{
              backgroundColor: 'var(--stone-ivory-light)',
              padding: '2.5rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-light)',
              marginBottom: '3rem',
            }}
          >
            <h2 style={{ fontSize: '1.4rem', color: 'var(--deep-walnut)', marginBottom: '1rem' }}>
              Common Mistakes to Avoid
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {guide.commonMistakes.map((m, i) => (
                <li key={i} style={{ fontSize: '0.98rem', lineHeight: '1.6', color: 'var(--graphite)', display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: '#C0392B', fontWeight: 'bold' }}>✕</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Practical Takeaways */}
          <div
            style={{
              backgroundColor: 'var(--card-bg)',
              padding: '2.5rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-light)',
              marginBottom: '3rem',
              boxShadow: 'var(--shadow-subtle)',
            }}
          >
            <h2 style={{ fontSize: '1.4rem', color: 'var(--deep-walnut)', marginBottom: '1rem' }}>
              Key Takeaways for Homeowners
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {guide.practicalTakeaways.map((t, i) => (
                <li key={i} style={{ fontSize: '0.98rem', lineHeight: '1.6', color: 'var(--graphite)', display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--olive-green)', fontWeight: 'bold' }}>✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contextual Link to Related Products */}
          <div
            style={{
              padding: '2rem',
              backgroundColor: 'var(--stone-ivory)',
              borderRadius: 'var(--radius-md)',
              marginBottom: '3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <strong style={{ fontSize: '0.85rem', color: 'var(--olive-green)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.25rem' }}>
                Related Category
              </strong>
              <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--deep-walnut)' }}>
                Explore {guide.relatedCategory} at Sri Krishna Plywoods &amp; Hardwares
              </span>
            </div>
            <Link href={guide.relatedCategoryLink} className="btn-primary">
              View Products &rarr;
            </Link>
          </div>

          {/* Soft CTA */}
          <div
            style={{
              backgroundColor: 'var(--deep-walnut)',
              color: 'var(--linen-white)',
              padding: '3rem',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center',
            }}
          >
            <h2 style={{ color: 'var(--linen-white)', marginBottom: '1rem' }}>Need Guidance for Your Project in Hosur?</h2>
            <p style={{ color: 'rgba(252, 251, 248, 0.85)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              {guide.ctaText}
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={BUSINESS_DATA.telLink} className="btn-primary" style={{ backgroundColor: 'var(--champagne-gold)', color: 'var(--graphite)' }}>
                Call {BUSINESS_DATA.phone}
              </a>
              <a
                href={BUSINESS_DATA.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
