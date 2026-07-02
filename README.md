# Central India Waterproofing Agency - Landing Page

A modern, responsive, professional landing page for "Central India Waterproofing Agency" built with Next.js 14, Tailwind CSS, and Lucide React icons.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router, TypeScript)
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Fonts**: Inter (via next/font)

## 📦 Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts    # Contact form API endpoint
│   ├── globals.css             # Global styles & Tailwind imports
│   ├── layout.tsx              # Root layout with metadata
│   └── page.tsx                # Main landing page
├── components/
│   ├── Header.tsx              # Navigation with mobile menu
│   ├── Hero.tsx                # Hero section with CTAs
│   ├── Services.tsx            # Services grid (6 services)
│   ├── WhyChooseUs.tsx         # Features & stats
│   ├── Locations.tsx           # Service areas (12 cities)
│   ├── Contact.tsx             # Contact form with validation
│   └── Footer.tsx              # Footer with links & info
```

## 🎨 Design System

### Colors
- **Primary (Ocean Blue)**: `#0ea5e9` to `#0c4a6e`
- **Secondary (Leaf Green)**: `#22c55e` to `#052e16`
- **Background**: White / Light Gray gradients

### Typography
- **Font**: Inter (system fallback)
- **Scale**: Responsive fluid typography

## 📋 Features

- ✅ Fully responsive (mobile-first)
- ✅ Smooth scroll navigation
- ✅ Mobile hamburger menu
- ✅ Contact form with validation
- ✅ API route for form submission
- ✅ 6 service cards with features
- ✅ 12 service locations across Vidarbha
- ✅ 10-year warranty badges
- ✅ SEO optimized metadata
- ✅ Accessible (ARIA labels, semantic HTML)
- ✅ Performance optimized

## 🛠️ Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm 9+ or yarn/pnpm

### Installation

```bash
# Navigate to project directory
cd central-india-waterproofing

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Sections Overview

1. **Header/Navbar** - Logo, navigation links, Call Now button
2. **Hero** - Headline, sub-headline, dual CTAs, trust badges
3. **Services** - 6 service cards (SEALROOF, Roof, Basement, Bathroom, Joints, Emergency)
4. **Why Choose Us** - 6 features + 4 stats (5000+ projects, 15+ years, 100% satisfaction, 10yr warranty)
5. **Locations** - 12 cities across Vidarbha region
6. **Contact** - Form with validation + contact info cards
7. **Footer** - Links, services, areas, social, copyright

## 🔧 Configuration

### Contact Form
The contact form submits to `/api/contact`. In production, integrate with:
- Email service (SendGrid, Resend, Nodemailer)
- CRM (HubSpot, Salesforce)
- Database (PostgreSQL, MongoDB)

### Phone Numbers
All phone numbers use `tel:` links for mobile calling:
- Main: `+91 89751 38745` (Mo. Yusuf Tagala)
- Branch Akola: `+91 90752 98447`
- Branch Chandrapur: `+91 94217 17595`, `+91 93707 06752`

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Static Export (if needed)
Add to `next.config.js`:
```js
module.exports = {
  output: 'export',
  images: { unoptimized: true }
}
```

## 📝 Customization

### Colors
Edit `tailwind.config.js` to modify the color palette.

### Content
Update component files in `src/components/` for text changes.

### SEO
Modify `metadata` in `src/app/layout.tsx` and individual pages.

## 📄 License

© 2024 Central India Waterproofing Agency. All Rights Reserved.

## 🤝 Support

For technical support or customization inquiries, contact the development team.