import { motion } from 'motion/react';
import BackgroundImage from './BackgroundImage';
import { backgroundAnimations } from '@animation/mainPage';

export default function BackgroundMotionWrapper({
  isMainPage,
}: {
  isMainPage: boolean;
}) {
  return (
    <motion.div
      initial={false}
      animate={isMainPage ? 'main' : 'other'}
      variants={backgroundAnimations.variants}
      transition={backgroundAnimations.transition}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    >
      <BackgroundImage />
    </motion.div>
  );
}
