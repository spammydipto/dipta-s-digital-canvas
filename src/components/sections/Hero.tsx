import { ArrowDown } from "lucide-react";
import { useTypewriterRotate } from "@/hooks/useTypewriterRotate";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Hero = () => {
  const roles = [
    "A Full Stack Developer",
    "A Quick Learner",
    "A Dean's Listed Student",
    "A Tutor and a Mentor",
    "A Technology Enthusiast",
  ];

  const { displayedText } = useTypewriterRotate({
    words: roles,
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseDuration: 2000,
    loop: true,
  });

  const heroRef = useScrollReveal({ delay: 0 });
  const subtitleRef = useScrollReveal({ delay: 100 });
  const ctaRef = useScrollReveal({ delay: 200 });

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6"
    >
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-[880px] mx-auto lg:mx-0 space-y-4 sm:space-y-6">
          {/* Main Headline with Typewriter */}
          <div
            ref={heroRef as any}
            className="reveal"
          >
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-foreground mb-4"
              style={{
                fontSize: "clamp(3rem, 10vw, 6rem)",
                lineHeight: "1.1",
              }}
            >
              Hi, I'm <span className="gradient-text">Dipta</span>,
            </h1>
            
            {/* Typewriter Role */}
            <div
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-muted-foreground min-h-[3rem] sm:min-h-[4rem]"
              role="status"
              aria-live="polite"
              aria-atomic="true"
              style={{
                fontSize: "clamp(1.5rem, 6vw, 3rem)",
              }}
            >
              {displayedText}
              <span className="animate-pulse text-primary">|</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            ref={ctaRef as any}
            className="reveal flex flex-col sm:flex-row gap-4 pt-6 sm:pt-8"
          >
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToAbout();
              }}
              className="inline-flex items-center justify-center px-6 py-3 text-base sm:text-lg font-medium bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-all duration-300 min-h-[48px] touch-manipulation focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              About Me
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center px-6 py-3 text-base sm:text-lg font-medium border border-border bg-transparent text-foreground rounded-md hover:bg-accent hover:text-accent-foreground transition-all duration-300 min-h-[48px] touch-manipulation focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 animate-bounce p-3 touch-manipulation focus:outline-none focus:ring-2 focus:ring-primary focus:rounded-full"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
