// Portfolio data for Mukesh Kakkar
const portfolioData = {
  "items": [
    {
      "id": "ai-strategy-implementation",
      "title": "Enterprise AI Strategy Implementation",
      "slug": "ai-strategy-implementation",
      "outcome": "Achieved 30% operational efficiency gains and $100M+ cost savings",
      "role": "VP, AI Strategy & Implementation",
      "timeline": "Ongoing",
      "summary": "Architected and implemented enterprise-wide AI strategy resulting in significant operational efficiency gains and cost savings across Fortune 500 healthcare organization.",
      "featured": true,
      "category": "ai-strategy",
      "image": "/images/portfolio/ai-strategy.jpg",
      "content": {
        "keyOutcomes": [
          "30% operational efficiency improvement across enterprise",
          "$100M+ cost savings delivered through AI initiatives",
          "500+ employees upskilled in AI technologies",
          "Established AI Center of Excellence fostering continuous innovation"
        ],
        "problemDescription": "Healthcare organizations face increasing pressure to reduce costs while improving outcomes. Traditional approaches to efficiency were reaching diminishing returns, and AI promised transformative potential but required strategic implementation to realize value.",
        "myRole": "As VP of AI Strategy, I led the enterprise-wide AI transformation initiative. Responsible for developing the strategic vision, building the implementation roadmap, and establishing the governance framework for AI adoption across the organization.",
        "whatIDid": "Developed comprehensive AI strategy aligned with business objectives. Created AI Center of Excellence to build internal capabilities. Implemented governance framework ensuring responsible AI deployment. Led upskilling program for 500+ employees. Established metrics and KPIs to track AI value realization. Built partnerships with leading AI vendors and academic institutions.",
        "keyLearnings": "AI transformation is as much about people and processes as technology. Success requires executive sponsorship, clear governance, and sustained investment in capability building. The organizations that win with AI are those that treat it as a strategic capability, not just a technology initiative.",
        "technologies": ["Machine Learning", "NLP", "Computer Vision", "Cloud AI Platforms", "Python"],
        "relatedArticles": []
      }
    },
    {
      "id": "vbc-platform-gtm",
      "title": "VBC Platform Go-to-Market Strategy",
      "slug": "vbc-platform-gtm",
      "outcome": "Launched platform serving 20M+ population with analytics for 10M+ across multiple Blues",
      "role": "Staff VP, Digital & Analytics Solutions",
      "timeline": "2018 - 2021",
      "summary": "Pioneered Go-to-Market strategy for Value Based Care, Consumer and Commercial Platform at Anthem, serving 20M+ population with analytics solutions across multiple regional Blues.",
      "featured": true,
      "category": "platform-strategy",
      "image": "/images/portfolio/vbc-platform.jpg",
      "content": {
        "keyOutcomes": [
          "Platform serving 20M+ population nationally",
          "Analytics platform deployed for 10M+ population across multiple Blues",
          "Launched patented AI algorithms for Provider search",
          "Improved clinical outcomes by 20% through personalized analytics"
        ],
        "problemDescription": "Value-based care requires sophisticated analytics and platform capabilities to succeed. Healthcare organizations needed integrated solutions that could support population health management, provider performance analytics, and consumer engagement at scale.",
        "myRole": "As Staff VP of Digital & Analytics Solutions, I led the strategy and execution for the VBC platform. Managed P&L for the Analytics Product and Solutions team and drove innovation across clinical analytics, cost of care, and population health products.",
        "whatIDid": "Developed comprehensive GTM strategy for VBC platform. Led product innovation across clinical analytics and population health. Managed cross-functional teams of 200+ to deliver platform capabilities. Established partnerships across payers, providers, and life sciences. Created and launched patented AI algorithms for provider search optimization.",
        "keyLearnings": "Successful VBC platforms require deep integration of clinical, financial, and operational data. The key to adoption is demonstrating value to all stakeholders - providers, payers, and patients. AI and analytics must be embedded in workflows, not bolted on as afterthoughts.",
        "technologies": ["Healthcare Analytics", "Machine Learning", "Big Data", "Cloud Platforms", "API Architecture"],
        "relatedArticles": []
      }
    },
    {
      "id": "cloud-migration-strategy",
      "title": "Cloud Migration & Data Strategy",
      "slug": "cloud-migration-strategy",
      "outcome": "Achieved 35% cost reduction and 40% YoY revenue growth through strategic product launches",
      "role": "Associate Principal / VP",
      "timeline": "2016 - Present",
      "summary": "Spearheaded cloud migration strategy achieving significant cost reduction while improving scalability and enabling new digital product offerings.",
      "featured": true,
      "category": "digital-transformation",
      "image": "/images/portfolio/cloud-migration.jpg",
      "content": {
        "keyOutcomes": [
          "35% cost reduction through cloud optimization",
          "40% YoY revenue growth through strategic product launches",
          "Improved scalability and disaster recovery capabilities",
          "Enabled new digital and analytics product offerings"
        ],
        "problemDescription": "Legacy infrastructure was limiting the organization's ability to innovate and scale. High maintenance costs, limited scalability, and aging technology were preventing the launch of new digital products and services.",
        "myRole": "Led the strategic planning and execution of cloud migration initiatives. Worked across multiple organizations to drive digital transformation and enable new product capabilities through modern cloud architecture.",
        "whatIDid": "Developed comprehensive cloud migration roadmap. Led cross-functional teams to execute migration while maintaining business continuity. Established cloud governance and security frameworks. Created new digital product offerings enabled by cloud capabilities. Drove expanded service offerings that contributed to 40% YoY revenue growth.",
        "keyLearnings": "Cloud migration success depends on business case clarity and stakeholder alignment. The biggest benefits come not from cost savings alone, but from the new capabilities that cloud enables. Organizations must invest in skills development alongside technology changes.",
        "technologies": ["AWS", "Azure", "GCP", "Kubernetes", "Microservices", "Data Analytics"],
        "relatedArticles": []
      }
    }
  ]
};

export function getAllPortfolioItems() {
  return portfolioData.items;
}

export function getPortfolioItemBySlug(slug) {
  return portfolioData.items.find(item => item.slug === slug);
}

export function getFeaturedPortfolioItems() {
  return portfolioData.items.filter(item => item.featured === true);
}

export function getPortfolioItemsByCategory(category) {
  return portfolioData.items.filter(item => item.category === category);
}

export default portfolioData;
