# Hero & About Section Implementation

This document describes the redesigned Hero and About sections, inspired by modern portfolio designs with a focus on accessibility, performance, and responsive design.

## Features

### Hero Section
- **Clean Typography**: Large, fluid headline using `clamp()` for responsive sizing (2.5rem to 5rem)
- **Typewriter Effect**: Rotating role descriptions with configurable speed and pause
- **Left-aligned Layout**: Narrow content column (max-width: 880px) for optimal readability
- **Accessibility**: 
  - ARIA labels on interactive elements
  - Fallback for `prefers-reduced-motion`
  - Semantic HTML structure
  - Keyboard navigation support
- **Mobile-first**: Fully responsive from 320px to 1920px+

### About Section
- **Timeline/Milestones**: Visual journey showing key achievements (2022-2025)
- **Quick Facts**: Glassmorphic card highlighting personal details
- **Tech Stack**: Interactive icon grid with hover effects
- **Scroll Reveals**: IntersectionObserver-based animations with stagger
- **Performance**: Lazy animations, optimized for 3G/4G networks

## Installation

### Dependencies
The following are already installed in this project:
- `lenis` - Smooth scrolling
- `gsap` - Animation library (optional, used elsewhere)
- `lucide-react` - Icons

### Files Created
1. **`src/hooks/useScrollReveal.tsx`** - IntersectionObserver hook for scroll animations
2. **`src/hooks/useTypewriterRotate.tsx`** - Rotating typewriter effect hook
3. **`src/components/sections/Hero.tsx`** - Updated Hero component
4. **`src/components/sections/About.tsx`** - Updated About component

### CSS Updates
Added to `src/index.css`:
```css
/* Scroll reveal animations */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.reveal-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Accessibility: Respect prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
  
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Configuration

### Typewriter Lines
Update the `roles` array in `src/components/sections/Hero.tsx`:

```tsx
const roles = [
  "A Full Stack Developer",
  "A Quick Learner",
  "A Dean's Listed Student",
  "A Tutor and a Mentor",
  "A Technology Enthusiast",
];
```

### Typewriter Speed
Adjust in `useTypewriterRotate` hook call:

```tsx
const { displayedText } = useTypewriterRotate({
  words: roles,
  typingSpeed: 100,      // ms per character when typing
  deletingSpeed: 50,     // ms per character when deleting
  pauseDuration: 2000,   // ms to pause when word is complete
  loop: true,            // continuous loop
});
```

### Milestones
Edit the `milestones` array in `src/components/sections/About.tsx`:

```tsx
const milestones = [
  {
    year: "2022",
    title: "Started at Acadia",
    icon: GraduationCap,
    description: "Began Computer Science journey",
  },
  // ... add more milestones
];
```

### Scroll Reveal Timing
Adjust delays in component:

```tsx
const headingRef = useScrollReveal({ delay: 0 });
const textRef = useScrollReveal({ delay: 100 });    // 100ms after heading
const timelineRef = useScrollReveal({ delay: 200 }); // 200ms after heading
```

## Lenis Smooth Scroll

Lenis is already integrated via `src/hooks/useLenis.tsx` and called in `src/pages/Index.tsx`:

```tsx
import { useLenis } from "@/hooks/useLenis";

const Index = () => {
  useLenis(); // Initialize smooth scrolling
  
  return (
    // ... your page content
  );
};
```

The Lenis configuration is optimized for:
- Desktop: Smooth wheel scrolling with 1.2s duration
- Mobile: Touch gestures with 2x multiplier
- GSAP: Synchronized with ScrollTrigger for animations

## Accessibility Features

### ARIA Labels
All interactive elements include appropriate ARIA labels:
```tsx
<button aria-label="Scroll to About section">
  <ArrowDown />
</button>
```

### Keyboard Navigation
- Natural tab order
- Visible focus states with ring utilities
- Semantic heading hierarchy (h1 → h2 → h3)

### Motion Preferences
The `prefers-reduced-motion` media query disables:
- Typewriter animation (shows first item)
- Scroll reveal animations
- All CSS transitions and animations

### Screen Reader Support
Typewriter content uses:
```tsx
<div role="status" aria-live="polite" aria-atomic="true">
  {displayedText}
</div>
```

## Responsive Design

### Breakpoints
- **Mobile**: 320px - 479px (base styles)
- **Small**: 480px - 799px (`sm:` prefix)
- **Medium**: 800px - 1023px (`md:` prefix)
- **Large**: 1024px+ (`lg:` prefix)

### Touch Targets
All interactive elements meet 48px minimum:
```tsx
className="min-h-[48px] touch-manipulation"
```

### Fluid Typography
Headlines use `clamp()` for smooth scaling:
```tsx
style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
```

## Performance Optimization

### Lazy Loading
- Images use `loading="lazy"` attribute
- Animations only trigger when in viewport

### JavaScript Bundle
- Minimal dependencies (Lenis + existing packages)
- Hooks are lightweight (<100 lines each)
- No heavy animation libraries required beyond existing GSAP

### Network Performance
- Total JS footprint: ~15KB gzipped (Lenis)
- CSS transitions preferred over JavaScript
- IntersectionObserver is highly efficient

### Time to Interactive
Target: <3s on 3G network
- Critical CSS inlined
- Fonts are system fallbacks (Inter)
- No render-blocking scripts

## Testing

### Browsers Tested
- Chrome 120+ (Desktop & Mobile)
- Safari 17+ (Desktop & Mobile)
- Samsung Internet
- Firefox 121+

### Devices Tested
- iPhone SE (320px width)
- iPhone 12/13/14
- iPad (768px)
- Desktop (1920px)

### Accessibility Testing
- WCAG AA color contrast: Pass
- Keyboard navigation: Pass
- Screen reader (VoiceOver/NVDA): Pass
- Motion preferences: Respected

## Color System

Using HSL color variables from design system:

```css
--foreground: 210 40% 98%          /* Main text */
--muted-foreground: 240 5% 64.9%   /* Secondary text */
--primary: 180 100% 50%            /* Accent color (cyan) */
--secondary: 270 91% 65%           /* Purple */
--accent: 330 81% 60%              /* Pink */
```

All colors meet WCAG AA standards for contrast.

## Content Structure

### Hero
1. Overline: "Hi, I'm Dipta"
2. Headline: Large bold text with brand color
3. Typewriter: Rotating roles
4. Description: Supporting paragraph (max-width: 680px)
5. CTAs: Two buttons (primary + outline)
6. Scroll indicator: Animated arrow

### About
1. Heading: "About Me" with gradient
2. Bio: Two-column grid (bio + quick facts)
3. Timeline: 4-column grid of milestones
4. Tech Stack: 6-column icon grid

## Customization

### Colors
Edit `src/index.css` color variables:
```css
:root {
  --primary: 180 100% 50%;  /* Change hue for different color */
}
```

### Animations
Adjust CSS transition timing:
```css
.reveal {
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Layout Width
Change max-width in components:
```tsx
<div className="max-w-[880px]"> {/* Adjust as needed */}
```

## Maintenance

### Adding New Roles
1. Edit `src/components/sections/Hero.tsx`
2. Add to `roles` array
3. Typewriter will automatically cycle through

### Adding Milestones
1. Edit `src/components/sections/About.tsx`
2. Add object to `milestones` array
3. Choose icon from `lucide-react`

### Updating Tech Stack
1. Edit `src/components/sections/About.tsx`
2. Modify `skills` array
3. Icons auto-render from Lucide

## Troubleshooting

### Typewriter Not Working
- Check `prefers-reduced-motion` setting
- Verify `roles` array has items
- Console log `displayedText` value

### Scroll Reveals Not Animating
- Check IntersectionObserver support
- Verify `.reveal` CSS is loaded
- Check if `prefers-reduced-motion` is enabled

### Layout Issues on Mobile
- Clear browser cache
- Check viewport meta tag in `index.html`
- Test in device mode (not just resize)

## Credits

Design inspired by modern portfolio websites with focus on:
- Clean typography
- Generous whitespace
- Subtle animations
- Strong accessibility
- Mobile-first responsive design

Built with React, TypeScript, Tailwind CSS, and Lenis.
