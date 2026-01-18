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
    <div className="bg-white font-sans selection:bg-indigo-100">

      {/* SECTION 1: FULL SCREEN PRACTICE AREAS */}
      <section className="h-screen w-full relative flex flex-col justify-center bg-[#F8FAFC] overflow-hidden">
        {/* Structural Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
             style={{ backgroundImage: `radial-gradient(#1e1b4b 1px, transparent 1px)`, backgroundSize: '30px 30px' }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="mb-12">
            <p className="text-2xl md:text-3xl lg:text-4xl text-[#1E293B] leading-tight font-bold tracking-tight border-l-8 border-[#2563EB] pl-8 py-2">
              Insignia Policy Research provides specialized advisory across <span className="text-[#2563EB]">four core pillars</span> of economic reform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {practiceAreas.map((area, index) => (
              <div
                key={index}
                className="group p-8 bg-white/90 backdrop-blur-md border border-slate-200 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden"
              >
                <div className="flex items-center gap-5 mb-4">
                  <span className="text-4xl grayscale group-hover:grayscale-0 transition-all">{area.icon}</span>
                  <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] tracking-tight group-hover:text-[#2563EB] transition-colors">
                    {area.title}
                  </h2>
                </div>

                <ul className="grid grid-cols-1 gap-2">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                      <span className="text-[#475569] text-base leading-snug font-medium group-hover:text-[#1E293B] transition-colors">
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

      {/* SECTION 2: FULL SCREEN OUR APPROACH */}
      <section className="h-screen w-full flex flex-col justify-center bg-[#020617] text-white overflow-hidden relative">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
             style={{ backgroundImage: `linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)`, backgroundSize: '80px 80px' }}></div>

        <div className="max-w-[1600px] mx-auto px-10 w-full relative z-10">
          <div className="mb-20 text-center lg:text-left">
            <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter opacity-90">Our Approach</h2>
            <div className="w-48 h-2 bg-gradient-to-r from-[#3B82F6] to-transparent rounded-full mx-auto lg:mx-0"></div>
          </div>

          <div className="relative">
            {/* The Background Pipeline Line */}
            <div className="hidden lg:block absolute top-[115px] left-0 w-full h-[1px] bg-slate-800/50 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
              {approachItems.map((approach, idx) => {
                const isActive = activeIndex === idx;

                return (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className="relative mb-10">
                      {isActive && (
                        <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-ping z-0 transform scale-125"></div>
                      )}

                      <div className={`w-48 h-48 md:w-56 md:h-56 rounded-full border-[2px] bg-slate-900 overflow-hidden relative z-10 transition-all duration-1000 ease-in-out ${
                        isActive
                          ? 'border-blue-400 shadow-[0_0_60px_rgba(59,130,246,0.2)] scale-110'
                          : 'border-slate-800 scale-90 grayscale-[80%] opacity-20'
                      }`}>
                        <img
                          src={approach.image}
                          alt={approach.title}
                          className={`w-full h-full object-cover transition-transform duration-[2000ms] ${
                            isActive ? 'scale-125' : 'scale-100'
                          }`}
                        />
                      </div>
                    </div>

                    <div className={`max-w-[300px] transition-all duration-1000 ${
                      isActive ? 'translate-y-[-10px] opacity-100' : 'translate-y-0 opacity-40'
                    }`}>
                      <h3 className={`text-xl font-bold mb-4 tracking-tight uppercase transition-colors duration-700 ${
                        isActive ? 'text-blue-400' : 'text-slate-500'
                      }`}>
                        {approach.title}
                      </h3>
                      <p className="text-base leading-relaxed text-slate-300 font-light">
                        {approach.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dynamic Glow Aura */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-blue-900/20 blur-[180px] rounded-full"></div>
        </div>
      </section>
    </div>
  );
}