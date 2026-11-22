import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/content';
import HeroCanvas from '../viz/HeroCanvas';
import MagneticButton from '../ui/MagneticButton';
import { Download, ArrowDown, Github, Linkedin, Terminal, Mail, Sparkles } from 'lucide-react';

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleAvatarMouseMove = (e) => {
    // Subtle 3D tilt on desktop pointer
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    setTilt({ x, y });
  };

  const handleAvatarMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Real skills derived strictly from verified resume
  const marqueeSkills = [
    'React.js',
    'Python',
    'FastAPI',
    'YOLO',
    'OpenCV',
    'Scikit-learn',
    'MERN Stack',
    'Node.js',
    'Tailwind CSS',
    'SQL',
    'MongoDB',
    'Deep Learning',
    'NLP (TF-IDF)',
    'Computer Vision',
    'REST APIs',
    'Data Visualization'
  ];

  return (
    <section
      id="stage-00"
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-0 overflow-hidden border-b border-hairline radial-spot"
      aria-label="Stage 00: Raw Signal"
    >
      {/* Background Canvas Token Stream */}
      <HeroCanvas />

      {/* Top Stage Metadata */}
      <div className="relative z-10 flex items-center justify-between font-mono text-xs text-muted max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-20 pt-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-signal animate-pulse"></span>
          <span className="text-bone font-medium tracking-wide">STAGE 00 // RAW SIGNAL</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-[11px]">
          <span className="text-muted/60">SYS_LOC:</span>
          <span className="text-bone font-mono">{PERSONAL_INFO.location}</span>
        </div>
      </div>

      {/* Main Hero Editorial Core (Asymmetric 12-Col Grid) */}
      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto py-10 lg:py-16 px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Typography & CTAs (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          {/* Headline Sub-tag */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-graphite/90 border border-hairline font-mono text-xs text-bone shadow-sm">
              <Terminal className="w-3.5 h-3.5 text-signal" />
              <span>{PERSONAL_INFO.headline}</span>
            </span>
          </div>

          {/* Large Confident Display Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-bone tracking-tight leading-[0.92] select-none">
            Rimjhim <span className="text-signal italic">Madan</span>
          </h1>

          {/* Original 2-Sentence Intro */}
          <p className="max-w-2xl text-base sm:text-lg md:text-xl text-muted font-sans font-normal leading-relaxed">
            {PERSONAL_INFO.heroIntro}
          </p>

          {/* Primary CTAs & Social Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Explore Projects CTA */}
            <MagneticButton
              href="#stage-03"
              data-reticle="PROJECTS"
              className="px-6 py-3.5 rounded bg-signal hover:bg-signal/90 text-bone font-mono text-xs font-semibold tracking-wider transition-all flex items-center gap-2 shadow-sm"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowDown className="w-4 h-4" />
            </MagneticButton>

            {/* Download Resume CTA */}
            <MagneticButton
              href={PERSONAL_INFO.resumePath}
              download="Rimjhim_Madan_Resume.pdf"
              data-reticle="DOWNLOAD"
              className="px-6 py-3.5 rounded bg-graphite hover:bg-hairline/60 border border-hairline hover:border-bone/60 text-bone font-mono text-xs font-medium tracking-wider transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-signal" />
              <span>DOWNLOAD RESUME</span>
            </MagneticButton>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pl-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                data-reticle="GITHUB"
                className="p-3 rounded bg-graphite/80 border border-hairline hover:border-signal text-bone hover:text-signal transition-colors focus:outline-none"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                data-reticle="LINKEDIN"
                className="p-3 rounded bg-graphite/80 border border-hairline hover:border-signal text-bone hover:text-signal transition-colors focus:outline-none"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Send direct email"
                data-reticle="EMAIL"
                className="p-3 rounded bg-graphite/80 border border-hairline hover:border-signal text-bone hover:text-signal transition-colors focus:outline-none"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Cartoon-Style Profile Illustration with Organic/Circular Crop & Green Glow (5 cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div
            className="relative group cursor-pointer select-none transition-transform duration-300 ease-out"
            style={{
              transform: `perspective(900px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
            }}
            onMouseMove={handleAvatarMouseMove}
            onMouseLeave={handleAvatarMouseLeave}
            data-reticle="PROFILE"
          >
            {/* Outer Subtle Verified/Green Ambient Glow Spot */}
            <div className="absolute -inset-2.5 rounded-full bg-verified/15 blur-xl group-hover:bg-verified/25 transition-all duration-500 pointer-events-none" />

            {/* Reticle Corner Brackets */}
            <div className="absolute -top-3 -left-3 w-4 h-4 border-t-2 border-l-2 border-verified/70 pointer-events-none" />
            <div className="absolute -top-3 -right-3 w-4 h-4 border-t-2 border-r-2 border-verified/70 pointer-events-none" />
            <div className="absolute -bottom-3 -left-3 w-4 h-4 border-b-2 border-l-2 border-verified/70 pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-4 h-4 border-b-2 border-r-2 border-verified/70 pointer-events-none" />

            {/* Circular / Organic Cropped Avatar Container */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full p-2 bg-graphite/80 border border-hairline group-hover:border-verified/60 shadow-[0_0_35px_rgba(92,225,200,0.18)] transition-all duration-500 overflow-hidden flex items-center justify-center">
              {/* Inner Decorative Subtle Ring */}
              <div className="absolute inset-1.5 rounded-full border border-verified/30 pointer-events-none z-10" />

              {/* The Cartoon-style Developer Avatar Image */}
              <picture>
                <source srcSet={PERSONAL_INFO.avatar.src} type="image/webp" />
                <img
                  src={PERSONAL_INFO.avatar.fallback}
                  alt={PERSONAL_INFO.avatar.alt}
                  width="320"
                  height="320"
                  loading="eager"
                  className="w-full h-full object-cover rounded-full scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </picture>

              {/* Laser Scan Line Accent (Sweeps on hover or touch) */}
              <div className="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-b from-transparent via-verified/25 to-transparent h-6 -translate-y-full group-hover:translate-y-[350px] transition-transform duration-1000 ease-in-out pointer-events-none" />
            </div>

            {/* Mono Technical Identification Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded bg-graphite border border-hairline shadow-md font-mono text-[10px] text-bone tracking-wider whitespace-nowrap flex items-center gap-1.5 z-20 group-hover:border-verified/70 transition-colors">
              <span className="w-2 h-2 rounded-full bg-verified animate-ping" />
              <span>RIMJHIM // SOFTWARE + ML</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Ticker: Real Skills Only */}
      <div className="relative z-10 w-full border-t border-b border-hairline bg-graphite/50 backdrop-blur-sm py-2.5 overflow-hidden select-none">
        <div className="animate-marquee font-mono text-xs tracking-wider text-muted flex items-center">
          {[...marqueeSkills, ...marqueeSkills].map((skill, idx) => (
            <span key={idx} className="flex items-center whitespace-nowrap">
              <span className="text-bone/80 hover:text-signal transition-colors px-4 font-medium text-[11px]">
                {skill}
              </span>
              <span className="text-signal/60 font-semibold text-[10px]">//</span>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Status Coordinates */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-muted max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-20 py-4">
        <div className="flex items-center gap-4 text-[11px]">
          <span className="text-verified font-medium">PIPELINE: ACTIVE</span>
          <span className="text-hairline">|</span>
          <span>4 SHIPPED PROJECTS</span>
          <span className="text-hairline">|</span>
          <span>SGPA {PERSONAL_INFO.sgpa}</span>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-muted">
          <span>PROCEED TO STAGE 01</span>
          <ArrowDown className="w-3.5 h-3.5 text-signal animate-bounce" />
        </div>
      </div>
    </section>
  );
}
