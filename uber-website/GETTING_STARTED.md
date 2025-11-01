# Getting Started with Uber Website

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

## 🚀 Quick Start

### 1. Navigate to Project Directory

```bash
cd uber-website
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- ESLint

### 3. Run Development Server

```bash
npm run dev
```

The application will start at **http://localhost:3000**

### 4. Open in Browser

Visit http://localhost:3000 to see the website in action!

---

## 📦 Available Scripts

### Development

```bash
npm run dev
```
Starts the development server with hot-reload at http://localhost:3000

### Production Build

```bash
npm run build
```
Creates an optimized production build

### Start Production Server

```bash
npm start
```
Runs the production build (must run `npm run build` first)

### Lint Code

```bash
npm run lint
```
Checks code quality with ESLint

---

## 🌐 Deployment Options

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow prompts** to link your project

4. **Production deployment**:
   ```bash
   vercel --prod
   ```

### Deploy to Netlify

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

### Deploy to Other Platforms

The project can be deployed to any platform that supports Next.js:
- AWS Amplify
- Google Cloud Platform
- Azure Static Web Apps
- Railway
- Render
- DigitalOcean App Platform

---

## 📁 Project Structure Explained

```
uber-website/
│
├── app/                      # Next.js App Router
│   ├── about/               # About page
│   │   └── page.tsx
│   ├── business/            # Business page
│   │   └── page.tsx
│   ├── drive/               # Drive page
│   │   └── page.tsx
│   ├── ride/                # Ride page
│   │   └── page.tsx
│   ├── layout.tsx           # Root layout (wraps all pages)
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles
│   └── favicon.ico          # Site icon
│
├── components/              # Reusable React components
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Site footer
│   ├── Hero.tsx             # Hero section
│   ├── Features.tsx         # Features showcase
│   └── RideSelector.tsx     # Ride selection component
│
├── public/                  # Static files
│
├── node_modules/            # Dependencies (auto-generated)
│
├── .next/                   # Build output (auto-generated)
│
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.mjs       # PostCSS configuration
├── next.config.ts           # Next.js configuration
├── eslint.config.mjs        # ESLint configuration
│
└── README.md                # Project documentation
```

---

## 🎨 Customization Guide

### Change Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'uber-black': '#000000',    // Change primary color
      'uber-gray': '#545454',     // Change secondary color
      'uber-light-gray': '#EEEEEE', // Change background color
    },
  },
}
```

### Change Font

Edit `app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  subsets: ["latin"],
  variable: "--font-your-font",
});
```

### Add New Pages

1. Create a new folder in `app/`:
   ```bash
   mkdir app/your-page
   ```

2. Create `page.tsx` inside:
   ```typescript
   export default function YourPage() {
     return <div>Your content</div>
   }
   ```

3. Add link in Header component

### Modify Existing Pages

All pages are in the `app/` directory. Edit the respective `page.tsx` file.

---

## 🔧 Troubleshooting

### Port Already in Use

If port 3000 is busy, use a different port:

```bash
PORT=3001 npm run dev
```

### Build Errors

Clear the build cache:

```bash
rm -rf .next
npm run build
```

### Module Not Found

Reinstall dependencies:

```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

Check TypeScript configuration:

```bash
npx tsc --noEmit
```

---

## 📚 Learn More

### Next.js Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

### Tailwind CSS
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Tailwind UI](https://tailwindui.com)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

---

## 🐛 Common Issues

### Issue: Styles not applying

**Solution**: Make sure Tailwind is properly configured and `globals.css` is imported in `layout.tsx`

### Issue: Images not loading

**Solution**: Place images in the `public/` folder and reference them as `/image.png`

### Issue: Page not found

**Solution**: Ensure the page folder structure matches the URL path

---

## 💡 Tips for Development

1. **Use TypeScript**: Take advantage of type safety
2. **Component Reusability**: Extract common UI into components
3. **Responsive Design**: Test on multiple screen sizes
4. **Performance**: Use Next.js Image component for images
5. **SEO**: Add metadata to each page using Next.js metadata API

---

## 🎯 Next Steps

1. ✅ Run the development server
2. ✅ Explore all pages
3. ✅ Customize colors and content
4. ✅ Add your own features
5. ✅ Deploy to production

---

## 📞 Support

For issues or questions:
- Check the documentation files (README.md, FEATURES.md)
- Review Next.js documentation
- Check Tailwind CSS documentation

---

**Happy coding! 🚀**
