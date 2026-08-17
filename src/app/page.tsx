import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS_DATA, PRODUCT_CATEGORIES, TRUSTED_BRANDS } from '@/data/business';
import { FAQ_DATA } from '@/data/faq';
import { MATERIAL_GUIDES } from '@/data/guides';
import FaqAccordion from '@/components/FaqAccordion';

export default function HomePage() {
  const featuredFaqs = FAQ_DATA.slice(0, 4);
  const featuredGuides = MATERIAL_GUIDES.slice(0, 3);
  const greenplyBrand = TRUSTED_BRANDS.find((b) => b.name === 'Greenply');
  const otherBrands = TRUSTED_BRANDS.filter((b) => b.name !== 'Greenply').slice(0, 7);

  return (
    <>
      {/* 1. HERO SECTION */}
      <section
        style={{
          position: 'relative',
          backgroundColor: 'var(--stone-ivory-light)',
          paddingTop: '3rem',
          paddingBottom: '4rem',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center',
            }}
          >
            {/* Left Content Column */}
            <div>
              <div className="badge" style={{ marginBottom: '1.25rem' }}>
                {BUSINESS_DATA.yearsInBusiness}+ Years Trusted Plywood &amp; Hardware Destination in Hosur (Est. {BUSINESS_DATA.establishedYear})
              </div>
              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                  fontWeight: 700,
                  color: 'var(--deep-walnut-dark)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  marginBottom: '1.5rem',
                }}
              >
                Premium Materials for Better Interiors
              </h1>
              <p
                style={{
                  fontSize: '1.15rem',
                  lineHeight: '1.7',
                  color: 'var(--graphite-muted)',
                  marginBottom: '2.25rem',
                  maxWidth: '560px',
                }}
              >
                Authorized Greenply dealer &amp; trusted dealers for Greenlam, Century, Fevicol (Pidilite), Godrej, Ebco &amp; Faber Chimneys—serving homes and commercial projects across Hosur.
              </p>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  alignItems: 'center',
                }}
              >
                <a href={BUSINESS_DATA.telLink} className="btn-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Call {BUSINESS_DATA.phone}
                </a>

                <a
                  href={BUSINESS_DATA.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                  </svg>
                  Get Directions
                </a>
              </div>

              {/* Local Trust Badges */}
              <div
                style={{
                  marginTop: '2.5rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid var(--border-light)',
                  display: 'flex',
                  gap: '2rem',
                  fontSize: '0.88rem',
                  color: 'var(--graphite-muted)',
                }}
              >
                <div>
                  <strong style={{ color: 'var(--deep-walnut)', display: 'block', fontSize: '1rem' }}>
                    Over {BUSINESS_DATA.yearsInBusiness} Years Trust
                  </strong>
                  10/1 Indira Nagar, Avalapalli Hudco
                </div>
                <div>
                  <strong style={{ color: 'var(--deep-walnut)', display: 'block', fontSize: '1rem' }}>
                    GST Billing &amp; Genuine Products
                  </strong>
                  Authorized Greenply Supply
                </div>
              </div>
            </div>

            {/* Right Hero Image */}
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-card)',
                aspectRatio: '16/10',
              }}
            >
              <Image
                src="/images/hero.jpg"
                alt="Luxury modern interior kitchen with walnut plywood cabinetry by Sri Krishna Plywoods & Hardwares in Hosur"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. BRAND & TRUST STATEMENT */}
      <section className="section-padding" style={{ backgroundColor: 'var(--linen-white)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '840px' }}>
          <span className="badge" style={{ marginBottom: '1rem' }}>
            Trusted Name Since {BUSINESS_DATA.establishedYear}
          </span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.6rem)', marginBottom: '1.25rem' }}>
            Over {BUSINESS_DATA.yearsInBusiness} Years of Quality &amp; Trust in Hosur
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--graphite-muted)', lineHeight: '1.8' }}>
            {BUSINESS_DATA.historyText}
          </p>
        </div>
      </section>

      {/* 3. PRODUCT CATEGORIES GRID */}
      <section className="section-padding" style={{ backgroundColor: 'var(--stone-ivory-light)' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '0.75rem' }}>Core Product Categories</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Explore our curated selection of architectural materials suited for furniture, modular kitchens, wardrobes, and commercial interiors.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {PRODUCT_CATEGORIES.map((cat) => (
              <div
                key={cat.slug}
                style={{
                  backgroundColor: 'var(--card-bg)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: 'var(--shadow-subtle)',
                }}
              >
                <div style={{ position: 'relative', height: '200px', width: '100%' }}>
                  <Image
                    src={cat.image}
                    alt={`${cat.title} at ${BUSINESS_DATA.name} Hosur`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--deep-walnut)' }}>
                    {cat.title}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--graphite-muted)', marginBottom: '1.5rem', flexGrow: 1 }}>
                    {cat.subtitle}
                  </p>
                  <Link
                    href={`/products/${cat.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontWeight: 600,
                      color: 'var(--deep-walnut)',
                      fontSize: '0.92rem',
                    }}
                  >
                    Explore {cat.title} &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED KNOWLEDGE GUIDES SECTION */}
      <section className="section-padding" style={{ backgroundColor: 'var(--linen-white)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="badge" style={{ marginBottom: '0.5rem' }}>
                Expert Advice
              </span>
              <h2>Interior Material Guides</h2>
            </div>
            <Link href="/guides" className="btn-secondary">
              View All Guides &rarr;
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            {featuredGuides.map((guide) => (
              <div
                key={guide.slug}
                style={{
                  backgroundColor: 'var(--card-bg)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <span className="badge" style={{ alignSelf: 'flex-start', marginBottom: '0.75rem' }}>
                  {guide.category}
                </span>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', lineHeight: '1.3' }}>
                  <Link href={`/guides/${guide.slug}`} style={{ color: 'var(--deep-walnut)' }}>
                    {guide.title}
                  </Link>
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--graphite-muted)', marginBottom: '1.5rem', flexGrow: 1, lineHeight: '1.6' }}>
                  {guide.subtitle}
                </p>
                <Link href={`/guides/${guide.slug}`} style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--olive-green)' }}>
                  Read Practical Guide &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. QUESTIONS, ANSWERED (FAQ PREVIEW SECTION) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--stone-ivory-light)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge" style={{ marginBottom: '0.75rem' }}>
              Common Questions
            </span>
            <h2>Questions, Answered</h2>
            <p style={{ maxWidth: '600px', margin: '0.5rem auto 0' }}>
              Have questions about kitchen plywood grades, laminate textures, or cabinet fittings? Here are practical answers.
            </p>
          </div>

          <FaqAccordion items={featuredFaqs} showCategoryHeaders />

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/faq" className="btn-secondary">
              View All 16 FAQs &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 6. TRUSTED & AUTHORIZED BRANDS */}
      <section className="section-padding" style={{ backgroundColor: 'var(--linen-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge" style={{ marginBottom: '0.75rem' }}>
              Brand Partnerships &amp; Stockists
            </span>
            <h2>Top Brands We Stock</h2>
            <p style={{ maxWidth: '640px', margin: '0.5rem auto 0' }}>
              Authorized dealer for Greenply and trusted dealers for Greenlam, Century, Fevicol (Pidilite), Godrej, Ebco, and Faber Chimneys.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {greenplyBrand && (
              <div
                style={{
                  backgroundColor: 'var(--stone-ivory)',
                  padding: '2rem',
                  borderRadius: 'var(--radius-md)',
                  border: '2px solid var(--champagne-gold)',
                  textAlign: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: 'var(--deep-walnut)',
                    backgroundColor: 'var(--card-bg)',
                    border: '1px solid var(--champagne-gold)',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    display: 'inline-block',
                    marginBottom: '0.5rem',
                  }}
                >
                  ✓ Authorized Dealer
                </span>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--deep-walnut)', marginBottom: '0.25rem' }}>
                  {greenplyBrand.name}
                </h3>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    color: 'var(--olive-green)',
                    fontWeight: 600,
                    marginBottom: '0.75rem',
                  }}
                >
                  {greenplyBrand.category}
                </span>
                <p style={{ fontSize: '0.88rem', color: 'var(--graphite-muted)' }}>
                  {greenplyBrand.description}
                </p>
              </div>
            )}

            {otherBrands.map((brand) => (
              <div
                key={brand.name}
                style={{
                  backgroundColor: 'var(--stone-ivory-light)',
                  padding: '2rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  textAlign: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: 'var(--olive-green)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    display: 'block',
                    marginBottom: '0.25rem',
                  }}
                >
                  Dealer / Stockist
                </span>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--deep-walnut)', marginBottom: '0.25rem' }}>
                  {brand.name}
                </h3>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    color: 'var(--olive-green)',
                    fontWeight: 600,
                    marginBottom: '0.75rem',
                  }}
                >
                  {brand.category}
                </span>
                <p style={{ fontSize: '0.88rem', color: 'var(--graphite-muted)' }}>
                  {brand.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/brands" className="btn-secondary">
              View All Brands &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 7. LOCATION SECTION */}
      <section className="section-padding" style={{ backgroundColor: 'var(--stone-ivory)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
              backgroundColor: 'var(--deep-walnut)',
              color: 'var(--linen-white)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(2rem, 5vw, 4rem)',
            }}
          >
            <div>
              <span className="badge" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', color: 'var(--linen-white)', borderColor: 'transparent', marginBottom: '1rem' }}>
                Store Location
              </span>
              <h2 style={{ color: 'var(--linen-white)', marginBottom: '1rem' }}>
                Visit Our Hosur Showroom
              </h2>
              <address style={{ fontStyle: 'normal', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem', color: 'rgba(252, 251, 248, 0.9)' }}>
                <strong style={{ color: 'var(--champagne-gold)', display: 'block', fontSize: '1.2rem', marginBottom: '0.25rem', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
                  {BUSINESS_DATA.name}
                </strong>
                {BUSINESS_DATA.address.street}
                <br />
                {BUSINESS_DATA.address.city}, {BUSINESS_DATA.address.state} {BUSINESS_DATA.address.pincode}
                <br />
                <span style={{ display: 'inline-block', marginTop: '0.5rem' }}>
                  <strong>Phone:</strong> {BUSINESS_DATA.phone}
                </span>
              </address>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <a
                  href={BUSINESS_DATA.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ backgroundColor: 'var(--champagne-gold)', color: 'var(--graphite)' }}
                >
                  Get Directions
                </a>
                <a href={BUSINESS_DATA.telLink} className="btn-outline-light">
                  Call {BUSINESS_DATA.phone}
                </a>
              </div>
            </div>

            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                aspectRatio: '16/10',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <Image
                src="/images/showroom.jpg"
                alt={`${BUSINESS_DATA.name} interior showroom displaying wood panels and hardware`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CONTACT CTA */}
      <section className="section-padding" style={{ backgroundColor: 'var(--stone-ivory-light)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1rem' }}>
            Have a Project in Mind?
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--graphite-muted)' }}>
            Let us help you find the right plywood grade, laminate finish, and hardware fittings for your interior requirement. 100% Tax Paid GST Billing provided.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href={BUSINESS_DATA.telLink} className="btn-primary">
              Call {BUSINESS_DATA.phone}
            </a>
            <a
              href={BUSINESS_DATA.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
