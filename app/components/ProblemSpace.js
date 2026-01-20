'use client';

import { useState } from 'react';

export default function ProblemSpace() {
  const [expandedCard, setExpandedCard] = useState(null);

  const capabilities = [
    {
      title: 'AI/ML Strategy & Implementation',
      description: 'Architecting and deploying enterprise AI solutions that deliver measurable business outcomes',
      icon: '🤖',
      details: [
        'Established AI Center of Excellence, upskilling 500+ employees',
        'Developed AI-driven Personalized Analytics products improving clinical outcomes by 20%',
        'Led patented AI algorithms for Provider search at Anthem',
        'Enterprise-wide AI strategy delivering $100M+ cost savings'
      ]
    },
    {
      title: 'Healthcare Transformation',
      description: 'Driving value-based care transformation across Payer, Provider, and Life Sciences ecosystems',
      icon: '🏥',
      details: [
        'VBC platform Go-to-Market for 20M+ population at Anthem',
        'Analytics platform deployment across multiple regional Blues',
        'Population health and clinical analytics product innovation',
        'MLR reduction, Risk Adjustment, and Payment integrity solutions'
      ]
    },
    {
      title: 'P&L Management & Growth',
      description: 'Driving revenue growth and managing complex P&L portfolios across consulting and product businesses',
      icon: '📈',
      details: [
        'Led enterprise initiatives from $25M to $200M+ in consulting revenue',
        'Grew business unit revenue by 40% YoY through strategic product launches',
        '$100M+ in client value delivered through Fortune 500 engagements',
        'Digital and Analytics Products driving Operating Model Transformation'
      ]
    },
    {
      title: 'Executive Advisory & Board Leadership',
      description: 'Providing strategic guidance to C-suite executives and serving as trusted advisor to tech startups',
      icon: '🎯',
      details: [
        'Regular keynote speaker at healthcare and AI conferences',
        'Advisor to tech startups on AI integration and product strategy',
        'Board advisory experience in healthcare technology',
        'Judge at Digital Health Hub evaluating innovative solutions'
      ]
    }
  ];

  return (
    <section id="capabilities" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Expertise In <span className="gradient-text">Healthcare & Technology</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            20+ years as a market maker, product strategist, management consultant, P&L owner, 
            and high-performing team builder across the healthcare ecosystem.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {capabilities.map((cap, index) => (
            <button
              key={index}
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              className="text-left glass rounded-2xl p-8 hover:shadow-xl transition-all duration-300 fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{cap.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {cap.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                {cap.description}
              </p>
              
              {/* Expandable Details */}
              {expandedCard === index && cap.details && (
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <p className="text-sm font-semibold text-purple-600 mb-3">Key Achievements:</p>
                  <ul className="space-y-2">
                    {cap.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="mt-4 text-purple-600 text-sm font-medium">
                {expandedCard === index ? '← Click to collapse' : 'Click to see achievements →'}
              </div>
            </button>
          ))}
        </div>

        {/* Bottom Context */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-slate-600 leading-relaxed">
            Whether it's <span className="font-semibold text-purple-600">Payer transformation</span>, 
            <span className="font-semibold text-purple-600"> Provider analytics</span>, 
            <span className="font-semibold text-purple-600"> Life Sciences strategy</span>, or 
            <span className="font-semibold text-purple-600"> AI-powered innovation</span> — 
            I partner across healthcare ecosystems to create partnerships that deliver measurable outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
