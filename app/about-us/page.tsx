import React from 'react';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-500/30 text-slate-900">

      {/* MISSION SECTION - NOW THE LEAD */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-3">
              <h2 className="text-xs font-black text-blue-600 mb-6 uppercase tracking-[0.3em]">Our Mission</h2>
              <p className="text-2xl md:text-4xl font-black text-slate-900 leading-tight mb-8 tracking-tighter uppercase">
                Insignia Policy Research was founded to address a persistent gap in policymaking: the disconnect between rigorous economic analysis and what governments can realistically implement.
              </p>
              <div className="w-24 h-2 bg-blue-600 mb-8"></div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-slate-900 text-white p-10 rounded-sm shadow-2xl relative overflow-hidden">
                {/* Subtle Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 rounded-full -mr-12 -mt-12"></div>

                <p className="text-sm font-bold text-blue-400 mb-6 uppercase tracking-widest">The Objective</p>
                <p className="text-lg font-medium mb-8 text-slate-200">
                  Our mission is to help governments design reforms that are:
                </p>
                <ul className="space-y-6">
                  {[
                    { label: 'Analytically credible', desc: 'Rooted in robust data and theory' },
                    { label: 'Fiscally sustainable', desc: 'Aligned with long-term budget health' },
                    { label: 'Institutionally feasible', desc: 'Executable within current constraints' }
                  ].map((item, i) => (
                    <li key={i} className="group">
                      <div className="flex items-center gap-4 text-white font-black uppercase tracking-tighter text-xl">
                        <div className="w-1.5 h-6 bg-blue-600 group-hover:h-8 transition-all duration-300"></div>
                        {item.label}
                      </div>
                      <p className="text-slate-400 text-[10px] mt-1 ml-6 font-bold uppercase tracking-tight">{item.desc}</p>
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
          <h2 className="text-xs font-black text-blue-600 mb-8 uppercase tracking-[0.3em]">Why Insignia</h2>
          <p className="text-3xl md:text-5xl font-black text-slate-900 leading-[0.9] uppercase tracking-tighter mb-10">
            Authority. Legitimacy. Trust.
          </p>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl leading-relaxed text-slate-600 font-medium">
              An insignia represents authority, legitimacy, and trust.
              We aim to provide governments with analysis that can legitimately guide high-stakes policy decisions.
            </p>
          </div>
        </div>
      </section>

      {/* HOW WE WORK SECTION */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div>
              <h2 className="text-xs font-black text-blue-600 mb-4 uppercase tracking-[0.3em]">Methodology</h2>
              <h3 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter">How We Work</h3>
            </div>
            <div className="h-px flex-grow bg-slate-200 mx-8 hidden md:block mb-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              {
                title: "Partnership over Outsourcing",
                text: "We work closely with officials rather than around them, ensuring local context is never lost."
              },
              {
                title: "Data over Assumptions",
                text: "We prioritise administrative data over stylised assumptions to build models that reflect reality."
              },
              {
                title: "Realism over Theory",
                text: "We design reforms with political economy constraints in mind to ensure implementation success."
              },
              {
                title: "Transfer over Dependency",
                text: "We emphasise transfer of analytical capability, building lasting institutional strength."
              }
            ].map((point, idx) => (
              <div key={idx} className="group border-b border-slate-200 pb-10">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-blue-600 font-black text-sm tracking-widest transition-transform group-hover:translate-x-1 duration-300">
                    [0{idx + 1}]
                  </span>
                  <h4 className="text-xl font-black uppercase tracking-tighter text-slate-900">
                    {point.title}
                  </h4>
                </div>
                <p className="text-slate-600 font-medium leading-relaxed pl-10 border-l border-transparent group-hover:border-blue-600 transition-colors duration-300">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-6">Ready to collaborate?</p>
          <a
            href="/contact"
            className="text-2xl md:text-4xl font-black uppercase tracking-tighter hover:text-blue-400 transition-all duration-300 inline-block"
          >
            Get in touch with our team —&gt;
          </a>
        </div>
      </section>
    </div>
  );
}