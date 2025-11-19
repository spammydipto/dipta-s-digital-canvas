import { useEffect } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";

const Hero = () => {
  const { displayedText } = useTypewriter("A Full-Stack Developer", 100, 1000);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      ".hero-headline",
      { opacity: 0, y: 50, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power2.out" }
    )
      .fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        ".hero-cta",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.3"
      );

    gsap.to(".floating-orb-1", {
      y: -20,
      x: 10,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.to(".floating-orb-2", {
      y: 15,
      x: -15,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Orbs */}
      <div className="floating-orb-1 absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-neon-cyan/10 blur-3xl" />
      <div className="floating-orb-2 absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-neon-purple/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="hero-headline text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Hi, I'm <span className="gradient-text">Dipta</span>
          </h1>
          <p className="hero-subtitle text-3xl md:text-4xl text-primary font-semibold min-h-[3rem]">
            ({displayedText}<span className="animate-pulse">|</span>)
          </p>
          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              onClick={scrollToAbout}
              size="lg"
              className="bg-gradient-to-r from-neon-cyan to-neon-purple hover:opacity-90 transition-all duration-300 glow-cyan text-lg px-8"
            >
              View My Work
            </Button>
            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10 text-lg px-8"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-8 h-8 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
