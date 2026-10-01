import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO, SERVICES } from '../data/portfolioData';

function Contact() {
  const serviceList = SERVICES || [];

  return (
    <footer
      id="contact"
      style={{
        padding: '120px 24px 60px 24px',
        maxWidth: '1400px',
        margin: '0 auto',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      {/* Services Grid */}
      <div style={{ marginBottom: '100px' }}>
        <span className="font-mono text-accent" style={{ fontSize: '12px', letterSpacing: '2px' }}>
          06 // SERVICES & OFFERINGS
        </span>
        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 800,
            marginTop: '8px',
            marginBottom: '40px',
            lineHeight: 1.1,
          }}
        >
          HOW WE CAN WORK TOGETHER.
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {serviceList.map((srv, idx) => (
            <div
              key={idx}
              style={{
                padding: '32px',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '8px',
              }}
            >
              <span className="font-mono text-accent" style={{ fontSize: '12px' }}>
                0{idx + 1}
              </span>
              <h3 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 700, margin: '12px 0' }}>
                {srv.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                {srv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Call To Action */}
      <div
        style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '16px',
          padding: '60px 40px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: '80px',
        }}
      >
        <span className="font-mono text-accent" style={{ fontSize: '12px', letterSpacing: '2px' }}>
          INITIATE CONTACT
        </span>
        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
            fontWeight: 800,
            margin: '16px 0 32px 0',
            lineHeight: 1,
          }}
        >
          LET'S BUILD SOMETHING <br />
          <span style={{ color: 'var(--accent-kinetic)' }}>EXTRAORDINARY.</span>
        </h2>

        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          data-cursor="EMAIL"
          className="font-mono"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '16px 36px',
            backgroundColor: 'var(--accent-kinetic)',
            color: '#0a0a0b',
            fontWeight: 'bold',
            textDecoration: 'none',
            borderRadius: '30px',
            fontSize: '14px',
            letterSpacing: '1px',
            transition: 'transform 0.3s ease',
          }}
        >
          START A PROJECT <ArrowUpRight size={18} />
        </a>
      </div>

      {/* Footer Bottom Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          paddingTop: '24px',
          borderTop: '1px solid var(--border-subtle)',
        }}
      >
        <span className="font-mono" style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} JAY STUDIO // JUNAID AHMED. ALL RIGHTS RESERVED.
        </span>

        <div style={{ display: 'flex', gap: '24px' }}>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono"
            style={{ fontSize: '12px', color: 'var(--text-secondary)', textDecoration: 'none' }}
          >
            GITHUB
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono"
            style={{ fontSize: '12px', color: 'var(--text-secondary)', textDecoration: 'none' }}
          >
            LINKEDIN
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Contact;