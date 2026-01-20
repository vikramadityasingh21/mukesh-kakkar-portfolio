'use client';

export default function FeaturedWork() {
  const projects = [
    {
      id: 1,
      title: 'Enterprise AI Strategy & CoE',
      slug: 'enterprise-ai-strategy',
      company: 'Fortune 500 Healthcare',
      category: 'AI/ML · Enterprise',
      description: 'Architected and implemented enterprise-wide AI strategy, establishing AI Center of Excellence that delivered $100M+ in cost savings.',
      impact: [
        '30% operational efficiency improvement',
        '$100M+ cost savings delivered',
        '500+ employees upskilled in AI technologies'
      ],
      tags: ['AI Strategy', 'Enterprise Architecture', 'Change Management', 'Healthcare'],
      gradient: 'from-purple-500 to-purple-600',
      icon: '🤖'
    },
    {
      id: 2,
      title: 'VBC Platform Go-to-Market',
      slug: 'vbc-consumer-platform',
      company: 'Anthem',
      category: 'Platform · Healthcare',
      description: 'Pioneered Go-to-Market strategy for Value Based Care, Consumer and Commercial Platform serving 20M+ population.',
      impact: [
        '20M+ population coverage',
        'Analytics platform for 10M+ across multiple Blues',
        'Patented AI algorithms for Provider search'
      ],
      tags: ['VBC', 'Go-to-Market', 'Platform Strategy', 'Population Health'],
      gradient: 'from-blue-500 to-blue-600',
      icon: '📊'
    },
    {
      id: 3,
      title: 'Digital & Analytics Products',
      slug: 'digital-analytics-products',
      company: 'Anthem',
      category: 'Analytics · P&L',
      description: 'Full P&L ownership for Analytics Products team, driving innovation across clinical analytics, cost of care, and population health.',
      impact: [
        'P&L management for product suite',
        '200+ cross-functional team',
        '20% clinical outcome improvement'
      ],
      tags: ['P&L Management', 'Clinical Analytics', 'Product Innovation', 'Healthcare'],
      gradient: 'from-green-500 to-green-600',
      icon: '📈'
    }
  ];

  return (
    <section id="work" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-block px-4 py-2 bg-purple-100 border border-purple-300 rounded-full text-purple-700 text-sm font-medium mb-4">
            AI-First Healthcare Solutions
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Not Just Products <span className="italic">with</span> AI —<br />
            <span className="gradient-text">AI-Driven Healthcare Transformation</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            AI embedded across the <span className="font-semibold text-purple-600">entire healthcare value chain</span>: 
            from clinical analytics and population health, through value-based care 
            to personalized medicine. AI as a force multiplier for better outcomes.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={`/portfolio/${project.slug}`}
              className="group card-hover glass rounded-2xl p-6 fade-in-up block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon & Category */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>
                  {project.icon}
                </div>
                <span className="text-xs text-slate-600 font-medium bg-slate-100 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-1 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium">{project.company}</p>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Impact Metrics */}
                <div className="space-y-2 pt-2">
                  {project.impact.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <svg className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full mt-4 py-2 border-2 border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-600 hover:text-white transition-all text-sm">
                  View Case Study →
                </button>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 fade-in-up delay-400">
          <a href="/portfolio" className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium transition-colors">
            <span>See all projects</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
