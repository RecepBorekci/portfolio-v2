// Export all animation constants and variants from a single entry point
export * from "./common";
export * from "./mainPage";
export * from "./profilePage";
export * from "./seasonPage";
export * from "./statsPage";
export * from "./ui";
export * from "./experienceDetailPage";

// Re-export common animation helpers for convenience
export {
  DURATIONS,
  EASINGS,
  fadeIn,
  fadeInUp,
  fadeInDown,
  pageTransitionVariants,
  routeIndexMap,
} from "./common";
