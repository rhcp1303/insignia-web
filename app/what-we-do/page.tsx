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
    <div className="bg-[#F1F5F9] font-sans selection:bg-indigo-100">

      {/* SECTION 1: PRACTICE AREAS - High Contrast White Cards on Slate Background */}
      <section className="min-h-screen w-full relative flex flex-col justify-center bg-[#F1F5F9] py-20 overflow-hidden">
        {/* Subtler Background Mesh */}
        <div className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none"
             style={{ backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="mb-12 max-w-4xl">
            <p className="text-xl md:text-2xl text-[#334155] leading-relaxed font-semibold tracking-tight border-l-4 border-[#2563EB] pl-6 py-1">
              Insignia Policy Research provides specialized advisory across <span className="text-[#2563EB]">four core pillars</span> of economic reform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {practiceAreas.map((area, index) => (
              <div
                key={index}
                className="p-8 bg-white border border-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{area.icon}</span>
                  <h2 className="text-lg md:text-xl font-bold text-[#0F172A] tracking-tight">
                    {area.title}
                  </h2>
                </div>

                <p className="text-[#475569] text-sm md:text-base mb-6 font-medium leading-relaxed">
                  {area.description}
                </p>

                <ul className="grid grid-cols-1 gap-2.5 pt-5 border-t border-slate-100">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-2 shrink-0" />
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

      {/* SECTION 2: OUR APPROACH - Deep Dark Mode with Radial Glow */}
      <section className="h-screen w-full flex flex-col justify-center bg-[#0B0F1A] text-white overflow-hidden relative">
        {/* Higher Contrast Grid */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none"
             style={{ backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`, backgroundSize: '60px 60px' }}></div>

        <div className="max-w-[1600px] mx-auto px-10 w-full relative z-10">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter text-white">Our Approach</h2>
            <div className="w-24 h-1.5 bg-[#3B82F6] rounded-full mx-auto lg:mx-0"></div>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-[100px] left-0 w-full h-[1px] bg-white/10 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
              {approachItems.map((approach, idx) => {
                const isActive = activeIndex === idx;

                return (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className="relative mb-8">
                      {isActive && (
                        <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse z-0 transform scale-150 blur-xl"></div>
                      )}

                      <div className={`w-40 h-40 md:w-48 md:h-48 rounded-full border-2 bg-slate-900 overflow-hidden relative z-10 transition-all duration-1000 ease-in-out ${
                        isActive
                          ? 'border-blue-400 shadow-[0_0_40px_rgba(59,130,246,0.3)] scale-105'
                          : 'border-white/10 scale-90 grayscale opacity-30'
                      }`}>
                        <img
                          src={approach.image}
                          alt={approach.title}
                          className={`w-full h-full object-cover transition-transform duration-[2000ms] ${
                            isActive ? 'scale-110' : 'scale-100'
                          }`}
                        />
                      </div>
                    </div>

                    <div className={`max-w-[280px] transition-all duration-1000 ${
                      isActive ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-30'
                    }`}>
                      <h3 className={`text-lg font-bold mb-3 tracking-widest uppercase transition-colors duration-700 ${
                        isActive ? 'text-blue-400' : 'text-slate-500'
                      }`}>
                        {approach.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-400 font-normal">
                        {approach.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stronger Background Glow for Contrast */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full"></div>
        </div>
      </section>
    </div>
  );
}