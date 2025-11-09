// Site metadata
export const SITE_NAME = '</> DevsUpSkill';
export const SITE_DESCRIPTION = 'Modern software development course for German-Bangladeshi market';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

// Supported languages
export const LANGUAGES = {
  DE: 'de',
  BN: 'bn',
  EN: 'en',
} as const;

export const DEFAULT_LANGUAGE = LANGUAGES.DE;

// API endpoints
export const API_ENDPOINTS = {
  COURSES: '/api/courses',
  LESSONS: '/api/lessons',
  USERS: '/api/users',
} as const;

// Animation durations (in seconds)
export const ANIMATION_DURATION = {
  FAST: 0.2,
  NORMAL: 0.3,
  SLOW: 0.5,
} as const;

// Brand Color Palette (Indigo + Cyan + Amber)
export const BRAND_COLORS = {
  // Primary: Indigo
  PRIMARY: {
    50: 'from-indigo-50',
    100: 'bg-indigo-100',
    200: 'bg-indigo-200',
    600: 'bg-indigo-600 text-white hover:bg-indigo-700',
    700: 'bg-indigo-700',
  },
  // Secondary: Sky/Cyan
  SECONDARY: {
    200: 'bg-cyan-200',
    500: 'from-cyan-500',
    600: 'bg-sky-600 text-white hover:bg-sky-700',
  },
  // Accent: Amber
  ACCENT: {
    500: 'bg-amber-500 text-white hover:bg-amber-600',
  },
  // Text/Links
  TEXT: {
    LINK: 'hover:text-indigo-600 dark:hover:text-indigo-400',
  },
} as const;
