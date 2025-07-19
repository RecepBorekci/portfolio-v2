import React from "react";
import { motion } from "motion/react";
import { StatSubCategory } from "../types/portfolio";
import {
  getStatColorByValue,
  getSubCategoryConfig,
} from "../constants/statThemes";
import AnimatedNumber from "./AnimatedNumber";
import {
  statSubCategoryAnimations,
  STATS_ANIMATION,
} from "../animation/statsPage";

interface StatSubCategoryCardProps {
  substatistic: StatSubCategory;
  displaySize: "small" | "large";
  delay?: number;
}

const StatSubCategoryCard: React.FC<StatSubCategoryCardProps> = React.memo(
  ({ substatistic, displaySize, delay = 0 }) => {
    const config = getSubCategoryConfig(displaySize);
    const currentColor = getStatColorByValue(substatistic.value);
    const progressPercentage = `${substatistic.value}%`;

    const renderProgressBar = () => (
      <div
        className={`w-full bg-gray-600/50 rounded ${config.progressBar.container}`}
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
      <div className="flex justify-between items-center">
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
        className={`
          bg-gray-700/50 
          hover:bg-gray-600/50
          transition-colors
          duration-0
          rounded-lg 
          px-3 
          ${config.container}
        `}
        initial={statSubCategoryAnimations.initial}
        animate={statSubCategoryAnimations.animate(delay)}
      >
        {renderStatHeader()}
        {renderProgressBar()}
      </motion.article>
    );
  }
);

StatSubCategoryCard.displayName = "StatSubCategoryCard";

export default StatSubCategoryCard;
