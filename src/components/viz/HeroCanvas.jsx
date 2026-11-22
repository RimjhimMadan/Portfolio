import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function HeroCanvas() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let isVisible = true;
    let width = 0;
    let height = 0;

    // Tokens to drift in the background
    const tokenWords = [
      'TF-IDF', 'YOLO', 'FastAPI', 'tokenize()', 'vectorize()',
      'MERN', 'REST_API', 'classify()', 'precision', 'recall',
      'mAP', 'PassiveAggressive', 'LogisticRegression', 'OpenCV',
      '97%_ACC', 'Docker', '8.1_SGPA', 'git_pr_review', 'NSQF_L5'
    ];

    const tokens = [];
    const numTokens = 24;

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 90,
      isAuto: true,
      angle: 0
    };

    // Detection targets (neutral bounding targets)
    const targets = [
      { label: 'ROLE // ENGINEER', x: 0.2, y: 0.35, w: 140, h: 44, color: '#5CE1C8' },
      { label: 'SYSTEM // ML PIPELINE', x: 0.7, y: 0.45, w: 180, h: 48, color: '#FF5B2E' },
      { label: 'STACK // FULL STACK', x: 0.45, y: 0.75, w: 160, h: 40, color: '#E8E6E1' },
    ];

    const handleResize = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      width = rect.width;
      height = rect.height;

      // Cap DPR at 2
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // Re-initialize drifting tokens
      tokens.length = 0;
      for (let i = 0; i < numTokens; i++) {
        tokens.push({
          text: tokenWords[i % tokenWords.length],
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: -0.2 - Math.random() * 0.4,
          size: Math.floor(Math.random() * 3) + 10,
          opacity: 0.08 + Math.random() * 0.12,
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Pause when off-screen
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isAuto = false;
    };

    const handlePointerLeave = () => {
      mouse.isAuto = true;
    };

    window.addEventListener('mousemove', handlePointerMove);
    canvas.addEventListener('mouseleave', handlePointerLeave);

    // Render loop
    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Mouse position smoothing & autonomous scanning fallback
      if (mouse.isAuto) {
        mouse.angle += 0.015;
        mouse.x = width * 0.5 + Math.cos(mouse.angle) * (width * 0.28);
        mouse.y = height * 0.5 + Math.sin(mouse.angle * 1.5) * (height * 0.2);
      } else {
        mouse.x += (mouse.targetX - mouse.x) * 0.1;
        mouse.y += (mouse.targetY - mouse.y) * 0.1;
      }

      // Draw subtle grid dots
      ctx.fillStyle = '#232A33';
      const step = 48;
      for (let x = step / 2; x < width; x += step) {
        for (let y = step / 2; y < height; y += step) {
          ctx.fillRect(x, y, 1, 1);
        }
      }

      // Draw drifting tokens
      ctx.font = '11px "JetBrains Mono", monospace';
      tokens.forEach((t) => {
        if (!reducedMotion) {
          t.x += t.vx;
          t.y += t.vy;
          if (t.y < -20) {
            t.y = height + 20;
            t.x = Math.random() * width;
          }
          if (t.x < -40) t.x = width + 40;
          if (t.x > width + 40) t.x = -40;
        }

        ctx.fillStyle = `rgba(154, 161, 171, ${t.opacity})`;
        ctx.fillText(t.text, t.x, t.y);
      });

      // Draw Bounding Reticle Targets
      targets.forEach((tgt) => {
        const tx = tgt.x * width;
        const ty = tgt.y * height;
        const dist = Math.hypot(mouse.x - tx, mouse.y - ty);
        const isNear = dist < 160;

        // Hairline bounding box
        ctx.strokeStyle = isNear ? tgt.color : 'rgba(35, 42, 51, 0.6)';
        ctx.lineWidth = isNear ? 1.5 : 1;
        ctx.strokeRect(tx - tgt.w / 2, ty - tgt.h / 2, tgt.w, tgt.h);

        // Corner accents
        const cornerLen = 6;
        ctx.strokeStyle = tgt.color;
        // Top-left
        ctx.beginPath();
        ctx.moveTo(tx - tgt.w / 2, ty - tgt.h / 2 + cornerLen);
        ctx.lineTo(tx - tgt.w / 2, ty - tgt.h / 2);
        ctx.lineTo(tx - tgt.w / 2 + cornerLen, ty - tgt.h / 2);
        ctx.stroke();

        // Bottom-right
        ctx.beginPath();
        ctx.moveTo(tx + tgt.w / 2 - cornerLen, ty + tgt.h / 2);
        ctx.lineTo(tx + tgt.w / 2, ty + tgt.h / 2);
        ctx.lineTo(tx + tgt.w / 2, ty + tgt.h / 2 - cornerLen);
        ctx.stroke();

        // Bounding tag
        ctx.font = '9px "JetBrains Mono", monospace';
        ctx.fillStyle = isNear ? tgt.color : 'rgba(154, 161, 171, 0.5)';
        ctx.fillText(tgt.label, tx - tgt.w / 2, ty - tgt.h / 2 - 4);
      });

      // Draw Cursor Reticle
      if (mouse.x > 0 && mouse.y > 0) {
        ctx.strokeStyle = 'rgba(255, 91, 46, 0.4)';
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);

        // Horizontal line
        ctx.beginPath();
        ctx.moveTo(0, mouse.y);
        ctx.lineTo(width, mouse.y);
        ctx.stroke();

        // Vertical line
        ctx.beginPath();
        ctx.moveTo(mouse.x, 0);
        ctx.lineTo(mouse.x, height);
        ctx.stroke();

        ctx.setLineDash([]);

        // Center reticle ring
        ctx.strokeStyle = '#FF5B2E';
        ctx.strokeRect(mouse.x - 14, mouse.y - 14, 28, 28);
        ctx.fillStyle = '#FF5B2E';
        ctx.fillRect(mouse.x - 1.5, mouse.y - 1.5, 3, 3);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      canvas.removeEventListener('mouseleave', handlePointerLeave);
      observer.disconnect();
    };
  }, [reducedMotion]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}

