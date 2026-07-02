# Musa Fly - Deployment Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git

### Local Development

1. **Install Dependencies**
```bash
npm install
```

2. **Configure WhatsApp Number**
   - Open `constants/config.ts`
   - Update the `whatsappNumber` field with your actual WhatsApp number (without + or spaces)
   - The format should be: "1234567890" (country code + number)

3. **Run Development Server**
```bash
npm run dev
```

4. **Open Browser**
   - Navigate to `http://localhost:3000`
   - The site should load with all sections

### Build for Production

```bash
npm run build
npm start
```

## 📦 Deployment to Vercel (Recommended)

### Method 1: Using Vercel CLI

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel
```

4. **Production Deployment**
```bash
vercel --prod
```

### Method 2: Using Vercel Dashboard

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Environment Variables (Optional)**
   - In Vercel dashboard, go to your project settings
   - Add environment variables if needed:
     - `NEXT_PUBLIC_WHATSAPP_NUMBER`
     - `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`

## 🌐 Other Deployment Options

### Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Use Next.js runtime

### AWS Amplify

1. **Build Settings**
   - Build command: `npm run build`
   - Output directory: `.next`

### Docker

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t musafly .
docker run -p 3000:3000 musafly
```

## ⚙️ Configuration Checklist

Before deploying to production:

- [ ] Update WhatsApp number in `constants/config.ts`
- [ ] Update contact information (email, phone, address)
- [ ] Update social media links
- [ ] Update site URL in `constants/config.ts`
- [ ] Add Google Analytics ID (optional)
- [ ] Add Google Search Console verification code
- [ ] Replace placeholder images with actual images
- [ ] Test all WhatsApp redirect links
- [ ] Test all sections on mobile devices
- [ ] Run `npm run build` to ensure no errors
- [ ] Test performance with Lighthouse

## 🖼️ Adding Images

### Recommended Image Sizes

- **Hero Background**: 1920x1080px
- **Destination Cards**: 800x600px
- **Visa Cards**: 800x600px
- **Deals**: 800x600px
- **Testimonials**: 200x200px (or use initials)

### Adding Images

1. Place images in `public/images/` directory
2. Organize by category:
   - `public/images/destinations/`
   - `public/images/visa/`
   - `public/images/deals/`
   - `public/images/testimonials/`

3. Update image paths in data files:
   - `data/destinations.ts`
   - `data/visa.ts`
   - `data/deals.ts`
   - `data/testimonials.ts`

### Using Unsplash (Current Setup)

The project currently uses Unsplash images as placeholders. These are free to use but consider:
- Replacing with your own branded images for production
- Using optimized WebP format for better performance
- Ensuring images are properly licensed

## 🔍 SEO Configuration

### Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership using the meta tag method
4. Add the verification code to `app/layout.tsx`:
```typescript
verification: {
  google: "YOUR_VERIFICATION_CODE",
},
```

### Google Analytics

1. Create a GA4 property
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to environment variables or directly in code

### Sitemap

- Automatically generated at `/sitemap.xml`
- Submit to Google Search Console after deployment

## 📊 Performance Optimization

### Already Implemented

✅ Next.js Image optimization
✅ Font optimization with next/font
✅ Code splitting
✅ Lazy loading with Intersection Observer
✅ Framer Motion optimizations
✅ CSS optimization with Tailwind

### Additional Optimizations

1. **Enable Vercel Analytics** (if using Vercel)
2. **Add CDN for static assets**
3. **Enable Compression** (automatically enabled on Vercel)
4. **Monitor Core Web Vitals**

## 🔒 Security

### Recommendations

- Enable HTTPS (automatic on Vercel)
- Add CSP headers
- Enable rate limiting for contact forms (future enhancement)
- Regular dependency updates: `npm audit fix`

## 📱 Testing Checklist

Before going live:

- [ ] Test on mobile devices (iOS & Android)
- [ ] Test on different browsers (Chrome, Safari, Firefox, Edge)
- [ ] Test WhatsApp links on mobile and desktop
- [ ] Verify all images load correctly
- [ ] Test all navigation links
- [ ] Verify FAQ accordion functionality
- [ ] Test form validations (when added)
- [ ] Check page load speed (Lighthouse)
- [ ] Verify SEO tags with social media debuggers
- [ ] Test 404 page
- [ ] Check console for any errors

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### WhatsApp Links Not Working

- Verify the number format: "1234567890" (no + or spaces)
- Test the link format: `https://wa.me/1234567890`
- Ensure the number is registered on WhatsApp

### Images Not Loading

- Check image paths are correct
- Ensure images are in the `public` directory
- Verify Next.js Image component is used correctly

## 📞 Support

For deployment issues or questions:
- Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel documentation: [vercel.com/docs](https://vercel.com/docs)

---

## 🎉 Post-Deployment

After successful deployment:

1. **Submit Sitemap to Search Engines**
   - Google Search Console
   - Bing Webmaster Tools

2. **Set Up Monitoring**
   - Vercel Analytics
   - Google Analytics
   - Uptime monitoring

3. **Social Media**
   - Share your site URL
   - Test Open Graph images
   - Verify Twitter Card rendering

4. **Backup**
   - Regular GitHub commits
   - Database backups (when applicable)

Congratulations! Your Musa Fly website is now live! 🚀
