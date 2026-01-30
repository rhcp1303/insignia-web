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
          <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
            {/* LOGO AREA */}
            <Link href="/" className="relative flex items-center h-full w-[250px] md:w-[350px] overflow-hidden">
              <div className="relative h-full w-full transform scale-[2.2] origin-left">
                <Image
                  src="/images/logo.png"
                  alt="Insignia Policy Research"
                  fill
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'left center',
                    filter: 'contrast(1.1) brightness(1.05)',
                    mixBlendMode: 'multiply'
                  }}
                  priority
                />
              </div>
            </Link>

            {/* NAV LINKS */}
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
          </div>
        </nav>

        {/* MAIN CONTENT */}
        <main className="flex-grow">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <footer className="bg-slate-50 border-t border-slate-200 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="col-span-1 lg:col-span-2 space-y-6">
                <div className="relative h-16 w-64 overflow-hidden">
                  <div className="relative h-full w-full transform scale-[1.8] origin-left">
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

              {/* Office Column */}
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

              {/* Corporate Column */}
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

            <div className="mt-16 pt-8 border-t border-slate-200 text-center text-[10px] text-slate-400 uppercase tracking-[0.3em]">
              © 2024 Insignia Policy Research Pvt. Ltd. All Rights Reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}