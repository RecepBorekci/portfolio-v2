import { useMemo } from 'react';
import { playerCardData } from '../data/playerCard';
import { Stat } from '../types/portfolio';
import LeftSidePanelBackground from './LeftSidePanelBackground.svg';
import RightSidePanelBackground from './RightSidePanelBackground.svg';
import { motion } from 'motion/react';
import { sidePanelAnimations } from '../animation/mainPage';

interface SidePanelProps {
  mirrored?: boolean;
}

// Helper functions to calculate styles based on mirrored prop
const getClipPath = (mirrored: boolean) =>
  mirrored
    ? 'polygon(0% 7%, 100% 0, 100% 100%, 0 100%)'
    : 'polygon(0% 0, 100% 7%, 100% 100%, 0 100%)';

const getSkewTransform = (mirrored: boolean, angle: number) => ({
  transform: mirrored ? `skewY(-${angle}deg)` : `skewY(${angle}deg)`,
  transformOrigin: 'center',
});

const getSidePanelBackground = (mirrored: boolean) =>
  mirrored ? RightSidePanelBackground : LeftSidePanelBackground;

export default function SidePanel({ mirrored = false }: SidePanelProps) {
  const stats: Stat[] = playerCardData.stats;
  const avg = useMemo(() => {
    return Math.round(
      stats.reduce((acc, cur) => acc + cur.points, 0) / stats.length
    );
  }, [stats]);

  return (
    <motion.div
      className={`relative flex aspect-[2/4] w-[14vw] flex-col items-center justify-around overflow-hidden p-[1vw] sm:w-[12vw] md:w-[20vw] lg:w-[18vw] xl:absolute xl:bottom-[80px] xl:z-10 xl:w-[12vw] ${mirrored ? 'xl:right-[10%]' : 'xl:left-[10%]'} `}
      style={{
        clipPath: getClipPath(mirrored),
      }}
      whileHover={sidePanelAnimations.hover}
      whileTap={sidePanelAnimations.tap}
    >
      {/* SVG Background */}
      <span
        className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none"
        aria-hidden="true"
      >
        <img
          src={getSidePanelBackground(mirrored)}
          alt="side panel background"
          className="h-full w-full object-cover"
        />
      </span>
      {/* This panel is not visible below lg */}
      <div className="font-orbitron z-10 text-[2.5vw] font-bold md:text-[5vw] lg:text-[3.8vw] xl:text-[3vw]">
        <div style={getSkewTransform(mirrored, 3)}>{avg}</div>
      </div>

      <div className="z-10 aspect-square w-[50%] overflow-hidden rounded-full">
        <img
          src="/images/AGU.jpg"
          alt="AGU team logo"
          className="h-full w-full object-cover"
          style={getSkewTransform(mirrored, 2)}
        />
      </div>

      <div className="z-10 aspect-[4/3] w-[85%]">
        <img
          src="/images/Flag_of_Turkey.svg.webp"
          alt="Flag of Turkey"
          className="h-full w-full object-contain"
          style={getSkewTransform(mirrored, 2)}
        />
      </div>
    </motion.div>
  );
}
