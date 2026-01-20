'use client';

export default function LogoShowcase() {
  const companies = [
    { 
      name: 'Anthem', 
      logo: '/images/logos/anthem.jpg',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Anthem_logo.svg/320px-Anthem_logo.svg.png'
    },
    { 
      name: 'Highmark Health', 
      logo: '/images/logos/highmark.png',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Highmark_logo.svg/320px-Highmark_logo.svg.png'
    },
    { 
      name: 'KPMG', 
      logo: '/images/logos/kpmg.png',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/KPMG_logo.svg/320px-KPMG_logo.svg.png'
    },
    { 
      name: 'University of Notre Dame', 
      logo: '/images/logos/notredame.png',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Notre_Dame_Fighting_Irish_logo.svg/200px-Notre_Dame_Fighting_Irish_logo.svg.png'
    },
    { 
      name: 'University of Chicago', 
      logo: '/images/logos/uchicago.png',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/University_of_Chicago_shield.svg/200px-University_of_Chicago_shield.svg.png'
    }
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-200">
      <div className="container mx-auto px-6">
        <p className="text-center text-slate-600 text-sm font-medium mb-8 uppercase tracking-wide">
          Trusted by Leading Healthcare & Technology Organizations
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center justify-items-center">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
            >
              <img 
                src={company.logo}
                alt={company.name}
                className="h-16 w-auto object-contain"
                onError={(e) => {
                  e.target.src = company.fallback;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
