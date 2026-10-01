import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

function Work() {
  const projectList = PROJECTS || [];

  return (
    <section
      id="work"
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
          04 // SELECTED WORKS
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
          FEATURED PROJECTS.
        </h2>
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
        }}
      >
        {projectList.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'border-color 0.3s ease, transform 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-kinetic)';
              e.currentTarget.style.transform = 'translateY(-6px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {/* Visual Header */}
            <div
              style={{
                height: '180px',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px',
                position: 'relative',
              }}
            >
              <span className="font-display text-accent" style={{ fontSize: '2.5rem', fontWeight: 800, opacity: 0.2 }}>
                0{index + 1}
              </span>
              <span
                className="font-mono"
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  fontSize: '10px',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-secondary)',
                }}
              >
                {project.category || 'WEB DEVELOPMENT'}
              </span>
            </div>

            {/* Content Body */}
            <div style={{ padding: '28px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 className="font-display" style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px' }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                  {project.tags && project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono"
                      style={{
                        fontSize: '11px',
                        color: 'var(--accent-kinetic)',
                        backgroundColor: 'rgba(204, 255, 0, 0.06)',
                        padding: '4px 10px',
                        borderRadius: '4px',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div style={{ display: 'flex', gap: '16px', borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="VIEW"
                    className="font-mono"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: 'var(--text-primary)',
                      fontSize: '12px',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                    }}
                  >
                    LIVE DEMO <ArrowUpRight size={14} className="text-accent" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="CODE"
                    className="font-mono"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: 'var(--text-secondary)',
                      fontSize: '12px',
                      textDecoration: 'none',
                    }}
                  >
                    CODE
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;