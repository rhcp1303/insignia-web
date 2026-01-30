"use client";
import React from 'react';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Content starts directly */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-start">

            {/* Left: Communication Channels */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-6">Inquiries</h2>
                <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                  For advisory services, research collaborations, or general inquiries,
                  please reach out to our team. We aim to respond to all professional inquiries within 24–48 hours.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-100 flex items-center justify-center shrink-0">
                      <span className="text-blue-900 text-lg">✉</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Email Address</p>
                      <a href="mailto:enquiry@iprglobal.com" className="text-slate-900 font-semibold hover:text-blue-900 transition-colors">
                        enquiry@iprglobal.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-6">Registered Office</h2>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-100 flex items-center justify-center shrink-0">
                    <span className="text-blue-900 text-lg">📍</span>
                  </div>
                  <div>
                    <p className="text-slate-700 font-medium">102, 11/160A, VKV Lane, Chembumukku,</p>
                    <p className="text-slate-600 text-sm">Vazhakkala, Kakkanad, Ernakulam</p>
                    <p className="text-slate-600 text-sm">Kerala, India 682030</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-2">Corporate Identity</p>
                <p className="font-mono text-[10px] text-slate-500">CIN: U72200KL2024PTC088930</p>
              </div>
            </div>

            {/* Right: Direct Call to Action */}
            <div className="bg-blue-900 p-10 text-white rounded-sm shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Ready to collaborate?</h3>
              <p className="text-blue-100 mb-8 leading-relaxed text-sm">
                We are currently accepting new advisory projects and research partnerships.
                Please send us a formal brief via email, and our coordinator will
                connect you with the relevant policy lead.
              </p>

              <a
                href="mailto:enquiry@iprglobal.com"
                className="inline-block w-full text-center bg-white text-blue-900 py-4 font-bold text-xs uppercase tracking-widest hover:bg-slate-100 transition-colors"
              >
                Send Email Inquiry
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}