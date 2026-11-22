import React from 'react';
import { PERSONAL_INFO } from '../../data/content';
import { Terminal, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-hairline bg-ink py-12 px-6 md:px-12 text-muted font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-bone font-medium">
            <Terminal className="w-4 h-4 text-signal" />
            <span>PIPELINE EXECUTION LOG // COMPLETE</span>
          </div>
          <p className="text-[11px] text-muted max-w-md">
            Continuous engineering pipeline: Raw Signal &rarr; Clean &rarr; Tokenize &rarr; Vectorize &rarr; Classify &rarr; Ship.
          </p>
          <div className="flex items-center gap-2 text-[10px] text-verified pt-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>100% Fact-Checked Against Official Resume Record</span>
          </div>
        </div>

        <div className="flex flex-col md:items-end gap-3 text-xs">
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-signal transition-colors inline-flex items-center gap-1"
            >
              GitHub <ArrowUpRight className="w-3 h-3" />
            </a>
            <span className="text-hairline">|</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-signal transition-colors inline-flex items-center gap-1"
            >
              LinkedIn <ArrowUpRight className="w-3 h-3" />
            </a>
            <span className="text-hairline">|</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-signal transition-colors inline-flex items-center gap-1"
            >
              Email <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
          <div className="text-[11px] text-muted/60">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Designed & built with editorial-technical rigor.
          </div>
        </div>
      </div>
    </footer>
  );
}

