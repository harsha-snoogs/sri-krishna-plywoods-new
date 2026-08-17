import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS_DATA } from '@/data/business';

export const metadata = {
  title: `About Us | ${BUSINESS_DATA.yearsInBusiness}+ Years Trusted Plywood & Hardware Store in Hosur`,
  description: `Sri Krishna Plywoods & Hardwares in Hosur (Est. ${BUSINESS_DATA.establishedYear}). Authorized Greenply dealer & dealer for Greenlam, Century, Fevicol, Godrej, Ebco & Faber.`,
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <section style={{ backgroundColor: 'var(--stone-ivory-light)', padding: '4rem 0 3rem' }}>
        <div className="container">
          <span className="badge" style={{ marginBottom: '1rem' }}>
            Over {BUSINESS_DATA.yearsInBusiness} Years of Excellence in Hosur (Est. {BUSINESS_DATA.establishedYear})
          </span>
          <h1 style={{ marginBottom: '1rem' }}>About Sri Krishna Plywoods &amp; Hardwares</h1>
          <p style={{ maxWidth: '720px', fontSize: '1.15rem', color: 'var(--graphite-muted)', lineHeight: '1.7' }}>
            A trusted name in the plywood, laminate, and hardware industry for over {BUSINESS_DATA.yearsInBusiness} years—delivering genuine products, competitive pricing, and GST billing for home and commercial projects across Hosur.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center',
              marginBottom: '4rem',
            }}
          >
            <div>
              <span className="badge" style={{ marginBottom: '1rem', backgroundColor: 'var(--stone-ivory)', color: 'var(--olive-green)' }}>
                Established {BUSINESS_DATA.establishedYear} • {BUSINESS_DATA.yearsInBusiness}+ Years Legacy
              </span>
              <h2 style={{ marginBottom: '1.25rem', fontSize: '2rem' }}>
                Your One-Stop Destination for Interior Materials
              </h2>
              <p style={{ marginBottom: '1.25rem', lineHeight: '1.8', fontSize: '1.05rem', color: 'var(--graphite)' }}>
                {BUSINESS_DATA.historyText}
              </p>
              <p style={{ marginBottom: '1.25rem', lineHeight: '1.8', fontSize: '1.02rem', color: 'var(--graphite-muted)' }}>
                We are <strong>authorized dealers of Greenply</strong> (verifiable on Greenply&apos;s official directory) and <strong>dealers for Greenlam, Century Laminates, Fevicol (Pidilite), Godrej, Ebco, and Faber Chimneys</strong>. Whether you&apos;re building a new home or renovating, we provide 100% genuine products, expert technical guidance, competitive wholesale pricing, and formal GST billing.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
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

            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                aspectRatio: '4/3',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <Image
                src="/images/showroom.jpg"
                alt={`${BUSINESS_DATA.name} showroom in Hosur`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Core Values / Commitments */}
          <div
            style={{
              backgroundColor: 'var(--stone-ivory)',
              padding: '3rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-light)',
            }}
          >
            <h2 style={{ textAlign: 'center', marginBottom: '2.5rem' }}>Why Customers Trust Us</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--deep-walnut)' }}>
                  {BUSINESS_DATA.yearsInBusiness}+ Years Industry Experience
                </h3>
                <p style={{ fontSize: '0.92rem', lineHeight: '1.7' }}>
                  Established in {BUSINESS_DATA.establishedYear}, serving homeowners, interior designers, carpenters, and contractors across Hosur with honest advice and material selection.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--deep-walnut)' }}>
                  Authorized Greenply Dealer
                </h3>
                <p style={{ fontSize: '0.92rem', lineHeight: '1.7' }}>
                  Authorized Greenply dealership (verified on greenply.com) alongside trusted dealerships for Greenlam, Century, Fevicol, Godrej, Ebco, and Faber.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--deep-walnut)' }}>
                  100% Tax Paid GST Billing
                </h3>
                <p style={{ fontSize: '0.92rem', lineHeight: '1.7' }}>
                  Complete transparency with legitimate tax invoices and GST billing for every individual and commercial purchase.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--deep-walnut)' }}>
                  Competitive Pricing
                </h3>
                <p style={{ fontSize: '0.92rem', lineHeight: '1.7' }}>
                  Fair, straightforward pricing for both single-sheet home requirements and complete project bulk orders across Hosur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
