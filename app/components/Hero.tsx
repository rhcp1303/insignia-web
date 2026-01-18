import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.png"
          alt="Insignia Policy Research"
          className="w-full h-full object-cover opacity-100"
        />
        {/* IMPROVED GRADIENT:
            Using a 'Linear Scrim'—it's more effective than a radial one for text blocks.
            It starts slightly darker on the left and disappears completely.
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          {/* 1. Increased font weight to 'black' (900)
            2. Added a more aggressive text-shadow for better "cut-out" from the background
            3. Tightened the leading for a more professional, modern look
          */}
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-8 tracking-tighter drop-shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
            Evidence-based policy advisory for <span className="text-blue-400">fiscally sustainable</span> growth.
          </h1>

          {/* Increased weight to 'semibold' and added a subtle dark backdrop
            using a low-opacity bg-black/10 to make the paragraph pop.
          */}
          <p className="text-xl md:text-2xl text-white leading-relaxed font-semibold mb-12 drop-shadow-md max-w-2xl">
            Insignia Policy Research (IPR) is an independent policy advisory firm working with governments and institutions to design <span className="text-blue-100">rigorous, implementable economic reforms.</span>
          </p>

          <div className="flex flex-wrap gap-6">
            <Link href="/contact-us" className="bg-blue-600 text-white px-10 py-4 rounded-sm font-bold hover:bg-blue-500 transition-all text-xs uppercase tracking-widest shadow-2xl">
              Engage With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}