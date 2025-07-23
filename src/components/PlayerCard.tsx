import { playerCardData } from '../data/playerCard';
import svg from './PlayerCardBackground.svg';
import StatPair from './StatPair';
import { motion } from 'motion/react';
import { playerCardAnimations } from '../animation/mainPage';
import { useMemo } from 'react';
import CountryFlag from './CountryFlag';
import TeamLogo from './TeamLogo';

interface PlayerCardProps {
  size: 'full' | 'mini';
}

// Size-based class lookup tables
const sizeClasses = {
  full: {
    container:
      'w-[80vw] sm:w-[60vw] md:w-[30vw] lg:w-[26vw] xl:w-[22vw] max-w-none md:max-w-[640px] lg:max-w-[384px] xl:absolute xl:bottom-[120px] xl:left-1/2 xl:-translate-x-1/2 xl:z-10',
    nameText:
      'text-[1.3em] sm:text-[1.5em] md:text-[1.05em] lg:text-[1.2em] xl:text-[1.3em]',
    statsText:
      'text-[3.5vw] sm:text-[3.2vw] md:text-[1.5vw] lg:text-[1.2vw] xl:text-[1vw]',
    avgText:
      'text-[8.5vw] sm:text-[7vw] md:text-[3.5vw] lg:text-[3vw] xl:text-[2.5vw]',
  },
  mini: {
    container: 'w-[180px] sm:w-[200px] md:w-[220px] max-w-[40vw]',
    nameText:
      'text-[0.8em] sm:text-[1em] md:text-[1em] lg:text-[1em] xl:text-[1.1em]',
    statsText:
      'text-[1.3vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1vw] xl:text-[0.6vw]',
    avgText:
      'text-[20px] sm:text-[25px] md:text-[28px] lg:text-[28px] xl:text-[25px]',
  },
};

export default function PlayerCard({ size }: PlayerCardProps) {
  const { name, stats, profileImage, position, countryFlag, teamLogo } =
    playerCardData;
  const classes = sizeClasses[size];

  const avg = useMemo(() => {
    return Math.round(
      stats.reduce((acc, cur) => acc + cur.points, 0) / stats.length
    );
  }, [stats]);

  return (
    <motion.div
      className={`relative aspect-[384/681] ${classes.container}`}
      whileHover={playerCardAnimations.hover}
      whileTap={playerCardAnimations.tap}
    >
      <img
        src={svg}
        alt="playerCardBackground"
        className="absolute top-0 left-0 h-full w-full"
      />

      <div className="absolute top-[10%] right-[8%] bottom-[10%] left-[8%] flex flex-col">
        {/* Profile section */}
        <div className="relative flex h-[46%] items-center justify-center">
          {/* Absolute Left column */}
          <div className="absolute top-[45%] left-[-6%] flex h-full w-[25%] -translate-y-1/2 flex-col items-center justify-around">
            {/* Average score */}
            <div
              className={`font-orbitron flex flex-col items-center leading-none font-bold text-black ${classes.avgText}`}
            >
              {avg}
              <div className="font-orbitron mt-[0.1em] text-center text-[0.5em] font-semibold tracking-wide text-black">
                {position}
              </div>
            </div>

            {/* Country flag */}
            <CountryFlag
              src={countryFlag.src}
              alt={countryFlag.alt}
              className="w-[80%]"
            />

            {/* Team logo */}
            <TeamLogo
              src={teamLogo.src}
              alt={teamLogo.alt}
              className="w-[80%]"
            />
          </div>

          {/* Profile Image (centered) */}
          <img
            src={profileImage}
            alt="profile"
            className="aspect-square w-[74%] object-contain"
          />
        </div>

        <div className="flex h-[4%] items-center justify-center">
          <h2
            className={`font-orbitron font-bold text-[#7B4019] ${classes.nameText}`}
          >
            {name}
          </h2>
        </div>

        {/* Stats section */}
        <div
          className={`grid h-[50%] grid-cols-2 gap-[2] pt-4 ${classes.statsText}`}
        >
          {stats.map(stat => (
            <StatPair key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
