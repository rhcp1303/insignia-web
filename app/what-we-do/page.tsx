import React from 'react';

export default function WhatWeDoPage() {
  const practiceAreas = [
    {
      title: "Public Finance & Fiscal Policy",
      items: [
        "Medium-term fiscal frameworks",
        "Revenue mobilisation and tax design",
        "Subsidy rationalisation and targeting",
        "Effective tax rate and incidence analysis"
      ]
    },
    {
      title: "Power Sector & Energy Economics",
      items: [
        "Electricity tariff design and reform",
        "Cross-subsidy and cost-to-serve analysis",
        "Day-ahead demand forecasting",
        "Time-of-day tariff design"
      ]
    },
    {
      title: "Trade, Industrial & Regulatory Policy",
      items: [
        "Tariff and non-tariff barrier analysis",
        "Quality Control Orders and AD duties",
        "Export competitiveness and cost pass-through",
        "Manufacturing productivity and firm dynamics"
      ]
    },
    {
      title: "Data Systems & Digital Policy Tools",
      items: [
        "Administrative data pipelines",
        "AI-enabled forecasting tools",
        "Property tax and stamp duty valuation systems",
        "Analytics dashboards for departments"
      ]
    }
  ];

  const approachItems = [
    { title: "Microdata first", desc: "We leverage granular administrative datasets to build evidence-based models." },
    { title: "Counterfactual analysis", desc: "Rigorous impact evaluation to understand the 'what if' of policy changes." },
    { title: "Implementation realism", desc: "Designing reforms that account for political and administrative constraints." },
    { title: "Capability building", desc: "Working alongside government departments to build lasting institutional strength." }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1: PRACTICE AREAS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4 uppercase tracking-tight">What We Do</h1>
            <p className="text-xl text-slate-600 max-w-2xl">
              Insignia Policy Research provides specialized advisory across four core pillars of economic reform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {practiceAreas.map((area, index) => (
              <div key={index} className="flex flex-col border-t border-slate-200 pt-8">
                <h2 className="text-xl font-bold text-blue-900 mb-6 uppercase tracking-widest">
                  {area.title}
                </h2>
                <ul className="space-y-4">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-900 shrink-0" />
                      <span className="text-slate-700 leading-snug font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR APPROACH */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 uppercase tracking-tight">Our Approach</h2>
            <div className="w-20 h-1 bg-blue-500"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {approachItems.map((approach, idx) => (
              <div key={idx} className="flex flex-col p-6 bg-slate-800/50 rounded-sm border border-slate-800">
                <span className="text-blue-400 font-mono text-sm mb-4">0{idx + 1} //</span>
                <h3 className="text-lg font-bold mb-3 italic">{approach.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {approach.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}