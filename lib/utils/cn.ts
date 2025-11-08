import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to combine classNames with Tailwind CSS and clsx
 * Handles Tailwind CSS conflicts properly
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
