import React, { useState, useEffect } from 'react';
import { Camera, Crosshair, RefreshCw, AlertCircle } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function ViewfinderViz() {
  const [frameIndex, setFrameIndex] = useState(0);
  const [activeStage, setActiveStage] = useState(1);
  const reducedMotion = useReducedMotion();

  // Neutral geometric objects for automated detection simulation (NO weapon imagery)
  const neutralTargets = [
    { id: 1, type: "POLY_ALPHA", shape: "Diamond", x: "28%", y: "38%", w: "60px", h: "60px", confidence: "DETECTED" },
    { id: 2, type: "POLY_BETA", shape: "Prism", x: "65%", y: "52%", w: "80px", h: "50px", confidence: "DETECTED" },
    { id: 3, type: "POLY_GAMMA", shape: "Hexagon", x: "45%", y: "24%", w: "70px", h: "70px", confidence: "DETECTED" }
  ];

  const loopStages = [
    { code: "01", name: "CAPTURE", desc: "OpenCV frame ingestion" },
    { code: "02", name: "DETECT", desc: "YOLO tensor evaluation" },
    { code: "03", name: "BOX", desc: "Bounding coordinate calculation" },
    { code: "04", name: "FLAG", desc: "Automated event notification" }
  ];

  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % 1000);
      setActiveStage((prev) => (prev + 1) % 4);
    }, 1400);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <div className="w-full bg-graphite/60 border border-hairline rounded-lg p-5 md:p-6 font-mono text-xs flex flex-col gap-5">
      {/* Viewfinder Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-hairline pb-4">
        <div className="flex items-center gap-2">
          <Crosshair className="w-4 h-4 text-signal animate-spin-slow" />
          <span className="text-bone font-semibold tracking-wider text-sm">YOLO FRAME VIEWFINDER</span>
          <span className="text-muted text-[10px]">CV // FRAME-BY-FRAME INFERENCE</span>
        </div>
        <div className="px-2 py-0.5 rounded bg-ink border border-hairline text-[10px] text-muted">
          Illustrative visualization
        </div>
      </div>

      {/* Abstract Simulated Video Feed */}
      <div className="relative w-full h-56 md:h-64 bg-ink border border-hairline rounded overflow-hidden select-none flex items-center justify-center">
        {/* Optical Scanning Line */}
        {!reducedMotion && (
          <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-signal/70 shadow-[0_0_12px_rgba(255,91,46,0.8)] animate-[scan_3s_ease-in-out_infinite]" />
        )}

        {/* Viewfinder Reticle Grid Overlay */}
        <div className="absolute inset-0 border border-hairline/40 m-4 pointer-events-none">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-signal" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-signal" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-signal" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-signal" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 border border-hairline flex items-center justify-center">
            <div className="w-1 h-1 bg-signal rounded-full" />
          </div>
        </div>

        {/* Telemetry Timestamp */}
        <div className="absolute top-6 left-6 font-mono text-[9px] text-muted flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-verified"></span>
          <span>REC [FRAME_{frameIndex.toString().padStart(4, '0')}]</span>
          <span className="hidden sm:inline text-hairline">|</span>
          <span className="hidden sm:inline">OPENCV MATRIX: 1920x1080 &rarr; 640x640</span>
        </div>

        {/* Neutral Geometric Shapes with Snapped Bounding Boxes */}
        {neutralTargets.map((target) => (
          <div
            key={target.id}
            className="absolute border border-signal/80 bg-signal/10 transition-all duration-300 flex flex-col justify-between p-1"
            style={{
              left: target.x,
              top: target.y,
              width: target.w,
              height: target.h,
            }}
          >
            <div className="flex justify-between items-center text-[8px] font-mono text-signal bg-ink/90 px-1 py-0.5 border border-signal/40 -mt-3.5 -ml-1">
              <span>{target.type}</span>
              <span className="text-verified font-bold ml-1">{target.confidence}</span>
            </div>
            
            {/* Neutral geometric silhouette indicator */}
            <div className="w-full h-full flex items-center justify-center opacity-40">
              <div className="w-3 h-3 border border-bone rotate-45" />
            </div>

            <div className="text-[7px] text-bone/60 font-mono text-right">
              YOLO_BOX
            </div>
          </div>
        ))}
      </div>

      {/* Frame-by-frame loop diagram */}
      <div className="flex flex-col gap-2">
        <div className="text-[10px] text-muted tracking-wider uppercase font-semibold">
          Frame Processing Lifecycle (Continuous Loop)
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {loopStages.map((stage, idx) => {
            const isActive = activeStage === idx;
            return (
              <div
                key={stage.code}
                className={`p-2.5 rounded border transition-colors ${
                  isActive
                    ? 'bg-ink border-signal text-bone'
                    : 'bg-graphite/40 border-hairline text-muted'
                }`}
              >
                <div className="flex items-center justify-between text-[9px] mb-1">
                  <span className={isActive ? 'text-signal font-bold' : 'text-muted'}>
                    STAGE {stage.code}
                  </span>
                  <RefreshCw className={`w-2.5 h-2.5 ${isActive ? 'text-signal animate-spin' : 'text-muted/40'}`} />
                </div>
                <div className="font-semibold text-bone text-xs">{stage.name}</div>
                <div className="text-[9px] text-muted mt-0.5 truncate">{stage.desc}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Evaluated Metric Names Only (No invented values) */}
      <div className="pt-2 border-t border-hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <span className="text-muted text-[10px]">
          Model Benchmark Metrics Evaluated:
        </span>
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 rounded bg-graphite border border-hairline text-bone font-mono text-[10px]">
            PRECISION
          </span>
          <span className="px-2 py-1 rounded bg-graphite border border-hairline text-bone font-mono text-[10px]">
            RECALL
          </span>
          <span className="px-2 py-1 rounded bg-graphite border border-hairline text-verified font-mono text-[10px]">
            mAP (MEAN AVERAGE PRECISION)
          </span>
        </div>
      </div>
    </div>
  );
}

