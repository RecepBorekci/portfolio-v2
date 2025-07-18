import React from "react";
import { motion } from "motion/react";
import { StatCategory } from "../types/portfolio";
import {
  getStatColorByValue,
  getCategoryConfig,
} from "../constants/statThemes";
import { CATEGORY_CARD_ANIMATION } from "../constants/animation";
import AnimatedNumber from "./AnimatedNumber";

interface StatCategoryCardProps {
  category: StatCategory;
  displaySize: "small" | "large";
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
            className={`${config.circle} transform -rotate-90`}
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
              initial={{ strokeDasharray: "0, 100" }}
              animate={{ strokeDasharray: `${category.value}, 100` }}
              transition={{
                duration: CATEGORY_CARD_ANIMATION.DURATION.PROGRESS,
                delay: delay,
                ease: CATEGORY_CARD_ANIMATION.EASING.OUT,
              }}
            />
          </svg>

          {/* Animated Value in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatedNumber
              value={category.value}
              duration={CATEGORY_CARD_ANIMATION.DURATION.PROGRESS}
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
        className={`bg-gray-800/80 border border-gray-600/30 rounded-lg p-4 text-center ${config.container}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: CATEGORY_CARD_ANIMATION.DURATION.FADE,
          delay: delay,
          ease: CATEGORY_CARD_ANIMATION.EASING.OUT,
        }}
      >
        {renderCircularProgress()}

        <h3
          className={`${config.title} font-bold text-white uppercase tracking-wider`}
        >
          {category.name}
        </h3>
      </motion.article>
    );
  }
);

StatCategoryCard.displayName = "StatCategoryCard";

export default StatCategoryCard;
