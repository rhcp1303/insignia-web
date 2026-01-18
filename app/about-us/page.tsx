import React from 'react';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HEADER / HERO */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 uppercase tracking-tight">
            About Us
          </h1>
          <div className="w-20 h-1.5 bg-blue-900 mx-auto"></div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-8 uppercase tracking-widest">Our Mission</h2>
          <div className="space-y-8">
            <p className="text-xl text-slate-700 leading-relaxed italic">
              "Insignia Policy Research was founded to address a persistent gap in policymaking:
              the disconnect between rigorous economic analysis and what governments can realistically implement."
            </p>
            <div className="bg-white border border-slate-200 p-8 rounded-sm shadow-sm">
              <p className="text-lg font-medium text-slate-900 mb-6">
                Our mission is to help governments design reforms that are:
              </p>
              <ul className="space-y-4">
                {['analytically credible', 'fiscally sustainable', 'institutionally feasible'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-700 font-semibold">
                    <span className="w-2 h-2 bg-blue-900 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY INSIGNIA SECTION */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Insignia</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl leading-relaxed text-slate-300">
              An insignia represents authority, legitimacy, and trust.
              We aim to provide governments with analysis that can legitimately guide high-stakes policy decisions.
            </p>
          </div>
        </div>
      </section>

      {/* HOW WE WORK SECTION */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-12 uppercase tracking-widest">How We Work</h2>
          <div className="grid sm:grid-cols-2 gap-10">
            {[
              "We work closely with officials rather than around them",
              "We prioritise administrative data over stylised assumptions",
              "We design reforms with political economy constraints in mind",
              "We emphasise transfer of analytical capability, not dependency"
            ].map((point, idx) => (
              <div key={idx} className="flex gap-4">
                <span className="text-blue-900 font-black text-2xl opacity-20">0{idx + 1}</span>
                <p className="text-slate-700 font-medium leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}