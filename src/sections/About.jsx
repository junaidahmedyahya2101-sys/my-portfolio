import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '120px 24px',
        maxWidth: '1400px',
        margin: '0 auto',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: '60px' }}>
        <span className="font-mono text-accent" style={{ fontSize: '12px', letterSpacing: '2px' }}>
          02 // IDENTITY & PHILOSOPHY
        </span>
        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 800,
            marginTop: '8px',
            lineHeight: 1.1,
          }}
        >
          ENGINEERING VISUAL DESTINATIONS.
        </h2>
      </div>

      {/* Main Grid Content */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'start',
        }}
      >
        {/* Left Column */}
        <div>
          <p
            style={{
              fontSize: 'clamp(1.2rem, 2vw, 1.75rem)',
              lineHeight: 1.4,
              color: 'var(--text-primary)',
              fontWeight: 500,
            }}
          >
            I am <span className="text-accent">{PERSONAL_INFO.name}</span>, an 18-year-old developer and UI/UX designer from Karachi, Pakistan, and the founder of <span style={{ textDecoration: 'underline' }}>{PERSONAL_INFO.brand}</span>[cite: 1, 2].
          </p>

          <p
            style={{
              marginTop: '24px',
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
            }}
          >
            {PERSONAL_INFO.summary}[cite: 1, 2]
          </p>

          <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div
              className="font-mono"
              style={{
                padding: '8px 16px',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '4px',
                fontSize: '12px',
              }}
            >
              LOC: DHA PHASE 2, KARACHI[cite: 1, 2]
            </div>
            <div
              className="font-mono"
              style={{
                padding: '8px 16px',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '4px',
                fontSize: '12px',
              }}
            >
              EDU: FSC PRE-MEDICAL (BAHRIA COLLEGE)[cite: 2]
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              padding: '32px',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '8px',
            }}
          >
            <span className="font-mono text-accent" style={{ fontSize: '12px' }}>
              PILLAR 01
            </span>
            <h3 className="font-display" style={{ fontSize: '1.5rem', marginTop: '8px', marginBottom: '12px' }}>
              Advanced CSS & JS Motion
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Crafting pixel-perfect layouts backed by custom hover interactions, scroll dynamics, and parallax motion engineered for production-level responsiveness[cite: 1, 2].
            </p>
          </div>

          <div
            style={{
              padding: '32px',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '8px',
            }}
          >
            <span className="font-mono text-accent" style={{ fontSize: '12px' }}>
              PILLAR 02
            </span>
            <h3 className="font-display" style={{ fontSize: '1.5rem', marginTop: '8px', marginBottom: '12px' }}>
              AI Integration Workflows
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Integrating human-in-the-loop (RLHF) fine-tuning, AI-assisted design, and synthetic generative media quality evaluation into modern production streams[cite: 1, 2].
            </p>
          </div>

          <div
            style={{
              padding: '32px',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '8px',
            }}
          >
            <span className="font-mono text-accent" style={{ fontSize: '12px' }}>
              PILLAR 03
            </span>
            <h3 className="font-display" style={{ fontSize: '1.5rem', marginTop: '8px', marginBottom: '12px' }}>
              End-to-End Delivery
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Direct client communication, strict requirement mapping, rapid iteration, and performance-first web deployments[cite: 1, 2].
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}