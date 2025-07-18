export const variants = {
  enter: (direction: number) => ({
    y: direction > 0 ? -100 : 100,
    opacity: 0,
    zIndex: 1,
  }),
  center: {
    y: 0,
    opacity: 1,
    zIndex: 1,
  },
  exit: (direction: number) => ({
    y: direction < 0 ? -100 : 100,
    opacity: 0,
    zIndex: 0,
  }),
};

export const routeIndexMap: { [key: string]: number } = {
  "/": 0,
  "/profile": 1,
  "/season": 2,
  "/stats": 3,
  "/season/:slug": 2, // Use same index as /season for detail pages
  "/experience-not-found": 2, // Use same index as /season for error pages
};
