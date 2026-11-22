import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO, STAGES } from '../../data/content';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navigation({ activeSection = 'stage-00' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleBtnRef = useRef(null);

  // Find active stage info
  const currentStage = STAGES.find((s) => s.id === activeSection) || STAGES[0];

  // Close on Escape & trap focus
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        toggleBtnRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Auto focus the close button in menu
      const firstFocusable = menuRef.current?.querySelector('button, a');
      firstFocusable?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#stage-01', label: 'About', stage: '01' },
    { href: '#stage-02', label: 'Expertise', stage: '02' },
    { href: '#stage-03', label: 'Projects', stage: '03' },
    { href: '#stage-04', label: 'Experience', stage: '04' },
    { href: '#stage-05', label: 'Achievements', stage: '05' },
    { href: '#stage-07', label: 'Contact', stage: '07' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-4 md:px-8 py-3.5 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between glass-panel rounded-lg px-4 md:px-6 py-2.5">
          {/* Identity & Current Stage */}
          <a
            href="#stage-00"
            className="flex items-center gap-3 text-bone hover:text-signal transition-colors group focus:outline-none"
            data-reticle="ROOT"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-signal inline-block animate-pulse"></span>
            <span className="font-mono text-xs tracking-wider font-semibold uppercase">
              {PERSONAL_INFO.name}
            </span>
            <span className="hidden sm:inline-block text-hairline text-xs">/</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-graphite border border-hairline font-mono text-[10px] text-muted group-hover:border-signal/50 transition-colors">
              <span className="text-verified">STAGE {currentStage.code}</span>
              <span className="text-bone font-medium">{currentStage.name}</span>
            </span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  data-reticle={item.label.toUpperCase()}
                  className={`font-mono text-xs tracking-wide transition-colors py-1 flex items-center gap-1.5 ${
                    isActive ? 'text-signal font-medium' : 'text-muted hover:text-bone'
                  }`}
                >
                  <span className="text-[10px] opacity-60">[{item.stage}]</span>
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Actions: Resume CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.resumePath}
              download="Rimjhim_Madan_Resume.pdf"
              data-reticle="RESUME"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-graphite border border-hairline hover:border-signal text-bone hover:text-signal text-xs font-mono transition-all group"
              aria-label="Download Resume PDF"
            >
              <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-signal" />
              <span className="hidden sm:inline">RESUME.PDF</span>
              <span className="sm:hidden">PDF</span>
            </a>

            {/* Mobile menu trigger */}
            <button
              ref={toggleBtnRef}
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-1.5 text-bone hover:text-signal border border-hairline rounded bg-graphite focus:outline-none"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Full-screen Overlay with Focus Trap) */}
      {mobileMenuOpen && (
        <div
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-xl flex flex-col justify-between p-6 md:p-10 lg:hidden"
        >
          <div className="flex items-center justify-between pb-6 border-b border-hairline">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-signal"></span>
              <span className="font-mono text-sm tracking-wider text-bone font-semibold">
                {PERSONAL_INFO.name} // PIPELINE
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-muted hover:text-bone border border-hairline rounded bg-graphite focus:outline-none"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Stage links */}
          <nav className="flex flex-col gap-4 py-8" aria-label="Mobile stage list">
            {STAGES.map((s) => {
              const isActive = activeSection === s.id;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2 border-b border-hairline/40 font-mono text-sm tracking-wide transition-colors ${
                    isActive ? 'text-signal font-semibold' : 'text-bone hover:text-signal'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted">STAGE {s.code}</span>
                    <span className="text-base font-serif italic text-bone">{s.name}</span>
                  </div>
                  <span className="text-xs text-muted uppercase">[{s.label}]</span>
                </a>
              );
            })}
          </nav>

          {/* Mobile Footer CTAs */}
          <div className="pt-6 border-t border-hairline flex flex-col gap-3 font-mono text-xs">
            <a
              href={PERSONAL_INFO.resumePath}
              download="Rimjhim_Madan_Resume.pdf"
              className="flex items-center justify-center gap-2 w-full py-3 bg-signal text-bone font-semibold rounded hover:bg-signal/90 transition-colors"
            >
              <Download className="w-4 h-4" /> DOWNLOAD RESUME PDF
            </a>
            <div className="flex justify-between items-center text-muted pt-2 text-[11px]">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bone inline-flex items-center gap-1"
              >
                LinkedIn <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bone inline-flex items-center gap-1"
              >
                GitHub <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-bone inline-flex items-center gap-1"
              >
                Email <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

