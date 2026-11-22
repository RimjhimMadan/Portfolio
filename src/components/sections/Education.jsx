import React from 'react';
import { EDUCATION } from '../../data/content';
import { GraduationCap, BookOpen, School, Award } from 'lucide-react';

export default function Education() {
  const { college, schooling } = EDUCATION;

  return (
    <section
      id="stage-06"
      className="w-full py-24 px-6 md:px-12 lg:px-20 border-b border-hairline bg-ink"
      aria-label="Stage 06: Validate (Education)"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Stage Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-hairline pb-4 font-mono text-xs text-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-signal"></span>
            <span className="text-bone font-medium">STAGE 06 // VALIDATE</span>
          </div>
          <span className="text-muted text-[11px]">[ACADEMIC TRANSCRIPT & FOUNDATIONAL RIGOR]</span>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl text-bone">
              Education &amp; Academic Coursework
            </h2>
            <p className="text-muted text-sm font-mono mt-2">
              Transcript-style summary of undergraduate studies in Computer Science and primary coursework.
            </p>
          </div>
        </div>

        {/* Undergraduate Main Transcript Card */}
        <div className="p-6 sm:p-8 rounded-xl bg-graphite/40 border border-hairline flex flex-col gap-6 font-mono text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-hairline/60 pb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded bg-ink border border-hairline text-signal">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="text-muted text-[10px] tracking-wider uppercase font-semibold">
                  Undergraduate Degree
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-bone">
                  {college.degree}
                </h3>
                <div className="text-muted text-xs mt-1">
                  {college.institution} &bull; {college.period}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-ink border border-hairline text-right">
              <div className="text-verified font-bold text-xl">{college.sgpa}</div>
              <div className="text-muted text-[10px]">CUMULATIVE SGPA</div>
            </div>
          </div>

          {/* 5 Core Coursework Chips */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-muted text-xs uppercase tracking-wider font-semibold">
              <BookOpen className="w-3.5 h-3.5 text-signal" />
              <span>Core Coursework (5 Core Subjects)</span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {college.coursework.map((course) => (
                <div
                  key={course}
                  className="px-3 py-1.5 rounded bg-ink border border-hairline text-bone font-mono text-xs flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-signal"></span>
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Secondary Schooling Records */}
        <div className="flex flex-col gap-4">
          <div className="font-mono text-xs text-muted uppercase tracking-wider font-semibold flex items-center gap-2">
            <School className="w-4 h-4 text-signal" />
            <span>Pre-University Academic Records (CBSE)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {schooling.map((school) => (
              <div
                key={school.level}
                className="p-5 rounded-lg bg-graphite/30 border border-hairline flex items-center justify-between font-mono text-xs"
              >
                <div>
                  <div className="text-signal font-semibold text-xs">{school.level}</div>
                  <div className="text-bone font-medium text-sm mt-0.5">{school.institution}</div>
                  <div className="text-muted text-[10px] mt-0.5">Year of Completion: {school.year}</div>
                </div>

                <div className="p-3 rounded bg-ink border border-hairline text-right">
                  <div className="text-bone font-bold text-base">{school.score}</div>
                  <div className="text-muted text-[9px]">PERCENTAGE</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

