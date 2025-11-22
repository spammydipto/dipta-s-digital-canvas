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
        <div className="max-w-[880px] mx-auto lg:mx-0 space-y-6 sm:space-y-8">
          {/* Overline */}
          <p
            ref={heroRef as any}
            className="reveal text-sm sm:text-base text-muted-foreground tracking-wide uppercase"
            aria-label="Introduction"
          >
            Hi, I'm Dipta
          </p>

          {/* Main Headline */}
          <h1
            ref={heroRef as any}
            className="reveal text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              lineHeight: "1.1",
            }}
          >
            A Computer Science Student{" "}
            <span className="text-primary block mt-2">
              Building Solutions
            </span>
          </h1>

          {/* Typewriter Role */}
          <div
            ref={subtitleRef as any}
            className="reveal text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light min-h-[2.5rem]"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {displayedText}
            <span className="animate-pulse text-primary">|</span>
          </div>

          {/* Supporting Paragraph */}
          <p
            ref={subtitleRef as any}
            className="reveal text-base sm:text-lg md:text-xl text-muted-foreground/80 leading-relaxed max-w-[680px]"
            style={{ lineHeight: "1.7" }}
          >
            I am a third-year Computer Science student at Acadia University,
            originally from Kolkata, India. Growing up there helped me stay
            deeply connected to my culture and religion. At the same time, my
            passion for technology has always driven me to explore, learn, and
            build.
          </p>

          {/* CTA Buttons */}
          <div
            ref={ctaRef as any}
            className="reveal flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToAbout();
              }}
              className="inline-flex items-center justify-center px-6 py-3 text-base sm:text-lg font-medium bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-all duration-300 min-h-[48px] touch-manipulation focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              View My Work
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
