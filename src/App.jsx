import React from 'react';
import SkipLink from './components/ui/SkipLink';
import ReticleCursor from './components/ui/ReticleCursor';
import Navigation from './components/layout/Navigation';
import PipelineNav from './components/layout/PipelineNav';
import Footer from './components/layout/Footer';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Achievements from './components/sections/Achievements';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';

import { useActiveSection } from './hooks/useActiveSection';

const STAGE_IDS = [
  'stage-00',
  'stage-01',
  'stage-02',
  'stage-03',
  'stage-04',
  'stage-05',
  'stage-06',
  'stage-07',
];

export default function App() {
  const { activeSection, scrollProgress } = useActiveSection(STAGE_IDS);

  return (
    <div className="relative min-h-screen bg-ink text-bone font-sans selection:bg-signal selection:text-bone">
      {/* Accessible skip link */}
      <SkipLink />

      {/* Reticle cursor on fine pointer devices */}
      <ReticleCursor />

      {/* Top Header Navigation */}
      <Navigation activeSection={activeSection} />

      {/* Fixed Left Vertical Pipeline Line */}
      <PipelineNav activeSection={activeSection} scrollProgress={scrollProgress} />

      {/* Main Content Landmark */}
      <main id="main-content" tabIndex="-1" className="focus:outline-none">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Education />
        <Contact />
      </main>

      {/* Technical Footer */}
      <Footer />
    </div>
  );
}

