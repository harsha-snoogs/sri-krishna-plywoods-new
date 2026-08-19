'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { BUSINESS_DATA } from '@/data/business';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine background backdrop transition
      setIsScrolled(currentScrollY > 20);

      // Smart hide-on-scroll logic
      if (currentScrollY > 120 && !mobileMenuOpen) {
        if (currentScrollY > lastScrollY.current + 5) {
          // Scrolling DOWN -> Hide header to maximize reading screen space
          setShowHeader(false);
        } else if (currentScrollY < lastScrollY.current - 5) {
          // Scrolling UP -> Reveal header for instant navigation access
          setShowHeader(true);
        }
      } else {
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setShowHeader(true);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Guides', href: '/guides' },
    { name: 'Brands', href: '/brands' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className="header-bar"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: isScrolled ? 'rgba(252, 251, 248, 0.96)' : 'var(--linen-white)',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: `1px solid ${isScrolled ? 'var(--border-light)' : 'var(--border-subtle)'}`,
        transform: showHeader ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo Image & Responsive Identity */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div className="logo-container" style={{ position: 'relative', flexShrink: 0 }}>
            <Image
              src="/images/logo.png"
              alt={`${BUSINESS_DATA.name} Logo`}
              fill
              priority
              sizes="80px"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="brand-title">
              {BUSINESS_DATA.name}
            </span>
            <span className="brand-subtitle">
              Hosur, Tamil Nadu
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" style={{ display: 'none' }}>
          <ul style={{ display: 'flex', gap: '1.35rem', listStyle: 'none', alignItems: 'center' }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: '0.92rem',
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? 'var(--deep-walnut)' : 'var(--graphite-muted)',
                      borderBottom: isActive ? '2px solid var(--champagne-gold)' : '2px solid transparent',
                      paddingBottom: '0.2rem',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop Phone CTA */}
        <div className="desktop-cta" style={{ display: 'none' }}>
          <a
            href={BUSINESS_DATA.telLink}
            className="btn-primary"
            style={{ padding: '0.65rem 1.2rem', fontSize: '0.88rem' }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call {BUSINESS_DATA.phone}
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="mobile-toggle"
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
            setShowHeader(true);
          }}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          style={{
            padding: '0.4rem',
            color: 'var(--deep-walnut)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            backgroundColor: 'var(--linen-white)',
            borderBottom: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-dropdown)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          <nav>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: pathname === link.href ? 'var(--deep-walnut)' : 'var(--graphite)',
                      display: 'block',
                      padding: '0.25rem 0',
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div style={{ paddingTop: '0.5rem', borderTop: '1px solid var(--border-subtle)' }}>
            <a
              href={BUSINESS_DATA.telLink}
              className="btn-primary"
              style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}
            >
              Call {BUSINESS_DATA.phone}
            </a>
          </div>
        </div>
      )}

      {/* Responsive Header CSS Styling */}
      <style jsx>{`
        :global(.header-bar) {
          padding-top: 0.6rem;
          padding-bottom: 0.6rem;
        }

        :global(.logo-container) {
          width: 72px;
          height: 25px;
        }

        :global(.brand-title) {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--deep-walnut);
          letter-spacing: -0.01em;
          line-height: 1.15;
          max-width: 175px;
        }

        :global(.brand-subtitle) {
          display: none;
          font-size: 0.62rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--olive-green);
          font-weight: 600;
          margin-top: 0.1rem;
        }

        @media (min-width: 480px) {
          :global(.logo-container) {
            width: 82px;
            height: 28px;
          }
          :global(.brand-title) {
            font-size: 0.98rem;
            max-width: none;
          }
          :global(.brand-subtitle) {
            display: block;
          }
        }

        @media (min-width: 960px) {
          :global(.header-bar) {
            padding-top: 0.9rem;
            padding-bottom: 0.9rem;
          }
          :global(.logo-container) {
            width: 90px;
            height: 32px;
          }
          :global(.brand-title) {
            font-size: 1.12rem;
          }
          :global(.desktop-nav),
          :global(.desktop-cta) {
            display: flex !important;
          }
          :global(.mobile-toggle) {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
