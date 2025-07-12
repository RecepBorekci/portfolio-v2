import React from "react";
import { StatCategory } from "../types/portfolio";
import {
  getStatColorByValue,
  getCategoryConfig,
  ANIMATIONS,
} from "../constants/statThemes";

interface StatCategoryCardProps {
  category: StatCategory;
  displaySize: "small" | "large";
}

const StatCategoryCard: React.FC<StatCategoryCardProps> = React.memo(
  ({ category, displaySize }) => {
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
            {/* Progress circle */}
            <path
              stroke={currentColor}
              strokeWidth="3"
              fill="transparent"
              strokeDasharray={`${category.value}, 100`}
              strokeLinecap="round"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              style={{ transition: ANIMATIONS.STROKE_TRANSITION }}
            />
          </svg>

          {/* Value in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className={`${config.value} font-bold`}
              style={{ color: currentColor }}
              aria-hidden="true"
            >
              {category.value}
            </span>
          </div>
        </div>
      );
    };

    return (
      <article
        className={`bg-gray-800/80 border border-gray-600/30 rounded-lg p-4 text-center ${config.container}`}
      >
        {renderCircularProgress()}

        <h3
          className={`${config.title} font-bold text-white uppercase tracking-wider`}
        >
          {category.name}
        </h3>
      </article>
    );
  }
);

StatCategoryCard.displayName = "StatCategoryCard";

export default StatCategoryCard;
