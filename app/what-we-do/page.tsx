"use client";

import React, { useState, useEffect } from 'react';

export default function WhatWeDoPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const practiceAreas = [
    {
      title: "Public Finance & Fiscal Policy",
      description: "We advise governments on strengthening fiscal sustainability and improving the efficiency and equity of public finance systems.",
      items: [
        "Medium-term fiscal frameworks",
        "Revenue mobilisation and tax design",
        "Subsidy rationalisation and targeting",
        "Effective tax rate and incidence analysis"
      ],
      icon: "🏛️"
    },
    {
      title: "Power Sector & Energy Economics",
      description: "Our work in the power sector focuses on restoring financial viability while protecting vulnerable consumers.",
      items: [
        "Electricity tariff design and reform",
        "Cross-subsidy and cost-to-serve analysis",
        "Day-ahead demand forecasting",
        "Time-of-day tariff design"
      ],
      icon: "⚡"
    },
    {
      title: "Trade, Industrial & Regulatory Policy",
      description: "We analyse how trade and regulatory policies affect competitiveness, exports, and employment.",
      items: [
        "Tariff and non-tariff barrier analysis",
        "Quality Control Orders and AD duties",
        "Export competitiveness and cost pass-through",
        "Manufacturing productivity and firm dynamics"
      ],
      icon: "🌐"
    },
    {
      title: "Data Systems & Digital Policy Tools",
      description: "We help governments move from ad-hoc analysis to institutionalised analytics.",
      items: [
        "Administrative data pipelines",
        "AI-enabled forecasting tools",
        "Property tax and stamp duty valuation systems",
        "Analytics dashboards for departments"
      ],
      icon: "📊"
    }
  ];

  const approachItems = [
    {
      title: "Microdata first",
      desc: "Leveraging granular administrative datasets to build evidence-based models.",
      image: "/images/approach/microdata.png"
    },
    {
      title: "Counterfactual analysis",
      desc: "Rigorous impact evaluation to understand the 'what if' of policy changes.",
      image: "/images/approach/counterfactual.png"
    },
    {
      title: "Implementation realism",
      desc: "Designing reforms that account for political and administrative constraints.",
      image: "/images/approach/realism.png"
    },
    {
      title: "Capability building",
      desc: "Working alongside departments to build lasting institutional strength.",
      image: "/images/approach/capability.png"
    }
  ];

  return (
    <div className="bg-[#F8FAFC] font-sans selection:bg-indigo-100">

      {/* SECTION 1: PRACTICE AREAS - Enhanced Depth Tiles */}
      <section className="min-h-screen w-full relative flex flex-col justify-center bg-[#F1F5F9] py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.5] pointer-events-none"
             style={{ backgroundImage: `radial-gradient(#cbd5e1 0.8px, transparent 0.8px)`, backgroundSize: '32px 32px' }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="mb-14 max-w-4xl">
            <p className="text-xl md:text-2xl text-[#1E293B] leading-relaxed font-bold tracking-tight border-l-4 border-[#2563EB] pl-6">
              Insignia Policy Research provides specialized advisory across <span className="text-[#2563EB]">four core pillars</span> of economic reform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {practiceAreas.map((area, index) => (
              <div
                key={index}
                className="relative group p-8 rounded-3xl border border-white bg-gradient-to-br from-white via-white to-blue-50/30 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.05)] overflow-hidden"
              >
                {/* Internal accent flare */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="flex items-center gap-4 mb-5 relative z-10">
                  <div className="w-12 h-12 flex items-center justify-center bg-slate-50 rounded-2xl shadow-inner text-3xl">
                    {area.icon}
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-[#0F172A] tracking-tight">
                    {area.title}
                  </h2>
                </div>

                <p className="text-[#475569] text-sm md:text-base mb-8 font-medium leading-relaxed relative z-10">
                  {area.description}
                </p>

                <ul className="grid grid-cols-1 gap-3 pt-6 border-t border-slate-100 relative z-10">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                      <span className="text-[#64748B] text-sm leading-snug font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR APPROACH - Glow Ring Strategy */}
      <section className="h-screen w-full flex flex-col justify-center bg-[#020617] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.2] pointer-events-none"
             style={{ backgroundImage: `linear-gradient(#0f172a 1.5px, transparent 1.5px), linear-gradient(90deg, #0f172a 1.5px, transparent 1.5px)`, backgroundSize: '50px 50px' }}></div>

        <div className="max-w-[1600px] mx-auto px-10 w-full relative z-10">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter text-white">Our Approach</h2>
            <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto lg:mx-0"></div>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-[90px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
              {approachItems.map((approach, idx) => {
                const isActive = activeIndex === idx;

                return (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className="relative mb-10">
                      {/* Interactive Aura */}
                      <div className={`absolute inset-0 rounded-full transition-all duration-1000 blur-2xl ${
                        isActive ? 'bg-blue-600/30 scale-150' : 'bg-transparent scale-100'
                      }`}></div>

                      <div className={`w-36 h-36 md:w-44 md:h-44 rounded-full border-2 overflow-hidden relative z-10 transition-all duration-1000 ease-in-out bg-slate-900 ${
                        isActive
                          ? 'border-blue-400 shadow-[0_0_50px_rgba(59,130,246,0.4)] scale-110'
                          : 'border-white/5 scale-90 grayscale opacity-20'
                      }`}>
                        {/* Overlay to give the image a "tiled" inner depth */}
                        <div className={`absolute inset-0 z-20 pointer-events-none transition-opacity duration-1000 ${isActive ? 'opacity-20' : 'opacity-0'} bg-gradient-to-tr from-blue-900 to-transparent`}></div>

                        <img
                          src={approach.image}
                          alt={approach.title}
                          className={`w-full h-full object-cover transition-transform duration-[3000ms] ${
                            isActive ? 'scale-125 rotate-2' : 'scale-100'
                          }`}
                        />
                      </div>
                    </div>

                    <div className={`max-w-[280px] transition-all duration-1000 ${
                      isActive ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-4'
                    }`}>
                      <h3 className={`text-base font-bold mb-3 tracking-widest uppercase transition-colors duration-700 ${
                        isActive ? 'text-blue-400' : 'text-slate-500'
                      }`}>
                        {approach.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-400 font-light">
                        {approach.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dynamic Background Spotlights */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
           <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full transition-opacity duration-1000 ${activeIndex % 2 === 0 ? 'opacity-100' : 'opacity-50'}`}></div>
        </div>
      </section>
    </div>
  );
}