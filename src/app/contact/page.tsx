import React from 'react';
import Image from 'next/image';
import { BUSINESS_DATA } from '@/data/business';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us | Sri Krishna Plywoods & Hardwares Hosur',
  description: 'Contact Sri Krishna Plywoods & Hardwares in Hosur. Visit our store at 10/1 Indira Nagar, Avalapalli Hudco or call 9944057507 for quotes and directions.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <section style={{ backgroundColor: 'var(--stone-ivory-light)', padding: '4rem 0 3rem' }}>
        <div className="container">
          <span className="badge" style={{ marginBottom: '1rem' }}>
            Store Location &amp; Contact
          </span>
          <h1 style={{ marginBottom: '1rem' }}>Contact Sri Krishna Plywoods &amp; Hardwares</h1>
          <p style={{ maxWidth: '680px', fontSize: '1.15rem', color: 'var(--graphite-muted)' }}>
            Have a project in mind or need material pricing? Visit our showroom in Hosur or speak directly with our team.
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
            }}
          >
            {/* Contact & NAP Details */}
            <div>
              <div
                style={{
                  backgroundColor: 'var(--card-bg)',
                  padding: '2.5rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-subtle)',
                  marginBottom: '2rem',
                }}
              >
                <h2 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', color: 'var(--deep-walnut)' }}>
                  Business Information
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {/* Business Name */}
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--stone-ivory)',
                        color: 'var(--deep-walnut)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      🏢
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--olive-green)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Business Name
                      </strong>
                      <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--deep-walnut)' }}>
                        {BUSINESS_DATA.name}
                      </span>
                    </div>
                  </div>

                  {/* Address */}
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--stone-ivory)',
                        color: 'var(--deep-walnut)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      📍
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--olive-green)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Showroom Address
                      </strong>
                      <address style={{ fontStyle: 'normal', color: 'var(--graphite)', fontSize: '0.98rem', lineHeight: '1.6' }}>
                        {BUSINESS_DATA.address.street}
                        <br />
                        {BUSINESS_DATA.address.city}, {BUSINESS_DATA.address.state} {BUSINESS_DATA.address.pincode}, {BUSINESS_DATA.address.country}
                      </address>
                    </div>
                  </div>

                  {/* Phone */}
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--stone-ivory)',
                        color: 'var(--deep-walnut)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      📞
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--olive-green)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Phone Number
                      </strong>
                      <a
                        href={BUSINESS_DATA.telLink}
                        style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--deep-walnut)', textDecoration: 'underline' }}
                      >
                        {BUSINESS_DATA.phone}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--stone-ivory)',
                        color: 'var(--deep-walnut)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      🕒
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--olive-green)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Store Operating Hours
                      </strong>
                      {BUSINESS_DATA.hours.map((h, idx) => (
                        <p key={idx} style={{ fontSize: '0.95rem', color: 'var(--graphite)' }}>
                          <strong>{h.days}:</strong> {h.time}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href={BUSINESS_DATA.telLink} className="btn-primary" style={{ flex: 1, textAlign: 'center', justifyContent: 'center' }}>
                    Call {BUSINESS_DATA.phone}
                  </a>
                  <a
                    href={BUSINESS_DATA.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ flex: 1, textAlign: 'center', justifyContent: 'center' }}
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Enquiry Form Layout */}
            <div>
              <div
                style={{
                  backgroundColor: 'var(--card-bg)',
                  padding: '2.5rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-subtle)',
                }}
              >
                <h2 style={{ fontSize: '1.6rem', marginBottom: '0.75rem', color: 'var(--deep-walnut)' }}>
                  Send a Quick Material Inquiry
                </h2>
                <p style={{ fontSize: '0.95rem', color: 'var(--graphite-muted)', marginBottom: '1.75rem' }}>
                  Planning an interior project in Hosur? Call us directly at <strong>{BUSINESS_DATA.phone}</strong> or visit our store at Indira Nagar for immediate assistance.
                </p>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
