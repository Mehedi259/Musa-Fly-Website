# Musa Fly - Premium Travel Website

A modern, production-ready travel website built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Flight Booking** - Easy flight search and booking through WhatsApp
- **Tour Packages** - Curated tour packages for popular destinations
- **Visa Services** - Fast and reliable visa processing
- **Hot Deals** - Special offers and discounts
- **24/7 Support** - Round-the-clock WhatsApp customer support
- **Responsive Design** - Fully responsive across all devices
- **SEO Optimized** - Complete SEO implementation with metadata, sitemap, and robots.txt
- **Performance Optimized** - Image optimization, lazy loading, and code splitting

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide Icons
- **Form Validation**: React Hook Form + Zod
- **Code Quality**: ESLint + Prettier

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Configure your WhatsApp number:
   - Open `constants/config.ts`
   - Replace the `whatsappNumber` with your actual WhatsApp number

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Dynamic sitemap
│   ├── robots.ts          # Robots.txt configuration
│   └── opengraph-image.tsx # Open Graph image generator
├── components/            # Reusable components
│   ├── ui/               # UI components (Button, Card, Input)
│   └── layout/           # Layout components (Navbar, Footer)
├── sections/             # Page sections
│   ├── HeroSection.tsx
│   ├── ToursSection.tsx
│   ├── VisaSection.tsx
│   ├── HotDealsSection.tsx
│   ├── WhyChooseUsSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── FAQSection.tsx
│   └── ContactSection.tsx
├── constants/            # Configuration constants
│   └── config.ts         # Site configuration and WhatsApp number
├── data/                 # Data files
│   ├── destinations.ts   # Tour destinations
│   ├── visa.ts          # Visa services
│   ├── deals.ts         # Hot deals and offers
│   ├── testimonials.ts  # Customer testimonials
│   └── faq.ts           # FAQ data
├── lib/                  # Utility functions
│   └── utils.ts         # Helper functions
├── types/                # TypeScript types
│   └── index.ts         # Type definitions
└── public/              # Static assets
    └── manifest.json    # PWA manifest
```

## ⚙️ Configuration

### WhatsApp Integration
All flight, tour, and visa CTAs redirect to WhatsApp. To configure:

1. Open `constants/config.ts`
2. Update the WhatsApp number:
```typescript
export const SITE_CONFIG = {
  whatsappNumber: "YOUR_WHATSAPP_NUMBER", // e.g., "1234567890"
  whatsappLink: "https://wa.me/YOUR_WHATSAPP_NUMBER",
  // ... other config
};
```

### Adding New Destinations
To add new tour destinations:

1. Open `data/destinations.ts`
2. Add a new destination object:
```typescript
{
  id: "new-destination",
  name: "Destination Name",
  country: "Country",
  description: "Description...",
  image: "/images/destinations/new-destination.jpg",
  tourPackages: 10,
  startingPrice: 599,
  popular: false,
  highlights: ["Highlight 1", "Highlight 2"],
}
```

### Adding New Visa Services
To add new visa services:

1. Open `data/visa.ts`
2. Add a new visa service object following the existing pattern

### Customizing Brand Colors
Colors are defined in `constants/config.ts` and `tailwind.config.ts`:

- Primary: `#0F6FFF` (Blue)
- Secondary: `#00C2A8` (Teal)
- Dark: `#0F172A` (Dark Blue)

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

### Build for Production

```bash
npm run build
npm start
```

## 📊 Performance

The website is optimized to meet these Lighthouse scores:

- ✅ Performance: 95+
- ✅ SEO: 95+
- ✅ Accessibility: 95+
- ✅ Best Practices: 95+

Optimizations include:
- Image optimization with Next.js Image component
- Font optimization with next/font
- Code splitting and dynamic imports
- Lazy loading for images and sections
- Minimal JavaScript bundle size

## 🔒 SEO Features

- ✅ Complete metadata configuration
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ Structured data (ready for JSON-LD)
- ✅ Semantic HTML
- ✅ ARIA labels for accessibility

## 🎨 Design Features

- Modern glassmorphism effects
- Smooth animations with Framer Motion
- Responsive grid layouts
- Card-based UI components
- Gradient accents
- Hover effects and micro-interactions
- Premium typography

## 🔮 Future Enhancements

The architecture supports future integration of:

- Flight Booking API
- Payment Gateway
- User Authentication
- User Dashboard
- Admin Dashboard
- Content Management System (CMS)
- Blog section
- Hotel booking module
- Booking management system

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 📄 License

This project is proprietary and confidential.

## 🤝 Support

For support, contact us through:
- Email: info@musafly.com
- WhatsApp: 24/7 Support Available
- Phone: +1 (234) 567-890

---

Built with ❤️ by the Musa Fly Team
