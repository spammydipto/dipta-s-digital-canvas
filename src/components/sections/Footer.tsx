import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    gsap.fromTo(
      ".footer-content",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".footer-section",
          start: "top 90%",
        },
      }
    );

    gsap.to(".floating-particle", {
      y: -10,
      opacity: 0.3,
      duration: 3,
      stagger: 0.2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <footer className="footer-section relative py-12 px-6 border-t border-border/50">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-particle absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-neon-cyan/30" />
        <div className="floating-particle absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-neon-purple/30" />
        <div className="floating-particle absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-neon-pink/30" />
        <div className="floating-particle absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-neon-cyan/30" />
      </div>

      <div className="footer-content container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold gradient-text mb-2">Dipta Kumar Mondal</p>
            <p className="text-muted-foreground">Full Stack Web Developer</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <button onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}>
              Home
            </button>
            <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
              About
            </button>
            <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              Projects
            </button>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Contact
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © 2025 Made with <Heart className="w-4 h-4 text-accent animate-pulse" /> by Dipta Kumar Mondal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
