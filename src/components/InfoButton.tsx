import { NavLink, useLocation } from 'react-router-dom';
import { IconType } from 'react-icons';
import clsx from 'clsx';
import { motion } from 'motion/react';
import { useMemo } from 'react';
import { infoButtonAnimation } from '../animation/infoMenu';

interface InfoButtonProps {
  icon: IconType;
  label: string;
  path: string;
}

export default function InfoButton({
  icon: Icon,
  label,
  path,
}: InfoButtonProps) {
  const location = useLocation();

  const isActive = useMemo(() => {
    return location.pathname === path;
  }, [location.pathname, path]);

  const buttonClasses = useMemo(
    () =>
      clsx(
        'flex items-center gap-2 justify-center',
        'lg:flex-col xl:flex-row',
        'border border-white/20 rounded-md',
        'px-3 sm:px-4 py-2',
        'text-[3vw] sm:text-[2vw] lg:text-[1.5vw] xl:text-[1vw]',
        'min-w-[12vw] sm:min-w-[10vw] lg:min-w-[10vw] xl:min-w-[6vw]',
        'min-h-[12vw] sm:min-h-[10vw] lg:min-h-[8vw] xl:min-h-[5vw]',
        'transition-colors duration-200',
        {
          'text-yellow-300': isActive,
          'text-white': !isActive,
        }
      ),
    [isActive]
  );

  const motionVariants = useMemo(
    () => ({
      hover: {
        scale: infoButtonAnimation.hover.scale,
        backgroundColor: infoButtonAnimation.hover.backgroundColor(isActive),
      },
      tap: infoButtonAnimation.tap,
    }),
    [isActive]
  );

  const navLinkBg = isActive
    ? 'rgba(255,255,255,0.3)'
    : 'rgba(255,255,255,0.1)';

  return (
    <motion.div
      variants={motionVariants}
      whileHover="hover"
      whileTap="tap"
      className="mb-1 h-full w-full sm:mb-2"
    >
      <NavLink
        to={path}
        end
        aria-label={label + ' Button'}
        className={buttonClasses}
        style={{
          backgroundColor: navLinkBg,
        }}
      >
        <Icon className="sm:text-md text-xl" />
        <span className="hidden font-bold tracking-wide whitespace-nowrap sm:inline">
          {label}
        </span>
      </NavLink>
    </motion.div>
  );
}
