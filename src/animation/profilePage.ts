import { DURATIONS, EASINGS } from "./common";
import { Transition } from "motion";

// ProfilePage container animation
export const profileContainerAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: DURATIONS.MEDIUM } as Transition,
};

// Profile image animation
export const profileImageAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
  },
  transition: {
    duration: 0.5,
    delay: 0.2,
    type: "spring",
    stiffness: 200,
  } as Transition,
  hover: {
    scale: 1.03,
    y: -5,
    transition: {
      duration: 0.4,
      ease: EASINGS.DEFAULT,
    } as Transition,
  },
};

export const playerCardAnimation = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, delay: 0.3 } as Transition,
};

// Profile content animation
export const profileContentAnimation = {
  initial: { opacity: 0, x: 30 },
  animate: {
    opacity: 1,
    x: 0,
  },
  transition: {
    duration: DURATIONS.MEDIUM,
    delay: 0.4,
    ease: EASINGS.DEFAULT,
  } as Transition,
};

// Attribute list container animation
export const attributeListAnimation = {
  initial: { opacity: 0, y: 30 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.MEDIUM,
      delay: 0.2 + index * 0.1,
      ease: EASINGS.DEFAULT,
    } as Transition,
  }),
};

// Individual attribute items animation (skill, language, hobby)
export const attributeItemAnimation = {
  initial: { opacity: 0, y: 10 },
  animate: (parentIndex: number, index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.FAST,
      delay: 0.1 + parentIndex * 0.1 + index * 0.03,
    } as Transition,
  }),
};
