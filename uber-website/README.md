# Uber Website Clone

A modern, responsive Uber website clone built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Homepage**: Hero section with ride booking form and features showcase
- **Ride Booking**: Interactive ride selection with multiple vehicle options and pricing
- **Driver Page**: Information for becoming an Uber driver with requirements
- **Business Page**: Uber for Business solutions and enterprise features
- **About Page**: Company information, mission, values, and statistics
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices
- **Modern UI**: Clean, Uber-inspired design with smooth animations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📁 Project Structure

```
uber-website/
├── app/
│   ├── about/          # About page
│   ├── business/       # Business solutions page
│   ├── drive/          # Driver signup page
│   ├── ride/           # Ride booking page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Footer with links
│   ├── Hero.tsx        # Hero section with booking form
│   ├── Features.tsx    # Features showcase
│   └── RideSelector.tsx # Ride type selector
└── public/             # Static assets
```

## 🎨 Design Features

- **Color Scheme**: Black, white, and gray with accent colors (Uber-inspired)
- **Typography**: Inter font for modern, clean readability
- **Responsive Navigation**: Mobile-friendly hamburger menu
- **Interactive Elements**: Hover effects, smooth transitions
- **Form Inputs**: Styled input fields with focus states
- **Cards**: Feature cards with hover animations

## 🌐 Pages

1. **Home (/)**: Landing page with hero section and booking form
2. **Ride (/ride)**: Detailed ride booking interface with vehicle selection
3. **Drive (/drive)**: Driver recruitment page with requirements
4. **Business (/business)**: B2B solutions and enterprise features
5. **About (/about)**: Company information, mission, and values

## 🚗 Key Components

### Header
- Fixed navigation bar
- Responsive mobile menu
- Links to all main pages
- Sign up and login buttons

### Hero
- Eye-catching gradient background
- Ride booking form with pickup/dropoff inputs
- Call-to-action buttons

### RideSelector
- Multiple ride options (UberX, Comfort, UberXL, Black)
- Price estimates and wait times
- Interactive selection

### Footer
- Multi-column layout
- Links to various sections
- Copyright information

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ✅ Build Status

- ✓ TypeScript compilation successful
- ✓ ESLint checks passed
- ✓ Production build successful
- ✓ All pages pre-rendered as static content

## 🔧 Development

The project uses:
- Next.js App Router for routing
- TypeScript for type safety
- Tailwind CSS for styling
- ESLint for code quality

## 📄 License

This is a demo project created for educational purposes.

## 🙏 Acknowledgments

Design inspired by Uber's official website.
