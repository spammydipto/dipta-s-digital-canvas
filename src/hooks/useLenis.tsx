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
      duration: isMobile ? 0.8 : 1.2, // Faster on mobile
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: !isMobile, // Disable smooth wheel on mobile
      wheelMultiplier: isMobile ? 0.5 : 1,
      touchMultiplier: isMobile ? 1.5 : 2,
      infinite: false,
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
