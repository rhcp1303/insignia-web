import Hero from './components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* The Hero component contains your main branding and mission statement */}
      <Hero />

      {/* Trust Bar / Core Pillars Overview */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-slate-500 font-medium text-sm tracking-wide">
              CORE ADVISORY VERTICALS
            </div>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
              <span className="text-blue-900/40 font-bold text-lg uppercase tracking-widest">Public Finance</span>
              <span className="text-blue-900/40 font-bold text-lg uppercase tracking-widest">Power Sector</span>
              <span className="text-blue-900/40 font-bold text-lg uppercase tracking-widest">Trade & Industry</span>
              <span className="text-blue-900/40 font-bold text-lg uppercase tracking-widest">Data Systems</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brief "Our Value" Callout */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-900">
                Bridging Rigorous Research with Institutional Reality
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                IPR provides evidence-based policy advisory that doesn't just look good on paper but works in the real world. By leveraging deep microdata analysis, we help governments and institutions navigate fiscally sustainable growth.
              </p>
            </div>
            <div className="bg-blue-900 p-10 rounded-sm text-white shadow-2xl">
              <p className="text-xl italic font-light leading-relaxed mb-6">
                "We specialise in designing reforms that are grounded in institutional realism and supported by granular data pipelines."
              </p>
              <div className="h-1 w-20 bg-blue-400"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}