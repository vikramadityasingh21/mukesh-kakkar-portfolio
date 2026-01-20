'use client';

import { useParams } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { ArrowLeft, Calendar, Building, MapPin, Users, Target, Lightbulb, CheckCircle } from 'lucide-react';

// Project data for Mukesh Kakkar
const projectsData = {
  'enterprise-ai-strategy': {
    title: 'Enterprise AI Strategy & Center of Excellence',
    company: 'Fortune 500 Healthcare Organization',
    location: 'United States',
    year: '2021 - Present',
    role: 'VP Growth Strategy, Digital and Analytics',
    status: 'Ongoing',
    gradient: 'from-purple-500 to-indigo-600',
    overview: 'Architected and implemented enterprise-wide AI strategy for a Fortune 500 healthcare organization, establishing an AI Center of Excellence that upskilled 500+ employees and delivered over $100M in cost savings through operational efficiency improvements.',
    challenge: 'The organization had fragmented AI initiatives across business units with no unified strategy. Teams were experimenting with AI in silos, leading to duplicated efforts, inconsistent quality, and inability to scale successful pilots. Leadership recognized AI\'s potential but lacked a cohesive approach to realize enterprise-wide value.',
    approach: [
      'Conducted comprehensive assessment of existing AI initiatives across the organization',
      'Developed enterprise AI strategy aligned with business objectives and growth targets',
      'Established AI Center of Excellence to centralize expertise and governance',
      'Created upskilling program that trained 500+ employees in AI technologies',
      'Implemented governance framework for responsible AI deployment',
      'Built partnerships with leading AI vendors and academic institutions',
      'Established metrics and KPIs to track AI value realization'
    ],
    outcomes: [
      { metric: '$100M+', description: 'Cost savings delivered' },
      { metric: '30%', description: 'Operational efficiency gains' },
      { metric: '500+', description: 'Employees upskilled in AI' },
      { metric: 'CoE', description: 'AI Center of Excellence established' }
    ],
    technologies: ['Machine Learning', 'NLP', 'Computer Vision', 'Cloud AI Platforms', 'Python', 'TensorFlow'],
    learnings: 'AI transformation success depends more on organizational change management than technology implementation. Executive sponsorship and clear governance are essential. Organizations that treat AI as a strategic capability rather than a technology initiative achieve significantly better outcomes.'
  },
  'vbc-consumer-platform': {
    title: 'VBC Consumer & Commercial Platform',
    company: 'Anthem',
    location: 'Greater Chicago Area',
    year: '2018 - 2021',
    role: 'Staff VP | Digital & Analytics Solutions',
    status: 'Delivered',
    gradient: 'from-blue-500 to-cyan-600',
    overview: 'Pioneered Go-to-Market strategy for Value Based Care, Consumer and Commercial Platform serving 20M+ population with analytics solutions deployed across multiple regional Blues plans.',
    challenge: 'Value-based care adoption required sophisticated analytics and platform capabilities that didn\'t exist at scale. Healthcare organizations needed integrated solutions supporting population health management, provider performance analytics, and consumer engagement while demonstrating clear ROI to justify investments.',
    approach: [
      'Developed comprehensive GTM strategy for VBC platform targeting payer and provider markets',
      'Led product innovation across clinical analytics, cost of care, and population health',
      'Managed cross-functional teams of 200+ professionals',
      'Established partnerships across payers, providers, and life sciences organizations',
      'Created and launched patented AI algorithms for provider search optimization',
      'Built analytics platform serving 10M+ population across multiple Blues'
    ],
    outcomes: [
      { metric: '20M+', description: 'Population coverage' },
      { metric: '10M+', description: 'Analytics platform users' },
      { metric: 'Patent', description: 'AI algorithms granted' },
      { metric: '20%', description: 'Clinical outcome improvement' }
    ],
    technologies: ['Healthcare Analytics', 'Machine Learning', 'Big Data', 'Cloud Platforms', 'API Architecture'],
    learnings: 'Successful VBC platforms require deep integration of clinical, financial, and operational data. The key to adoption is demonstrating value to all stakeholders - providers, payers, and patients. AI and analytics must be embedded in workflows, not bolted on as afterthoughts.'
  },
  'digital-analytics-products': {
    title: 'Digital & Analytics Product Suite',
    company: 'Anthem',
    location: 'Greater Chicago Area',
    year: '2018 - 2021',
    role: 'Staff VP | Digital & Analytics Solutions',
    status: 'Delivered',
    gradient: 'from-emerald-500 to-teal-600',
    overview: 'Managed P&L for Analytics Products and Solutions team, driving innovation across clinical analytics, cost of care, population health, employer analytics, and quality analytics product lines.',
    challenge: 'The analytics product portfolio was fragmented with overlapping capabilities and unclear value propositions. Products were developed reactively to client requests rather than strategically. P&L accountability was unclear, making investment decisions difficult.',
    approach: [
      'Took full P&L ownership for Analytics Product and Solutions team',
      'Rationalized product portfolio to eliminate redundancy and clarify positioning',
      'Developed AI-driven Personalized Analytics products improving clinical outcomes',
      'Built cross-functional teams spanning data scientists, engineers, and product managers',
      'Implemented product management best practices and agile delivery',
      'Established clear success metrics tied to clinical and business outcomes'
    ],
    outcomes: [
      { metric: 'P&L', description: 'Full ownership achieved' },
      { metric: '200+', description: 'Cross-functional team' },
      { metric: '20%', description: 'Clinical outcomes improvement' },
      { metric: '10%', description: 'NPS improvement' }
    ],
    technologies: ['Clinical Analytics', 'Quality Analytics', 'Big Data', 'Machine Learning', 'Visualization'],
    learnings: 'Product portfolio management requires ruthless prioritization and clear value propositions. P&L ownership creates accountability that drives better decisions. Cross-functional teams work best when aligned around customer outcomes rather than technical capabilities.'
  },
  'payer-transformation': {
    title: 'Payer Transformation Playbook',
    company: 'Highmark Health',
    location: 'Greater Pittsburgh Area',
    year: '2016 - 2018',
    role: 'Associate Principal',
    status: 'Delivered',
    gradient: 'from-pink-500 to-rose-600',
    overview: 'Architected comprehensive payer transformation playbook covering employer reporting, provider performance analytics, stop-loss analytics, consumer marketing, HEDIS/Star reporting, and predictive models for actuarial services.',
    challenge: 'Regional Blue plans needed to modernize their operating models to compete effectively in a changing healthcare landscape. Legacy systems and processes prevented them from leveraging data and analytics for competitive advantage.',
    approach: [
      'Crafted strategic plan for advisory service and platform commercialization growth',
      'Managed client relationships for large payer accounts',
      'Architected transformation playbook covering multiple product lines',
      'Launched Digital and Analytics Products supporting Operating Model Transformation',
      'Delivered for two large regional Blue plans',
      'Established repeatable methodologies for future engagements'
    ],
    outcomes: [
      { metric: '2', description: 'Regional Blues transformed' },
      { metric: 'Playbook', description: 'Reusable methodology created' },
      { metric: 'Growth', description: 'Advisory services expanded' },
      { metric: 'Platform', description: 'Commercialization achieved' }
    ],
    technologies: ['Analytics Platforms', 'HEDIS/Star Reporting', 'Predictive Models', 'Data Warehousing'],
    learnings: 'Payer transformation succeeds when it addresses both technology and operating model simultaneously. Reusable playbooks accelerate delivery and improve quality. Client relationships built on trust enable more ambitious transformation programs.'
  },
  'vbc-methodology': {
    title: 'Value Based Transformation Methodology',
    company: 'KPMG',
    location: 'Greater Chicago Area',
    year: '2010 - 2016',
    role: 'Manager, Healthcare Advisory',
    status: 'Delivered',
    gradient: 'from-orange-500 to-amber-600',
    overview: 'Developed industry-leading methodology enabling healthcare entities on Value based transformation capabilities including population health, clinical analytics, delivery and payment reform, and consumerism.',
    challenge: 'Healthcare organizations were transitioning from fee-for-service to value-based care models but lacked clear roadmaps. The complexity of VBC transformation - spanning clinical, financial, and operational dimensions - required structured approaches that didn\'t exist.',
    approach: [
      'Spearheaded executive advisory services to C-level clients on business transformation',
      'Developed comprehensive VBC transformation methodology',
      'Designed roadmap to exploit big-data challenges/needs of healthcare organizations',
      'Managed large complex enterprise projects for payers and providers',
      'Delivered high-profile consulting engagements for Fortune 500 healthcare companies',
      'Built team capabilities in healthcare analytics and transformation'
    ],
    outcomes: [
      { metric: '$100M+', description: 'Client value delivered' },
      { metric: 'Fortune 500', description: 'Healthcare clients served' },
      { metric: 'Methodology', description: 'Industry-leading approach' },
      { metric: 'C-Suite', description: 'Executive advisory relationships' }
    ],
    technologies: ['Healthcare Analytics', 'Big Data', 'Population Health', 'Clinical Analytics'],
    learnings: 'VBC transformation requires executive commitment and multi-year horizons. Methodology development creates competitive advantage and improves delivery consistency. Building deep client relationships enables larger, more impactful engagements.'
  },
  'cloud-migration-strategy': {
    title: 'Cloud Migration & Cost Optimization',
    company: 'Healthcare Enterprise',
    location: 'United States',
    year: '2016 - Present',
    role: 'VP / Associate Principal',
    status: 'Ongoing',
    gradient: 'from-violet-500 to-purple-600',
    overview: 'Spearheaded cloud migration strategy achieving 35% cost reduction while improving scalability and enabling 40% YoY revenue growth through strategic product launches and expanded service offerings.',
    challenge: 'Legacy infrastructure was limiting innovation velocity and increasing operational costs. The organization needed to modernize its technology foundation while maintaining business continuity and enabling new digital product development.',
    approach: [
      'Developed comprehensive cloud migration roadmap aligned with business strategy',
      'Led cross-functional teams to execute migration with minimal business disruption',
      'Established cloud governance and security frameworks',
      'Created new digital product offerings enabled by cloud capabilities',
      'Drove expanded service offerings contributing to revenue growth',
      'Implemented cost optimization practices for ongoing cloud operations'
    ],
    outcomes: [
      { metric: '35%', description: 'Cost reduction achieved' },
      { metric: '40%', description: 'YoY revenue growth' },
      { metric: 'Scale', description: 'Improved scalability' },
      { metric: 'Products', description: 'New digital offerings enabled' }
    ],
    technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Microservices', 'DevOps'],
    learnings: 'Cloud migration success depends on business case clarity and stakeholder alignment. The biggest benefits come not from cost savings alone but from new capabilities that cloud enables. Skills development must accompany technology changes.'
  },
  'healthcare-mobility': {
    title: 'Healthcare Mobility Solutions Portfolio',
    company: 'Sprint',
    location: 'United States',
    year: '2006 - 2007',
    role: 'Business Consultant / Project Manager',
    status: 'Delivered',
    gradient: 'from-red-500 to-orange-600',
    overview: 'Architected Sprint\'s healthcare marketing portfolio including case management alerts, mobile order and result tracking, wireless patient charting, and mobility solutions driving 85% improvement in ADT process.',
    challenge: 'Healthcare providers were struggling with fragmented communication and paper-based processes. Sprint saw an opportunity to leverage mobile technology to improve healthcare operations but needed a comprehensive product strategy and market approach.',
    approach: [
      'Architected healthcare marketing portfolio for Sprint',
      'Advised on mobility solutions for healthcare providers',
      'Developed comprehensive mobility strategy for BCBS',
      'Conducted stakeholder interviews across business units',
      'Designed solutions for charge capture, e-RX, and clinical system access',
      'Built business cases demonstrating ROI for healthcare mobility'
    ],
    outcomes: [
      { metric: '85%', description: 'ADT process improvement' },
      { metric: '20%', description: 'Cost reduction for BCBS' },
      { metric: 'Portfolio', description: 'Healthcare mobility products' },
      { metric: 'Adoption', description: 'Provider implementation' }
    ],
    technologies: ['Mobile Technology', 'Wireless Networks', 'Healthcare IT', 'Integration Platforms'],
    learnings: 'Healthcare mobility requires deep understanding of clinical workflows to deliver value. Technology solutions must integrate seamlessly with existing systems to gain adoption. Business case development is essential for enterprise sales.'
  },
  'ai-provider-search': {
    title: 'Patented AI Algorithms for Provider Search',
    company: 'Anthem',
    location: 'Greater Chicago Area',
    year: '2019 - 2021',
    role: 'Staff VP | Digital & Analytics Solutions',
    status: 'Delivered',
    gradient: 'from-cyan-500 to-blue-600',
    overview: 'Led development and launch of patented AI algorithms for Provider search optimization, improving member experience and provider network utilization through intelligent recommendations.',
    challenge: 'Members struggled to find the right providers within the network, leading to poor experiences and out-of-network utilization. Traditional search approaches based on location and specialty failed to capture the complexity of member needs and provider capabilities.',
    approach: [
      'Identified opportunity for AI-driven provider search improvement',
      'Led cross-functional team including data scientists and engineers',
      'Developed machine learning models incorporating multiple data sources',
      'Designed and executed A/B testing to validate improvement',
      'Managed patent application process',
      'Scaled solution across member-facing applications'
    ],
    outcomes: [
      { metric: 'Patent', description: 'AI algorithms granted' },
      { metric: 'Experience', description: 'Member satisfaction improved' },
      { metric: 'Network', description: 'Utilization optimized' },
      { metric: 'Scale', description: 'Enterprise deployment' }
    ],
    technologies: ['Machine Learning', 'NLP', 'Search Algorithms', 'Python', 'Cloud AI'],
    learnings: 'Healthcare AI requires careful attention to clinical accuracy and member trust. Patent-worthy innovations often come from combining existing techniques in novel ways. A/B testing is essential for validating AI improvements in healthcare contexts.'
  }
};

export default function PortfolioDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const project = projectsData[slug];

  if (!project) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
            <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
            <Link href="/portfolio" className="text-purple-600 font-semibold hover:underline">
              ← Back to Portfolio
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className={`bg-gradient-to-r ${project.gradient} py-16 md:py-24`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/portfolio" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Back to Portfolio
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                project.status === 'Ongoing' 
                  ? 'bg-white/20 text-white' 
                  : 'bg-white/30 text-white'
              }`}>
                {project.status}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-white/90 mt-6">
              <span className="flex items-center gap-2">
                <Building size={18} />
                {project.company}
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={18} />
                {project.location}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={18} />
                {project.year}
              </span>
              <span className="flex items-center gap-2">
                <Users size={18} />
                {project.role}
              </span>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            
            {/* Overview */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{project.overview}</p>
            </section>

            {/* Key Outcomes */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Outcomes</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.outcomes.map((outcome, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-sm text-center">
                    <p className="text-3xl font-bold text-purple-600 mb-2">{outcome.metric}</p>
                    <p className="text-sm text-gray-600">{outcome.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Challenge */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-purple-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">The Challenge</h2>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
              </div>
            </section>

            {/* Approach */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="text-purple-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">My Approach</h2>
              </div>
              <ul className="space-y-3">
                {project.approach.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="text-purple-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Technologies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Technologies & Tools</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Key Learnings */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Learnings</h2>
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border-l-4 border-purple-600">
                <p className="text-gray-700 leading-relaxed italic">{project.learnings}</p>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Want to discuss this project?</h2>
              <p className="text-purple-100 mb-6">I'd love to share more details about my approach and learnings.</p>
              <Link 
                href="/contact" 
                className="inline-block px-8 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-purple-50 transition-colors"
              >
                Get in Touch
              </Link>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
