import { useReducedMotion } from 'framer-motion';

/**
 * Custom hook to check if animations should be reduced
 * Returns true if user prefers reduced motion
 */
export function useAnimation() {
  const shouldReduceMotion = useReducedMotion();

  return {
    shouldReduceMotion,
    duration: shouldReduceMotion ? 0 : 0.3,
    delay: shouldReduceMotion ? 0 : 0.1,
  };
}
