import React from 'react';

export default function AboutUsPage() {
  const steps = [
    "We work closely with officials rather than around them",
    "We prioritise administrative data over stylised assumptions",
    "We design reforms with political economy constraints in mind",
    "We emphasise transfer of analytical capability, not dependency"
  ];

  return (
    <div className="bg-slate-50 font-sans selection:bg-blue-500/30 min-h-screen text-slate-900">

      {/* MISSION SECTION */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-3">
              <h2 className="text-xs font-bold text-blue-600 mb-6 uppercase tracking-[0.3em]">Our Mission</h2>
              <p className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-8 tracking-tight">
                Insignia Policy Research was founded to address a persistent gap in policymaking: the disconnect between rigorous economic analysis and what governments can realistically implement.
              </p>
              <div className="w-24 h-1.5 bg-blue-600 mb-8"></div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-slate-900 text-white p-10 rounded-sm shadow-2xl relative overflow-hidden border-t-4 border-blue-600">
                <p className="text-sm font-bold uppercase tracking-widest mb-8 text-slate-400">
                  Our Objectives
                </p>
                <ul className="space-y-6">
                  {['analytically credible,', 'fiscally sustainable, and', 'institutionally feasible.'].map((item, i) => (
                    <li key={i} className="group">
                      <div className="flex items-center gap-4 text-white font-bold tracking-tight text-xl uppercase">
                        <div className="w-1.5 h-6 bg-blue-600"></div>
                        {item}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY INSIGNIA SECTION */}
      <section className="py-32 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-xs font-bold text-blue-600 mb-8 uppercase tracking-[0.3em]">Why Insignia</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl leading-relaxed text-slate-800 mb-6">
              An insignia represents authority, legitimacy, and trust.
            </p>
            <p className="text-xl leading-relaxed text-slate-500">
              We aim to provide governments with analysis that can legitimately guide high-stakes policy decisions.
            </p>
          </div>
        </div>
      </section>

      {/* HOW WE WORK SECTION */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-20">
            <h2 className="text-xs font-bold text-blue-600 mb-4 uppercase tracking-[0.4em]">Methodology</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter uppercase">How We Work</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 shadow-2xl">
            {steps.map((text, idx) => (
              <div key={idx} className="bg-white p-8 md:p-12 hover:bg-slate-50 transition-colors duration-500 group relative min-h-[250px]">
                <div className="relative z-10">
                  <div className="w-10 h-1 bg-blue-600 mb-8 group-hover:w-16 transition-all duration-500"></div>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}