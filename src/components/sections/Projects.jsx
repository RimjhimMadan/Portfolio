import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../../data/content';
import PipelineLab from '../viz/PipelineLab';
import ViewfinderViz from '../viz/ViewfinderViz';
import SkillGraphViz from '../viz/SkillGraphViz';
import DashboardFragViz from '../viz/DashboardFragViz';
import { Layers, X, ExternalLink, Calendar, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);
  const triggerRef = useRef(null);

  // Close on Escape & trap focus
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
        triggerRef.current?.focus();
      }
    };

    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      // Focus close button on open
      setTimeout(() => {
        const closeBtn = modalRef.current?.querySelector('button');
        closeBtn?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section
      id="stage-03"
      className="w-full py-24 px-6 md:px-12 lg:px-20 border-b border-hairline bg-ink"
      aria-label="Stage 03: Vectorize (Projects)"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Stage Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-hairline pb-4 font-mono text-xs text-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-signal"></span>
            <span className="text-bone font-medium">STAGE 03 // VECTORIZE</span>
          </div>
          <span className="text-muted text-[11px]">[PRODUCTION SYSTEMS & ML PIPELINES]</span>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl text-bone">
              Featured Projects
            </h2>
            <p className="text-muted text-sm font-mono mt-2">
              4 distinct engineered implementations spanning natural language processing, computer vision, and collaborative web platforms.
            </p>
          </div>
          <div className="font-mono text-xs text-muted">
            Click &ldquo;View Full Specification&rdquo; on any project to inspect architectural breakdown.
          </div>
        </div>

        {/* 4 Distinct Project Presentations */}
        <div className="flex flex-col gap-20">
          {/* Project 1: Fake News Detection System */}
          <article
            id="fake-news-detector"
            className="flex flex-col gap-6 p-6 sm:p-8 rounded-xl bg-graphite/30 border border-hairline scroll-mt-24"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-hairline/60 pb-5">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 font-mono text-xs">
                  <span className="px-2 py-0.5 rounded bg-signal/10 border border-signal/40 text-signal font-semibold">
                    PROJECT 01 // NLP & FASTAPI
                  </span>
                  <span className="text-muted flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> Oct 2026
                  </span>
                  <span className="px-2 py-0.5 rounded bg-verified/10 border border-verified/40 text-verified font-bold">
                    97% TEST ACCURACY
                  </span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-bone">
                  Fake News Detection System
                </h3>
                <p className="text-muted text-sm font-sans max-w-3xl">
                  Engineered an NLP classifier that labels news articles as real or fake (2 classes), comparing 2 Scikit-learn models on TF-IDF features to reach 97% accuracy on the test set. Delivered predictions via 1 FastAPI endpoint and a responsive React + Vite interface.
                </p>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={(e) => {
                  triggerRef.current = e.currentTarget;
                  setSelectedProject(PROJECTS[0]);
                }}
                data-reticle="INSPECT"
                className="px-4 py-2.5 rounded bg-graphite hover:bg-hairline/60 border border-hairline hover:border-signal text-bone hover:text-signal font-mono text-xs transition-colors shrink-0 flex items-center gap-2"
              >
                <span>View Full Specification</span>
                <ArrowRight className="w-4 h-4 text-signal" />
              </button>
            </div>

            {/* Interactive Custom Viz 1: PipelineLab */}
            <PipelineLab />
          </article>

          {/* Project 2: Weapon Detection System using YOLO */}
          <article
            id="yolo-weapon-detector"
            className="flex flex-col gap-6 p-6 sm:p-8 rounded-xl bg-graphite/30 border border-hairline scroll-mt-24"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-hairline/60 pb-5">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 font-mono text-xs">
                  <span className="px-2 py-0.5 rounded bg-signal/10 border border-signal/40 text-signal font-semibold">
                    PROJECT 02 // COMPUTER VISION & YOLO
                  </span>
                  <span className="text-muted flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> Oct 2026
                  </span>
                  <span className="px-2 py-0.5 rounded bg-graphite border border-hairline text-bone">
                    5-TECH STACK
                  </span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-bone">
                  Weapon Detection System using YOLO
                </h3>
                <p className="text-muted text-sm font-sans max-w-3xl">
                  Trained a YOLO object-detection model on a custom annotated dataset and evaluated it across 3 metrics (Precision, Recall, mAP). Processed live video frame by frame with OpenCV, drawing bounding boxes in real time to flag hazards for automated security monitoring.
                </p>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={(e) => {
                  triggerRef.current = e.currentTarget;
                  setSelectedProject(PROJECTS[1]);
                }}
                data-reticle="INSPECT"
                className="px-4 py-2.5 rounded bg-graphite hover:bg-hairline/60 border border-hairline hover:border-signal text-bone hover:text-signal font-mono text-xs transition-colors shrink-0 flex items-center gap-2"
              >
                <span>View Full Specification</span>
                <ArrowRight className="w-4 h-4 text-signal" />
              </button>
            </div>

            {/* Interactive Custom Viz 2: ViewfinderViz */}
            <ViewfinderViz />
          </article>

          {/* Project 3: Sync-Skill Platform (Smart India Hackathon) */}
          <article
            id="sync-skill-platform"
            className="flex flex-col gap-6 p-6 sm:p-8 rounded-xl bg-graphite/30 border border-hairline scroll-mt-24"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-hairline/60 pb-5">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 font-mono text-xs">
                  <span className="px-2 py-0.5 rounded bg-signal/10 border border-signal/40 text-signal font-semibold">
                    PROJECT 03 // FULL STACK COLLABORATION
                  </span>
                  <span className="text-muted flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> Aug 2026
                  </span>
                  <span className="px-2 py-0.5 rounded bg-verified/10 border border-verified/40 text-verified font-bold">
                    6+ REACT SCREENS
                  </span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-bone">
                  Sync-Skill Platform &mdash; Smart India Hackathon
                </h3>
                <p className="text-muted text-sm font-sans max-w-3xl">
                  Designed 6+ React screens with Tailwind CSS for a platform mapping academic curricula to industry skill requirements. Integrated 100% of screens with teammate-built APIs, coordinating 3 workstreams (backend, database, AI/ML) to demo 1 working product.
                </p>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={(e) => {
                  triggerRef.current = e.currentTarget;
                  setSelectedProject(PROJECTS[2]);
                }}
                data-reticle="INSPECT"
                className="px-4 py-2.5 rounded bg-graphite hover:bg-hairline/60 border border-hairline hover:border-signal text-bone hover:text-signal font-mono text-xs transition-colors shrink-0 flex items-center gap-2"
              >
                <span>View Full Specification</span>
                <ArrowRight className="w-4 h-4 text-signal" />
              </button>
            </div>

            {/* Interactive Custom Viz 3: SkillGraphViz */}
            <SkillGraphViz />
          </article>

          {/* Project 4: Fitness Tracker */}
          <article
            id="fitness-tracker"
            className="flex flex-col gap-6 p-6 sm:p-8 rounded-xl bg-graphite/30 border border-hairline scroll-mt-24"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-hairline/60 pb-5">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 font-mono text-xs">
                  <span className="px-2 py-0.5 rounded bg-signal/10 border border-signal/40 text-signal font-semibold">
                    PROJECT 04 // REACT MODULAR UI
                  </span>
                  <span className="text-muted flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> Sep 2025
                  </span>
                  <span className="px-2 py-0.5 rounded bg-graphite border border-hairline text-bone">
                    3 CORE MODULES
                  </span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-bone">
                  Fitness Tracker
                </h3>
                <p className="text-muted text-sm font-sans max-w-3xl">
                  Developed a React application with 3 core modules (progress dashboard, community feed, responsive UI) using reusable components across a 4-technology stack. Visualized live fitness metrics and added achievement sharing across devices.
                </p>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={(e) => {
                  triggerRef.current = e.currentTarget;
                  setSelectedProject(PROJECTS[3]);
                }}
                data-reticle="INSPECT"
                className="px-4 py-2.5 rounded bg-graphite hover:bg-hairline/60 border border-hairline hover:border-signal text-bone hover:text-signal font-mono text-xs transition-colors shrink-0 flex items-center gap-2"
              >
                <span>View Full Specification</span>
                <ArrowRight className="w-4 h-4 text-signal" />
              </button>
            </div>

            {/* Interactive Custom Viz 4: DashboardFragViz */}
            <DashboardFragViz />
          </article>
        </div>

        {/* Glass Detail Drawer / Modal with Focus Trap & Subtle 3D Tilt */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            <div
              ref={modalRef}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-xl p-6 sm:p-8 md:p-10 flex flex-col gap-6 shadow-2xl transition-transform duration-300 md:[transform:perspective(1000px)_rotateX(0.5deg)]"
            >
              {/* Modal Top Bar */}
              <div className="flex items-start justify-between gap-4 border-b border-hairline pb-4">
                <div className="flex flex-col gap-1">
                  <div className="font-mono text-xs text-signal flex items-center gap-2">
                    <span>SPECIFICATION // {selectedProject.date}</span>
                    {selectedProject.subtitle && (
                      <span className="text-muted">&bull; {selectedProject.subtitle}</span>
                    )}
                  </div>
                  <h3 id="modal-project-title" className="font-serif text-2xl sm:text-3xl text-bone">
                    {selectedProject.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-muted hover:text-bone border border-hairline rounded bg-graphite hover:border-signal focus:outline-none"
                  aria-label="Close project details [Esc]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Problem Statement with explicit // VERIFY tag */}
              <div className="p-4 rounded-lg bg-ink border border-hairline/80 flex flex-col gap-1.5 font-mono text-xs">
                <div className="flex items-center justify-between text-[10px] text-muted">
                  <span className="text-signal font-semibold">PROBLEM STATEMENT</span>
                  <span className="text-muted/60">// VERIFY: user to confirm</span>
                </div>
                <p className="text-bone/90 font-sans text-sm leading-relaxed">
                  {selectedProject.problemStatement}
                </p>
              </div>

              {/* Overview & Contribution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <div className="font-mono text-xs text-muted uppercase tracking-wider font-semibold">
                    System Overview
                  </div>
                  <p className="text-muted font-sans text-sm leading-relaxed">
                    {selectedProject.overview}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="font-mono text-xs text-muted uppercase tracking-wider font-semibold">
                    My Engineering Contribution
                  </div>
                  <p className="text-muted font-sans text-sm leading-relaxed">
                    {selectedProject.contribution}
                  </p>
                </div>
              </div>

              {/* Architecture Pipeline Strip */}
              {selectedProject.architecture && (
                <div className="flex flex-col gap-2 pt-2 border-t border-hairline">
                  <div className="font-mono text-xs text-muted uppercase tracking-wider font-semibold">
                    Architecture & Data Pipeline
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 font-mono text-xs">
                    {selectedProject.architecture.map((node) => (
                      <div key={node.step} className="p-2.5 rounded bg-graphite/40 border border-hairline">
                        <div className="text-[10px] text-signal font-bold">{node.step}</div>
                        <div className="text-bone font-medium text-[11px] truncate">{node.name}</div>
                        <div className="text-[9px] text-muted truncate">{node.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features Bullet List */}
              <div className="flex flex-col gap-2 pt-2 border-t border-hairline">
                <div className="font-mono text-xs text-muted uppercase tracking-wider font-semibold">
                  Key Engineered Features
                </div>
                <ul className="flex flex-col gap-2 font-mono text-xs text-muted">
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-verified shrink-0 mt-0.5" />
                      <span className="text-[11px] font-sans text-bone/90">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-col gap-2 pt-2 border-t border-hairline">
                <div className="font-mono text-xs text-muted uppercase tracking-wider font-semibold">
                  Technologies Employed
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-graphite border border-hairline font-mono text-xs text-bone"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Link Rule: render ONLY if provided in content.js */}
              {selectedProject.githubUrl && (
                <div className="pt-4 border-t border-hairline">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded bg-signal text-bone font-mono text-xs font-semibold"
                  >
                    <span>View Repository</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

