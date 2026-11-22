import React from 'react';
import { METRICS_LEDGER, CERTIFICATIONS, LEADERSHIP } from '../../data/content';
import MetricCounter from '../ui/MetricCounter';
import { Award, ShieldCheck, CheckCircle2, Users, Trophy } from 'lucide-react';

export default function Achievements() {
  return (
    <section
      id="stage-05"
      className="w-full py-24 px-6 md:px-12 lg:px-20 border-b border-hairline bg-ink"
      aria-label="Stage 05: Benchmark (Achievements & Certifications)"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Stage Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-hairline pb-4 font-mono text-xs text-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-signal"></span>
            <span className="text-bone font-medium">STAGE 05 // BENCHMARK</span>
          </div>
          <span className="text-muted text-[11px]">[QUANTIFIED METRICS & FORMAL CREDENTIALS]</span>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl text-bone">
              Metrics &amp; Credentials
            </h2>
            <p className="text-muted text-sm font-mono mt-2">
              Empirically verified benchmarks, accredited certifications, and campus community leadership.
            </p>
          </div>
        </div>

        {/* Metrics Ledger with Animated Counters */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {METRICS_LEDGER.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg bg-graphite/40 border border-hairline flex flex-col justify-between font-mono hover:border-signal/50 transition-colors"
            >
              <div className="text-[10px] text-muted uppercase tracking-wider mb-2">
                METRIC 0{idx + 1}
              </div>
              <div>
                <div className="font-serif text-3xl sm:text-4xl text-bone font-normal leading-none mb-1">
                  <MetricCounter targetValue={item.value} suffix={item.suffix} />
                </div>
                <div className="text-signal font-semibold text-xs leading-tight">
                  {item.label}
                </div>
              </div>
              <div className="text-[9px] text-muted mt-2 border-t border-hairline/60 pt-1.5 truncate">
                {item.context}
              </div>
            </div>
          ))}
        </div>

        {/* Formal Certifications Grid */}
        <div className="flex flex-col gap-6">
          <div className="font-mono text-xs text-muted uppercase tracking-wider font-semibold flex items-center gap-2">
            <Award className="w-4 h-4 text-signal" />
            <span className="text-bone">Accredited Certifications &amp; Assessments</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-lg bg-graphite/40 border border-hairline flex flex-col justify-between gap-4 font-mono text-xs"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-[10px] text-muted border-b border-hairline/60 pb-2">
                    <span className="text-signal font-semibold">{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>

                  <h3 className="font-serif text-xl text-bone leading-snug">
                    {cert.title}
                  </h3>

                  <div className="text-verified font-medium text-[11px]">
                    {cert.badgeType} {cert.score && `&bull; ${cert.score}`}
                  </div>

                  <p className="text-muted font-sans text-xs leading-relaxed pt-1">
                    {cert.scope}
                  </p>
                </div>

                <div className="pt-3 border-t border-hairline/60 flex flex-col gap-1 text-[10px]">
                  <div className="flex items-center gap-1.5 text-bone">
                    <ShieldCheck className="w-3.5 h-3.5 text-verified shrink-0" />
                    <span>{cert.verification}</span>
                  </div>
                  {cert.credentialId && (
                    <div className="text-muted font-mono truncate">
                      ID: <span className="text-bone/80">{cert.credentialId}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Activities */}
        <div className="flex flex-col gap-6 pt-6 border-t border-hairline">
          <div className="font-mono text-xs text-muted uppercase tracking-wider font-semibold flex items-center gap-2">
            <Users className="w-4 h-4 text-signal" />
            <span className="text-bone">Leadership &amp; Competitive Hackathons</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LEADERSHIP.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-graphite/30 border border-hairline flex flex-col gap-3 font-mono text-xs"
              >
                <div className="flex items-center justify-between text-[10px] text-muted">
                  <span className="text-signal font-semibold">{item.role}</span>
                  <span>{item.institution || item.events}</span>
                </div>
                <div className="text-bone font-semibold text-base font-serif">
                  {item.organization}
                </div>
                <p className="text-muted font-sans text-sm leading-relaxed">
                  {item.scope}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

