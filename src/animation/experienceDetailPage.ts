import { DURATIONS, EASINGS } from "./common";
import { Transition } from "motion";

// Base animation for components that slide in from bottom with fade
export const slideInFromBottom = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: DURATIONS.MEDIUM,
    ease: EASINGS.DEFAULT,
  } as Transition,
};

// Staggered animation for multiple components with configurable delay
export const createStaggeredAnimation =
  (baseDelay: number = 0.1) =>
  (index: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: DURATIONS.MEDIUM,
        delay: baseDelay + index * 0.15, // 150ms delay between each component
        ease: EASINGS.DEFAULT,
      } as Transition,
    },
  });

// Specific animations for ExperienceDetailPage components
export const experienceDetailAnimations = {
  // Container animation for the main content area
  container: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: DURATIONS.FAST } as Transition,
  },

  // Return button animation
  returnButton: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: {
      duration: DURATIONS.MEDIUM,
      delay: 0.1,
      ease: EASINGS.DEFAULT,
    } as Transition,
  },

  // Divider line animation
  divider: {
    initial: { scaleX: 0, opacity: 0 },
    animate: { scaleX: 1, opacity: 1 },
    transition: {
      duration: DURATIONS.MEDIUM,
      delay: 0.3,
      ease: EASINGS.DEFAULT,
    } as Transition,
  },

  // Component animations with staggered timing
  header: createStaggeredAnimation(0.4)(0),
  description: createStaggeredAnimation(0.4)(1),
  learned: createStaggeredAnimation(0.4)(2),
  tags: createStaggeredAnimation(0.4)(3),
};

// Viewport animation for components that animate when they come into view
export const viewportAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: {
    duration: DURATIONS.MEDIUM,
    ease: EASINGS.DEFAULT,
  } as Transition,
};
