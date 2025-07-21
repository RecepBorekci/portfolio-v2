import InfoButton from './InfoButton';
import SideBarToggle from './SideBarToggle';
import { InfoMenuItem } from '../types/portfolio';
import { infoMenuData } from '../data/infoMenu';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import clsx from 'clsx';
import { infoMenuContainerAnimation } from '../animation/infoMenu';

export default function InfoMenu() {
  const buttonData: InfoMenuItem[] = infoMenuData.buttonData;
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(prev => !prev);
  };

  // Helper function to render buttons in a container
  function renderButtons({
    visibleOn,
    extraClasses,
  }: {
    visibleOn: 'xl' | 'lg' | 'mdAndBelow';
    extraClasses?: string;
  }) {
    const containerClasses = clsx(
      'fixed z-50',
      {
        // Only visible on xl screens (left side)
        'hidden xl:flex xl:flex-col left-4 top-1/2 -translate-y-1/2 gap-4':
          visibleOn === 'xl',
        // Only visible on lg screens (bottom center, but hidden on xl)
        'hidden lg:flex xl:hidden bottom-4 left-1/2 -translate-x-1/2 gap-2':
          visibleOn === 'lg',
        // Only visible on md and below screens (left side, similar to xl)
        'flex lg:hidden flex-col left-4 top-1/2 -translate-y-1/2 gap-3 sm:gap-4':
          visibleOn === 'mdAndBelow',
      },
      extraClasses
    );

    // Determine if this is the container that should have the toggle (only mdAndBelow)
    const shouldShowToggle = visibleOn === 'mdAndBelow';

    if (shouldShowToggle) {
      return (
        <>
          {/* Separate toggle button that's always visible */}
          <div className="fixed top-1/2 left-0 z-[100] -translate-y-1/2">
            <SideBarToggle isCollapsed={isCollapsed} onToggle={handleToggle} />
          </div>

          {/* Menu that slides in/out */}
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                className={containerClasses}
                initial={infoMenuContainerAnimation.initial}
                animate={infoMenuContainerAnimation.animate}
                exit={infoMenuContainerAnimation.exit}
                transition={infoMenuContainerAnimation.transition}
              >
                <div className="flex flex-col gap-3 pl-5 sm:gap-4 md:pl-8 lg:pl-8">
                  {buttonData.map(button => (
                    <InfoButton
                      key={button.id}
                      icon={button.icon}
                      label={button.label}
                      path={button.path}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      );
    }

    return (
      <div className={containerClasses}>
        {buttonData.map(button => (
          <InfoButton
            key={button.id}
            icon={button.icon}
            label={button.label}
            path={button.path}
          />
        ))}
      </div>
    );
  }

  return (
    <>
      {renderButtons({ visibleOn: 'xl' })}
      {renderButtons({ visibleOn: 'lg' })}
      {renderButtons({ visibleOn: 'mdAndBelow' })}
    </>
  );
}
