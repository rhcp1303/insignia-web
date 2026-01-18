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
    <main className="bg-white selection:bg-blue-100">
      <Hero />

      {/* SECTION 1: CORE EXPERTISE - 100vh */}
      <section className="h-screen flex flex-col justify-center bg-[#F8FAFC] border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full">

          <div className="mb-12">
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.15] tracking-tight border-l-8 border-blue-600 pl-8 py-2">
              Our <span className="text-blue-600">Core Expertise</span> is providing technical excellence at the intersection of theory and implementation.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
            {verticals.map((v, i) => (
              <Link
                href={v.link}
                key={i}
                className="relative h-[48vh] group overflow-hidden rounded-2xl shadow-md border border-slate-200 block cursor-pointer bg-slate-900"
              >
                {/* Background Image */}
                <img
                  src={v.img}
                  alt={v.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 group-hover:opacity-100 transition-all duration-[1.5s] ease-in-out"
                />

                {/* Permanent Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10" />

                {/* Content Overlay */}
                <div className="relative z-20 p-8 h-full flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight tracking-tight group-hover:text-blue-400 transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed font-medium mb-6">
                    {v.desc}
                  </p>

                  <div className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] flex items-center gap-2">
                    Learn More <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: CTA - 100vh */}
      <section className="h-screen relative flex flex-col justify-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.png"
            alt="Research background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-12 tracking-tight leading-tight uppercase italic">
            Ready to design <br />
            <span className="text-blue-500 not-italic">implementable</span> reforms?
          </h2>
          <Link
            href="/work"
            className="inline-block bg-white text-slate-900 px-16 py-6 font-bold uppercase tracking-[0.2em] text-xs hover:bg-blue-600 hover:text-white transition-all shadow-2xl rounded-sm"
          >
            Explore our research
          </Link>
        </div>
      </section>
    </main>
  );
}