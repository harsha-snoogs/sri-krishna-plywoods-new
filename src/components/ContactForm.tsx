'use client';

import React from 'react';
import { BUSINESS_DATA } from '@/data/business';

export default function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = `tel:+91${BUSINESS_DATA.phone}`;
      }}
      style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
    >
      <div>
        <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--deep-walnut)', marginBottom: '0.35rem' }}>
          Your Name
        </label>
        <input
          type="text"
          placeholder="e.g. Ramesh Kumar"
          required
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-light)',
            backgroundColor: 'var(--linen-white)',
            fontSize: '0.95rem',
          }}
        />
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--deep-walnut)', marginBottom: '0.35rem' }}>
          Contact Phone Number
        </label>
        <input
          type="tel"
          placeholder="e.g. 9876543210"
          required
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-light)',
            backgroundColor: 'var(--linen-white)',
            fontSize: '0.95rem',
          }}
        />
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--deep-walnut)', marginBottom: '0.35rem' }}>
          Material Requirement
        </label>
        <textarea
          rows={4}
          placeholder="Describe your requirement (e.g. 19mm BWP Plywood sheets for kitchen modular cabinets, 1mm Greenlam laminates...)"
          required
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-light)',
            backgroundColor: 'var(--linen-white)',
            fontSize: '0.95rem',
            fontFamily: 'inherit',
          }}
        />
      </div>

      <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
        Call Showroom Directly &rarr;
      </button>
    </form>
  );
}
