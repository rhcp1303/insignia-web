"use client";

import React, { useState, useEffect } from 'react';

export default function WorkPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const engagements = [
    {
      tag: "Energy & Fiscal",
      title: "Electricity Tariff Reform",
      client: "Indian State Government",
      problem: "Rising DISCOM losses despite periodic tariff increases",
      approach: "Household-level consumption analysis and cost-to-serve estimation",
      outcome: "Identified regressive subsidy structures and proposed phased reforms"
    },
    {
      tag: "Data Science",
      title: "Power Demand Forecasting",
      client: "Energy Sector",
      problem: "Inefficient power procurement due to poor demand forecasts",
      approach: "Built day-ahead forecasting models using historical load data",
      outcome: "Improved procurement planning and reduced avoidable costs"
    },
    {
      tag: "Public Finance",
      title: "Property Tax Reform",
      client: "Municipal Finance",
      problem: "Low revenue buoyancy and inequitable valuation",
      approach: "Transaction-level data analysis and valuation modelling",
      outcome: "Designed improved valuation frameworks aligned with market values"
    },
    {
      tag: "Trade Policy",
      title: "Industrial Policy Analysis",
      client: "Trade & Industry",
      problem: "Rising input costs for exporters due to regulatory interventions",
      approach: "Firm-level cost and competitiveness analysis",
      outcome: "Evidence-based assessment of QCOs and tariff policies"
    }
  ];

  const triggerSlideChange = (newIndex: number) => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveSlide(newIndex);
      setIsFading(false);
    }, 300);
  };

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        const next = (activeSlide + 1) % engagements.length;
        triggerSlideChange(next);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused, activeSlide, engagements.length]);

  const nextSlide = () => triggerSlideChange((activeSlide + 1) % engagements.length);
  const prevSlide = () => triggerSlideChange((activeSlide - 1 + engagements.length) % engagements.length);

  return (
    <div className="h-screen w-full bg-slate-950 text-white overflow-hidden flex flex-col font-sans selection:bg-blue-500/30 relative">

      {/* SIDE NAVIGATION BUTTONS */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-4 group transition-all"
        aria-label="Previous"
      >
        <div className="h-12 w-12 border border-white/10 group-hover:border-blue-500 group-hover:bg-blue-600 flex items-center justify-center transition-all">
          <span className="text-xl">←</span>
        </div>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-4 group transition-all"
        aria-label="Next"
      >
        <div className="h-12 w-12 border border-white/10 group-hover:border-blue-500 group-hover:bg-blue-600 flex items-center justify-center transition-all">
          <span className="text-xl">→</span>
        </div>
      </button>

      {/* TOP NAV BAR */}
      <nav className="p-6 flex justify-between items-center border-b border-white/5 shrink-0">
        <h1 className="text-lg font-black uppercase tracking-tighter italic text-blue-500">Engagements</h1>
        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
          Project 0{activeSlide + 1} // 0{engagements.length}
        </div>
      </nav>

      {/* MAIN CONTENT AREA */}
      <main
        className="flex-grow flex flex-col justify-center px-16 md:px-32 relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`max-w-6xl mx-auto w-full transition-all duration-500 transform ${isFading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="flex flex-col gap-8 md:gap-12">

            {/* HEADER */}
            <header className="space-y-3">
              <span className="inline-block bg-blue-600 text-white px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.3em]">
                {engagements[activeSlide].tag}
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none uppercase text-white">
                {engagements[activeSlide].title}
              </h2>
              <p className="text-blue-400 font-bold italic text-base">— {engagements[activeSlide].client}</p>
            </header>

            {/* DATA GRID */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 border-t border-white/10 pt-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-[9px] font-black uppercase tracking-widest text-blue-500 mb-1">The Problem</h3>
                  <p className="text-base md:text-lg text-slate-300 font-medium leading-relaxed">
                    {engagements[activeSlide].problem}
                  </p>
                </div>
                <div>
                  <h3 className="text-[9px] font-black uppercase tracking-widest text-blue-500 mb-1">The Approach</h3>
                  <p className="text-base md:text-lg text-slate-300 font-medium leading-relaxed">
                    {engagements[activeSlide].approach}
                  </p>
                </div>
              </div>

              {/* OUTCOME BOX */}
              <div className="bg-white text-slate-900 p-6 md:p-10 border-l-[10px] border-blue-600 self-center shadow-2xl">
                <h3 className="text-[9px] font-black uppercase tracking-widest text-blue-600 mb-3">Final Outcome</h3>
                <p className="text-xl md:text-2xl font-black leading-tight tracking-tight uppercase">
                  {engagements[activeSlide].outcome}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* BOTTOM LIST OF ALL ITEMS */}
      <footer className="px-16 md:px-32 pb-8 shrink-0">
        <div className="max-w-6xl mx-auto w-full border-t border-white/10 pt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {engagements.map((item, idx) => (
              <button
                key={idx}
                onClick={() => triggerSlideChange(idx)}
                className={`text-left p-4 transition-all duration-300 border ${
                  activeSlide === idx
                  ? 'bg-blue-600 border-blue-600 shadow-lg'
                  : 'bg-slate-900/50 border-white/5 hover:border-blue-500/50'
                }`}
              >
                <p className={`text-[8px] font-bold uppercase tracking-widest mb-1 ${
                  activeSlide === idx ? 'text-blue-100' : 'text-blue-500'
                }`}>
                  0{idx + 1}
                </p>
                <h4 className={`text-[10px] md:text-xs font-black uppercase truncate ${
                  activeSlide === idx ? 'text-white' : 'text-slate-500'
                }`}>
                  {item.title}
                </h4>
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}