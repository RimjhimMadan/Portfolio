import React, { useState } from 'react';
import { EXPERIENCE } from '../../data/content';
import { GitPullRequest, GitBranch, GitCommit, CheckCircle2, ShieldCheck, Terminal, Calendar } from 'lucide-react';

export default function Experience() {
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const exp = EXPERIENCE[0];

  const weeks = Array.from({ length: exp.weeksCount }, (_, i) => ({
    weekNum: i + 1,
    status: 'ACTIVE_ENGAGEMENT'
  }));

  const lifecycleStages = [
    {
      code: 'STAGE 01',
      title: 'Branching',
      icon: GitBranch,
      desc: 'Creating isolated topic branches from main, adhering to strict repository branch naming conventions and issue-driven scopes.'
    },
    {
      code: 'STAGE 02',
      title: 'Committing',
      icon: GitCommit,
      desc: 'Formulating atomic, descriptive commits with meaningful diff boundaries according to team commit standards.'
    },
    {
      code: 'STAGE 03',
      title: 'Code Review',
      icon: ShieldCheck,
      desc: 'Engaging in thorough peer code reviews, evaluating logic correctness, security considerations, and project coding guidelines.'
    },
    {
      code: 'STAGE 04',
      title: 'Approval & Merge',
      icon: CheckCircle2,
      desc: 'Securing required peer approvals, resolving comments, verifying passing CI pipelines, and cleanly landing pull requests.'
    }
  ];

  return (
    <section
      id="stage-04"
      className="w-full py-24 px-6 md:px-12 lg:px-20 border-b border-hairline bg-ink"
      aria-label="Stage 04: Classify (Experience & Open Source)"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Stage Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-hairline pb-4 font-mono text-xs text-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-signal"></span>
            <span className="text-bone font-medium">STAGE 04 // CLASSIFY</span>
          </div>
          <span className="text-muted text-[11px]">[DISTRIBUTED COLLABORATION & PR LIFECYCLE]</span>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl text-bone">
              Experience &amp; Open Source
            </h2>
            <p className="text-muted text-sm font-mono mt-2">
              Collaborative engineering in a distributed team environment adhering to strict Git version control and code quality standards.
            </p>
          </div>
          <div className="px-3 py-1.5 rounded bg-graphite border border-hairline font-mono text-xs text-bone flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-signal" />
            <span>DAILY GIT / GITHUB OPERATIONS</span>
          </div>
        </div>

        {/* Main Experience Card */}
        <div className="p-6 sm:p-8 rounded-xl bg-graphite/40 border border-hairline flex flex-col gap-8">
          {/* Header Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-hairline/60 pb-6">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="px-2 py-0.5 rounded bg-signal/10 border border-signal/40 text-signal font-semibold">
                  OPEN SOURCE
                </span>
                <span className="text-muted">&bull;</span>
                <span className="text-bone font-mono">{exp.organization}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-bone">
                {exp.role}
              </h3>
              <div className="text-muted text-xs font-mono flex items-center gap-2">
                <span>{exp.location}</span>
                <span>&bull;</span>
                <span className="text-bone flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-signal" /> {exp.period}
                </span>
                <span>({exp.duration})</span>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-ink border border-hairline font-mono text-xs text-right">
              <div className="text-verified font-bold text-base">12+ WEEKS</div>
              <div className="text-muted text-[10px]">CONTINUOUS TENURE</div>
            </div>
          </div>

          {/* Grid Layout: 13-Week Matrix + 4-Stage Stepper */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: 13-Week Aggregate Engagement Grid */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="font-mono text-xs text-muted uppercase tracking-wider font-semibold flex items-center justify-between">
                <span>13-Week Engagement Grid</span>
                <span className="text-[10px] text-bone/60">[Feb &ndash; Apr 2026]</span>
              </div>

              <div className="p-4 rounded-lg bg-ink border border-hairline flex flex-col gap-3 font-mono text-xs">
                <p className="text-[11px] text-muted leading-relaxed font-sans">
                  Visual representation of the 12+ week (3-month) distributed open-source collaboration period as an aggregate timeline:
                </p>

                {/* 13-Column Grid */}
                <div className="grid grid-cols-7 sm:grid-cols-13 gap-1.5 pt-2">
                  {weeks.map((w) => (
                    <div
                      key={w.weekNum}
                      title={`Week ${w.weekNum}: Continuous Open Source Contributor Engagement`}
                      className="aspect-square rounded-sm bg-signal/30 hover:bg-signal border border-signal/60 transition-colors flex items-center justify-center text-[9px] font-mono text-bone select-none"
                    >
                      {w.weekNum}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[10px] text-muted pt-2 border-t border-hairline/60">
                  <span className="italic">* Aggregate 12+ week representation</span>
                  <span className="text-verified font-medium">100% Active Period</span>
                </div>
              </div>

              {/* Verified Contribution Bullets */}
              <div className="flex flex-col gap-2 pt-2">
                <div className="font-mono text-[10px] text-muted uppercase tracking-wider font-semibold">
                  Verified Responsibilities:
                </div>
                <ul className="flex flex-col gap-2 font-mono text-xs text-muted">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-signal font-bold">&gt;</span>
                      <span className="font-sans text-[12px] text-bone/90">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Interactive 4-Stage PR Lifecycle Stepper */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="font-mono text-xs text-muted uppercase tracking-wider font-semibold flex items-center justify-between">
                <span>4-Stage Pull Request Workflow</span>
                <span className="text-[10px] text-signal font-medium">Interactive Stepper</span>
              </div>

              {/* Stepper Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {lifecycleStages.map((stg, idx) => {
                  const isSelected = activeStageIdx === idx;
                  const Icon = stg.icon;
                  return (
                    <button
                      key={stg.code}
                      type="button"
                      onClick={() => setActiveStageIdx(idx)}
                      className={`p-3 rounded-lg border text-left font-mono transition-all ${
                        isSelected
                          ? 'bg-ink border-signal text-bone'
                          : 'bg-graphite/40 border-hairline text-muted hover:border-hairline/80'
                      }`}
                    >
                      <div className="text-[10px] text-muted mb-1 flex items-center justify-between">
                        <span className={isSelected ? 'text-signal font-bold' : ''}>{stg.code}</span>
                        <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-signal' : 'text-muted'}`} />
                      </div>
                      <div className="font-semibold text-xs text-bone">{stg.title}</div>
                    </button>
                  );
                })}
              </div>

              {/* Active Stage Detail Panel */}
              <div className="p-5 rounded-lg bg-ink border border-hairline flex flex-col gap-3 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-hairline/60 pb-2">
                  <div className="flex items-center gap-2">
                    <GitPullRequest className="w-4 h-4 text-signal" />
                    <span className="text-bone font-semibold text-sm">
                      {lifecycleStages[activeStageIdx].code} // {lifecycleStages[activeStageIdx].title}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-graphite border border-hairline text-[10px] text-verified">
                    ENGINEERING STANDARD
                  </span>
                </div>

                <p className="text-muted font-sans text-sm leading-relaxed">
                  {lifecycleStages[activeStageIdx].desc}
                </p>

                <div className="pt-2 border-t border-hairline/60 text-[10px] text-muted flex items-center justify-between">
                  <span>Standard: Conventional Commits &amp; Peer Quality Protection</span>
                  <span className="text-bone font-mono">Stage {activeStageIdx + 1} of 4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

