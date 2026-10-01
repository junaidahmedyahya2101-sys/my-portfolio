import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Work from './sections/Work';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="app-container" style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Preloader Experience */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Global Noise Layer */}
      <div className="noise-overlay" />

      {/* Interactive Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      {!isLoading && <Navbar />}

      {/* Main Page Sections */}
      <main style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.6s ease' }}>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}