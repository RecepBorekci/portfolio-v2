import { DURATIONS } from "./common";
import { Transition } from "motion";

// Info button animations
export const infoButtonAnimations = {
  hover: {
    scale: 1.05,
    backgroundColor: (isActive: boolean) =>
      isActive ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.2)",
  },
  tap: {
    scale: 0.95,
  },
};

// Tag pill animations
export const tagPillAnimations = {
  initial: { opacity: 0, scale: 0.8 },
  animate: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATIONS.FAST,
      delay,
    } as Transition,
  }),
  hover: {
    y: -2,
    scale: 1.05,
  },
};

// View more link animations
export const viewMoreLinkAnimations = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: DURATIONS.FAST,
    } as Transition,
  },
  hover: {
    scale: 1.05,
    x: 3,
    transition: {
      duration: 0.2,
    } as Transition,
  },
};

// Return button animations
export const returnButtonAnimations = {
  hover: {
    x: -3,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 17,
    } as Transition,
  },
  tap: {
    scale: 0.95,
  },
};
