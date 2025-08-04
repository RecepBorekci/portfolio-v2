import { AnimatePresence, motion } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { getPageTransitionVariants } from '@animation/common';
import useCheckMobileScreen from '@hooks/useCheckMobileScreen';

interface AnimatedRouteWrapperProps {
  children: React.ReactNode;
  direction: number;
}

export default function AnimatedRouteWrapper({
  children,
  direction,
}: AnimatedRouteWrapperProps) {
  const location = useLocation();
  const isMobile = useCheckMobileScreen();
  const pageTransitionVariants = getPageTransitionVariants(isMobile);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        custom={direction}
        variants={pageTransitionVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          duration: 0.4,
          ease: 'easeOut',
        }}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          willChange: 'transform, opacity',
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
