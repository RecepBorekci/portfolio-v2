# Animation Structure

This folder contains the animation configurations for the portfolio site, organized by page and component type.

## File Structure

- `common.ts` - Common animation constants, variants and presets used across the site
- `index.ts` - Re-exports all animations for easier importing
- `mainPage.ts` - Animations for main page components (PlayerCard, SidePanel, Background)
- `profilePage.ts` - Animations for profile page components
- `seasonPage.ts` - Animations for season page and experience cards
- `experienceDetailPage.ts` - Animations for experience detail page components
- `statsPage.ts` - Animations for stats page components and animated numbers
- `ui.ts` - Animations for UI components used across multiple pages

## Usage

### Import animations

```tsx
// Direct import from specific file
import { playerCardAnimations } from '../animation/mainPage';

// Import from index
import { fadeIn, playerCardAnimations } from '../animation';
```

### Apply animations to components

```tsx
// Simple animation
<motion.div
  initial={fadeIn.initial}
  animate={fadeIn.animate}
  whileHover={playerCardAnimations.hover}
  whileTap={playerCardAnimations.tap}
>
  {/* Component content */}
</motion.div>

// Using predefined animation objects
<motion.div {...experienceDetailAnimations.header}>
  <ExperiencePageHeader experience={experience} />
</motion.div>
```

### Animation constants

Common animation constants are available in the `common.ts` file:

- `DURATIONS` - Standard duration values (FAST, MEDIUM, SLOW, etc.)
- `EASINGS` - Easing functions (DEFAULT, BOUNCE, SPRING, etc.)

### Reusable presets

Common animation presets:

- `fadeIn` - Simple fade-in animation
- `fadeInUp` - Fade in while moving up
- `fadeInDown` - Fade in while moving down
- `pageTransitionVariants` - Page transition animations

## Adding new animations

1. Identify which file the animation belongs in based on the page or component
2. Add the animation as a named export
3. Use the common constants for consistency
4. Import the animation in your component
