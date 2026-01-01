import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Insignia Policy Research | Evidence-based Policy Advisory",
  description: "Independent policy advisory firm specializing in public finance, power sector, and trade.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-slate-900`}>
        <nav className="border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl tracking-tight text-blue-900">IPR</Link>
            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
              <Link href="/about" className="hover:text-blue-700">About</Link>
              <Link href="/practice" className="hover:text-blue-700">Practice Areas</Link>
              <Link href="/work" className="hover:text-blue-700">Work</Link>
              <Link href="/team" className="hover:text-blue-700">Team</Link>
              <Link href="/contact" className="hover:text-blue-700">Contact</Link>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        <footer className="bg-slate-50 border-t border-slate-200 mt-20 py-12">
          <div className="max-w-6xl mx-auto px-6 text-sm text-slate-500">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="font-bold text-slate-900 mb-2">Insignia Policy Research Pvt. Ltd.</p>
                <p>Villa 6, Kent Palm Villas, Athani, Kochi – 682030</p>
              </div>
              <div className="md:text-right">
                <p>CIN: U72200KL2024PTC088930</p>
                <p>enquiry@iprglobal.com</p>
              </div>
            </div>
            <div className="border-t border-slate-200 pt-6 flex justify-between">
              <p>© 2024 Insignia Policy Research. All rights reserved.</p>
              <div className="flex gap-4">
                <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
                <Link href="/disclaimer" className="hover:underline">Disclaimer</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}