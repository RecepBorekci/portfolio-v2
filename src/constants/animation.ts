import { Easing } from "motion";

export const CATEGORY_CARD_ANIMATION = {
  DURATION: {
    PROGRESS: 1.5,
    FADE: 0.6,
  },
  EASING: {
    OUT: "easeOut" as Easing,
  },
  STAGGER: {
    CATEGORY: 0.2,
    SUBCATEGORY: 0.1,
    MOBILE_CATEGORY: 0.1,
    MOBILE_SUBCATEGORY: 0.15,
  },
};
