import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -z-10 h-full w-1/2 bg-slate-50 [mask-image:linear-gradient(to_left,white,transparent)]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-12 tracking-tight">
            Evidence-based policy advisory for <span className="text-blue-900">fiscally sustainable</span> growth.
          </h1>

          <p className="text-xl md:text-3xl text-slate-600 leading-relaxed font-light mb-12">
            Insignia Policy Research (IPR) is an independent policy advisory firm working with governments and institutions to design rigorous, implementable economic reforms. We specialise in <span className="text-slate-900 font-medium">public finance</span>, <span className="text-slate-900 font-medium">power sector regulation</span>, and <span className="text-slate-900 font-medium">trade and industrial policy</span>—grounded in deep microdata analysis and institutional realism.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link href="/contact-us" className="bg-blue-900 text-white px-8 py-4 rounded-sm font-bold hover:bg-blue-800 transition-all shadow-xl hover:-translate-y-1 text-xs uppercase tracking-widest">
              Engage With Us
            </Link>
            <Link href="/work" className="group flex items-center gap-2 text-slate-900 font-bold px-8 py-4 text-xs uppercase tracking-widest">
              View Our Recent Work
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}