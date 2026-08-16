'use client';

import React from 'react';
import { BUSINESS_DATA } from '@/data/business';

export default function MobileActionBar() {
  return (
    <div
      className="mobile-action-bar"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        backgroundColor: 'var(--linen-white)',
        borderTop: '1px solid var(--border-light)',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.08)',
        padding: '0.75rem 1rem',
        display: 'flex',
        gap: '0.75rem',
      }}
    >
      <a
        href={BUSINESS_DATA.telLink}
        className="btn-primary"
        style={{
          flex: 1,
          padding: '0.75rem 0.5rem',
          fontSize: '0.9rem',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        Call {BUSINESS_DATA.phone}
      </a>

      <a
        href={BUSINESS_DATA.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary"
        style={{
          flex: 1,
          padding: '0.75rem 0.5rem',
          fontSize: '0.9rem',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="3 11 22 2 13 21 11 13 3 11" />
        </svg>
        Get Directions
      </a>

      <style jsx>{`
        @media (min-width: 768px) {
          :global(.mobile-action-bar) {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
