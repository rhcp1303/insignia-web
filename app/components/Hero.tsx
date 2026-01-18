import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          {/* Exact text requested */}
          <h1 className="text-blue-900 font-bold tracking-[0.3em] mb-8 uppercase text-sm">
            Insignia Policy Research
          </h1>

          <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-10">
            Evidence-based policy advisory for <span className="text-blue-800">fiscally sustainable growth</span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl leading-relaxed mb-12">
            Insignia Policy Research (IPR) is an independent policy advisory firm working with governments and institutions to design rigorous, implementable economic reforms. We specialise in public finance, power sector regulation, and trade and industrial policy—grounded in deep microdata analysis and institutional realism.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link
              href="/contact-us"
              className="bg-blue-900 text-white px-10 py-4 rounded-sm font-bold hover:bg-blue-800 transition-all shadow-lg"
            >
              Engage With Us
            </Link>
            <Link
              href="/what-we-do"
              className="bg-white text-blue-900 border border-blue-900/20 px-10 py-4 rounded-sm font-bold hover:bg-slate-50 transition-all"
            >
              Our Expertise →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}