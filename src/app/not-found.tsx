import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section-padding" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <span className="badge" style={{ marginBottom: '1rem' }}>
          404 Error
        </span>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Page Not Found</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--graphite-muted)' }}>
          The page you are looking for doesn&apos;t exist or may have been moved.
        </p>
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
