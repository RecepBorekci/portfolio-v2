import React from 'react';
import { motion } from 'motion/react';
import { StatCategory } from '../types/portfolio';
import {
  getStatColorByValue,
  getCategoryConfig,
} from '../constants/statThemes';
import AnimatedNumber from './AnimatedNumber';
import {
  statCategoryAnimations,
  STATS_ANIMATION,
} from '../animation/statsPage';

interface StatCategoryCardProps {
  category: StatCategory;
  displaySize: 'small' | 'large';
  delay?: number;
}

const StatCategoryCard: React.FC<StatCategoryCardProps> = React.memo(
  ({ category, displaySize, delay = 0 }) => {
    const config = getCategoryConfig(displaySize);

    const renderCircularProgress = () => {
      const currentColor = getStatColorByValue(category.value);

      return (
        <div className={`relative ${config.circle} mx-auto mb-2`}>
          <svg
            className={`${config.circle} -rotate-90 transform`}
            viewBox="0 0 36 36"
            role="img"
            aria-label={`${category.name} skill level: ${category.value} out of 100`}
          >
            {/* Background circle */}
            <path
              className="text-gray-600"
              stroke="currentColor"
              strokeWidth="3"
              fill="transparent"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            {/* Animated Progress circle */}
            <motion.path
              stroke={currentColor}
              strokeWidth="3"
              fill="transparent"
              strokeLinecap="round"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              initial={statCategoryAnimations.progressCircle.initial}
              animate={statCategoryAnimations.progressCircle.animate(
                category.value,
                delay
              )}
            />
          </svg>

          {/* Animated Value in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatedNumber
              value={category.value}
              duration={STATS_ANIMATION.DURATION.PROGRESS}
              delay={delay}
              className={`${config.value} font-bold`}
              style={{ color: currentColor }}
              aria-hidden={true}
            />
          </div>
        </div>
      );
    };

    return (
      <motion.article
        className={`rounded-lg border border-gray-600/30 bg-gray-800/80 p-4 text-center hover:border-gray-500/40 hover:bg-gray-700/60 ${config.container} `}
        initial={statCategoryAnimations.initial}
        animate={statCategoryAnimations.animate(delay)}
      >
        {renderCircularProgress()}

        <h3
          className={`${config.title} font-bold tracking-wider text-white uppercase`}
        >
          {category.name}
        </h3>
      </motion.article>
    );
  }
);

StatCategoryCard.displayName = 'StatCategoryCard';

export default StatCategoryCard;
