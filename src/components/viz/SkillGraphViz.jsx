import React, { useState } from 'react';
import { Network, Award, CheckCircle2, GitMerge } from 'lucide-react';

export default function SkillGraphViz() {
  const [selectedWorkstream, setSelectedWorkstream] = useState('frontend');

  const curriculumNodes = [
    { id: 'c1', label: 'Data Structures & Algorithms', match: 'Core Engineering' },
    { id: 'c2', label: 'Database Systems', match: 'Data Architecture' },
    { id: 'c3', label: 'Software Engineering', match: 'Agile Delivery' },
  ];

  const industryNodes = [
    { id: 'i1', label: 'Distributed Systems', domain: 'Cloud & Scale' },
    { id: 'i2', label: 'Modern Full Stack (MERN)', domain: 'Production Web' },
    { id: 'i3', label: 'Applied AI / ML Integration', domain: 'Intelligent Systems' },
  ];

  const workstreams = [
    {
      id: 'frontend',
      name: "Rimjhim's Contribution",
      role: '6+ React Views & UI',
      desc: 'Architected 6+ responsive React screens with Tailwind CSS and achieved 100% integration with teammate APIs.',
      badge: '100% Integrated',
      color: 'border-signal text-signal'
    },
    {
      id: 'backend',
      name: 'Workstream 01: Backend',
      role: 'RESTful API Services',
      desc: 'Teammate-built Node & Express microservices orchestrating business logic and endpoint contracts.',
      badge: 'Active Workstream',
      color: 'border-bone/60 text-bone'
    },
    {
      id: 'database',
      name: 'Workstream 02: Database',
      role: 'Schema & Storage',
      desc: 'Relational & document data models storing syllabus records, skill taxonomies, and user profiles.',
      badge: 'Active Workstream',
      color: 'border-bone/60 text-bone'
    },
    {
      id: 'aiml',
      name: 'Workstream 03: AI/ML',
      role: 'Skill Ontology Matcher',
      desc: 'Similarity matching engine mapping university curricula directly to real-time industry requirement taxonomies.',
      badge: 'Active Workstream',
      color: 'border-verified text-verified'
    }
  ];

  return (
    <div className="w-full bg-graphite/60 border border-hairline rounded-lg p-5 md:p-6 font-mono text-xs flex flex-col gap-6">
      {/* Header and Smart India Hackathon Badge */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-hairline pb-4">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-signal" />
          <span className="text-bone font-semibold tracking-wider text-sm">SYNC-SKILL ONTOLOGY MAP</span>
          <span className="px-2 py-0.5 rounded bg-signal/10 border border-signal/40 text-signal font-semibold text-[10px]">
            SMART INDIA HACKATHON
          </span>
        </div>
        <div className="px-2 py-0.5 rounded bg-ink border border-hairline text-[10px] text-muted">
          Illustrative visualization
        </div>
      </div>

      {/* Curriculum -> Industry Mapping Graph */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-ink border border-hairline rounded p-4 relative">
        {/* Left Column: Academic Curriculum */}
        <div className="flex flex-col gap-3">
          <div className="text-[10px] text-muted uppercase tracking-wider font-semibold border-b border-hairline/60 pb-1.5 flex items-center justify-between">
            <span>Academic Curriculum Nodes</span>
            <span className="text-bone/60">[Input]</span>
          </div>
          {curriculumNodes.map((node) => (
            <div key={node.id} className="p-2.5 rounded bg-graphite/70 border border-hairline flex items-center justify-between">
              <div>
                <div className="text-bone font-medium text-xs">{node.label}</div>
                <div className="text-[10px] text-muted">{node.match}</div>
              </div>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-ink border border-hairline text-muted">Syllabus</span>
            </div>
          ))}
        </div>

        {/* Right Column: Industry Skill Requirements */}
        <div className="flex flex-col gap-3">
          <div className="text-[10px] text-muted uppercase tracking-wider font-semibold border-b border-hairline/60 pb-1.5 flex items-center justify-between">
            <span>Industry Skill Nodes</span>
            <span className="text-verified">[Matched]</span>
          </div>
          {industryNodes.map((node) => (
            <div key={node.id} className="p-2.5 rounded bg-graphite/70 border border-hairline flex items-center justify-between">
              <div>
                <div className="text-bone font-medium text-xs">{node.label}</div>
                <div className="text-[10px] text-verified">{node.domain}</div>
              </div>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-verified/10 border border-verified/40 text-verified">Required</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3 Workstreams + Rimjhim's Contribution Selector */}
      <div className="flex flex-col gap-3">
        <div className="text-[10px] text-muted tracking-wider uppercase font-semibold">
          Cross-Functional Coordination (3 Workstreams + Frontend Delivery)
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {workstreams.map((ws) => {
            const isSelected = selectedWorkstream === ws.id;
            return (
              <button
                key={ws.id}
                type="button"
                onClick={() => setSelectedWorkstream(ws.id)}
                className={`p-3 rounded border text-left transition-all ${
                  isSelected
                    ? 'bg-ink border-signal shadow-sm'
                    : 'bg-graphite/40 border-hairline hover:border-hairline/80'
                }`}
              >
                <div className="text-[9px] text-muted mb-1 flex items-center justify-between">
                  <span>{ws.badge}</span>
                  {ws.id === 'frontend' && <CheckCircle2 className="w-3 h-3 text-signal" />}
                </div>
                <div className="text-bone font-semibold text-xs leading-tight">{ws.name}</div>
                <div className="text-muted text-[10px] mt-0.5">{ws.role}</div>
              </button>
            );
          })}
        </div>

        {/* Detailed Workstream View */}
        {(() => {
          const activeWs = workstreams.find((w) => w.id === selectedWorkstream) || workstreams[0];
          return (
            <div className="p-3.5 rounded bg-ink border border-hairline flex items-start gap-3">
              <GitMerge className="w-4 h-4 text-signal shrink-0 mt-0.5" />
              <div>
                <div className="text-bone font-medium text-xs mb-1">
                  {activeWs.name} &mdash; <span className="text-signal">{activeWs.role}</span>
                </div>
                <p className="text-[11px] text-muted leading-relaxed">
                  {activeWs.desc}
                </p>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}

