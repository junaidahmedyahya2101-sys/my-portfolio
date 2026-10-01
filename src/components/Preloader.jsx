import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Smooth counting interval
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count === 100) {
      const ctx = gsap.context(() => {
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: 'power4.inOut',
          onComplete: () => {
            if (onComplete) onComplete();
          },
        });
      }, containerRef);

      return () => ctx.revert();
    }
  }, [count, onComplete]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#0a0a0b',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '40px',
        boxSizing: 'border-box',
        color: 'var(--text-primary)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="font-mono text-accent" style={{ fontSize: '12px', letterSpacing: '2px' }}>
          JAY STUDIO // 2026 EDITION
        </span>
        <span className="font-mono" style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
          SYSTEM INITIALIZING
        </span>
      </div>

      <div>
        <div className="font-display" style={{ fontSize: 'clamp(3rem, 12vw, 9rem)', fontWeight: 800, lineHeight: 0.9 }}>
          {count}%
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
        <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
          LOADING ASSETS & DYNAMICS
        </span>
        <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
          KARACHI, PK
        </span>
      </div>
    </div>
  );
}