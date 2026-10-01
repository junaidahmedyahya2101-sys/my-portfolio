import React, { useState } from 'react';
import { SKILLS } from '../data/portfolioData';

function Skills() {
  const [activeTab, setActiveTab] = useState('ALL');

  const categories = ['ALL', 'FRONTEND', 'DESIGN', 'AI & MEDIA', 'TOOLS'];

  const skillList = SKILLS || [];

  const filteredSkills = activeTab === 'ALL'
    ? skillList
    : skillList.filter(skill => skill.category === activeTab);

  return (
    <section
      id="skills"
      style={{
        padding: '120px 24px',
        maxWidth: '1400px',
        margin: '0 auto',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: '40px' }}>
        <span className="font-mono text-accent" style={{ fontSize: '12px', letterSpacing: '2px' }}>
          03 // TECHNICAL STACK
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
          CAPABILITIES & TOOLING.
        </h2>
      </div>

      {/* Filter Tabs */}
      <div
        style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          marginBottom: '48px',
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className="font-mono"
            data-cursor="SELECT"
            style={{
              padding: '8px 20px',
              borderRadius: '20px',
              border: activeTab === cat ? '1px solid var(--accent-kinetic)' : '1px solid var(--border-subtle)',
              backgroundColor: activeTab === cat ? 'var(--accent-kinetic)' : 'rgba(255, 255, 255, 0.02)',
              color: activeTab === cat ? '#0a0a0b' : 'var(--text-secondary)',
              fontSize: '12px',
              fontWeight: 'bold',
              letterSpacing: '1px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px',
        }}
      >
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            style={{
              padding: '24px',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '8px',
              transition: 'border-color 0.3s ease, transform 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-kinetic)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span className="font-display" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                {skill.name}
              </span>
              <span className="font-mono text-accent" style={{ fontSize: '11px' }}>
                {skill.level}%
              </span>
            </div>

            <div
              style={{
                width: '100%',
                height: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '2px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${skill.level}%`,
                  height: '100%',
                  backgroundColor: 'var(--accent-kinetic)',
                  transition: 'width 1s ease-in-out',
                }}
              />
            </div>

            <span
              className="font-mono"
              style={{
                display: 'inline-block',
                marginTop: '16px',
                fontSize: '10px',
                color: 'var(--text-muted)',
                letterSpacing: '1px',
              }}
            >
              CATEGORY // {skill.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;