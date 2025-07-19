import { DURATIONS, EASINGS } from "./common";
import { Transition } from "motion";

// Season page container animation
export const seasonContainerAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: DURATIONS.MEDIUM } as Transition,
};

// Experience card animations
export const experienceCardAnimations = {
  initial: { opacity: 0, y: 50 },
  whileInView: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.MEDIUM,
      delay: index * 0.1,
      ease: EASINGS.DEFAULT,
    } as Transition,
  }),
  viewport: { once: true, margin: "-50px" },
  hover: {
    scale: 1.02,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.25)",
    borderColor: "rgba(234, 179, 8, 0.3)",
  },
  transition: EASINGS.SPRING as Transition,
};
