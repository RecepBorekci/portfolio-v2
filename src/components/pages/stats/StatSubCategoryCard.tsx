import React from 'react';
import { motion } from 'motion/react';
import { StatSubCategory } from '@customTypes/portfolio';
import {
  getStatColorByValue,
  getSubCategoryConfig,
} from '@constants/statThemes';
import AnimatedNumber from '@components/common/AnimatedNumber';
import {
  statSubCategoryAnimations,
  STATS_ANIMATION,
} from '@animation/statsPage';

interface StatSubCategoryCardProps {
  substatistic: StatSubCategory;
  displaySize: 'small' | 'large';
  delay?: number;
}

const StatSubCategoryCard: React.FC<StatSubCategoryCardProps> = React.memo(
  ({ substatistic, displaySize, delay = 0 }) => {
    const config = getSubCategoryConfig(displaySize);
    const currentColor = getStatColorByValue(substatistic.value);
    const progressPercentage = `${substatistic.value}%`;

    const renderProgressBar = () => (
      <div
        className={`w-full rounded bg-gray-600/50 ${config.progressBar.container}`}
        role="progressbar"
        aria-valuenow={substatistic.value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${substatistic.label} skill level`}
      >
        <motion.div
          className={`${config.progressBar.bar} rounded`}
          style={{ backgroundColor: currentColor }}
          initial={statSubCategoryAnimations.progressBar.initial}
          animate={statSubCategoryAnimations.progressBar.animate(
            progressPercentage,
            delay
          )}
        />
      </div>
    );

    const renderStatHeader = () => (
      <div className="flex items-center justify-between">
        <span className={`${config.label} truncate font-medium`}>
          {substatistic.label}
        </span>
        <AnimatedNumber
          value={substatistic.value}
          duration={STATS_ANIMATION.DURATION.PROGRESS}
          delay={delay}
          className={`font-bold ${config.value} tabular-nums`}
          style={{ color: currentColor }}
          aria-hidden={false}
        />
      </div>
    );

    return (
      <motion.article
        className={`rounded-lg border border-gray-600/30 bg-gray-800/80 px-3 hover:border-gray-500/40 hover:bg-gray-700/60 ${config.container} `}
        initial={statSubCategoryAnimations.initial}
        animate={statSubCategoryAnimations.animate(delay)}
      >
        {renderStatHeader()}
        {renderProgressBar()}
      </motion.article>
    );
  }
);

StatSubCategoryCard.displayName = 'StatSubCategoryCard';

export default StatSubCategoryCard;
