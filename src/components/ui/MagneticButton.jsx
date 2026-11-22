import React from 'react';
import { useMagnetic } from '../../hooks/useMagnetic';

export default function MagneticButton({ children, className = '', onClick, href, download, target, rel, strength = 0.25, ...props }) {
  const [ref, position] = useMagnetic(strength);

  const style = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: position.x === 0 && position.y === 0 ? 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
  };

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        download={download}
        target={target}
        rel={rel}
        style={style}
        className={`inline-block ${className}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type="button"
      style={style}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

