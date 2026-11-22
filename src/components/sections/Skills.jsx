import React, { useState } from 'react';
import { SKILL_CATEGORIES, PROJECTS } from '../../data/content';
import { Layers, Check, Info } from 'lucide-react';

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);

  // Derive matching projects for the active skill
  const matchedProjects = activeSkill
    ? PROJECTS.filter((proj) =>
        proj.stack.some(
          (tech) =>
            tech.toLowerCase().includes(activeSkill.toLowerCase()) ||
            activeSkill.toLowerCase().includes(tech.toLowerCase())
        )
      )
    : [];

  return (
    <section
      id="stage-02"
      className="w-full py-24 px-6 md:px-12 lg:px-20 border-b border-hairline bg-ink"
      aria-label="Stage 02: Tokenize (Technical Expertise)"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Stage Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-hairline pb-4 font-mono text-xs text-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-signal"></span>
            <span className="text-bone font-medium">STAGE 02 // TOKENIZE</span>
          </div>
          <span className="text-muted text-[11px]">[TECHNICAL STACK MAP &bull; 6 CATEGORIES]</span>
        </div>

        {/* Section Heading & Interactive Cross-Highlight Prompt */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl text-bone">
              Technical Expertise
            </h2>
            <p className="text-muted text-sm font-mono mt-2">
              System tokens categorized across 6 architectural domains. Hover or focus any token to highlight matching project pipelines.
            </p>
          </div>

          {/* Active Highlight Info Pill */}
          <div className="p-3 rounded bg-graphite border border-hairline font-mono text-xs flex items-center gap-2 min-h-[44px]">
            <Info className="w-3.5 h-3.5 text-signal shrink-0" />
            {activeSkill ? (
              <span className="text-bone">
                Token <span className="text-signal font-semibold">[{activeSkill}]</span> active in{' '}
                <span className="text-verified font-bold">{matchedProjects.length}</span> project(s)
              </span>
            ) : (
              <span className="text-muted">Hover/Focus a skill token to inspect pipeline linkage</span>
            )}
          </div>
        </div>

        {/* 6-Zone Stack Map Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.category}
              className="p-5 rounded-lg bg-graphite/40 border border-hairline flex flex-col gap-4 font-mono"
            >
              <div className="flex items-center justify-between text-xs border-b border-hairline/60 pb-2.5">
                <span className="text-bone font-semibold tracking-wider text-xs flex items-center gap-2">
                  <span className="text-signal text-[10px]">0{idx + 1}.</span> {cat.category}
                </span>
                <span className="text-[10px] text-muted">{cat.skills.length} tokens</span>
              </div>

              {/* Skills Tokens */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => {
                  const isHovered = activeSkill === skill;
                  return (
                    <button
                      key={skill}
                      type="button"
                      onMouseEnter={() => setActiveSkill(skill)}
                      onMouseLeave={() => setActiveSkill(null)}
                      onFocus={() => setActiveSkill(skill)}
                      onBlur={() => setActiveSkill(null)}
                      data-reticle={skill.toUpperCase()}
                      className={`px-2.5 py-1.5 rounded font-mono text-xs transition-all text-left focus:outline-none focus:ring-1 focus:ring-signal ${
                        isHovered
                          ? 'bg-signal text-bone font-semibold scale-105 shadow-sm'
                          : 'bg-ink border border-hairline text-bone hover:border-signal/70'
                      }`}
                    >
                      {skill}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Project Match Strip (when a skill is active) */}
        {activeSkill && matchedProjects.length > 0 && (
          <div className="p-4 rounded-lg bg-graphite/80 border border-signal/50 flex flex-col gap-2 font-mono text-xs animate-fade-in">
            <div className="text-signal font-semibold text-xs flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" />
              <span>PROJECT IMPLEMENTATION TRACE:</span>
            </div>
            <div className="flex flex-wrap gap-3 pt-1">
              {matchedProjects.map((proj) => (
                <a
                  key={proj.id}
                  href={`#${proj.id}`}
                  className="px-3 py-1 rounded bg-ink border border-hairline hover:border-signal text-bone hover:text-signal text-[11px] transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-signal"></span>
                  <span>{proj.title}</span>
                  <span className="text-muted text-[10px]">({proj.date})</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

