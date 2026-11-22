import React from 'react';

export default function SkipLink() {
  return (
    <a
      href="#stage-00"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-signal text-bone font-mono text-xs uppercase tracking-widest border border-bone rounded focus:outline-none focus:ring-2 focus:ring-bone"
    >
      Skip to content [Enter]
    </a>
  );
}

