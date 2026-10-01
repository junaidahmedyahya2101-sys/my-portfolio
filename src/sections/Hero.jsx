import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDownRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

function Hero() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-anim', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        minHeight: '100vh',
        padding: '160px 24px 80px 24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        maxWidth: '1400px',
        margin: '0 auto',
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      {/* Top Meta Line */}
      <div className="hero-anim" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Sparkles size={16} className="text-accent" />
        <span className="font-mono text-accent" style={{ fontSize: '13px', letterSpacing: '1px' }}>
          EXHIBITION EDITION // {PERSONAL_INFO?.brand || 'JAY STUDIO'}
        </span>
      </div>

      {/* Main Kinetic Typography */}
      <div style={{ margin: '40px 0' }}>
        <h1
          ref={headlineRef}
          className="font-display hero-anim"
          style={{
            fontSize: 'clamp(2.8rem, 8.5vw, 7.5rem)',
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: '-2px',
            textTransform: 'uppercase',
          }}
        >
          JUNAID AHMED <br />
          <span style={{ color: 'var(--text-muted)' }}>YAHYA</span>
        </h1>

        <div
          className="hero-anim"
          style={{
            marginTop: '32px',
            maxWidth: '750px',
            borderLeft: '2px solid var(--accent-kinetic)',
            paddingLeft: '20px',
          }}
        >
          <p
            ref={subtextRef}
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.4,
            }}
          >
            Frontend Developer & UI/UX Designer crafting hyper-polished, interactive digital experiences for global clients and ambitious brands[cite: 1, 2].
          </p>
        </div>
      </div>

      {/* Bottom Grid Info */}
      <div
        className="hero-anim"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px',
          paddingTop: '32px',
          borderTop: '1px solid var(--border-subtle)',
        }}
      >
        <div>
          <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
            POSITIONING
          </span>
          <p className="font-mono" style={{ fontSize: '13px', marginTop: '4px', color: 'var(--text-primary)' }}>
            {PERSONAL_INFO?.role || 'FRONTEND DEVELOPER & UI/UX DESIGNER'}
          </p>
        </div>

        <div>
          <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
            LOCATION
          </span>
          <p className="font-mono" style={{ fontSize: '13px', marginTop: '4px', color: 'var(--text-primary)' }}>
            {PERSONAL_INFO?.location || 'KARACHI, PAKISTAN'}
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <a
            href="#work"
            data-cursor="SCROLL"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--accent-kinetic)',
              textDecoration: 'none',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              letterSpacing: '1px',
            }}
          >
            EXPLORE WORK <ArrowDownRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;