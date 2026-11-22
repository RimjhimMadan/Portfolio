import React from 'react';
import { PERSONAL_INFO } from '../../data/content';
import { Cpu, GraduationCap, ShieldCheck, Layers } from 'lucide-react';

export default function About() {
  return (
    <section
      id="stage-01"
      className="w-full py-24 px-6 md:px-12 lg:px-20 border-b border-hairline bg-ink radial-spot-signal"
      aria-label="Stage 01: Clean (About)"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Stage Header */}
        <div className="flex items-center justify-between border-b border-hairline pb-4 font-mono text-xs text-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-signal"></span>
            <span className="text-bone font-medium">STAGE 01 // CLEAN</span>
          </div>
          <span className="text-muted text-[11px]">[SYSTEM CONTEXT & IDENTITY]</span>
        </div>

        {/* 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Pull-quote & Background Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl text-bone leading-tight">
              &ldquo;I approach software engineering as an end-to-end pipeline: from clean data modeling to robust backend APIs and responsive user interfaces.&rdquo;
            </blockquote>

            <p className="text-base sm:text-lg text-muted font-sans leading-relaxed">
              {PERSONAL_INFO.aboutStory}
            </p>

            {/* Academic Snapshot Card */}
            <div className="p-6 rounded-lg bg-graphite/50 border border-hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded bg-ink border border-hairline text-signal">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-bone font-semibold text-sm">{PERSONAL_INFO.institution}</div>
                  <div className="text-muted text-[11px]">{PERSONAL_INFO.degree} &bull; {PERSONAL_INFO.period}</div>
                </div>
              </div>
              <div className="text-right sm:border-l sm:border-hairline sm:pl-6">
                <div className="text-verified font-bold text-base">{PERSONAL_INFO.sgpa}</div>
                <div className="text-muted text-[10px]">CUMULATIVE SGPA</div>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Interests & System Metrics */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 rounded-lg bg-graphite/40 border border-hairline flex flex-col gap-4 font-mono text-xs">
              <div className="flex items-center gap-2 text-bone font-semibold tracking-wider text-sm border-b border-hairline/60 pb-3">
                <Cpu className="w-4 h-4 text-signal" />
                <span>CORE TECHNICAL DOMAINS</span>
              </div>

              <div className="flex flex-col gap-3">
                <div className="p-3 rounded bg-ink border border-hairline">
                  <div className="text-bone font-medium text-xs mb-1">01. Machine Learning & Computer Vision</div>
                  <p className="text-[11px] text-muted leading-relaxed font-sans">
                    Hands-on model development in YOLO, OpenCV, Scikit-learn, and NLP pipelines evaluated rigorously with standard metrics.
                  </p>
                </div>

                <div className="p-3 rounded bg-ink border border-hairline">
                  <div className="text-bone font-medium text-xs mb-1">02. Full Stack Web Engineering</div>
                  <p className="text-[11px] text-muted leading-relaxed font-sans">
                    Constructing performant web applications with React, Node.js, Express, FastAPI, and Tailwind CSS.
                  </p>
                </div>

                <div className="p-3 rounded bg-ink border border-hairline">
                  <div className="text-bone font-medium text-xs mb-1">03. Systems & Engineering Rigor</div>
                  <p className="text-[11px] text-muted leading-relaxed font-sans">
                    Solid grounding in Data Structures, OOP, DBMS, Operating Systems, and 4-stage GitHub pull-request review lifecycles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How I Build & Learn Principles Strip */}
        <div className="pt-6 border-t border-hairline flex flex-col gap-6">
          <div className="font-mono text-xs text-muted flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-signal" />
            <span className="font-semibold tracking-wider uppercase text-bone">
              Engineering Principles // How I Build and Learn
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PERSONAL_INFO.principles.map((pr, idx) => (
              <div
                key={pr.title}
                className="p-5 rounded-lg bg-graphite/30 border border-hairline flex flex-col gap-2 font-mono text-xs"
              >
                <div className="flex items-center justify-between text-muted text-[10px]">
                  <span>PRINCIPLE 0{idx + 1}</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-verified" />
                </div>
                <div className="text-bone font-semibold text-sm">{pr.title}</div>
                <p className="text-muted text-[11px] font-sans leading-relaxed pt-1">
                  {pr.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

