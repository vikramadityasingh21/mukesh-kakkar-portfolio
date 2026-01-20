'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function AboutMePage() {
  const [expandedExperience, setExpandedExperience] = useState(null);
  const [expandedEducation, setExpandedEducation] = useState(null);

  const experience = [
    {
      id: 1,
      title: "VP Growth Strategy, Digital and Analytics",
      company: "EXL",
      location: "Wheeling, Illinois",
      period: "June 2021 - Present",
      summary: "Leading Growth Strategy for Healthcare and Life Sciences Market",
      highlights: [
        "Growth Strategy for Healthcare and Life Sciences Market",
        "Analytics, Digital, and Data Driven Consulting and Transformation",
        "Product Innovation, Product Marketing, and Go-To-Market strategies"
      ],
      tags: ["Healthcare", "Growth Strategy", "Analytics"]
    },
    {
      id: 2,
      title: "Staff VP | Digital & Analytics Solutions",
      company: "Anthem",
      location: "Greater Chicago Area",
      period: "August 2018 - May 2021",
      summary: "Strategy and planning for Analytics Solutions including enterprise transformation",
      highlights: [
        "P&L management for Analytics Product and Solutions team",
        "Digital and analytics products across clinical analytics, cost of care, population health",
        "Go-to-Market strategy for VBC platform serving 20M+ population",
        "Led Launch of patented AI algorithms for Provider search"
      ],
      tags: ["P&L Management", "AI/ML", "Population Health"]
    },
    {
      id: 3,
      title: "Associate Principal",
      company: "Highmark Health",
      location: "Greater Pittsburgh Area",
      period: "May 2016 - August 2018",
      summary: "Strategic plan for advisory service and platform commercialization",
      highlights: [
        "Strategic plan for advisory service and platform commercialization growth",
        "Client Relationship Management for large payer clients",
        "Payer transformation playbook for multiple product lines",
        "Digital and Analytics Products for regional blue plans"
      ],
      tags: ["Platform Strategy", "Payer Transformation"]
    },
    {
      id: 4,
      title: "Manager, Healthcare Advisory",
      company: "KPMG",
      location: "Greater Chicago Area",
      period: "September 2010 - April 2016",
      summary: "Healthcare Consulting for Payers, Providers & Life Sciences",
      highlights: [
        "Executive advisory to C-level clients on business transformation",
        "Value based transformation methodology development",
        "Big-data roadmap for healthcare organizations",
        "Large complex enterprise projects for payers and providers"
      ],
      tags: ["Consulting", "VBC", "C-Suite Advisory"]
    }
  ];

  const education = [
    {
      id: 1,
      degree: "MBA, Consulting",
      institution: "University of Notre Dame",
      location: "Mendoza College of Business",
      highlights: ["Executive Leadership & Strategic Management"],
      icon: "🎓"
    },
    {
      id: 2,
      degree: "BTech, Computer Engineering",
      institution: "College of Technology, G.B.P.U.A&T",
      location: "Pantnagar, India",
      highlights: ["Technical foundation in Computer Engineering"],
      icon: "💻"
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Mukesh Kakkar</h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Results-driven technology and business leader with expertise in AI-led growth, 
                product innovation, and transformation across healthcare ecosystems.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-xl">
                <p className="text-3xl font-bold mb-2">$100M+</p>
                <p className="text-purple-100">Cost savings through AI strategy</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-green-500 to-green-700 text-white rounded-xl">
                <p className="text-3xl font-bold mb-2">30%</p>
                <p className="text-green-100">Operational efficiency gains</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-pink-500 to-pink-700 text-white rounded-xl">
                <p className="text-3xl font-bold mb-2">500+</p>
                <p className="text-pink-100">Employees upskilled in AI</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl">
                <p className="text-3xl font-bold mb-2">20M+</p>
                <p className="text-blue-100">Population covered by VBC platform</p>
              </div>
            </div>
          </section>

          <section id="experience" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id} className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-purple-300 transition-colors">
                  <button onClick={() => setExpandedExperience(expandedExperience === exp.id ? null : exp.id)} className="w-full p-6 text-left bg-white hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      {expandedExperience === exp.id ? <ChevronUp className="text-purple-600" size={24} /> : <ChevronDown className="text-gray-400" size={24} />}
                    </div>
                    <p className="text-purple-600 font-semibold">{exp.company}</p>
                    <p className="text-gray-500 text-sm">{exp.location} • {exp.period}</p>
                    <p className="text-gray-700 mt-2">{exp.summary}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.tags.map((tag) => (<span key={tag} className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">{tag}</span>))}
                    </div>
                  </button>
                  {expandedExperience === exp.id && (
                    <div className="px-6 pb-6 bg-gray-50 border-t border-gray-200">
                      <h4 className="font-bold text-gray-900 mt-4 mb-3">Key Accomplishments:</h4>
                      <ul className="space-y-2">
                        {exp.highlights.map((h, idx) => (<li key={idx} className="flex items-start text-gray-700"><span className="text-purple-600 mr-2 mt-1">•</span><span>{h}</span></li>))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section id="education" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id} className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-purple-300 transition-colors">
                  <button onClick={() => setExpandedEducation(expandedEducation === edu.id ? null : edu.id)} className="w-full p-6 text-left bg-white hover:bg-gray-50 transition-colors">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{edu.icon}</span>
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                          {expandedEducation === edu.id ? <ChevronUp className="text-purple-600" size={24} /> : <ChevronDown className="text-gray-400" size={24} />}
                        </div>
                        <p className="text-purple-600 font-semibold">{edu.institution}</p>
                        <p className="text-gray-500 text-sm">{edu.location}</p>
                      </div>
                    </div>
                  </button>
                  {expandedEducation === edu.id && (
                    <div className="px-6 pb-6 bg-gray-50 border-t border-gray-200">
                      <ul className="space-y-2 mt-4">
                        {edu.highlights.map((h, idx) => (<li key={idx} className="flex items-start text-gray-700"><span className="text-purple-600 mr-2 mt-1">•</span><span>{h}</span></li>))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="text-purple-100 mb-8 text-lg max-w-2xl mx-auto">I'm passionate about transforming healthcare through AI and data-driven insights.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/resume" className="inline-block px-8 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-purple-50 transition-colors">View Full Resume</Link>
              <Link href="/contact" className="inline-block px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">Contact Me</Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
