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
      approach: "Household-level consumption analysis, cost-to-serve estimation, and reform simulations",
      outcome: "Identified regressive subsidy structures and proposed phased, politically feasible reforms"
    },
    {
      tag: "Data Science",
      title: "Power Demand Forecasting",
      client: "Energy Sector",
      problem: "Inefficient power procurement due to poor demand forecasts",
      approach: "Built day-ahead forecasting models using historical load and weather data",
      outcome: "Improved procurement planning and reduced avoidable costs"
    },
    {
      tag: "Public Finance",
      title: "Property Tax & Stamp Duty Reform",
      client: "Municipal Finance",
      problem: "Low revenue buoyancy and inequitable valuation",
      approach: "Transaction-level data analysis and valuation modelling",
      outcome: "Designed improved valuation frameworks aligned with market values"
    },
    {
      tag: "Trade Policy",
      title: "Trade & Industrial Policy Analysis",
      client: "Trade & Industry",
      problem: "Rising input costs for exporters due to regulatory interventions",
      approach: "Firm-level cost and competitiveness analysis",
      outcome: "Evidence-based assessment of QCOs and tariff policies"
    }
  ];

  const triggerSlideChange = (newIndex: number) => {
    setIsFading(true);
    setTimeout(() => {
      setActiveSlide(newIndex);
      setIsFading(false);
    }, 300);
  };

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        const next = activeSlide === engagements.length - 1 ? 0 : activeSlide + 1;
        triggerSlideChange(next);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused, activeSlide, engagements.length]);

  const nextSlide = () => triggerSlideChange(activeSlide === engagements.length - 1 ? 0 : activeSlide + 1);
  const prevSlide = () => triggerSlideChange(activeSlide === 0 ? engagements.length - 1 : activeSlide - 1);

  return (
    <div className="h-screen w-full bg-slate-900 text-white overflow-hidden flex flex-col font-sans">

      {/* TOP NAV BAR - Pink Brand Color */}
      <nav className="p-8 flex justify-between items-center border-b border-white/10 shrink-0">
        <h1 className="text-xl font-black uppercase tracking-tighter italic text-pink-500">Engagements</h1>
        <div className="flex gap-4">
          {engagements.map((_, idx) => (
            <button
              key={idx}
              onClick={() => triggerSlideChange(idx)}
              className={`h-1.5 w-12 transition-all duration-500 cursor-pointer ${activeSlide === idx ? 'bg-pink-500' : 'bg-white/10'}`}
            />
          ))}
        </div>
      </nav>

      {/* MAIN CONTENT AREA */}
      <main
        className="flex-grow flex items-center relative px-6 md:px-20"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`max-w-5xl mx-auto w-full relative z-10 transition-all duration-500 transform ${isFading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <div className="flex flex-col gap-12">

            {/* TAG (Pink) & TITLE (White) */}
            <header className="space-y-4">
              <span className="bg-pink-600 text-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em]">
                {engagements[activeSlide].tag}
              </span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase text-white">
                {engagements[activeSlide].title}
              </h2>
              <p className="text-pink-500/80 font-bold italic">— {engagements[activeSlide].client}</p>
            </header>

            {/* DATA GRID */}
            <div className="grid md:grid-cols-2 gap-12 border-t border-white/10 pt-10">
              <div className="space-y-6">
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-pink-500 mb-2">The Problem</h3>
                  <p className="text-xl text-slate-300 font-medium leading-relaxed">
                    {engagements[activeSlide].problem}
                  </p>
                </div>
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-pink-500 mb-2">The Approach</h3>
                  <p className="text-xl text-slate-300 font-medium leading-relaxed">
                    {engagements[activeSlide].approach}
                  </p>
                </div>
              </div>

              {/* OUTCOME BOX - The Big Result (Pink Accents) */}
              <div className="bg-white text-slate-900 p-8 md:p-12 border-l-[12px] border-pink-500 self-center shadow-2xl">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-pink-600 mb-4">Final Outcome</h3>
                <p className="text-2xl md:text-4xl font-black leading-tight tracking-tight uppercase">
                  {engagements[activeSlide].outcome}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER CONTROLS */}
      <footer className="p-8 border-t border-white/10 flex justify-between items-center shrink-0">
        <div className="flex gap-2 items-center">
          <button
            onClick={prevSlide}
            className="px-6 py-3 border border-white/20 hover:bg-pink-500 hover:border-pink-500 hover:text-white font-black uppercase text-xs tracking-widest transition-all"
          >
            Prev
          </button>
          <button
            onClick={nextSlide}
            className="px-6 py-3 border border-white/20 hover:bg-pink-500 hover:border-pink-500 hover:text-white font-black uppercase text-xs tracking-widest transition-all"
          >
            Next
          </button>
        </div>

        <div className="hidden md:block text-right">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 italic">
            Strategic Research • {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}