'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { ArrowRight, Filter } from 'lucide-react';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 'enterprise-ai-strategy',
      title: 'Enterprise AI Strategy & Center of Excellence',
      company: 'Fortune 500 Healthcare',
      category: 'AI Strategy',
      year: '2021 - Present',
      status: 'Ongoing',
      summary: 'Architected and implemented enterprise-wide AI strategy, establishing AI Center of Excellence that upskilled 500+ employees and delivered $100M+ in cost savings.',
      impact: ['$100M+ cost savings', '30% operational efficiency', '500+ employees upskilled', 'AI CoE established'],
      tags: ['AI/ML Strategy', 'Enterprise Transformation', 'Change Management', 'Healthcare'],
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      id: 'vbc-consumer-platform',
      title: 'VBC Consumer & Commercial Platform',
      company: 'Anthem',
      category: 'Platform',
      year: '2018 - 2021',
      status: 'Delivered',
      summary: 'Pioneered Go-to-Market strategy for Value Based Care platform serving 20M+ population with analytics solutions across multiple regional Blues.',
      impact: ['20M+ population coverage', '10M+ analytics users', 'Patented AI algorithms', '20% clinical outcome improvement'],
      tags: ['Value Based Care', 'Population Health', 'Go-to-Market', 'Platform Strategy'],
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'digital-analytics-products',
      title: 'Digital & Analytics Product Suite',
      company: 'Anthem',
      category: 'Analytics',
      year: '2018 - 2021',
      status: 'Delivered',
      summary: 'Managed P&L for Analytics Products team, innovating across clinical analytics, cost of care, population health, employer analytics, and quality analytics.',
      impact: ['Full P&L ownership', 'Multi-product portfolio', 'Cross-functional teams of 200+', 'NPS improvement of 10%'],
      tags: ['P&L Management', 'Clinical Analytics', 'Quality Analytics', 'Product Innovation'],
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'payer-transformation',
      title: 'Payer Transformation Playbook',
      company: 'Highmark Health',
      category: 'Consulting',
      year: '2016 - 2018',
      status: 'Delivered',
      summary: 'Architected comprehensive payer transformation playbook covering employer reporting, provider performance analytics, stop-loss analytics, and predictive models.',
      impact: ['Two regional Blues transformed', 'Operating model modernization', 'Advisory services growth', 'Platform commercialization'],
      tags: ['Payer Strategy', 'Digital Products', 'Operating Model', 'Advisory Services'],
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      id: 'vbc-methodology',
      title: 'Value Based Transformation Methodology',
      company: 'KPMG',
      category: 'Consulting',
      year: '2010 - 2016',
      status: 'Delivered',
      summary: 'Developed industry-leading methodology for healthcare entities on Value based transformation including population health, clinical analytics, and delivery reform.',
      impact: ['C-Suite advisory engagements', '$100M+ client value', 'Fortune 500 healthcare clients', 'Big data roadmap methodology'],
      tags: ['VBC', 'Population Health', 'Consulting', 'Methodology Development'],
      gradient: 'from-orange-500 to-amber-600'
    },
    {
      id: 'cloud-migration-strategy',
      title: 'Cloud Migration & Cost Optimization',
      company: 'Healthcare Enterprise',
      category: 'Digital',
      year: '2016 - Present',
      status: 'Ongoing',
      summary: 'Spearheaded cloud migration strategy achieving 35% cost reduction while improving scalability and enabling 40% YoY revenue growth through strategic product launches.',
      impact: ['35% cost reduction', '40% YoY revenue growth', 'Improved scalability', 'New product enablement'],
      tags: ['Cloud Strategy', 'Cost Optimization', 'Digital Transformation', 'Revenue Growth'],
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      id: 'healthcare-mobility',
      title: 'Healthcare Mobility Solutions Portfolio',
      company: 'Sprint',
      category: 'Digital',
      year: '2006 - 2007',
      status: 'Delivered',
      summary: 'Architected healthcare marketing portfolio including case management alerts, mobile order tracking, and mobility solutions driving 85% improvement in ADT process.',
      impact: ['85% ADT process improvement', '20% cost reduction for BCBS', 'Healthcare mobility portfolio', 'Provider adoption accelerated'],
      tags: ['Healthcare IT', 'Mobility', 'Product Marketing', 'Process Optimization'],
      gradient: 'from-red-500 to-orange-600'
    },
    {
      id: 'ai-provider-search',
      title: 'Patented AI Algorithms for Provider Search',
      company: 'Anthem',
      category: 'AI Strategy',
      year: '2019 - 2021',
      status: 'Delivered',
      summary: 'Led development and launch of patented AI algorithms for Provider search optimization, improving member experience and provider network utilization.',
      impact: ['Patent granted', 'Improved member experience', 'Network optimization', 'AI-driven recommendations'],
      tags: ['AI/ML', 'Patent', 'Provider Network', 'Member Experience'],
      gradient: 'from-cyan-500 to-blue-600'
    }
  ];

  const categories = ['All', 'AI Strategy', 'Platform', 'Analytics', 'Consulting', 'Digital'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Portfolio
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              20+ years of transformational projects across healthcare, AI strategy, and digital innovation. 
              Each engagement represents measurable impact and lasting organizational change.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-gray-600">
              <Filter size={20} />
              <span className="font-medium">Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-purple-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Link key={project.id} href={`/portfolio/${project.id}`}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full">
                  {/* Gradient Header */}
                  <div className={`h-3 bg-gradient-to-r ${project.gradient}`}></div>
                  
                  <div className="p-8">
                    {/* Status & Category */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                        project.status === 'Ongoing' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {project.status}
                      </span>
                      <span className="text-purple-600 font-semibold text-sm">{project.category}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500 text-sm">{project.year}</span>
                    </div>

                    {/* Title & Company */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-purple-600 font-semibold mb-4">{project.company}</p>

                    {/* Summary */}
                    <p className="text-gray-700 mb-6">{project.summary}</p>

                    {/* Impact */}
                    <div className="bg-purple-50 rounded-xl p-4 mb-6">
                      <p className="text-xs font-bold text-gray-500 uppercase mb-2">Key Impact</p>
                      <ul className="space-y-1">
                        {project.impact.map((item, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-700">
                            <span className="text-purple-600 mr-2">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Details Link */}
                    <div className="flex items-center text-purple-600 font-semibold group-hover:gap-3 transition-all">
                      View Case Study <ArrowRight size={18} className="ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Healthcare Organization?
            </h2>
            <p className="text-purple-100 mb-8 text-lg max-w-2xl mx-auto">
              Let's discuss how AI and data-driven strategies can drive measurable outcomes for your organization.
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-8 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-purple-50 transition-colors"
            >
              Let's Talk
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
