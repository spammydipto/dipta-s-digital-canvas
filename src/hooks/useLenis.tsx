import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useLenis = () => {
  useEffect(() => {
    // Detect mobile device
    const isMobile = window.innerWidth < 768;
    
    const lenis = new Lenis({
      duration: isMobile ? 0.8 : 1.8, // Slower for buttery smooth feel on desktop
      easing: (t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1), // Cubic easing for weight
      lerp: 0.1, // Smooth interpolation
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true, // Enable for both
      wheelMultiplier: isMobile ? 0.5 : 1.2,
      touchMultiplier: isMobile ? 1.5 : 2,
      infinite: false,
      syncTouch: true, // Better touch synchronization
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Expose to window for debugging
    (window as any).lenis = lenis;

    return () => {
      lenis.destroy();
      gsap.ticker.remove(() => {});
    };
  }, []);
};
