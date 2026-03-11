# Poder Consulting - Tax Services Website

A modern, stunning website for Poder Consulting tax services built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ Modern, responsive design with smooth animations
- 🎨 Beautiful gradient color scheme
- 📱 Mobile-first approach with hamburger menu
- 🚀 Fast performance with Next.js 14
- 💎 Stunning UI components with Framer Motion animations
- 🎯 SEO optimized
- 🔒 TypeScript for type safety

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd poder-consulting
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## Project Structure

```
poder-consulting/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   └── page.tsx            # Home page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Navigation bar
│   │   │   └── Footer.tsx      # Footer
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Hero section
│   │   │   ├── TrustIndicators.tsx
│   │   │   ├── ServicesCarousel.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Values.tsx
│   │   │   ├── ProductShowcase.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Comparison.tsx
│   │   │   ├── TargetUsers.tsx
│   │   │   └── ConsultationCTA.tsx
│   │   └── ui/                 # Reusable UI components
│   ├── styles/
│   │   └── globals.css         # Global styles
│   └── lib/                    # Utility functions
├── public/
│   ├── images/                 # Image assets
│   └── icons/                  # Icon assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── postcss.config.js
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors

Edit the color scheme in `tailwind.config.js`:
- Primary colors: Blue gradient
- Accent colors: Purple gradient

### Content

Update content in individual component files under `src/components/sections/`

### Fonts

Change fonts in `src/app/layout.tsx`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Build the project:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Next Steps

To make this a fully functional website, you'll need to add:

1. **Backend API** - For user registration, authentication, and data management
2. **Database** - PostgreSQL or MongoDB for storing user data
3. **Payment Integration** - Stripe or PayPal for processing payments
4. **File Upload** - AWS S3 or similar for document storage
5. **Email Service** - SendGrid or AWS SES for notifications
6. **Admin Dashboard** - For managing clients and submissions

## License

© 2024 Poder Consulting. All rights reserved.
