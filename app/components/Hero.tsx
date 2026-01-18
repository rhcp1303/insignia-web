import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.png"
          alt="Infrastructure and Growth"
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
            Evidence-based policy advisory for <span className="text-blue-400">fiscally sustainable</span> growth.
          </h1>

          <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light mb-12">
            Insignia Policy Research (IPR) is an independent policy advisory firm working with governments and institutions to design rigorous, implementable economic reforms. We specialise in <span className="text-white font-medium">public finance</span>, <span className="text-white font-medium">power sector regulation</span>, and <span className="text-white font-medium">trade and industrial policy</span>—grounded in deep microdata analysis and institutional realism.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link href="/contact-us" className="bg-blue-600 text-white px-10 py-4 rounded-sm font-bold hover:bg-blue-500 transition-all text-xs uppercase tracking-widest">
              Engage With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}