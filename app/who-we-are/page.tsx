"use client"; // Required for the clickable toggle to work
import React, { useState } from 'react';
import Image from 'next/image';

export default function WhoWeArePage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleBio = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const members = [
    {
      id: 1,
      name: "Abhishek Anand",
      role: "Founder & Principal Economist",
      image: "/images/team/Abhishek.jpg",
      bio: "Abhishek Anand is a development economist specialising in public finance, power sector reform, and trade policy. He has advised multiple Indian state governments on fiscal and power sector reforms and contributes regularly to policy debates in India.",
      bullets: [
        "Visiting Fellow, Madras Institute of Development Studies",
        "Former Economist, World Bank",
        "MPA/ID, Harvard Kennedy School (2021)",
        "Consulting Economist, Peterson Institute for International Economics"
      ]
    },
    {
      id: 2,
      name: "Megha Jacob",
      role: "Affiliate / Research Specialist",
      image: "/images/team/Megha.jpeg",
      bio: "Ms. Megha Jacob is an Assistant Professor in the Department of Economics at Jesus and Mary College, University of Delhi, with over eight years of research and teaching experience. She is currently pursuing her Ph.D. in Economics at the TERI School of Advanced Studies, Delhi. Her areas of research include Development Economics, Health Economics, Econometrics, and Econophysics. She has also taught as Visiting Faculty at the Department of Finance and Business Economics, University of Delhi, offering a course on Simulation and Modelling in Business Management for the MBA (Business Economics) programme in 2025. She is the recipient of the SAARC Education Award for her contributions to Environmental Education. Ms. Jacob has worked on eight Indian government–funded research projects for institutions such as the NHRC, Ministry of Labour, NIEPA, Ministry of Panchayati Raj, and the Ministry of Statistics & Programme Implementation (CSO). She also served as Co-Investigator in India’s first national study on the Human Rights of Transgender Persons, sponsored by the NHRC. She co-authored the T20 South Africa 2025 policy brief on reducing health inequities through strengthening local public healthcare. Her publications include 11 research papers, two books—including one published by Cambridge Scholars Publishing—eight book chapters, five newspaper articles, and an e-lesson for the International Council of Sciences and the World Bank. She has been invited as a panelist and resource person at several national and international conferences.",
      bullets: [
        "Assistant Professor, University of Delhi",
        "SAARC Education Award Recipient",
        "NHRC Co-Investigator",
        "T20 South Africa 2025 Policy Brief Co-author"
      ]
    },
    {
      id: 3,
      name: "Prof. Naveen Joseph Thomas",
      role: "Affiliate / Industrial Policy Specialist",
      image: "/images/team/Naveen.jpeg",
      bio: "Prof. Naveen Joseph Thomas holds a Ph.D. in Economics from the Department of Economics, Delhi School of Economics, University of Delhi. He earned his M.Sc. in Economics from the TERI School of Advanced Studies and his B.Sc. (Honours) in Physics from St. Stephen’s College, University of Delhi. His research interests lie in industrial organisation and public policy. With over a decade of teaching experience, Prof. Thomas currently serves as Vice Dean at the Jindal School of Government and Public Policy, O. P. Jindal Global University. His ongoing research examines the impact of labour law deregulation in India and industrial policy outcomes, with a particular focus on the electronics systems design and manufacturing sector.",
      bullets: [
        "Ph.D. Economics, Delhi School of Economics",
        "Vice Dean, Jindal School of Government and Public Policy",
        "Industrial Organisation Expert",
        "M.Sc. TERI SAS & B.Sc. St. Stephen's College"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      <section className="bg-slate-50 py-16 border-b border-slate-100 mb-12">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2 uppercase tracking-tighter text-center">Who We Are</h1>
          <p className="text-slate-500 text-center font-medium uppercase tracking-[0.2em] text-xs">Our Core Team & Affiliates</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 space-y-6">
        {members.map((member) => (
          <div
            key={member.id}
            className="border border-slate-200 rounded-sm overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            {/* COLLAPSED HEADER */}
            <div
              className="flex items-center p-6 cursor-pointer select-none"
              onClick={() => toggleBio(member.id)}
            >
              <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 mr-6 border border-slate-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-xl font-bold text-slate-900">{member.name}</h2>
                <p className="text-blue-900 font-bold uppercase tracking-widest text-[10px]">{member.role}</p>
              </div>
              <div className="text-slate-400">
                <span className="text-2xl font-light">
                  {expandedId === member.id ? '−' : '+'}
                </span>
              </div>
            </div>

            {/* EXPANDABLE CONTENT */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                expandedId === member.id ? 'max-h-[2000px] border-t border-slate-100' : 'max-h-0'
              }`}
            >
              <div className="p-8 bg-slate-50/50">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-full">
                    <p className="text-slate-700 leading-relaxed whitespace-pre-line mb-8">
                      {member.bio}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {member.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-white p-3 border border-slate-200 rounded-sm">
                          <span className="w-1.5 h-1.5 bg-blue-900 rounded-full" />
                          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-tight">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}