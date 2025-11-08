// Site metadata
export const SITE_NAME = 'DevSupSkill';
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
