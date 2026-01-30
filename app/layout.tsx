import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Insignia Policy Research | Evidence-based Policy Advisory",
  description: "Independent policy advisory firm specializing in public finance, power sector, and trade.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-slate-900 flex flex-col min-h-screen`}>
        {/* NAVIGATION BAR */}
        <nav className="border-b border-slate-100 sticky top-0 bg-white z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between gap-4">

            {/* LOGO AREA */}
            <Link href="/" className="relative flex items-center h-full w-[120px] md:w-[350px] shrink-0 overflow-hidden">
              <div className="relative h-full w-full transform scale-[1.2] md:scale-[2.2] origin-left">
                <Image
                  src="/images/logo.png"
                  alt="Insignia Policy Research"
                  fill
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'left center',
                    mixBlendMode: 'multiply'
                  }}
                  priority
                />
              </div>
            </Link>

            {/* DESKTOP NAV LINKS (Visible on Laptop) */}
            <div className="hidden lg:flex items-center gap-8 text-[11px] font-black tracking-widest text-slate-600 relative z-10">
              <Link href="/about-us" className="hover:text-blue-900 transition-colors uppercase">About Us</Link>
              <Link href="/what-we-do" className="hover:text-blue-900 transition-colors uppercase">What We Do</Link>
              <Link href="/who-we-are" className="hover:text-blue-900 transition-colors uppercase">Who We Are</Link>
              <Link href="/work" className="hover:text-blue-900 transition-colors uppercase">Our Work</Link>
              <Link
                href="/contact-us"
                className="bg-blue-900 text-white px-6 py-3 rounded-sm hover:bg-black transition-all ml-4 uppercase"
              >
                Contact Us
              </Link>
            </div>

            {/* MOBILE NAVIGATION - Complete & Scrollable */}
            <div className="lg:hidden flex items-center gap-3 overflow-hidden">
              <div className="flex items-center gap-4 overflow-x-auto no-scrollbar py-2 border-r border-slate-100 pr-3">
                <Link href="/about-us" className="text-[9px] font-bold uppercase tracking-tighter text-slate-500 whitespace-nowrap">About Us</Link>
                <Link href="/what-we-do" className="text-[9px] font-bold uppercase tracking-tighter text-slate-500 whitespace-nowrap">What We Do</Link>
                <Link href="/who-we-are" className="text-[9px] font-bold uppercase tracking-tighter text-slate-500 whitespace-nowrap">Who We Are</Link>
                <Link href="/work" className="text-[9px] font-bold uppercase tracking-tighter text-slate-500 whitespace-nowrap">Our Work</Link>
              </div>
              <Link
                href="/contact-us"
                className="bg-blue-900 text-white px-3 py-2 rounded-sm text-[10px] font-bold uppercase tracking-wider shrink-0"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>

        <main className="flex-grow min-h-dvh">
          {children}
        </main>

        <footer className="bg-slate-50 border-t border-slate-200 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
              <div className="col-span-1 lg:col-span-2 space-y-6">
                <div className="relative h-12 md:h-16 w-48 md:w-64 overflow-hidden">
                  <div className="relative h-full w-full transform scale-[1.5] md:scale-[1.8] origin-left">
                    <Image
                      src="/images/logo.png"
                      alt="Insignia Policy Research"
                      fill
                      style={{ objectFit: 'contain', objectPosition: 'left center', mixBlendMode: 'multiply' }}
                    />
                  </div>
                </div>
                <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
                  Independent policy advisory firm specializing in public finance,
                  power sector regulation, and trade policy grounded in institutional realism.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-xs mb-6 uppercase tracking-widest">Connect</h4>
                <address className="not-italic text-sm text-slate-500 space-y-4">
                  <div>
                    <p className="font-bold text-slate-700 text-[10px] uppercase tracking-wider mb-1">Registered Office</p>
                    <p>102, 11/160A, VKV Lane, Chembumukku,</p>
                    <p>Vazhakkala, Kakkanad, Ernakulam,</p>
                    <p>Kerala, India 682030</p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-700 text-[10px] uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:enquiry@iprglobal.com" className="text-blue-900 hover:text-black transition-colors font-medium">
                      enquiry@iprglobal.com
                    </a>
                  </div>
                </address>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-xs mb-6 uppercase tracking-widest">Identification</h4>
                <div className="text-sm text-slate-500">
                  <p className="text-[10px] text-slate-400 mb-2 uppercase">Corporate Identity Number</p>
                  <p className="font-mono text-[11px] font-semibold text-slate-700 bg-white border border-slate-200 p-2 inline-block rounded-sm">
                    U72200KL2024PTC088930
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-16 pt-8 border-t border-slate-200 text-center text-[10px] text-slate-400 uppercase tracking-[0.3em]">
              © 2026 Insignia Policy Research Pvt. Ltd. All Rights Reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}