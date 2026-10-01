import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Mobile check
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) return;

    document.body.classList.add('custom-cursor-active');

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;

      gsap.to(cursor, {
        x: x,
        y: y,
        duration: 0.1,
        ease: 'power2.out',
      });

      gsap.to(follower, {
        x: x,
        y: y,
        duration: 0.35,
        ease: 'power3.out',
      });
    };

    // Global Hover Detection via Data Attributes
    const onMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const text = target.getAttribute('data-cursor');
        setCursorText(text || '');
        setIsHovered(true);

        gsap.to(follower, {
          scale: text ? 3.5 : 2,
          backgroundColor: 'rgba(209, 243, 102, 0.2)',
          borderColor: '#d1f366',
          duration: 0.3,
        });
      } else {
        const isInteractive = e.target.closest('a, button, input, textarea');
        if (isInteractive) {
          setIsHovered(true);
          gsap.to(follower, {
            scale: 1.8,
            backgroundColor: 'rgba(209, 243, 102, 0.15)',
            borderColor: '#d1f366',
            duration: 0.3,
          });
        }
      }
    };

    const onMouseOut = (e) => {
      const target = e.target.closest('[data-cursor], a, button, input, textarea');
      if (target) {
        setIsHovered(false);
        setCursorText('');
        gsap.to(follower, {
          scale: 1,
          backgroundColor: 'transparent',
          borderColor: 'rgba(255, 255, 255, 0.4)',
          duration: 0.3,
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      window.removeEventListener('resize', checkMobile);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Main Cursor Dot */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          backgroundColor: '#d1f366',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Outer Cursor Ring / Follower */}
      <div
        ref={followerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '36px',
          height: '36px',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'border-color 0.2s ease, background-color 0.2s ease',
        }}
      >
        {cursorText && (
          <span
            style={{
              fontSize: '8px',
              fontFamily: 'var(--font-mono)',
              color: '#0a0a0b',
              fontWeight: 'bold',
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}