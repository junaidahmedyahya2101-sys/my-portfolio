import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WORK', href: '#work' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'SERVICES', href: '#services' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 9999,
          padding: isScrolled ? '16px 24px' : '28px 24px',
          transition: 'padding 0.4s var(--transition-smooth), background-color 0.4s ease, backdrop-filter 0.4s ease',
          backgroundColor: isScrolled ? 'rgba(10, 10, 11, 0.85)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Brand Logo */}
          <a
            href="#"
            data-cursor="HOME"
            style={{
              textDecoration: 'none',
              color: 'var(--text-primary)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span className="font-display" style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.5px' }}>
              JAY STUDIO
            </span>
            <span className="font-mono text-accent" style={{ fontSize: '9px', letterSpacing: '1px' }}>
              JUNAID AHMED YAHYA
            </span>
          </a>

          {/* Availability Badge */}
          <div
            className="font-mono"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '8px',
              fontSize: '11px',
              color: 'var(--text-secondary)',
              padding: '6px 14px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '20px',
              border: '1px solid var(--border-subtle)',
            }}
            id="desktop-status"
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-kinetic)',
                boxShadow: '0 0 8px var(--accent-kinetic)',
              }}
            />
            <span>KARACHI, PK • AVAILABLE</span>
          </div>

          {/* Desktop Nav Links */}
          <nav style={{ display: 'none', gap: '32px', alignItems: 'center' }} id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                data-cursor="GOTO"
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '12px',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '1px',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--accent-kinetic)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
              >
                {link.name}
              </a>
            ))}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="GIT"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                color: '#0a0a0b',
                backgroundColor: 'var(--accent-kinetic)',
                padding: '8px 16px',
                borderRadius: '4px',
                textDecoration: 'none',
                fontSize: '12px',
                fontFamily: 'var(--font-mono)',
                fontWeight: 'bold',
              }}
            >
              GITHUB <ArrowUpRight size={14} />
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px',
            }}
            id="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={26} color="var(--accent-kinetic)" /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Responsive Rules */}
      <style>{`
        @media (min-width: 900px) {
          #desktop-nav { display: flex !important; }
          #desktop-status { display: flex !important; }
          #mobile-toggle { display: none !important; }
        }
      `}</style>

      {/* Mobile Menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#0a0a0b',
          zIndex: 9998,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '40px 24px',
          boxSizing: 'border-box',
          transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.5s var(--transition-smooth)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-display"
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '2.5rem',
                fontWeight: 800,
                letterSpacing: '-1px',
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="font-mono text-accent"
            style={{
              marginTop: '20px',
              fontSize: '1rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            VIEW GITHUB <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </>
  );
}