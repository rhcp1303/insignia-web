import Hero from './components/Hero';
import Link from 'next/link';

export default function Home() {
  const verticals = [
    { title: "Public Finance", img: "/images/finance.png", desc: "Fiscal frameworks & revenue mobilisation." },
    { title: "Power Sector", img: "/images/power.png", desc: "Tariff design & energy economics." },
    { title: "Trade Policy", img: "/images/trade.png", desc: "Tariff analysis & export competitiveness." },
    { title: "Data Systems", img: "/images/data.png", desc: "Administrative data & AI forecasting." }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Hero />

      {/* CORE VERTICALS - FULL COLOR VERSION */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-xs font-bold text-blue-600 tracking-[0.3em] uppercase mb-4">Core Expertise</h2>
            <p className="text-3xl font-bold text-slate-900 leading-tight">
              We provide technical excellence at the intersection of theory and implementation.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4"> {/* Increased gap for a cleaner look */}
            {verticals.map((v, i) => (
              <div key={i} className="relative h-[500px] group overflow-hidden bg-slate-200">
                {/* Full Color Image Layer */}
                <img
                  src={v.img}
                  alt={v.title}
                  /* Removed grayscale, added hover zoom */
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-1000"
                />

                {/* Content Overlay - Stronger gradient for text protection */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent z-10" />

                <div className="relative z-20 p-10 h-full flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-md">{v.title}</h3>
                  <p className="text-white/90 leading-relaxed mb-6 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {v.desc}
                  </p>
                  <Link href="/what-we-do" className="text-[10px] font-black text-blue-400 uppercase tracking-widest flex items-center gap-2">
                    View Practice Area <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION - FULL COLOR BACKGROUND */}
      <section className="relative py-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/hero-bg.png"
            alt="Research background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">Ready to design implementable reforms?</h2>
          <Link href="/work" className="inline-block bg-white text-slate-900 px-12 py-5 font-bold uppercase tracking-widest text-xs hover:bg-blue-600 hover:text-white transition-all shadow-lg">
            Explore our research
          </Link>
        </div>
      </section>
    </main>
  );
}