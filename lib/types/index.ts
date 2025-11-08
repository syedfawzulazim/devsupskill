// Language type
export type Language = 'de' | 'bn' | 'en';

// Course types
export interface Course {
  id: string;
  title: string;
  description: string;
  slug: string;
  image?: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // in hours
  lessons: Lesson[];
  tags: string[];
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  description: string;
  order: number;
  videoUrl?: string;
  content: string;
  duration: number; // in minutes
}

// User types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  language: Language;
  enrolledCourses: string[];
  completedLessons: string[];
}

// Generic API response
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
