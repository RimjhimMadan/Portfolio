import React, { useEffect, useState } from 'react';
import { useInView } from '../../hooks/useInView';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function MetricCounter({ targetValue, suffix = '', duration = 1600 }) {
  const [ref, inView] = useInView({ threshold: 0.3, once: true });
  const [count, setCount] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion) {
      setCount(targetValue);
      return;
    }

    let start = 0;
    const end = targetValue;
    const totalFrames = Math.round(duration / 16);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease-out cubic
      const current = Math.round(end * (1 - Math.pow(1 - progress, 3)));
      setCount(current);

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCount(end);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, targetValue, duration, reducedMotion]);

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {count}{suffix}
    </span>
  );
}

