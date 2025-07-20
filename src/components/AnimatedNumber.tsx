import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  'aria-hidden'?: boolean;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 1.5,
  delay = 0,
  className = '',
  style,
  'aria-hidden': ariaHidden = false,
}) => {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, latest => Math.round(latest));

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration,
      delay,
      ease: 'easeOut',
    });

    return controls.stop;
  }, [motionValue, value, duration, delay]);

  return (
    <motion.span className={className} style={style} aria-hidden={ariaHidden}>
      {rounded}
    </motion.span>
  );
};

export default AnimatedNumber;
