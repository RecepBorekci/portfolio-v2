import { motion } from 'motion/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { sidebarToggleAnimation } from '../animation/infoMenu';

interface SideBarToggleProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export default function SideBarToggle({
  isCollapsed,
  onToggle,
}: SideBarToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      className="flex h-14 w-8 items-center justify-center rounded-r-md border-y border-r border-white/20 bg-black/30 text-white/80 transition-colors duration-200 hover:border-white/40 hover:bg-black/50 hover:text-white md:h-16 md:w-10 lg:hidden"
      whileHover="hover"
      whileTap="tap"
      variants={sidebarToggleAnimation}
      aria-label={isCollapsed ? 'Show menu' : 'Hide menu'}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: 0,
          scale: 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {isCollapsed ? (
          <IconContext.Provider value={{ className: 'text-3xl md:text-4xl' }}>
            <FiChevronRight />
          </IconContext.Provider>
        ) : (
          <IconContext.Provider value={{ className: 'text-3xl md:text-4xl' }}>
            <FiChevronLeft />
          </IconContext.Provider>
        )}
      </motion.div>
    </motion.button>
  );
}
