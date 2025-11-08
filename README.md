# DevSupSkill - Modern Software Development Course Platform

A modern web application for an online software development course targeting the German-Bangladeshi market.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com)
- **Animations**: [Framer Motion](https://www.framer.com/motion)
- **Font**: [Geist](https://vercel.com/font)

## 📁 Project Structure

```
devsupskill/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with Header & Footer
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── common/              # Reusable components (Button, etc.)
│   ├── layout/              # Layout components (Header, Footer)
│   ├── sections/            # Page sections (Hero, etc.)
│   └── index.ts             # Component exports
├── lib/                     # Utilities and shared code
│   ├── constants/           # App constants and configuration
│   ├── hooks/               # Custom React hooks
│   ├── types/               # TypeScript type definitions
│   └── utils/               # Utility functions
├── public/                  # Static assets
└── styles/                  # Additional stylesheets (if needed)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies (already done):

```bash
npm install
```

2. Set up environment variables:

```bash
cp .env.example .env.local
```

3. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion integration for engaging UI
- **Component Library**: Pre-built components using shadcn/ui
- **Type Safety**: Full TypeScript support
- **SEO Optimized**: Metadata and Open Graph tags configured
- **Dark Mode Ready**: CSS variables support for theme switching

## 📚 Adding Components

To add a new shadcn/ui component:

```bash
npx shadcn@latest add [component-name]
```

## 🛠️ Development Tips

### Creating a New Page

1. Create a directory in `app/` (e.g., `app/courses`)
2. Add a `page.tsx` file
3. Import and use components from `components/`

### Creating a New Component

1. Create a file in the appropriate `components/` subdirectory
2. Use `'use client'` for interactive components
3. Export from `components/index.ts` for easy importing

### Using Custom Hooks

Custom hooks are in `lib/hooks/`. Import and use them in client components:

```tsx
import { useAnimation } from '@/lib/hooks/useAnimation';
```

## 📦 Build Optimization

The project uses:
- **Turbopack** for faster builds
- **Automatic code splitting** with Next.js
- **Optimized images** with next/image
- **Font optimization** with next/font

## 🌐 Multi-Language Support

The app is designed with multi-language support in mind. Configure in:
- `lib/constants/index.ts` - Language configuration
- `.env.local` - Default language setting


## 📄 License

This project is open source and available under the MIT License.
