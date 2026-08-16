import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS_DATA } from '@/data/business';

export const metadata = {
  title: 'About Us | Sri Krishna Plywoods & Hardwares Hosur',
  description: 'Learn about Sri Krishna Plywoods & Hardwares in Indira Nagar, Avalapalli Hudco, Hosur — your trusted local supplier for plywood, laminates, and hardware.',
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
            Our Business Story
          </span>
          <h1 style={{ marginBottom: '1rem' }}>About Sri Krishna Plywoods &amp; Hardwares</h1>
          <p style={{ maxWidth: '680px', fontSize: '1.15rem', color: 'var(--graphite-muted)' }}>
            Serving Hosur&apos;s construction, interior design, and carpentry communities with dependable material quality and straightforward advice.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center',
              marginBottom: '4rem',
            }}
          >
            <div>
              <h2 style={{ marginBottom: '1.25rem', fontSize: '2rem' }}>
                Dependable Materials for Every Interior Requirement
              </h2>
              <p style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
                At <strong>{BUSINESS_DATA.name}</strong>, located at Indira Nagar, Avalapalli Hudco, Hosur, we operate as a dedicated destination for interior building supplies. We supply high-grade BWP waterproof marine plywoods, moisture-resistant commercial boards, 1.0mm decorative laminates, architectural door hardware, and industrial wood adhesives.
              </p>
              <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                Our goal is to eliminate guesswork when choosing interior materials. Whether you are an interior contractor executing a modular kitchen project in SIPCOT Hosur, a carpenter crafting custom bedroom wardrobes, or a homeowner renovating your residence, we supply genuine products from trusted industry brands including Greenply, Century, Greenlam, and Fevicol.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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
                alt={`${BUSINESS_DATA.name} material store in Hosur`}
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
            <h2 style={{ textAlign: 'center', marginBottom: '2.5rem' }}>Our Business Principles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--deep-walnut)' }}>
                  100% Genuine Brands
                </h3>
                <p style={{ fontSize: '0.92rem', lineHeight: '1.7' }}>
                  We source directly from established manufacturers, ensuring verified IS standards for structural safety and borer resistance.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--deep-walnut)' }}>
                  Transparent Pricing
                </h3>
                <p style={{ fontSize: '0.92rem', lineHeight: '1.7' }}>
                  Fair, straightforward quotes for both single sheet purchases and complete bulk project orders across Hosur.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--deep-walnut)' }}>
                  Practical Guidance
                </h3>
                <p style={{ fontSize: '0.92rem', lineHeight: '1.7' }}>
                  We assist customers in comparing plywood core types, laminate surface textures, and hardware load ratings to match their exact needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
