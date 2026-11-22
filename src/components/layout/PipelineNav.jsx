import React from 'react';
import { STAGES } from '../../data/content';

export default function PipelineNav({ activeSection = 'stage-00', scrollProgress = 0 }) {
  return (
    <aside
      className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-30 select-none pointer-events-auto"
      aria-label="Pipeline Scroll Progress"
    >
      <div className="relative flex flex-col items-center py-4">
        {/* Continuous Track Line */}
        <div className="absolute top-2 bottom-2 left-1/2 -translate-x-1/2 w-px bg-hairline">
          {/* Scroll Progress Active Fill */}
          <div
            className="w-full bg-signal transition-all duration-150 ease-out origin-top"
            style={{ height: `${Math.round(scrollProgress * 100)}%` }}
          />
        </div>

        {/* Stage Nodes */}
        <div className="flex flex-col gap-6 relative z-10">
          {STAGES.map((stage) => {
            const isActive = activeSection === stage.id;
            return (
              <a
                key={stage.id}
                href={`#${stage.id}`}
                data-reticle={`STAGE ${stage.code}`}
                aria-label={`Jump to Stage ${stage.code}: ${stage.name}`}
                className="group flex items-center gap-3 relative py-1 focus:outline-none"
              >
                {/* Node indicator */}
                <div
                  className={`w-3 h-3 rounded-full flex items-center justify-center transition-all duration-300 border ${
                    isActive
                      ? 'bg-signal border-signal scale-125 shadow-[0_0_8px_rgba(255,91,46,0.6)]'
                      : 'bg-graphite border-hairline group-hover:border-bone/60 group-hover:scale-110'
                  }`}
                >
                  <div
                    className={`w-1 h-1 rounded-full ${
                      isActive ? 'bg-bone' : 'bg-transparent'
                    }`}
                  />
                </div>

                {/* Floating tooltip on hover/focus */}
                <div
                  className={`absolute left-6 pl-2 whitespace-nowrap font-mono text-[10px] tracking-widest transition-all duration-200 pointer-events-none ${
                    isActive
                      ? 'opacity-100 translate-x-0 text-signal font-semibold'
                      : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-muted'
                  }`}
                >
                  <span className="text-bone/60">{stage.code} //</span> {stage.name}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

