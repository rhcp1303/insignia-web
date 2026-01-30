"use client";
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
      linkedin: "https://www.linkedin.com/in/abhishek-anand-b6a9811a/",
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
      name: "Ammu Suresh",
      role: "Director",
      image: "/images/team/Ammu.jpeg",
      linkedin: "",
      bio: "Ammu Suresh is a Director at Insignia Policy Research, where she leads the organisation’s legal and regulatory work. A lawyer by training, she holds a B.A. LL.B. from Delhi University and a B.Sc. (Chemistry Honours) from St. Stephen’s College.\n\nBefore joining Insignia, Ammu practiced law at the Supreme Court of India and the Customs, Excise and Service Tax Appellate Tribunal (CESTAT), specialising in regulatory, tax, and appellate matters. She brings this experience to Insignia’s engagements with state governments, advising on legal strategy, regulatory design, and the statutory dimensions of power-sector and fiscal reforms.",
      bullets: [
        "Legal & Regulatory Affairs Lead",
        "Advocate, Supreme Court of India (Former)",
        "B.A. LL.B., Delhi University",
        "B.Sc. (Hons) Chemistry, St. Stephen's College"
      ]
    },
    {
      id: 3,
      name: "Megha Jacob",
      role: "Affiliate / Research Specialist",
      image: "/images/team/Megha.jpeg",
      linkedin: "https://www.linkedin.com/in/megha-jacob-8854b258/",
      bio: "Ms. Megha Jacob is an Assistant Professor in the Department of Economics at Jesus and Mary College, University of Delhi, with over eight years of research and teaching experience. She is currently pursuing her Ph.D. in Economics at the TERI School of Advanced Studies, Delhi. Her areas of research include Development Economics, Health Economics, Econometrics, and Econophysics. She has also taught as Visiting Faculty at the Department of Finance and Business Economics, University of Delhi, offering a course on Simulation and Modelling in Business Management for the MBA (Business Economics) programme in 2025. She is the recipient of the SAARC Education Award for her contributions to Environmental Education. Ms. Jacob has worked on eight Indian government–funded research projects for institutions such as the NHRC, Ministry of Labour, NIEPA, Ministry of Panchayati Raj, and the Ministry of Statistics & Programme Implementation (CSO). She also served as Co-Investigator in India’s first national study on the Human Rights of Transgender Persons, sponsored by the NHRC. She co-authored the T20 South Africa 2025 policy brief on reducing health inequities through strengthening local public healthcare. Her publications include 11 research papers, two books—including one published by Cambridge Scholars Publishing—eight book chapters, five newspaper articles, and an e-lesson for the International Council of Sciences and the World Bank. She has been invited as a panelist and resource person at several national and international conferences.",
      bullets: [
        "Assistant Professor, University of Delhi",
        "SAARC Education Award Recipient",
        "NHRC Co-Investigator",
        "T20 South Africa 2025 Policy Brief Co-author"
      ]
    },
    {
      id: 4,
      name: "Prof. Naveen Joseph Thomas",
      role: "Affiliate / Industrial Policy Specialist",
      image: "/images/team/Naveen.jpeg",
      linkedin: "https://www.linkedin.com/in/naveen-joseph-thomas/",
      bio: "Prof. Naveen Joseph Thomas holds a Ph.D. in Economics from the Department of Economics, Delhi School of Economics, University of Delhi. He earned his M.Sc. in Economics from the TERI School of Advanced Studies and his B.Sc. (Honours) in Physics from St. Stephen’s College, University of Delhi. His research interests lie in industrial organisation and public policy. With over a decade of teaching experience, Prof. Thomas currently serves as Vice Dean at the Jindal School of Government and Public Policy, O. P. Jindal Global University. His ongoing research examines the impact of labour law deregulation in India and industrial policy outcomes, with a particular focus on the electronics systems design and manufacturing sector.",
      bullets: [
        "Ph.D. Economics, Delhi School of Economics",
        "Vice Dean, Jindal School of Government and Public Policy",
        "Industrial Organisation Expert",
        "M.Sc. TERI SAS & B.Sc. St. Stephen's College"
      ]
    },
    {
      id: 5,
      name: "Navneeraj Sharma",
      role: "Senior Visiting Fellow",
      image: "/images/team/Navneeraj.jpeg",
      linkedin: "https://www.linkedin.com/in/navneeraj-sharma-117439181/",
      bio: "Navneeraj Sharma is a Senior Visiting Fellow at Insignia Policy Research, advising the organisation on energy economics, power-sector reform, and India’s broader green transition agenda. With academic training in both economics and electrical engineering—from the Delhi School of Economics and Punjab Engineering College—he brings a distinctive blend of analytical and technical expertise to questions of how India can build a cleaner, more efficient, and financially sustainable power system.\n\nAs an energy economist, Navneeraj works on electricity market design, renewable-energy integration, utility finances, and the political economy of power-sector reforms. His research and advisory engagements span tariff rationalisation, subsidy redesign, grid readiness for renewables, and the fiscal implications of decarbonisation pathways.",
      bullets: [
        "Expert in Energy Economics & Power Sector Reform",
        "Delhi School of Economics Alumnus",
        "Specialist in Renewable Energy Integration",
        "Electrical Engineering & Economics Background"
      ]
    },
    {
      id: 6,
      name: "Ashish Ranjan",
      role: "Affiliate / Infrastructure Specialist",
      image: "/images/team/Ashish.jpeg",
      linkedin: "https://www.linkedin.com/in/ashishranjan09350743388/",
      bio: "Ashish Ranjan is an infrastructure and development professional with extensive experience in the sustainability domain through ADB projects across India and South Asia. He brings strong technical and managerial foundations to the team, currently serving as National Head of Projects at Maccaferri, with prior roles at Tata Steel and Bechtel contributing to deep expertise in large-scale project delivery.\n\nAshish is recognized for excellence in risk management, policy support, and driving measurable development impact within government systems and externally funded project frameworks. He is known for navigating complex multi-stakeholder environments in infrastructure, sustainability, and public-sector engagements.",
      bullets: [
        "National Head of Projects, Maccaferri",
        "Sustainability Specialist (ADB Projects)",
        "MBA NICMAR & Civil Engineering BIT Mesra",
        "Expert in Risk Management & Infrastructure"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-24 pt-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Adjusted grid for smaller tiles: added gap-16 and center-alignment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center">
          {members.map((member) => (
            <div key={member.id} className="flex flex-col w-full max-w-[280px]">
              <div
                className="relative aspect-square mb-4 overflow-hidden bg-slate-100 cursor-pointer border border-slate-200"
                onClick={() => toggleBio(member.id)}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-center md:text-center">
                <h2 className="text-lg font-semibold text-slate-900 leading-tight mb-1">{member.name}</h2>
                <p className="text-#FF5C35 uppercase tracking-widest text-[12px] mb-3">
                  {member.role}
                </p>

                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => toggleBio(member.id)}
                    className="text-[11px] underline font-medium tracking-[0.15em] text-slate-900 cursor-pointer"
                  >
                    View Profile
                  </button>

                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0077B5] hover:scale-110 transition-transform cursor-pointer"
                      title="LinkedIn Profile"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* MODAL DRAWER */}
              {expandedId === member.id && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm cursor-pointer animate-in fade-in duration-300"
                  onClick={() => setExpandedId(null)}
                >
                   <div
                    className="bg-white w-full max-w-3xl max-h-[85vh] overflow-y-auto p-8 md:p-12 relative shadow-2xl rounded-sm cursor-default"
                    onClick={(e) => e.stopPropagation()}
                   >
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/3 shrink-0">
                          <div className="relative aspect-square w-full mb-6 border border-slate-100">
                            <Image src={member.image} alt={member.name} fill className="object-cover" />
                          </div>
                          <div className="space-y-2">
                            {member.bullets.map((bullet, idx) => (
                              <div key={idx} className="flex items-start gap-2 bg-slate-50 p-2 border border-slate-100">
                                <span className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-1.5 shrink-0" />
                                <span className="text-[9px] font-bold text-slate-600 uppercase leading-tight">{bullet}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="md:w-2/3">
                          <div className="flex justify-between items-start">
                            <h2 className="text-3xl font-semibold text-slate-900 leading-none">{member.name}</h2>
                            {member.linkedin && (
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#0077B5] hover:opacity-80 transition-opacity cursor-pointer"
                              >
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                              </a>
                            )}
                          </div>
                          <div className="h-1 w-10 bg-blue-900 my-4"></div>
                          <p className="text-blue-900 font-bold uppercase tracking-widest text-xs mb-4">{member.role}</p>
                          <p className="text-slate-600 text-[15px] leading-relaxed whitespace-pre-line">
                            {member.bio}
                          </p>
                        </div>
                      </div>
                   </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}