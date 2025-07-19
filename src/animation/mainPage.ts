import { DURATIONS, EASINGS } from "./common";
import { Transition } from "motion";

// PlayerCard animations
export const playerCardAnimations = {
  hover: {
    y: -5,
    scale: 1.02,
    transition: EASINGS.SPRING as Transition,
  },
  tap: {
    scale: 1,
    boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
  },
};

// SidePanel animations
export const sidePanelAnimations = {
  hover: {
    y: -3,
    scale: 1.01,
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    transition: EASINGS.SPRING_GENTLE as Transition,
  },
  tap: {
    scale: 0.99,
  },
};

// Background transitions
export const backgroundAnimations = {
  variants: {
    main: {
      filter: "blur(0px) brightness(1)",
      backgroundColor: "rgba(0,0,0,0)",
    },
    other: {
      filter: "blur(8px) brightness(0.5)",
      backgroundColor: "rgba(0,0,0,0.3)",
    },
  },
  transition: {
    filter: { duration: DURATIONS.MEDIUM },
    backgroundColor: { duration: DURATIONS.MEDIUM },
  } as Transition,
};
