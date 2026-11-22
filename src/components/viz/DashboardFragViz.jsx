import React, { useState } from 'react';
import { Activity, Share2, Users, Flame, Heart, TrendingUp } from 'lucide-react';

export default function DashboardFragViz() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sharedToast, setSharedToast] = useState(false);

  const mockSparkline = [20, 35, 45, 30, 60, 55, 75, 65, 80, 95];

  const handleShare = () => {
    setSharedToast(true);
    setTimeout(() => setSharedToast(false), 2000);
  };

  return (
    <div className="w-full bg-graphite/60 border border-hairline rounded-lg p-5 md:p-6 font-mono text-xs flex flex-col gap-5">
      {/* Header and Caption */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-hairline pb-4">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-signal" />
          <span className="text-bone font-semibold tracking-wider text-sm">FITNESS TELEMETRY FRAGMENT</span>
          <span className="text-muted text-[10px]">3 CORE MODULES // REACT.JS</span>
        </div>
        <div className="px-2 py-0.5 rounded bg-ink border border-hairline text-[10px] text-muted">
          Illustrative visualization
        </div>
      </div>

      {/* 3 Core Module Selector Tabs */}
      <div className="grid grid-cols-3 gap-2">
        <button
          type="button"
          onClick={() => setActiveTab('dashboard')}
          className={`p-2.5 rounded border text-center transition-all ${
            activeTab === 'dashboard'
              ? 'bg-ink border-signal text-bone'
              : 'bg-graphite/40 border-hairline text-muted hover:border-hairline/80'
          }`}
        >
          <div className="text-[9px] text-muted mb-0.5">MODULE 01</div>
          <div className="font-semibold text-xs flex items-center justify-center gap-1">
            <TrendingUp className="w-3 h-3 text-signal" /> Dashboard
          </div>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('community')}
          className={`p-2.5 rounded border text-center transition-all ${
            activeTab === 'community'
              ? 'bg-ink border-signal text-bone'
              : 'bg-graphite/40 border-hairline text-muted hover:border-hairline/80'
          }`}
        >
          <div className="text-[9px] text-muted mb-0.5">MODULE 02</div>
          <div className="font-semibold text-xs flex items-center justify-center gap-1">
            <Users className="w-3 h-3 text-verified" /> Community Feed
          </div>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('sharing')}
          className={`p-2.5 rounded border text-center transition-all ${
            activeTab === 'sharing'
              ? 'bg-ink border-signal text-bone'
              : 'bg-graphite/40 border-hairline text-muted hover:border-hairline/80'
          }`}
        >
          <div className="text-[9px] text-muted mb-0.5">MODULE 03</div>
          <div className="font-semibold text-xs flex items-center justify-center gap-1">
            <Share2 className="w-3 h-3 text-bone" /> Peer Share
          </div>
        </button>
      </div>

      {/* Module Content Panels */}
      <div className="bg-ink border border-hairline rounded p-4">
        {activeTab === 'dashboard' && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between text-muted text-[10px] border-b border-hairline/60 pb-2">
              <span>LIVE ACTIVITY PROGRESSION</span>
              <span className="text-verified">TELEMETRY SYNCED</span>
            </div>

            {/* Sparkline Visualization */}
            <div className="flex flex-col gap-2">
              <div className="h-20 w-full flex items-end gap-2 pt-2 px-2 border-b border-hairline/40">
                {mockSparkline.map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end group">
                    <div
                      className="w-full bg-signal/30 group-hover:bg-signal transition-colors rounded-t"
                      style={{ height: `${val}%` }}
                    />
                    <span className="text-[8px] text-muted font-mono">{idx + 1}d</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center text-[10px] text-muted">
                <span>Metric Trend (10-Day Interval)</span>
                <span className="text-bone font-mono font-medium">+24% consistency delta</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'community' && (
          <div className="flex flex-col gap-3">
            <div className="text-[10px] text-muted border-b border-hairline/60 pb-2">
              COMMUNITY ACTIVITY FEED
            </div>
            <div className="p-2.5 rounded bg-graphite/60 border border-hairline flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-graphite border border-hairline flex items-center justify-center text-[10px] text-signal font-bold">
                  U1
                </div>
                <div>
                  <div className="text-bone font-medium text-xs">Peer Runner // Completed 5K Target</div>
                  <div className="text-[9px] text-muted">Pace: 5:12 min/km &bull; Cross-device sync</div>
                </div>
              </div>
              <Flame className="w-3.5 h-3.5 text-signal" />
            </div>
            <div className="p-2.5 rounded bg-graphite/60 border border-hairline flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-graphite border border-hairline flex items-center justify-center text-[10px] text-verified font-bold">
                  U2
                </div>
                <div>
                  <div className="text-bone font-medium text-xs">Peer Cyclist // Daily Cadence Met</div>
                  <div className="text-[9px] text-muted">Cadence: 88 RPM &bull; Shared milestone</div>
                </div>
              </div>
              <Heart className="w-3.5 h-3.5 text-verified" />
            </div>
          </div>
        )}

        {activeTab === 'sharing' && (
          <div className="flex flex-col gap-3">
            <div className="text-[10px] text-muted border-b border-hairline/60 pb-2 flex items-center justify-between">
              <span>ACHIEVEMENT PEER SHARING</span>
              <span className="text-bone">CROSS-DEVICE DISPATCH</span>
            </div>
            <div className="p-3 rounded bg-graphite/60 border border-hairline/80 flex flex-col gap-2">
              <div className="text-bone font-semibold text-xs">
                Milestone: 30-Day Consecutive Training Routine
              </div>
              <p className="text-[10px] text-muted">
                Export and compare performance metrics with collegiate peers across any responsive viewport.
              </p>
              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleShare}
                  className="px-3 py-1.5 rounded bg-signal text-bone font-semibold text-[10px] flex items-center gap-1.5 hover:bg-signal/90 transition-colors"
                >
                  <Share2 className="w-3 h-3" /> Broadcast Milestone
                </button>
                {sharedToast && (
                  <span className="text-verified text-[10px] animate-fade-in">
                    Milestone broadcast dispatched!
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="text-[10px] text-muted">
        Engineered with reusable component architecture across React.js, JavaScript, HTML, and CSS.
      </div>
    </div>
  );
}

