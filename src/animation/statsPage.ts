import { DURATIONS, EASINGS } from './common';
import { Transition } from 'motion';

// Constants for stats animations
export const STATS_ANIMATION = {
  DURATION: {
    PROGRESS: DURATIONS.PROGRESS,
    FADE: 0.6,
  },
  EASING: EASINGS.DEFAULT,
  STAGGER: {
    CATEGORY: 0.2,
    SUBCATEGORY: 0.1,
    MOBILE_CATEGORY: 0.1,
    MOBILE_SUBCATEGORY: 0.15,
  },
};

// Stat category card animations
export const statCategoryAnimations = {
  initial: { opacity: 0, y: 20 },
  animate: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: STATS_ANIMATION.DURATION.FADE,
      delay,
      ease: STATS_ANIMATION.EASING,
    } as Transition,
  }),
  // Progress circle animation
  progressCircle: {
    initial: { strokeDasharray: '0, 100' },
    animate: (value: number, delay: number) => ({
      strokeDasharray: `${value}, 100`,
      transition: {
        duration: STATS_ANIMATION.DURATION.PROGRESS,
        delay,
        ease: STATS_ANIMATION.EASING,
      } as Transition,
    }),
  },
};

// Stat subcategory card animations
export const statSubCategoryAnimations = {
  initial: { opacity: 0, x: -20 },
  animate: (delay: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: STATS_ANIMATION.DURATION.FADE,
      delay,
      ease: STATS_ANIMATION.EASING,
    } as Transition,
  }),
  // Progress bar animation
  progressBar: {
    initial: { width: '0%' },
    animate: (value: string, delay: number) => ({
      width: value,
      transition: {
        duration: STATS_ANIMATION.DURATION.PROGRESS,
        delay,
        ease: STATS_ANIMATION.EASING,
      } as Transition,
    }),
  },
};

// Animated number animation
export const animatedNumberAnimation = {
  duration: STATS_ANIMATION.DURATION.PROGRESS,
  easing: STATS_ANIMATION.EASING,
};
