"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUsPage() {
  const steps = [
    "We work closely with officials rather than around them",
    "We prioritise administrative data over stylised assumptions",
    "We design reforms with political economy constraints in mind",
    "We emphasise transfer of analytical capability, not dependency"
  ];

  // Animation variants for content appearing as you glide into a section
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  return (
    /* The 'snap-y' and 'snap-mandatory' on the main container
      are what create the "glide and lock" effect.
    */
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-slate-50">

      {/* SECTION 1: MISSION */}
      <section className="h-screen w-full snap-start flex items-center justify-center border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            variants={fadeInUp}
            className="grid lg:grid-cols-5 gap-16 items-start"
          >
            <div className="lg:col-span-3">
              <h2 className="text-xs font-bold text-blue-600 mb-6 uppercase tracking-[0.3em]">Our Mission</h2>
              <p className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight mb-8 tracking-tight">
                Insignia Policy Research was founded to address a persistent gap in policymaking: the disconnect between rigorous analysis and implementation.
              </p>
              <div className="w-24 h-1.5 bg-blue-600 mb-8"></div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-slate-900 text-white p-10 rounded-sm shadow-2xl border-t-4 border-blue-600">
                <p className="text-sm font-bold uppercase tracking-widest mb-8 text-slate-400">
                  Our mission is to help governments design reforms that are
                </p>
                <ul className="space-y-6">
                  {['analytically credible', 'fiscally sustainable', 'institutionally feasible.'].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white font-bold tracking-tight text-xl uppercase">
                      <div className="w-1.5 h-6 bg-blue-600"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: WHY INSIGNIA */}
      <section className="h-screen w-full snap-start bg-white flex items-center justify-center border-b border-slate-200">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-xs font-bold text-blue-600 mb-8 uppercase tracking-[0.3em]">Why Insignia</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-3xl leading-relaxed text-slate-800 mb-6 font-semibold">
              An insignia represents authority, legitimacy, and trust.
            </p>
            <p className="text-xl leading-relaxed text-slate-500">
              We aim to provide governments with analysis that can legitimately guide high-stakes policy decisions.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3: METHODOLOGY */}
      <section className="h-screen w-full snap-start bg-slate-50 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="text-xs font-bold text-blue-600 mb-4 uppercase tracking-[0.4em]">Methodology</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter uppercase">How We Work</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((text, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: false }}
                className="bg-white p-8 border-l-4 border-blue-600 shadow-sm hover:shadow-xl transition-all duration-300 group min-h-[220px] flex items-center"
              >
                <p className="text-slate-700 text-lg leading-relaxed font-medium">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}