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
    /* WEBSITE FIX:
       1. 'h-[calc(100vh-6rem)]' stays for desktop to lock the height.
       2. 'overflow-y-overlay' (if supported) or 'overflow-y-auto' keeps the scrollbar from shifting layout.
    */
    <main className="flex-grow min-h-screen md:h-[calc(100vh-6rem)] md:overflow-y-auto md:snap-y md:snap-mandatory scroll-smooth bg-white">

      {/* SECTION 0: HERO
          Using 'max-h-full' on desktop ensures it never exceeds the container.
      */}
      <section className="min-h-[85vh] md:h-full md:max-h-full md:snap-start flex items-center overflow-hidden">
        <div className="w-full h-full">
           <Hero />
        </div>
      </section>

      {/* SECTION 1: CORE EXPERTISE
          The 'box-border' ensures the padding doesn't push the section height past 100%.
      */}
      <section className="min-h-screen md:h-full md:max-h-full md:snap-start flex flex-col justify-center bg-[#FDFDFD] border-b border-slate-200 box-border py-12 md:py-0">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="mb-8 md:mb-14">
            <p className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight max-w-5xl">
              Our Core Expertise is providing technical excellence at the intersection of theory and implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {verticals.map((v, i) => (
              <Link
                href={v.link}
                key={i}
                className="relative h-[35vh] md:h-[40vh] lg:h-[45vh] group overflow-hidden rounded-xl border border-slate-200 block bg-slate-900"
              >
                <img
                  src={v.img}
                  alt={v.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-10" />
                <div className="relative z-20 p-6 md:p-8 h-full flex flex-col justify-end">
                  <h3 className="text-base md:text-lg font-bold text-white mb-2 tracking-tight group-hover:text-blue-400">
                    {v.title}
                  </h3>
                  <p className="text-slate-300 text-[12px] md:text-[13px] leading-relaxed mb-4 opacity-90">
                    {v.desc}
                  </p>
                  <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest flex items-center gap-2">
                    Learn More <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: CTA */}
      <section className="min-h-screen md:h-full md:max-h-full md:snap-start relative flex flex-col justify-center bg-[#020617] py-12 md:py-0">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.png"
            alt="Research background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-6xl font-black text-white mb-8 md:mb-12 tracking-tighter leading-tight">
            READY TO DESIGN <br />
            <span className="text-blue-400">IMPLEMENTABLE</span> REFORMS?
          </h2>
          <Link
            href="/work"
            className="inline-block bg-white text-slate-950 px-8 md:px-14 py-4 md:py-5 font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-blue-600 hover:text-white transition-all shadow-xl"
          >
            Explore our research
          </Link>
        </div>
      </section>
    </main>
  );
}