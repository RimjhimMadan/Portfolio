import React, { useEffect, useState } from 'react';

export default function ReticleCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [label, setLabel] = useState('SCAN');
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate for devices with fine pointer (mice, trackpads)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    setIsPointer(true);

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target.closest('[data-reticle]');
      if (target) {
        setLabel(target.getAttribute('data-reticle') || 'TARGET');
      } else if (e.target.closest('a, button, input, textarea')) {
        setLabel('INTERACT');
      } else {
        setLabel('INSPECT');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  if (!isPointer || !isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out select-none"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      aria-hidden="true"
    >
      {/* Outer Reticle Corners */}
      <div className="relative w-8 h-8">
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-signal"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-signal"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-signal"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-signal"></div>
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-signal rounded-full"></div>
      </div>
      
      {/* Reticle Tag */}
      <div className="absolute left-9 top-1/2 -translate-y-1/2 bg-graphite/90 border border-hairline px-1.5 py-0.5 rounded text-[9px] font-mono tracking-wider text-bone whitespace-nowrap">
        <span className="text-signal mr-1">&gt;</span>{label}
      </div>
    </div>
  );
}

