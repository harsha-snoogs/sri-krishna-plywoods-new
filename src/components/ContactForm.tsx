'use client';

import React from 'react';
import { BUSINESS_DATA } from '@/data/business';
import { trackEvent } from '@/utils/gaHelper';

export default function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const message = [
          `Hi ${BUSINESS_DATA.name}, I have a material enquiry.`,
          `Name: ${data.get('name')}`,
          `Phone: ${data.get('phone')}`,
          `Requirement: ${data.get('requirement')}`,
        ].join('\n');
        // No personal details are sent to GA, only that an enquiry was started.
        trackEvent('generate_lead', { method: 'whatsapp', form: 'contact_enquiry' });
        window.open(`${BUSINESS_DATA.whatsappLink}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
      }}
      style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
    >
      <div>
        <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--deep-walnut)', marginBottom: '0.35rem' }}>
          Your Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
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
        <label htmlFor="contact-phone" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--deep-walnut)', marginBottom: '0.35rem' }}>
          Contact Phone Number
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
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
        <label htmlFor="contact-requirement" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--deep-walnut)', marginBottom: '0.35rem' }}>
          Material Requirement
        </label>
        <textarea
          id="contact-requirement"
          name="requirement"
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
        Send Enquiry on WhatsApp &rarr;
      </button>
    </form>
  );
}
