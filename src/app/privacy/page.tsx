import React from 'react';
import { BUSINESS_DATA } from '@/data/business';

export const metadata = {
  title: 'Privacy Policy | Sri Krishna Plywoods & Hardwares',
  description: 'Privacy policy for Sri Krishna Plywoods & Hardwares in Hosur, Tamil Nadu.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <section className="section-padding">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 style={{ marginBottom: '1.5rem' }}>Privacy Policy</h1>
        <p style={{ marginBottom: '1rem' }}>
          This Privacy Policy describes how <strong>{BUSINESS_DATA.name}</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) handles basic information collected on this website.
        </p>

        <h2 style={{ fontSize: '1.4rem', marginTop: '2rem', marginBottom: '0.75rem' }}>Information Collection</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
          This website is a static informational and local business marketing portal. We do not track users, store personal cookies, or share customer data with third parties. When you call us via phone link or submit an inquiry, your information is used solely to respond to your specific material request.
        </p>

        <h2 style={{ fontSize: '1.4rem', marginTop: '2rem', marginBottom: '0.75rem' }}>Contact Information</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
          If you have any questions regarding this policy or our business services, please contact:
        </p>
        <address style={{ fontStyle: 'normal', color: 'var(--graphite)', lineHeight: '1.6', backgroundColor: 'var(--stone-ivory-light)', padding: '1.5rem', borderRadius: 'var(--radius-sm)' }}>
          <strong>{BUSINESS_DATA.name}</strong>
          <br />
          {BUSINESS_DATA.address.street}
          <br />
          {BUSINESS_DATA.address.city}, {BUSINESS_DATA.address.state} {BUSINESS_DATA.address.pincode}
          <br />
          <strong>Phone:</strong> {BUSINESS_DATA.phone}
        </address>
      </div>
    </section>
  );
}
