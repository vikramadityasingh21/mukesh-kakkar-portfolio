'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Download, Printer, Mail, Linkedin, MapPin, Phone } from 'lucide-react';

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100">
        <div className="sticky top-16 z-30 bg-white border-b border-gray-200 print:hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Resume</h1>
            <div className="flex gap-3">
              <a href="/Mukesh_Kakkar_Resume.pdf" download className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                <Download size={20} />
                <span className="hidden sm:inline">Download PDF</span>
              </a>
              <button onClick={handlePrint} className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors">
                <Printer size={20} />
                <span className="hidden sm:inline">Print</span>
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 print:py-0">
          <div className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none">
            
            <div className="bg-gradient-to-r from-purple-700 to-purple-900 text-white p-8 print:bg-purple-700">
              <h1 className="text-4xl font-bold mb-2">MUKESH KAKKAR, MBA</h1>
              <p className="text-purple-200 text-lg mb-4">Product & Technology Leader | Healthcare & AI Expert</p>
              <div className="flex flex-wrap gap-4 mt-4 text-purple-100 text-sm">
                <span className="flex items-center gap-1"><MapPin size={16} />Prospect Heights, Illinois</span>
                <span className="flex items-center gap-1"><Mail size={16} />mukeshkakkar@gmail.com</span>
                <span className="flex items-center gap-1"><Phone size={16} />847-810-9590</span>
                <span className="flex items-center gap-1"><Linkedin size={16} />linkedin.com/in/mukeshkakkar</span>
              </div>
            </div>

            <div className="p-8">
              <section className="mb-8">
                <h2 className="text-xl font-bold text-purple-700 border-b-2 border-purple-200 pb-2 mb-4">PROFILE SUMMARY</h2>
                <p className="text-gray-700 leading-relaxed">
                  Results-driven technology and business leader with expertise in AI-led growth, product innovation, and transformation. 
                  Specialized across healthcare (Payer, Provider, Pharma) with a focus on reducing total cost of care through AI & Data-led insights. 
                  Broad experience as market maker, product strategist, management consultant, P&L owner, and high-performing team builder.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold text-purple-700 border-b-2 border-purple-200 pb-2 mb-4">KEY ACHIEVEMENTS</h2>
                <ul className="space-y-3">
                  <li className="flex items-start"><span className="text-purple-600 font-bold mr-2">●</span><span><strong className="text-purple-700">$100M+ Cost Savings</strong> | Architected and implemented enterprise-wide AI strategy, resulting in 30% operational efficiency</span></li>
                  <li className="flex items-start"><span className="text-purple-600 font-bold mr-2">●</span><span><strong className="text-purple-700">$200M+ Enterprise Revenue</strong> | Led enterprise initiatives ranging from $25M to $200M+ in consulting and product revenue</span></li>
                  <li className="flex items-start"><span className="text-purple-600 font-bold mr-2">●</span><span><strong className="text-purple-700">40% YoY Growth</strong> | Grew business unit revenue through strategic product launches and expanded service offerings</span></li>
                  <li className="flex items-start"><span className="text-purple-600 font-bold mr-2">●</span><span><strong className="text-purple-700">AI Center of Excellence</strong> | Established CoE fostering innovation and upskilling 500+ employees in AI technologies</span></li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold text-purple-700 border-b-2 border-purple-200 pb-2 mb-4">SKILLS & EXPERTISE</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Strategic</h3>
                    <p className="text-sm text-gray-600">AI/ML Strategy, Technology Leadership, Product Innovation, Digital Transformation, CXO Advisory, M&A, P&L Management</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Healthcare</h3>
                    <p className="text-sm text-gray-600">Value Based Care, Population Health, Risk Adjustment, Payment Integrity, Clinical Analytics, Personalized Medicine</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Technical</h3>
                    <p className="text-sm text-gray-600">Enterprise Architecture, Cloud Computing, Data Analytics, Agile Methodologies, Innovation Management</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold text-purple-700 border-b-2 border-purple-200 pb-2 mb-4">WORK EXPERIENCE</h2>

                <div className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div><h3 className="text-lg font-bold text-gray-900">VP Growth Strategy, Digital and Analytics</h3><p className="text-purple-600 font-semibold">EXL</p></div>
                    <span className="text-gray-600 text-sm whitespace-nowrap">June 2021 - Present</span>
                  </div>
                  <p className="text-gray-600 italic mb-2">Growth Strategy for Healthcare and Life Sciences Market</p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Analytics, Digital, and Data Driven Consulting and Transformation</li>
                    <li>• Product Innovation, Product Marketing, and Go-To-Market strategies</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div><h3 className="text-lg font-bold text-gray-900">Staff VP | Digital & Analytics Solutions</h3><p className="text-purple-600 font-semibold">Anthem</p></div>
                    <span className="text-gray-600 text-sm whitespace-nowrap">Aug 2018 - May 2021</span>
                  </div>
                  <p className="text-gray-600 italic mb-2">Strategy and planning for Analytics Solutions including enterprise transformation</p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• P&L management for Analytics Product and Solutions team</li>
                    <li>• Go-to-Market strategy for VBC platform serving 20M+ population</li>
                    <li>• Led patented AI algorithms for Provider search</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div><h3 className="text-lg font-bold text-gray-900">Associate Principal</h3><p className="text-purple-600 font-semibold">Highmark Health</p></div>
                    <span className="text-gray-600 text-sm whitespace-nowrap">May 2016 - Aug 2018</span>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Strategic plan for advisory service and platform commercialization</li>
                    <li>• Digital and Analytics Products for regional blue plans</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div><h3 className="text-lg font-bold text-gray-900">Manager, Healthcare Advisory</h3><p className="text-purple-600 font-semibold">KPMG</p></div>
                    <span className="text-gray-600 text-sm whitespace-nowrap">Sep 2010 - Apr 2016</span>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Executive advisory to C-level clients on business transformation</li>
                    <li>• Value based transformation methodology development</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold text-purple-700 border-b-2 border-purple-200 pb-2 mb-4">EDUCATION</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h3 className="font-bold text-gray-900">MBA, Consulting</h3>
                    <p className="text-purple-600">University of Notre Dame</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h3 className="font-bold text-gray-900">BTech, Computer Engineering</h3>
                    <p className="text-purple-600">College of Technology, G.B.P.U.A&T, Pantnagar</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-purple-700 border-b-2 border-purple-200 pb-2 mb-4">CERTIFICATIONS</h2>
                <div className="flex flex-wrap gap-2">
                  {['AI Application for Growth', 'Business Transformation with Google Cloud', 'ML for Healthcare', 'AI Strategies for Business', 'Board Director Program'].map((cert) => (
                    <span key={cert} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">{cert}</span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <style jsx global>{`
        @media print {
          body { background: white !important; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          .print\\:hidden { display: none !important; }
          .print\\:shadow-none { box-shadow: none !important; }
          .print\\:py-0 { padding-top: 0 !important; padding-bottom: 0 !important; }
          header, footer { display: none !important; }
        }
      `}</style>
    </>
  );
}
