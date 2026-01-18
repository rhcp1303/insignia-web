"use client"; // This tells Next.js to render this file on the browser
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUsPage() {
  const steps = [
    "We work closely with officials rather than around them",
    "We prioritise administrative data over stylised assumptions",
    "We design reforms with political economy constraints in mind",
    "We emphasise transfer of analytical capability, not dependency"
  ];

  // Animation variants for reusability
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="bg-slate-50 font-sans selection:bg-blue-500/30 min-h-screen text-slate-900 overflow-x-hidden">

      {/* MISSION SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="py-32"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-3">
              <h2 className="text-xs font-bold text-blue-600 mb-6 uppercase tracking-[0.3em]">Our Mission</h2>
              <p className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-8 tracking-tight">
                Insignia Policy Research was founded to address a persistent gap in policymaking: the disconnect between rigorous economic analysis and what governments can realistically implement.
              </p>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-1.5 bg-blue-600 mb-8"
              ></motion.div>
            </div>

            <div className="lg:col-span-2">
              <motion.div
                variants={fadeInUp}
                className="bg-slate-900 text-white p-10 rounded-sm shadow-2xl relative overflow-hidden border-t-4 border-blue-600"
              >
                <p className="text-sm font-bold uppercase tracking-widest mb-8 text-slate-400">
                  Our mission is to help governments design reforms that are
                </p>
                <motion.ul variants={staggerContainer} className="space-y-6">
                  {['analytically credible', 'fiscally sustainable', 'institutionally feasible.'].map((item, i) => (
                    <motion.li key={i} variants={fadeInUp} className="group">
                      <div className="flex items-center gap-4 text-white font-bold tracking-tight text-xl uppercase">
                        <div className="w-1.5 h-6 bg-blue-600"></div>
                        {item}
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* WHY INSIGNIA SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-32 bg-white border-y border-slate-200"
      >
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
      </motion.section>

      {/* HOW WE WORK SECTION */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-20"
          >
            <h2 className="text-xs font-bold text-blue-600 mb-4 uppercase tracking-[0.4em]">Methodology</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter uppercase">How We Work</h3>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 shadow-2xl"
          >
            {steps.map((text, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -5, backgroundColor: "#f8fafc" }}
                className="bg-white p-8 md:p-12 transition-colors duration-500 group relative min-h-[250px]"
              >
                <div className="relative z-10">
                  <div className="w-10 h-1 bg-blue-600 mb-8 group-hover:w-16 transition-all duration-500"></div>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    {text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}