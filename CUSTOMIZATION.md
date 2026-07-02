# Musa Fly - Customization Guide

This guide will help you customize various aspects of the Musa Fly website.

## 🎨 Branding & Colors

### Updating Brand Colors

**Location**: `constants/config.ts` and `tailwind.config.ts`

```typescript
// constants/config.ts
export const COLORS = {
  primary: "#0F6FFF",    // Change to your primary brand color
  secondary: "#00C2A8",  // Change to your secondary brand color
  dark: "#0F172A",       // Change to your dark color
};
```

Also update in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#0F6FFF",  // Your primary color
    // ... other shades
  },
  secondary: {
    DEFAULT: "#00C2A8",  // Your secondary color
    // ... other shades
  },
}
```

### Updating Site Information

**Location**: `constants/config.ts`

```typescript
export const SITE_CONFIG = {
  name: "Musa Fly",              // Your business name
  description: "...",            // Your site description
  url: "https://musafly.com",   // Your site URL
  whatsappNumber: "1234567890", // Your WhatsApp number
  email: "info@musafly.com",    // Your email
  phone: "+1 (234) 567-890",    // Your phone number
  address: "123 Travel Street...", // Your address
  socialMedia: {
    facebook: "...",    // Your Facebook URL
    instagram: "...",   // Your Instagram URL
    twitter: "...",     // Your Twitter URL
    linkedin: "...",    // Your LinkedIn URL
  },
};
```

## 🗺️ Tour Destinations

### Adding New Destinations

**Location**: `data/destinations.ts`

```typescript
{
  id: "thailand",                    // Unique ID
  name: "Thailand",                  // Display name
  country: "Thailand",               // Country name
  description: "Beautiful beaches...", // Short description
  image: "/images/destinations/thailand.jpg", // Image path
  tourPackages: 18,                  // Number of packages
  startingPrice: 799,                // Starting price in USD
  popular: true,                     // Show "Popular" badge?
  highlights: [                      // Top highlights
    "Bangkok",
    "Phuket",
    "Chiang Mai",
    "Krabi"
  ],
}
```

### Updating Existing Destinations

Simply edit the values in the destination object in `data/destinations.ts`.

## 🛂 Visa Services

### Adding New Visa Services

**Location**: `data/visa.ts`

```typescript
{
  id: "thailand-visa",
  country: "Thailand",
  processingTime: "5-7 working days",
  startingPrice: 180,
  type: "Tourist Visa",
  requirements: [
    "Valid passport (min 6 months)",
    "Passport size photos",
    "Bank statement (last 3 months)",
    "Hotel booking confirmation",
    "Return flight tickets",
  ],
  popular: true,
  image: "/images/visa/thailand.jpg",
}
```

### Updating Visa Requirements

Edit the `requirements` array in the visa object to add or remove requirements.

## 💰 Hot Deals

### Adding New Deals

**Location**: `data/deals.ts`

```typescript
{
  id: "deal-5",
  title: "Thailand Beach Paradise",
  description: "5 nights beach resort with all meals included",
  originalPrice: 1299,
  discountedPrice: 999,
  discount: 23,  // Percentage
  image: "/images/deals/thailand-deal.jpg",
  category: "package", // "flight" | "tour" | "package"
  destination: "Thailand",
  validUntil: "2026-09-30",
  featured: true,
}
```

### Updating Deal Validity

Change the `validUntil` date in the deal object.

## 💬 Testimonials

### Adding New Testimonials

**Location**: `data/testimonials.ts`

```typescript
{
  id: "testimonial-5",
  name: "John Doe",
  location: "Los Angeles, USA",
  image: "/images/testimonials/avatar-5.jpg",
  rating: 5,
  text: "Amazing experience with Musa Fly...",
  date: "2026-07-01",
}
```

### Using Avatar Initials

If you don't have customer photos, the testimonial card automatically shows the first letter of the customer's name in a colored circle.

## ❓ FAQ Section

### Adding New Questions

**Location**: `data/faq.ts`

```typescript
{
  id: "faq-9",
  question: "Do you offer group discounts?",
  answer: "Yes, we offer special discounts for groups of 5 or more...",
  category: "general", // "general" | "visa" | "tours" | "flights"
}
```

### Reordering FAQs

Simply reorder the array items in `data/faq.ts` - they will display in that order.

## 🎯 Special Offers

### Adding New Promotional Banners

**Location**: `data/deals.ts` (specialOffers array)

```typescript
{
  id: "offer-4",
  title: "Winter Special",
  subtitle: "Up to 40% Off",
  description: "Limited time winter travel packages",
  image: "/images/offers/winter-special.jpg",
  ctaText: "Book Now",
  ctaLink: "#deals",
}
```

## 🧭 Navigation

### Adding New Menu Items

**Location**: `constants/config.ts`

```typescript
export const NAVIGATION_ITEMS = [
  { label: "Flights", href: "#flights" },
  { label: "Tours", href: "#tours" },
  { label: "Visa", href: "#visa" },
  { label: "Blog", href: "/blog" },  // New item
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
```

## 🖼️ Hero Section

### Updating Hero Background

**Location**: `sections/HeroSection.tsx`

```typescript
<div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('YOUR_IMAGE_URL')",
  }}
/>
```

### Updating Hero Text

```typescript
<h1>
  Discover Your Next
  <br />
  <span className="...">
    Adventure  {/* Change this text */}
  </span>
</h1>
<p>
  Your journey begins here...  {/* Change this text */}
</p>
```

## 🏆 Why Choose Us Section

### Updating Features

**Location**: `sections/WhyChooseUsSection.tsx`

```typescript
const features = [
  {
    icon: Award,  // Import from lucide-react
    title: "Trusted Agency",
    description: "Years of experience...",
  },
  // Add more features
];
```

Available icons from `lucide-react`:
- Award, Clock, DollarSign, FileCheck, Package, MessageCircle
- Shield, Star, Users, TrendingUp, CheckCircle, etc.

## 📱 Contact Section

### Updating Contact Information

Already covered in Site Configuration above (`constants/config.ts`).

### Adding Google Maps

**Location**: `sections/ContactSection.tsx`

Replace the map placeholder with an actual embedded Google Map:

```typescript
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

## 🎬 Animations

### Adjusting Animation Delays

**Location**: Various section files

```typescript
transition={{ duration: 0.5, delay: index * 0.1 }}
// Increase delay multiplier for slower stagger:
transition={{ duration: 0.5, delay: index * 0.2 }}
```

### Disabling Animations

To disable Framer Motion animations:

```typescript
// Remove motion.div and use regular div
<div> instead of <motion.div>
// Remove initial, animate, whileInView props
```

## 🔤 Fonts

### Changing the Font

**Location**: `app/layout.tsx`

```typescript
import { Inter, Poppins } from "next/font/google";

// Change Inter to your preferred font
const myFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-my-font",
  display: "swap",
});
```

Update `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ["var(--font-my-font)", "system-ui", "sans-serif"],
},
```

## 📐 Layout & Spacing

### Adjusting Section Padding

Most sections use: `py-20` (80px top/bottom)

To adjust globally, create a CSS variable:

```css
/* app/globals.css */
:root {
  --section-padding: 5rem;
}

.section {
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
}
```

### Container Width

Controlled by Tailwind's `container` class. To customize:

```typescript
// tailwind.config.ts
theme: {
  container: {
    center: true,
    padding: "1rem",
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
    },
  },
}
```

## 🎨 Card Styles

### Customizing Card Appearance

**Location**: `components/ui/Card.tsx`

Adjust the base Card styling:

```typescript
className={cn(
  "rounded-xl",        // Change border radius
  "border",
  "border-gray-200",   // Change border color
  "bg-white",
  "shadow-lg",         // Change shadow size
  "hover:shadow-xl",
  className
)}
```

## 🚀 Performance

### Lazy Loading Images

Images already use Next.js Image component with automatic optimization.

To add lazy loading to a custom image:

```typescript
import Image from "next/image";

<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={800}
  height={600}
  loading="lazy"  // Add this
/>
```

### Dynamic Imports

For heavy components, use dynamic imports:

```typescript
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <div>Loading...</div>,
  ssr: false, // Disable server-side rendering if needed
});
```

## 🔍 SEO Customization

### Updating Meta Tags

**Location**: `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "Your Custom Title",
  description: "Your custom description",
  keywords: ["keyword1", "keyword2"],
  // ... more options
};
```

### Adding JSON-LD Structured Data

Create a new component:

```typescript
export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Musa Fly",
    url: "https://musafly.com",
    // ... more fields
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
```

## 📱 Mobile Responsiveness

### Adjusting Mobile Layout

Use Tailwind's responsive classes:

```typescript
<div className="
  grid
  grid-cols-1        // 1 column on mobile
  md:grid-cols-2     // 2 columns on tablet
  lg:grid-cols-3     // 3 columns on desktop
  xl:grid-cols-4     // 4 columns on large desktop
">
```

### Mobile-Specific Styling

```typescript
<div className="
  text-sm          // Small on mobile
  md:text-base     // Base on tablet
  lg:text-lg       // Large on desktop
">
```

## 🔐 Environment Variables

Create `.env.local`:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://musafly.com
```

Access in code:

```typescript
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
```

## 🎭 Component Reusability

### Creating Custom Sections

1. Create a new file in `sections/`
2. Follow the existing pattern:

```typescript
"use client";

import { motion } from "framer-motion";

export function MyCustomSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Your content */}
      </div>
    </section>
  );
}
```

3. Import in `app/page.tsx`

## 💡 Tips

1. **Always test after changes**: Run `npm run build` to catch errors
2. **Use consistent spacing**: Stick to Tailwind's spacing scale
3. **Maintain color harmony**: Use your brand colors consistently
4. **Optimize images**: Use WebP format when possible
5. **Test on mobile**: Most users will visit on mobile devices
6. **Keep data organized**: Use the data files for easy updates
7. **Document custom changes**: Comment your code for future reference

## 🆘 Need Help?

- Check the main README.md for setup instructions
- Review DEPLOYMENT.md for deployment guidance
- Refer to Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Refer to Tailwind docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)

---

Happy Customizing! 🎨
