# Mukesh Kakkar - Personal Portfolio Website

A professional portfolio website for Mukesh Kakkar, Healthcare Technology & AI Leader.

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd mukesh-website
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── components/     # Reusable UI components
│   ├── about-me/       # About page
│   ├── blog/           # Blog section
│   ├── contact/        # Contact page
│   ├── portfolio/      # Portfolio/case studies
│   ├── resume/         # Resume page
│   ├── services/       # Services page
│   ├── layout.js       # Root layout
│   └── page.js         # Homepage
├── public/
│   ├── images/         # Image assets
│   └── sitemap.xml     # SEO sitemap
└── content/            # Blog articles (markdown)
```

## Deployment to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure domain (mukeshkakkar.com) in Vercel dashboard
4. Set up DNS in Namecheap:
   - Add A record pointing to Vercel IP
   - Add CNAME record for www subdomain

### Environment Variables (Optional)

```env
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_CLARITY_ID=your-clarity-id
```

## Customization

### Images
Replace placeholder images in `/public/images/`:
- `headshot.jpg` - Professional headshot
- `professional-1.jpg` - Additional professional photo
- `aifirst.jpg` - AI/Technology themed image

### Contact Information
Update contact details in:
- `app/components/Footer.jsx`
- `app/contact/page.jsx`
- `app/resume/page.jsx`

## License

Private - All rights reserved.
