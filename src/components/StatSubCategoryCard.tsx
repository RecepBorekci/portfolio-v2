import React from "react";
import { StatSubCategory } from "../types/portfolio";
import {
  getStatColorByValue,
  getSubCategoryConfig,
  ANIMATIONS,
} from "../constants/statThemes";

interface StatSubCategoryCardProps {
  substatistic: StatSubCategory;
  displaySize: "small" | "large";
}

const StatSubCategoryCard: React.FC<StatSubCategoryCardProps> = React.memo(
  ({ substatistic, displaySize }) => {
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
        <div
          className={`${config.progressBar.bar} rounded ${ANIMATIONS.PROGRESS_TRANSITION}`}
          style={{
            width: progressPercentage,
            backgroundColor: currentColor,
          }}
        />
      </div>
    );

    const renderStatHeader = () => (
      <div className="flex justify-between items-center">
        <span className={`${config.label} truncate font-medium`}>
          {substatistic.label}
        </span>
        <span
          className={`font-bold ${config.value} tabular-nums`}
          style={{ color: currentColor }}
          aria-label={`Score: ${substatistic.value} out of 100`}
        >
          {substatistic.value}
        </span>
      </div>
    );

    return (
      <article
        className={`bg-gray-700/50 rounded-lg px-3 ${config.container} ${ANIMATIONS.HOVER_TRANSITION} hover:bg-gray-700/70`}
      >
        {renderStatHeader()}
        {renderProgressBar()}
      </article>
    );
  }
);

StatSubCategoryCard.displayName = "StatSubCategoryCard";

export default StatSubCategoryCard;
