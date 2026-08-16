import React from 'react';
import Link from 'next/link';
import { FAQ_DATA } from '@/data/faq';
import FaqAccordion from '@/components/FaqAccordion';
import FaqJsonLd from '@/components/FaqJsonLd';
import { BUSINESS_DATA } from '@/data/business';

export const metadata = {
  title: 'Plywood, Laminate & Hardware FAQs | Sri Krishna Plywoods Hosur',
  description: 'Practical answers to common questions about kitchen plywood, commercial vs waterproof plywood, laminates, hinges, and buying interior materials in Hosur.',
  alternates: {
    canonical: '/faq',
  },
};

export default function FaqPage() {
  const plywoodFaqs = FAQ_DATA.filter((f) => f.category === 'plywood');
  const laminateFaqs = FAQ_DATA.filter((f) => f.category === 'laminates');
  const hardwareFaqs = FAQ_DATA.filter((f) => f.category === 'hardware');
  const hosurFaqs = FAQ_DATA.filter((f) => f.category === 'hosur-buying');

  return (
    <>
      <FaqJsonLd faqs={FAQ_DATA} />

      {/* Page Header */}
      <section style={{ backgroundColor: 'var(--stone-ivory-light)', padding: '4rem 0 3rem' }}>
        <div className="container">
          <span className="badge" style={{ marginBottom: '1rem' }}>
            Knowledge &amp; Support
          </span>
          <h1 style={{ marginBottom: '1rem' }}>Plywood &amp; Interior Material FAQs</h1>
          <p style={{ maxWidth: '720px', fontSize: '1.15rem', color: 'var(--graphite-muted)' }}>
            Clear, honest answers to common questions about material selection, water resistance, laminate finishes, and sourcing interior supplies in Hosur.
          </p>
        </div>
      </section>

      {/* Main FAQ Content Section */}
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '960px' }}>
          {/* Quick Anchor Links */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              marginBottom: '3rem',
              padding: '1.25rem',
              backgroundColor: 'var(--stone-ivory)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-light)',
            }}
          >
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--deep-walnut)', textTransform: 'uppercase', letterSpacing: '0.05em', alignSelf: 'center', marginRight: '0.5rem' }}>
              Jump to Topic:
            </span>
            <a href="#plywood-faqs" className="btn-secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}>
              Plywood FAQs
            </a>
            <a href="#laminates-faqs" className="btn-secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}>
              Laminates FAQs
            </a>
            <a href="#hardware-faqs" className="btn-secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}>
              Hardware FAQs
            </a>
            <a href="#hosur-faqs" className="btn-secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}>
              Buying in Hosur
            </a>
          </div>

          {/* 1. Plywood FAQs */}
          <div id="plywood-faqs" style={{ marginBottom: '4rem', scrollMarginTop: '100px' }}>
            <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--deep-walnut)' }}>Plywood &amp; Board Questions</h2>
              <Link href="/products/plywood" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--olive-green)' }}>
                View Plywood Range &rarr;
              </Link>
            </div>
            <FaqAccordion items={plywoodFaqs} />
          </div>

          {/* 2. Laminate FAQs */}
          <div id="laminates-faqs" style={{ marginBottom: '4rem', scrollMarginTop: '100px' }}>
            <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--deep-walnut)' }}>Laminate &amp; Surface Questions</h2>
              <Link href="/products/laminates" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--olive-green)' }}>
                View Laminate Range &rarr;
              </Link>
            </div>
            <FaqAccordion items={laminateFaqs} />
          </div>

          {/* 3. Hardware FAQs */}
          <div id="hardware-faqs" style={{ marginBottom: '4rem', scrollMarginTop: '100px' }}>
            <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--deep-walnut)' }}>Hardware &amp; Fitting Questions</h2>
              <Link href="/products/hardware" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--olive-green)' }}>
                View Hardware Range &rarr;
              </Link>
            </div>
            <FaqAccordion items={hardwareFaqs} />
          </div>

          {/* 4. Hosur Buying FAQs */}
          <div id="hosur-faqs" style={{ marginBottom: '4rem', scrollMarginTop: '100px' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--deep-walnut)' }}>Buying Materials in Hosur</h2>
            </div>
            <FaqAccordion items={hosurFaqs} />
          </div>

          {/* Material Guides Highlight Box */}
          <div
            style={{
              backgroundColor: 'var(--deep-walnut)',
              color: 'var(--linen-white)',
              padding: '3rem',
              borderRadius: 'var(--radius-lg)',
              marginTop: '4rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <div>
              <span className="badge" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', color: 'var(--linen-white)', borderColor: 'transparent', marginBottom: '0.75rem' }}>
                In-Depth Material Guides
              </span>
              <h2 style={{ color: 'var(--linen-white)', marginBottom: '0.5rem' }}>Looking for Detailed Buying Guides?</h2>
              <p style={{ color: 'rgba(252, 251, 248, 0.85)', fontSize: '1.05rem', maxWidth: '640px' }}>
                Explore our step-by-step guides covering kitchen plywood selection, thickness specifications, hardware overlay calculations, and laminate maintenance.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/guides" className="btn-primary" style={{ backgroundColor: 'var(--champagne-gold)', color: 'var(--graphite)' }}>
                Explore Material Guides &rarr;
              </Link>
              <a href={BUSINESS_DATA.telLink} className="btn-outline-light">
                Call Showroom {BUSINESS_DATA.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
