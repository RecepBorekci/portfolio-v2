import { DURATIONS, EASINGS } from './common';
import { Transition } from 'motion';

// Animation for the entire InfoMenu container when it slides in and out on mobile
export const infoMenuContainerAnimation = {
  initial: { x: '-100%', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: '-100%', opacity: 0 },
  transition: { duration: DURATIONS.FAST, ease: EASINGS.DEFAULT } as Transition,
};

// Animations for the sidebar toggle button
export const sidebarToggleAnimation = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};

// Generic hover/tap animations for the info buttons
export const infoButtonAnimation = {
  hover: {
    scale: 1.05,
    backgroundColor: (isActive: boolean) =>
      isActive ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.2)',
  },
  tap: {
    scale: 0.95,
  },
};
