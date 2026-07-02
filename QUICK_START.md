# ⚡ Musa Fly - Quick Start Guide

Get your website up and running in 5 minutes!

## 🚀 Step 1: Install Dependencies (1 minute)

```bash
npm install
```

## ⚙️ Step 2: Configure WhatsApp (1 minute)

Open `constants/config.ts` and update:

```typescript
export const SITE_CONFIG = {
  // ... other config
  whatsappNumber: "YOUR_WHATSAPP_NUMBER", // Example: "1234567890"
  whatsappLink: "https://wa.me/YOUR_WHATSAPP_NUMBER",
  email: "your@email.com",
  phone: "+1 (234) 567-890",
  address: "Your Business Address",
  // ... update social media links
};
```

## 🎨 Step 3: Test Locally (2 minutes)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

Test:
- ✅ Click WhatsApp button in navbar
- ✅ Try "Search Flights" in hero section
- ✅ Click "Explore Tours" on any destination
- ✅ Click "Apply Now" on any visa
- ✅ Click "Book Now" on any deal
- ✅ Navigate through all sections

All should redirect to your WhatsApp!

## 🏗️ Step 4: Build for Production (1 minute)

```bash
npm run build
```

If successful, you'll see:
```
✓ Compiled successfully
Route (app)                Size     First Load JS
├ ○ /                      46.5 kB  157 kB
...
```

## 🚀 Step 5: Deploy to Vercel

### Option A: Deploy via GitHub (Recommended)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! 🎉

### Option B: Deploy via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

## ✅ Post-Deployment Checklist

After deployment:

1. **Test Your Live Site**
   - Visit your deployed URL
   - Test all WhatsApp links
   - Check on mobile device

2. **Submit Sitemap**
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Add your property
   - Submit sitemap: `yourdomain.com/sitemap.xml`

3. **Share Your Site!**
   - Post on social media
   - Update business cards
   - Tell your customers

## 🎯 Common Updates

### Update a Tour Destination

**File:** `data/destinations.ts`

```typescript
{
  id: "singapore",
  name: "Singapore",
  description: "Your description here",
  startingPrice: 899,
  // ... other fields
}
```

### Update a Hot Deal

**File:** `data/deals.ts`

```typescript
{
  id: "deal-1",
  title: "Singapore Dream Package",
  originalPrice: 1299,
  discountedPrice: 999,
  validUntil: "2026-08-31", // Update this!
  // ... other fields
}
```

### Add a New FAQ

**File:** `data/faq.ts`

```typescript
{
  id: "faq-9",
  question: "Your question?",
  answer: "Your answer...",
  category: "general",
}
```

## 🆘 Troubleshooting

### Build Fails?
```bash
rm -rf .next node_modules
npm install
npm run build
```

### WhatsApp Links Not Working?
- Check the number format: "1234567890" (no + or spaces)
- Test the link: `https://wa.me/1234567890`

### Page Not Loading?
- Clear browser cache
- Check console for errors (F12)
- Verify build was successful

## 📚 Need More Help?

- **Full Setup:** See README.md
- **Deployment Details:** See DEPLOYMENT.md
- **Customization:** See CUSTOMIZATION.md
- **Launch Guide:** See LAUNCH_CHECKLIST.md
- **Complete Status:** See STATUS_REPORT.md

## 🎉 You're Done!

Your Musa Fly website is now live and ready to accept bookings!

**Next Steps:**
1. Monitor WhatsApp for inquiries
2. Update deals weekly
3. Add real customer testimonials
4. Share your website everywhere!

---

**Questions?** Check the documentation files or review the Next.js docs at [nextjs.org](https://nextjs.org)

**Good luck with your travel business! 🌍✈️**
