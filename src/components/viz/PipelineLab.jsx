import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, Cpu, Layers, Server } from 'lucide-react';

export default function PipelineLab() {
  const [activeStep, setActiveStep] = useState(0);

  const sampleRawText = "BREAKING: Global climate research consortium validates new oceanic telemetry sensor dataset.";

  const pipelineSteps = [
    {
      step: "01",
      name: "CLEAN",
      label: "Text Preprocessing",
      input: sampleRawText,
      output: "breaking global climate research consortium validates new oceanic telemetry sensor dataset",
      explanation: "Case normalization, punctuation removal, stopword filtering, and whitespace normalization."
    },
    {
      step: "02",
      name: "TOKENIZE",
      label: "Lexical Segmentation",
      input: "breaking global climate research consortium validates new oceanic telemetry sensor dataset",
      output: '["breaking", "global", "climate", "research", "consortium", "validates", "oceanic", "sensor", "dataset"]',
      explanation: "Splitting normalized text stream into discrete unigrams and n-gram lexical units."
    },
    {
      step: "03",
      name: "VECTORIZE",
      label: "TF-IDF Matrix",
      input: "9 token unigrams",
      output: "sparse_matrix[1, 5000] : { (0, 142): 0.381, (0, 891): 0.442, (0, 2190): 0.512 ... }",
      explanation: "Term Frequency-Inverse Document Frequency feature weighting across vocabulary vocabulary space."
    },
    {
      step: "04",
      name: "CLASSIFY",
      label: "Inference Engine",
      input: "TF-IDF Feature Vector",
      output: "Predicted Label: REAL // Confidence verified (2-class decision boundary)",
      explanation: "Binary classification across 2 classes (Real vs Fake) utilizing Scikit-learn model evaluation."
    }
  ];

  return (
    <div className="w-full bg-graphite/60 border border-hairline rounded-lg p-5 md:p-6 font-mono text-xs flex flex-col gap-6">
      {/* Header and Caption */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-hairline pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-verified animate-ping"></span>
          <span className="text-bone font-semibold tracking-wider text-sm">NLP PIPELINE LAB</span>
          <span className="text-muted text-[10px]">v1.0 // FASTAPI + SCIKIT-LEARN</span>
        </div>
        <div className="px-2 py-0.5 rounded bg-ink border border-hairline text-[10px] text-muted">
          Illustrative visualization
        </div>
      </div>

      {/* 4-Step Interactive Stepper */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {pipelineSteps.map((step, idx) => {
          const isSelected = activeStep === idx;
          const isDone = activeStep > idx;
          return (
            <button
              key={step.step}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded border text-left transition-all ${
                isSelected
                  ? 'bg-ink border-signal text-bone shadow-sm'
                  : isDone
                  ? 'bg-graphite/80 border-verified/40 text-bone hover:border-verified'
                  : 'bg-graphite/40 border-hairline text-muted hover:border-hairline/80'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] mb-1">
                <span className={isSelected ? 'text-signal font-bold' : isDone ? 'text-verified' : 'text-muted'}>
                  STEP {step.step}
                </span>
                {isDone && <CheckCircle2 className="w-3 h-3 text-verified" />}
              </div>
              <div className="font-semibold text-xs tracking-wider">{step.name}</div>
              <div className="text-[10px] text-muted truncate mt-0.5">{step.label}</div>
            </button>
          );
        })}
      </div>

      {/* Active Step Terminal Output */}
      <div className="bg-ink border border-hairline rounded p-4 flex flex-col gap-3 font-mono text-[11px]">
        <div className="flex items-center justify-between text-muted text-[10px] border-b border-hairline/50 pb-2">
          <div className="flex items-center gap-2">
            <span className="text-signal">&gt;</span>
            <span className="text-bone">STAGE_INPUT [{pipelineSteps[activeStep].name}]</span>
          </div>
          <span className="text-[10px] text-muted">{pipelineSteps[activeStep].label}</span>
        </div>
        
        <div className="text-muted/80">
          <span className="text-bone/60">Input:</span> {pipelineSteps[activeStep].input}
        </div>
        
        <div className="bg-graphite/50 p-2.5 rounded border border-hairline/60 text-bone">
          <div className="text-signal text-[10px] mb-1">// Resulting State:</div>
          <code className="text-verified block overflow-x-auto whitespace-pre-wrap">
            {pipelineSteps[activeStep].output}
          </code>
        </div>
        
        <div className="text-muted text-[10px] pt-1">
          <span className="text-bone font-medium">Operation:</span> {pipelineSteps[activeStep].explanation}
        </div>
      </div>

      {/* Model Benchmark Matrix & 3-Layer Architecture */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        {/* Model Evaluation Benchmark Matrix */}
        <div className="p-4 rounded bg-ink/70 border border-hairline flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-bone text-[11px] font-semibold flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-signal" /> MODEL BENCHMARK MATRIX
            </span>
            <span className="text-verified font-bold text-xs">97% TEST ACCURACY</span>
          </div>
          <p className="text-[10px] text-muted">
            Compared 2 Scikit-learn algorithms on TF-IDF features across 4 standard classification metrics:
          </p>
          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div className="p-2 rounded bg-graphite/70 border border-hairline/70">
              <div className="text-bone font-medium mb-1">Model A</div>
              <div className="text-muted text-[11px]">Logistic Regression</div>
            </div>
            <div className="p-2 rounded bg-graphite/70 border border-hairline/70">
              <div className="text-bone font-medium mb-1">Model B</div>
              <div className="text-muted text-[11px]">Passive Aggressive</div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-1 text-center text-[9px] pt-1 border-t border-hairline/60">
            <div className="p-1 bg-graphite/40 border border-hairline/40 rounded text-bone font-mono">ACCURACY</div>
            <div className="p-1 bg-graphite/40 border border-hairline/40 rounded text-bone font-mono">PRECISION</div>
            <div className="p-1 bg-graphite/40 border border-hairline/40 rounded text-bone font-mono">RECALL</div>
            <div className="p-1 bg-graphite/40 border border-hairline/40 rounded text-bone font-mono">F1-SCORE</div>
          </div>
          <div className="text-[9px] text-muted italic">
            * Selected top performer based on 4-metric evaluation benchmark.
          </div>
        </div>

        {/* 3-Layer Architecture Topology */}
        <div className="p-4 rounded bg-ink/70 border border-hairline flex flex-col gap-3">
          <span className="text-bone text-[11px] font-semibold flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-verified" /> 3-LAYER ARCHITECTURE
          </span>
          <p className="text-[10px] text-muted">
            End-to-end integration across a 7-technology stack:
          </p>
          <div className="flex flex-col gap-2 text-[10px]">
            <div className="flex items-center justify-between p-2 rounded bg-graphite/70 border border-hairline/70">
              <div className="flex items-center gap-2">
                <span className="text-signal font-bold">L1</span>
                <span className="text-bone">ML Model Core</span>
              </div>
              <span className="text-muted text-[9px]">Python, Scikit-learn, TF-IDF, NLP</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-graphite/70 border border-hairline/70">
              <div className="flex items-center gap-2">
                <span className="text-signal font-bold">L2</span>
                <span className="text-bone">Prediction API</span>
              </div>
              <span className="text-muted text-[9px]">1 FastAPI RESTful Endpoint</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-graphite/70 border border-hairline/70">
              <div className="flex items-center gap-2">
                <span className="text-signal font-bold">L3</span>
                <span className="text-bone">Client Interface</span>
              </div>
              <span className="text-muted text-[9px]">React.js + Vite Web Application</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

