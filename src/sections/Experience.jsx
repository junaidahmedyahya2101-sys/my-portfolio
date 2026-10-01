import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';

function Experience() {
  const expList = EXPERIENCES || [];

  return (
    <section
      id="experience"
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
          05 // TRACK RECORD
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
          EXPERIENCE & HISTORY.
        </h2>
      </div>

      {/* Timeline List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {expList.map((item, index) => (
          <div
            key={index}
            style={{
              padding: '32px',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '8px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px',
              alignItems: 'start',
              transition: 'border-color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-kinetic)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
            }}
          >
            <div>
              <span className="font-mono text-accent" style={{ fontSize: '12px', letterSpacing: '1px' }}>
                {item.period}
              </span>
              <h3 className="font-display" style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '6px' }}>
                {item.role}
              </h3>
              <p className="font-mono" style={{ color: 'var(--text-muted)', fontSize: '13px', marginTop: '4px' }}>
                {item.company}
              </p>
            </div>

            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;