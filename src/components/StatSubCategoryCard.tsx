import React from "react";
import { motion } from "motion/react";
import { StatSubCategory } from "../types/portfolio";
import {
  getStatColorByValue,
  getSubCategoryConfig,
} from "../constants/statThemes";
import { CATEGORY_CARD_ANIMATION } from "../constants/animation";
import AnimatedNumber from "./AnimatedNumber";

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
          initial={{ width: "0%" }}
          animate={{ width: progressPercentage }}
          transition={{
            duration: CATEGORY_CARD_ANIMATION.DURATION.PROGRESS,
            delay: delay,
            ease: CATEGORY_CARD_ANIMATION.EASING.OUT,
          }}
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
          duration={CATEGORY_CARD_ANIMATION.DURATION.PROGRESS}
          delay={delay}
          className={`font-bold ${config.value} tabular-nums`}
          style={{ color: currentColor }}
          aria-hidden={false}
        />
      </div>
    );

    return (
      <motion.article
        className={`bg-gray-700/50 rounded-lg px-3 ${config.container} hover:bg-gray-700/70`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: CATEGORY_CARD_ANIMATION.DURATION.FADE,
          delay: delay,
          ease: CATEGORY_CARD_ANIMATION.EASING.OUT,
        }}
      >
        {renderStatHeader()}
        {renderProgressBar()}
      </motion.article>
    );
  }
);

StatSubCategoryCard.displayName = "StatSubCategoryCard";

export default StatSubCategoryCard;
