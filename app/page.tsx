import Hero from './components/Hero';
import Link from 'next/link';

export default function Home() {
  const verticals = [
    {
      title: "Public Finance & Fiscal Policy",
      img: "/images/finance.png",
      desc: "We advise governments on strengthening fiscal sustainability and improving the efficiency and equity of public finance systems.",
      link: "/what-we-do#finance"
    },
    {
      title: "Power Sector & Energy Economics",
      img: "/images/power.png",
      desc: "Our work in the power sector focuses on restoring financial viability while protecting vulnerable consumers.",
      link: "/what-we-do#power"
    },
    {
      title: "Trade, Industrial & Regulatory Policy",
      img: "/images/trade.png",
      desc: "We analyse how trade and regulatory policies affect competitiveness, exports, and employment.",
      link: "/what-we-do#trade"
    },
    {
      title: "Data Systems & Digital Policy Tools",
      img: "/images/data.png",
      desc: "We help governments move from ad-hoc analysis to institutionalised analytics through digital tools.",
      link: "/what-we-do#data"
    }
  ];

  return (
    /* SNAPPING ENGINE:
       - h-[calc(100vh-6rem)]: Limits height to the viewable area below the nav.
       - snap-y snap-mandatory: Enables the gliding lock-on effect.
    */
    <main className="h-[calc(100vh-6rem)] overflow-y-auto snap-y snap-mandatory scroll-smooth bg-white selection:bg-blue-100">

      {/* SECTION 0: HERO - Wrapped for snapping */}
      <section className="h-full snap-start">
        <Hero />
      </section>

      {/* SECTION 1: CORE EXPERTISE */}
      <section className="h-full snap-start flex flex-col justify-center bg-[#FDFDFD] border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="mb-14">
            <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight max-w-5xl relative">
              Our <span className="relative">Core Expertise<span className="absolute bottom-1 left-0 w-full h-2 bg-blue-600/20 -z-10"></span></span> is providing technical excellence at the intersection of theory and implementation.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            {verticals.map((v, i) => (
              <Link
                href={v.link}
                key={i}
                className="relative h-[45vh] group overflow-hidden rounded-xl border border-slate-200 block cursor-pointer bg-slate-900 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-blue-200"
              >
                <img
                  src={v.img}
                  alt={v.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-10" />
                <div className="relative z-20 p-8 h-full flex flex-col justify-end">
                  <h3 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-slate-300 text-[13px] leading-relaxed font-normal mb-6 opacity-90">
                    {v.desc}
                  </p>
                  <div className="text-[10px] font-black text-blue-500 uppercase tracking-[0.25em] flex items-center gap-2">
                    Learn More
                    <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: CTA */}
      <section className="h-full snap-start relative flex flex-col justify-center bg-[#020617] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.png"
            alt="Research background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-12 tracking-tighter leading-[1.1]">
            READY TO DESIGN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">IMPLEMENTABLE</span> REFORMS?
          </h2>
          <Link
            href="/work"
            className="inline-block bg-white text-slate-950 px-14 py-5 font-black uppercase tracking-[0.2em] text-xs hover:bg-blue-600 hover:text-white transition-all shadow-xl"
          >
            Explore our research
          </Link>
        </div>
      </section>
    </main>
  );
}