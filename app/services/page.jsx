'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Search, Target, Map, Rocket, Users, BarChart3, ArrowRight, CheckCircle, Layers, GitBranch, Settings, Zap, Lightbulb, Award } from 'lucide-react';

export default function ServicesPage() {
  const [activePhase, setActivePhase] = useState(null);

  const operatingPhases = [
    { id: 'discover', number: '01', title: 'Discover', subtitle: 'Context & Problem Framing', icon: Search, color: 'from-purple-500 to-purple-600', description: 'Understand healthcare business context, constraints, and incentives. Identify real problems vs. symptoms.', activities: ['Stakeholder interviews & alignment', 'Current-state assessments', 'Value chain & service mapping', 'Competitive & market analysis'], outcomes: ['Clear problem statements', 'Shared understanding', 'Success metrics defined'] },
    { id: 'strategize', number: '02', title: 'Strategize', subtitle: 'Vision & Strategic Direction', icon: Target, color: 'from-indigo-500 to-indigo-600', description: 'Create compelling, executable vision. Define value propositions and strategic themes.', activities: ['Vision narratives & north-star', 'Value proposition design', 'Strategic trade-off analysis', 'Business case development'], outcomes: ['Direction teams can align behind', 'Strategy that guides decisions'] },
    { id: 'plan', number: '03', title: 'Plan', subtitle: 'Strategic Roadmapping', icon: Map, color: 'from-blue-500 to-blue-600', description: 'Balance short-term delivery with long-term vision. Create decision-ready roadmaps.', activities: ['Now/Next/Later prioritization', 'Dependency mapping', 'Resource & capacity planning', 'Risk assessment'], outcomes: ['Decision-ready roadmaps', 'Clear milestones'] },
    { id: 'execute', number: '04', title: 'Execute', subtitle: 'Delivery & Implementation', icon: Rocket, color: 'from-emerald-500 to-emerald-600', description: 'End-to-end ownership from idea to impact. No handoffs or silos.', activities: ['Sprint planning & backlog management', 'Cross-functional coordination', 'Blocker resolution', 'Quality assurance'], outcomes: ['Continuous flow from idea to impact', 'Predictable delivery'] },
    { id: 'scale', number: '05', title: 'Scale', subtitle: 'Program & Team Structure', icon: Users, color: 'from-orange-500 to-orange-600', description: 'Design programs for clarity, speed, and accountability.', activities: ['Program structures & governance', 'Team topologies implementation', 'Decision rights (RACI)', 'Dependency management'], outcomes: ['Predictable delivery', 'Reduced friction'] },
    { id: 'optimize', number: '06', title: 'Optimize', subtitle: 'Measurement & Learning', icon: BarChart3, color: 'from-pink-500 to-pink-600', description: 'Measure outcomes, not just outputs. Build feedback loops.', activities: ['KPI definition & tracking', 'Analytics implementation', 'Retrospectives & learning', 'Process optimization'], outcomes: ['Sustainable success', 'Data-driven decisions'] }
  ];

  const frameworks = [
    { category: 'AI & Analytics Strategy', icon: Layers, items: [{ name: 'AI Strategy Development', desc: 'Enterprise-wide AI roadmaps and implementation' }, { name: 'Data & Analytics Architecture', desc: 'Building data platforms for healthcare insights' }, { name: 'ML Model Development', desc: 'Custom models for clinical and operational use cases' }] },
    { category: 'Healthcare Transformation', icon: GitBranch, items: [{ name: 'Value-Based Care', desc: 'VBC program design and implementation' }, { name: 'Population Health', desc: 'Analytics and interventions at scale' }, { name: 'Clinical Analytics', desc: 'Quality, outcomes, and cost optimization' }] },
    { category: 'Product & Platform', icon: Zap, items: [{ name: 'Product Strategy', desc: 'Market positioning and go-to-market' }, { name: 'Platform Development', desc: 'Scalable healthcare technology platforms' }, { name: 'Digital Transformation', desc: 'End-to-end modernization programs' }] },
    { category: 'Leadership & Advisory', icon: Settings, items: [{ name: 'Board Advisory', desc: 'Strategic guidance for healthcare boards' }, { name: 'Executive Coaching', desc: 'C-suite leadership development' }, { name: 'M&A Due Diligence', desc: 'Technology and capability assessment' }] }
  ];

  const timelinePlan = [
    { phase: 'Days 1-30', title: 'Listen & Learn', color: 'bg-purple-600', items: ['Stakeholder mapping', 'Current state assessment', 'Quick win identification', 'Strategic alignment'] },
    { phase: 'Days 31-60', title: 'Build & Execute', color: 'bg-indigo-600', items: ['Roadmap development', 'Team structure optimization', 'Process implementation', 'Governance setup'] },
    { phase: 'Days 61-90', title: 'Scale & Optimize', color: 'bg-blue-600', items: ['Performance measurement', 'Continuous improvement', 'Knowledge transfer', 'Long-term planning'] }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-purple-100 border border-purple-300 rounded-full text-purple-700 text-sm font-medium mb-4">Services & Expertise</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How I Can Help</h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                From AI strategy to healthcare transformation — I partner with organizations to deliver measurable outcomes 
                through structured approaches and proven methodologies.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Operating Model</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">A structured approach from discovery to delivery</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {operatingPhases.map((phase) => {
                const Icon = phase.icon;
                return (
                  <div key={phase.id} onClick={() => setActivePhase(activePhase === phase.id ? null : phase.id)} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-purple-400 transition-all cursor-pointer">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${phase.color} rounded-xl flex items-center justify-center`}><Icon size={24} className="text-white" /></div>
                      <div><span className="text-xs text-gray-500 font-medium">{phase.number}</span><h3 className="text-xl font-bold text-gray-900">{phase.title}</h3></div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{phase.description}</p>
                    {activePhase === phase.id && (
                      <div className="animate-fadeIn">
                        <div className="border-t border-gray-200 pt-4 mt-4">
                          <p className="font-semibold text-gray-900 mb-2 text-sm">Activities:</p>
                          <ul className="text-sm text-gray-600 space-y-1">{phase.activities.map((a, i) => <li key={i}>• {a}</li>)}</ul>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Impact Areas</h2>
              <p className="text-purple-200 max-w-2xl mx-auto">Delivering measurable outcomes across healthcare ecosystems</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
              {['$100M+ Cost Savings', '30% Efficiency Gains', '500+ AI Trained', '20M+ Lives Impacted'].map((stat, idx) => (
                <div key={stat} className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 text-center border border-white/20">
                  <p className="text-xl font-bold">{stat}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Service Areas</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {frameworks.map((framework) => {
                const Icon = framework.icon;
                return (
                  <div key={framework.category} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center"><Icon size={24} className="text-purple-600" /></div>
                      <h3 className="text-xl font-bold text-gray-900">{framework.category}</h3>
                    </div>
                    <div className="space-y-4">
                      {framework.items.map((item) => (
                        <div key={item.name} className="border-l-2 border-purple-200 pl-4">
                          <p className="font-semibold text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">30-60-90 Day Value Plan</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {timelinePlan.map((phase, idx) => (
                <div key={phase.phase} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow h-full">
                  <div className={`inline-block ${phase.color} text-white text-sm font-bold px-4 py-2 rounded-full mb-4`}>{phase.phase}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{phase.title}</h3>
                  <ul className="space-y-3">
                    {phase.items.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle size={18} className="text-purple-600 mt-0.5 flex-shrink-0" /><span className="text-gray-700">{item}</span></li>))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Engagement Models</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="border-2 border-purple-200 rounded-2xl p-8 hover:border-purple-400 transition-colors">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6"><Lightbulb size={28} className="text-purple-600" /></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Advisory</h3>
                <p className="text-gray-600 mb-4">Strategic guidance and coaching for healthcare leaders.</p>
                <ul className="text-sm text-gray-600 space-y-2"><li>• Board advisory</li><li>• Strategy reviews</li><li>• Executive coaching</li></ul>
              </div>
              <div className="border-2 border-purple-400 rounded-2xl p-8 bg-purple-50 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
                <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6"><Rocket size={28} className="text-white" /></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Embedded Leadership</h3>
                <p className="text-gray-600 mb-4">Hands-on leadership embedded in your organization.</p>
                <ul className="text-sm text-gray-600 space-y-2"><li>• Interim/fractional leadership</li><li>• Program leadership</li><li>• Transformation execution</li></ul>
              </div>
              <div className="border-2 border-purple-200 rounded-2xl p-8 hover:border-purple-400 transition-colors">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6"><Award size={28} className="text-purple-600" /></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Workshops & Training</h3>
                <p className="text-gray-600 mb-4">Capability building for teams and organizations.</p>
                <ul className="text-sm text-gray-600 space-y-2"><li>• AI/ML training</li><li>• Healthcare analytics</li><li>• Leadership development</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-purple-600 to-purple-800 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Healthcare Organization?</h2>
            <p className="text-purple-100 mb-8 text-lg max-w-2xl mx-auto">Let's discuss how I can help deliver real, measurable outcomes.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-block px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-purple-50 transition-colors">Let's Talk</Link>
              <Link href="/portfolio" className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">View Case Studies</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style jsx>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } } .animate-fadeIn { animation: fadeIn 0.3s ease-out; }`}</style>
    </>
  );
}
