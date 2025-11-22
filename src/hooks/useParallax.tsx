import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxOptions {
  speed?: number; // 0.5 = slower (background), 1.5 = faster (foreground)
  start?: string;
  end?: string;
  disabled?: boolean; // Disable on mobile
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const { 
    speed = 0.5, 
    start = "top bottom", 
    end = "bottom top",
    disabled = false 
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element || disabled) return;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const isMobile = window.innerWidth < 768;
    if (isMobile) return; // Disable parallax on mobile for performance

    const animation = gsap.to(element, {
      y: () => element.offsetHeight * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub: true, // Smooth scrubbing
        invalidateOnRefresh: true,
      },
    });

    return () => {
      animation.kill();
    };
  }, [speed, start, end, disabled]);

  return elementRef;
};
