import { Easing, Transition } from 'motion';

// Common animation variants and constants used across multiple components
export const getPageTransitionVariants = (isMobile: boolean) => {
  return isMobile
    ? {
        enter: {
          opacity: 0,
          scale: 0.97,
        },
        center: {
          opacity: 1,
          scale: 1,
        },
        exit: {
          opacity: 0,
          scale: 0.97,
        },
      }
    : {
        enter: (direction: number) => ({
          y: direction > 0 ? -100 : 100,
          opacity: 0,
        }),
        center: {
          y: 0,
          opacity: 1,
        },
        exit: (direction: number) => ({
          y: direction < 0 ? -100 : 100,
          opacity: 0,
        }),
      };
};

export const routeIndexMap: { [key: string]: number } = {
  '/': 0,
  '/profile': 1,
  '/season': 2,
  '/stats': 3,
  '/season/:slug': 2, // Use same index as /season for detail pages
  '/experience-not-found': 2, // Use same index as /season for error pages
};

// Common durations and easings used across animations
export const DURATIONS = {
  FAST: 0.3,
  MEDIUM: 0.5,
  SLOW: 0.8,
  PROGRESS: 1.5,
};

export const EASINGS = {
  DEFAULT: 'easeOut' as Easing,
  BOUNCE: [0.175, 0.885, 0.32, 1.275], // Custom bounce effect
  SPRING: { type: 'spring', stiffness: 300, damping: 20 },
  SPRING_GENTLE: { type: 'spring', stiffness: 200, damping: 15 },
};

// Standard animation presets that can be used across components
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: DURATIONS.MEDIUM,
    ease: EASINGS.DEFAULT,
  } as Transition,
};

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: DURATIONS.MEDIUM,
    ease: EASINGS.DEFAULT,
  } as Transition,
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: DURATIONS.MEDIUM } as Transition,
};
