'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaqItem } from '@/data/faq';

interface FaqAccordionProps {
  items: FaqItem[];
  showCategoryHeaders?: boolean;
}

export default function FaqAccordion({ items, showCategoryHeaders = false }: FaqAccordionProps) {
  // Default open the first question for quick preview
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    [items[0]?.id || '']: true,
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {items.map((item) => {
        const isOpen = !!openIds[item.id];
        const buttonId = `faq-btn-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div
            key={item.id}
            style={{
              backgroundColor: 'var(--card-bg)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-light)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-subtle)',
            }}
          >
            <button
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggleItem(item.id)}
              style={{
                width: '100%',
                padding: '1.5rem 1.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                textAlign: 'left',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {showCategoryHeaders && (
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--olive-green)',
                    }}
                  >
                    {item.categoryLabel}
                  </span>
                )}
                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: 'var(--deep-walnut)',
                    lineHeight: 1.35,
                  }}
                >
                  {item.question}
                </h3>
              </div>

              {/* Accessible Toggle Icon Indicator */}
              <span
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--stone-ivory)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'transform 0.25s ease',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  color: 'var(--deep-walnut)',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                }}
                aria-hidden="true"
              >
                ↓
              </span>
            </button>

            {/* Answer Content Panel (Crawlable in SSR HTML Output) */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              style={{
                display: isOpen ? 'block' : 'none',
                padding: '0 1.75rem 1.75rem 1.75rem',
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '1.25rem',
              }}
            >
              <p
                style={{
                  fontSize: '1.02rem',
                  lineHeight: '1.75',
                  color: 'var(--graphite-muted)',
                  marginBottom: item.relatedLink ? '1rem' : 0,
                }}
              >
                {item.answer}
              </p>

              {item.relatedLink && (
                <div style={{ marginTop: '0.75rem' }}>
                  <Link
                    href={item.relatedLink.href}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      color: 'var(--deep-walnut)',
                    }}
                  >
                    {item.relatedLink.label} &rarr;
                  </Link>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
