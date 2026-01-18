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
    <main className="min-h-screen">
      <Hero />

      {/* SECTION: CORE VERTICALS */}
      <section className="py-24 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {verticals.map((v, i) => (
              <div key={i} className="group p-8 border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl transition-all rounded-sm">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-600 mb-6">{v.desc}</p>
                <Link href="/what-we-do" className="text-xs font-bold text-blue-900 uppercase tracking-widest group-hover:underline">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: FEATURED WORK PREVIEW */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-xs font-bold text-blue-900 tracking-[0.3em] uppercase mb-4">Intellectual Output</h2>
              <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Featured Insights</h3>
            </div>
            <Link href="/work" className="hidden md:block text-slate-500 font-bold hover:text-blue-900 transition-colors">
              Browse All Work →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {['Articles', 'Podcasts', 'Newsletters'].map((type, i) => (
              <div key={i} className="relative aspect-square bg-slate-50 flex items-center justify-center group overflow-hidden border border-slate-100">
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/90 transition-all duration-500 z-10" />
                <span className="text-2xl font-bold text-slate-400 group-hover:text-white relative z-20 transition-colors uppercase tracking-widest">
                  {type}
                </span>
                <Link href="/work" className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <span className="bg-white text-blue-900 px-6 py-2 font-bold text-xs uppercase tracking-widest">View Archive</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}