/**
 * Shared constants for stat components theming and configuration
 */

export const STAT_COLORS = {
  EXCELLENT: "#22c55e", // Green (80+)
  GOOD: "#eab308", // Yellow (70+)
  AVERAGE: "#f97316", // Orange (60+)
  POOR: "#ef4444", // Red (below 60)
} as const;

export const STAT_THRESHOLDS = {
  EXCELLENT: 80,
  GOOD: 70,
  AVERAGE: 60,
} as const;

/**
 * Determines the appropriate color for a stat value based on predefined thresholds
 * @param value - The stat value (0-100)
 * @returns The corresponding color string
 */
export const getStatColorByValue = (value: number): string => {
  if (value >= STAT_THRESHOLDS.EXCELLENT) return STAT_COLORS.EXCELLENT;
  if (value >= STAT_THRESHOLDS.GOOD) return STAT_COLORS.GOOD;
  if (value >= STAT_THRESHOLDS.AVERAGE) return STAT_COLORS.AVERAGE;
  return STAT_COLORS.POOR;
};

/**
 * Hierarchical component size configurations for consistent theming
 * Structure: COMPONENT_SIZES[component_type][size][property]
 */
export const COMPONENT_SIZES = {
  CATEGORY: {
    SMALL: {
      container: "w-[30%] flex-shrink-0 flex flex-col justify-center",
      circle: "w-16 h-16",
      title: "text-xs",
      value: "text-lg",
    },
    LARGE: {
      container: "w-full mb-4",
      circle: "w-20 h-20",
      title: "text-sm",
      value: "text-xl",
    },
  },
  SUB_CATEGORY: {
    SMALL: {
      container: "py-3 text-sm",
      label:
        "text-gray-200 pr-2 text-xs font-medium tracking-wide leading-relaxed",
      value: "text-sm",
      progressBar: {
        container: "h-1 mt-1",
        bar: "h-1",
      },
    },
    LARGE: {
      container: "py-4 text-sm mb-2",
      label: "text-gray-300 pr-2",
      value: "min-w-[2rem] text-right",
      progressBar: {
        container: "h-2 mt-2",
        bar: "h-2",
      },
    },
  },
} as const;

/**
 * Type-safe helper functions for accessing component configurations
 */
export const getCategoryConfig = (size: "small" | "large") => {
  return COMPONENT_SIZES.CATEGORY[
    size.toUpperCase() as keyof typeof COMPONENT_SIZES.CATEGORY
  ];
};

export const getSubCategoryConfig = (size: "small" | "large") => {
  return COMPONENT_SIZES.SUB_CATEGORY[
    size.toUpperCase() as keyof typeof COMPONENT_SIZES.SUB_CATEGORY
  ];
};

/**
 * Animation constants for consistent transitions
 */
export const ANIMATIONS = {
  PROGRESS_TRANSITION: "transition-all duration-500 ease-out",
  HOVER_TRANSITION: "transition-all duration-200",
  STROKE_TRANSITION: "stroke-dasharray 0.5s ease-in-out",
} as const;
