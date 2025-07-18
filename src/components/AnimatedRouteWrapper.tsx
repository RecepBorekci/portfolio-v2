import { AnimatePresence, motion } from "motion/react";
import { useLocation } from "react-router-dom";
import { variants } from "../animation/pageTransition";

interface AnimatedRouteWrapperProps {
  children: React.ReactNode;
  direction: number;
}

export default function AnimatedRouteWrapper({
  children,
  direction,
}: AnimatedRouteWrapperProps) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
