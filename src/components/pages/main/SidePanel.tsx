import { useMemo } from 'react';
import { playerCardData } from '@data/playerCard';
import { Stat } from '@customTypes/portfolio';
import LeftSidePanelBackground from '@assets/images/LeftSidePanelBackground.svg';
import RightSidePanelBackground from '@assets/images/RightSidePanelBackground.svg';
import { motion } from 'motion/react';
import { sidePanelAnimations } from '@animation/mainPage';
import CountryFlag from '@components/common/CountryFlag';
import TeamLogo from '@components/common/TeamLogo';

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
  const { countryFlag, teamLogo } = playerCardData;
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
      <div className="font-orbitron z-10 text-[2.5vw] font-bold md:text-[6vw] lg:text-[5vw] xl:text-[3vw]">
        <div style={getSkewTransform(mirrored, 3)}>{avg}</div>
      </div>

      <TeamLogo
        src={teamLogo.src}
        alt={teamLogo.alt}
        className="w-[50%]"
        style={getSkewTransform(mirrored, 2)}
      />

      <CountryFlag
        src={countryFlag.src}
        alt={countryFlag.alt}
        className="w-[85%]"
        style={getSkewTransform(mirrored, 2)}
      />
    </motion.div>
  );
}
