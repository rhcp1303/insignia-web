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
    <div className="bg-[#FFF5F1] font-sans selection:bg-pink-100 min-h-screen text-[#1E293B]">

      {/* SECTION 1: PRACTICE AREAS */}
      <section className="min-h-screen w-full flex flex-col justify-center py-20 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-14 max-w-4xl border-l-8 border-pink-500 pl-6">
            <p className="text-2xl md:text-3xl font-black uppercase tracking-tighter">
              Advisory across <span className="text-pink-600">four core pillars</span> of economic reform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {practiceAreas.map((area, index) => (
              <div key={index} className="p-10 rounded-3xl bg-white shadow-lg border border-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{area.icon}</div>
                  <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter">
                    {area.title}
                  </h2>
                </div>
                <p className="text-slate-600 text-base mb-8 font-bold leading-relaxed">
                  {area.description}
                </p>
                <ul className="grid grid-cols-1 gap-4 pt-6 border-t border-[#FFF5F1]">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pink-500 mt-1.5 shrink-0" />
                      <span className="text-slate-500 text-sm font-black uppercase tracking-tight">
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

      {/* SECTION 2: OUR APPROACH */}
      <section className="min-h-screen w-full flex flex-col justify-center py-20 px-6 border-t border-pink-100">
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Our Approach</h2>
            <div className="w-32 h-2 bg-pink-600 mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {approachItems.map((approach, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="relative mb-10">
                    {/* Circle Size Increased - Fully Visible */}
                    <div className={`w-64 h-64 md:w-72 md:h-72 rounded-full border-8 overflow-hidden transition-all duration-700 bg-white ${
                      isActive ? 'border-pink-500 scale-105 shadow-2xl' : 'border-white'
                    }`}>
                      <img
                        src={approach.image}
                        alt={approach.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="px-4">
                    <h3 className={`text-xl font-black mb-3 uppercase tracking-widest ${
                      isActive ? 'text-pink-600' : 'text-[#1E293B]'
                    }`}>
                      {approach.title}
                    </h3>
                    <p className="text-base font-bold uppercase tracking-tighter text-slate-600">
                      {approach.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}