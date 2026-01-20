import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata = {
  title: 'Mukesh Kakkar | Healthcare Technology & AI Leader',
  description: 'Results-driven technology and business leader with expertise in AI-led growth, product innovation, and healthcare transformation. $100M+ cost savings delivered through enterprise AI strategy.',
  keywords: 'Healthcare Technology, AI Strategy, Digital Transformation, Value Based Care, Population Health, Analytics, Payer Provider Pharma, P&L Management',
  authors: [{ name: 'Mukesh Kakkar' }],
  creator: 'Mukesh Kakkar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mukeshkakkar.com',
    title: 'Mukesh Kakkar | Healthcare Technology & AI Leader',
    description: 'AI-led growth, product innovation, and healthcare transformation expert',
    siteName: 'Mukesh Kakkar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mukesh Kakkar | Healthcare Technology & AI Leader',
    description: 'AI-led growth, product innovation, and healthcare transformation expert',
  },
};

export default function RootLayout({ children }) {
  // Get analytics IDs from environment variables
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics - only load if ID is provided */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}

        {/* Microsoft Clarity - only load if ID is provided */}
        {CLARITY_ID && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_ID}");
            `}
          </Script>
        )}
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}