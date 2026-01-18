import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
        <nav className="border-b border-slate-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            {/* LOGO AREA */}
            <Link href="/" className="flex flex-col items-start leading-none">
              <span className="font-bold text-xl tracking-tight text-blue-900">
                INSIGNIA POLICY RESEARCH
              </span>
              <span className="text-[10px] tracking-[0.2em] text-slate-500 font-medium mt-1 uppercase">
                Web Research & Advisory
              </span>
            </Link>

            {/* NAV LINKS - Pointing to your specific directories */}
            <div className="hidden lg:flex items-center gap-8 text-xs font-bold tracking-widest text-slate-600">
              <Link href="/about-us" className="hover:text-blue-900 transition-colors">ABOUT US</Link>
              <Link href="/what-we-do" className="hover:text-blue-900 transition-colors">WHAT WE DO</Link>
              <Link href="/who-we-are" className="hover:text-blue-900 transition-colors">WHO WE ARE</Link>
              <Link href="/work" className="hover:text-blue-900 transition-colors">OUR WORK</Link>
              <Link
                href="/contact-us"
                className="bg-blue-900 text-white px-5 py-2.5 rounded-sm hover:bg-blue-800 transition-all ml-4"
              >
                CONTACT US
              </Link>
            </div>

            {/* MOBILE MENU (Placeholder) */}
            <div className="lg:hidden">
              <button className="p-2 text-blue-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* MAIN CONTENT - This is where your page.tsx files will render */}
        <main className="flex-grow">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <footer className="bg-slate-50 border-t border-slate-200 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="col-span-1 lg:col-span-2 space-y-4">
                <h3 className="font-bold text-blue-900 uppercase tracking-wider">Insignia Policy Research</h3>
                <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
                  Independent policy advisory firm specializing in public finance,
                  power sector regulation, and trade policy grounded in institutional realism.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xs mb-4 uppercase tracking-widest">Office</h4>
                <address className="not-italic text-sm text-slate-500 space-y-1">
                  <p>Villa 6, Kent Palm Villas</p>
                  <p>Athani, Kochi – 682030</p>
                  <p className="text-blue-700 pt-2 font-medium">enquiry@iprglobal.com</p>
                </address>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xs mb-4 uppercase tracking-widest">Corporate</h4>
                <div className="text-sm text-slate-500">
                  <p>CIN: U72200KL2024PTC088930</p>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-200 text-center text-[10px] text-slate-400 uppercase tracking-[0.2em]">
              © 2024 Insignia Policy Research Pvt. Ltd. All Rights Reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}