import Hero from './components/Hero';
import Link from 'next/link';

export default function Home() {
  const verticals = [
    { title: "Public Finance", icon: "📊", desc: "Fiscal frameworks & revenue mobilisation." },
    { title: "Power Sector", icon: "⚡", desc: "Tariff design & energy economics." },
    { title: "Trade Policy", icon: "🌐", desc: "Tariff analysis & export competitiveness." },
    { title: "Data Systems", icon: "📉", desc: "Administrative data & AI forecasting." }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Hero />

      {/* CORE VERTICALS WITH IMAGE ACCENTS */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-xs font-bold text-blue-600 tracking-[0.3em] uppercase mb-4">Core Expertise</h2>
            <p className="text-3xl font-bold text-slate-900 leading-tight">
              We provide technical excellence at the intersection of theory and implementation.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-px bg-slate-100 border border-slate-100">
            {verticals.map((v, i) => (
              <div key={i} className="group p-12 bg-white hover:bg-slate-50 transition-all flex flex-col h-full">
                <div className="text-4xl mb-8 grayscale group-hover:grayscale-0 transition-all">{v.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{v.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-8 flex-grow">{v.desc}</p>
                <Link href="/what-we-do" className="text-[10px] font-black text-blue-600 uppercase tracking-widest flex items-center gap-2">
                  View Practice <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION WITH BACKGROUND */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="http://googleusercontent.com/image_collection/image_retrieval/10406166739869623401_0"
            alt="Research background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">Ready to design implementable reforms?</h2>
          <Link href="/work" className="inline-block bg-slate-900 text-white px-12 py-5 font-bold uppercase tracking-widest text-xs hover:bg-blue-600 transition-colors">
            Explore our research
          </Link>
        </div>
      </section>
    </main>
  );
}