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
    <div className="min-h-screen bg-white font-sans">

      {/* SECTION 1: ENHANCED PRACTICE AREAS (Heading removed for cleaner landing) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-2xl text-slate-600 max-w-3xl leading-relaxed border-l-4 border-blue-600 pl-6">
              Insignia Policy Research provides specialized advisory across <span className="font-bold text-slate-900">four core pillars</span> of economic reform, blending rigorous academic theory with implementation realism.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {practiceAreas.map((area, index) => (
              <div
                key={index}
                className="group p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
              >
                <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{area.icon}</div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight group-hover:text-blue-700 transition-colors">
                  {area.title}
                </h2>
                <ul className="space-y-4">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-slate-600 leading-snug font-medium group-hover:text-slate-900 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR APPROACH (AUTO-ANIMATED FULL PAGE) */}
      <section className="min-h-screen flex flex-col justify-center bg-slate-950 text-white overflow-hidden py-24 relative">
        <div className="max-w-[1600px] mx-auto px-10 w-full relative z-10">

          <div className="mb-24 text-center lg:text-left">
            <h2 className="text-5xl font-black mb-6 uppercase tracking-tighter">Our Approach</h2>
            <div className="w-32 h-1.5 bg-blue-500 rounded-full mx-auto lg:mx-0"></div>
          </div>

          <div className="relative">
            {/* The Background Pipeline Line */}
            <div className="hidden lg:block absolute top-[128px] left-0 w-full h-[1px] bg-slate-800 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-4 relative z-10">
              {approachItems.map((approach, idx) => {
                const isActive = activeIndex === idx;

                return (
                  <div key={idx} className="flex flex-col items-center text-center">

                    {/* Pipeline Node */}
                    <div className="relative mb-12">

                      {/* Subdued Pulse Effect */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-pulse z-0 transform scale-150"></div>
                      )}

                      {/* Circle Container */}
                      <div className={`w-64 h-64 rounded-full border-[3px] bg-slate-900 overflow-hidden relative z-10 transition-all duration-1000 ease-in-out ${
                        isActive
                          ? 'border-blue-500 shadow-[0_0_60px_rgba(59,130,246,0.4)] scale-110'
                          : 'border-slate-800 scale-90 grayscale-[40%] opacity-40'
                      }`}>
                        <img
                          src={approach.image}
                          alt={approach.title}
                          className={`w-full h-full object-cover transition-transform duration-1000 ease-in-out ${
                            isActive ? 'scale-150' : 'scale-125'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className={`max-w-[300px] transition-all duration-1000 ease-in-out ${
                      isActive ? 'translate-y-[-12px]' : 'translate-y-0'
                    }`}>
                      <h3 className={`text-2xl font-bold mb-4 tracking-tight transition-colors duration-700 ${
                        isActive ? 'text-blue-400' : 'text-slate-500'
                      }`}>
                        {approach.title}
                      </h3>
                      <p className={`text-base leading-relaxed transition-all duration-700 ${
                        isActive ? 'text-slate-200 opacity-100' : 'text-slate-600 opacity-30'
                      }`}>
                        {approach.desc}
                      </p>
                    </div>

                    {/* Mobile Connector */}
                    {idx !== approachItems.length - 1 && (
                      <div className="lg:hidden h-16 w-[1px] bg-slate-800 my-4"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Ambient background glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-blue-900/10 blur-[180px] rounded-full"></div>
        </div>
      </section>
    </div>
  );
}