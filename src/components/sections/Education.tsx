import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Award, Trophy, ChevronLeft, ChevronRight, Code, Braces } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ".education-heading",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".education-heading",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".education-card",
      { opacity: 0, scale: 0.85, y: 40 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".education-card",
          start: "top 85%",
        },
      }
    );
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section id="education" className="education-section min-h-screen py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="education-heading text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 sm:mb-16">
          Education & <span className="gradient-text">Certifications</span>
        </h2>

        <div className="relative">
          {/* Scroll Indicator - Mobile */}
          <div className="md:hidden text-center mb-4">
            <p className="text-sm text-muted-foreground animate-pulse flex items-center justify-center gap-2">
              Swipe to explore <ChevronRight className="w-4 h-4" />
            </p>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full glass hover:bg-card/50 transition-all duration-300 glow-cyan touch-manipulation min-h-[44px] min-w-[44px]"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-neon-cyan" />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full glass hover:bg-card/50 transition-all duration-300 glow-cyan touch-manipulation min-h-[44px] min-w-[44px]"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-neon-cyan" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 sm:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-primary scrollbar-track-card pb-4 touch-pan-x"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="education-card w-[340px] sm:w-[420px] glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:bg-card/50 transition-all duration-300 snap-center flex-shrink-0">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-purple glow-cyan flex-shrink-0">
                  <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-background" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-1 sm:mb-2">Bachelor of Computer Science</h3>
                  <p className="text-lg sm:text-xl text-primary font-medium mb-0.5 sm:mb-1">Acadia University</p>
                  <p className="text-sm sm:text-base text-muted-foreground">2023 - Present</p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-foreground">GPA: 3.83 / 4.33</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Outstanding Academic Performance</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-secondary/5 rounded-xl border border-secondary/20">
                  <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0" />
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-foreground">Dean's List 2024-2025</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Academic Excellence Recognition</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-accent/5 rounded-xl border border-accent/20">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-foreground">Acadia Excellence Scholarship</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Merit-Based Scholarship Award</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="education-card w-[340px] sm:w-[420px] glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:bg-card/50 transition-all duration-300 snap-center flex-shrink-0">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-blue glow-cyan flex-shrink-0">
                  <Code className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-background" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-1 sm:mb-2">100 Days of Code – Python Bootcamp</h3>
                  <p className="text-lg sm:text-xl text-primary font-medium mb-0.5 sm:mb-1">Dr. Angela Yu (Udemy)</p>
                  <p className="text-sm sm:text-base text-muted-foreground">Certification</p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Completed 100 days of hands-on projects covering Python, OOP, APIs, automation, and web development.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs sm:text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">Python</span>
                  <span className="px-3 py-1 text-xs sm:text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">Flask</span>
                  <span className="px-3 py-1 text-xs sm:text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">Automation</span>
                  <span className="px-3 py-1 text-xs sm:text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">APIs</span>
                  <span className="px-3 py-1 text-xs sm:text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">OOP</span>
                </div>
              </div>
            </div>

            <div className="education-card w-[340px] sm:w-[420px] glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:bg-card/50 transition-all duration-300 snap-center flex-shrink-0">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-neon-purple to-neon-pink glow-purple flex-shrink-0">
                  <Braces className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-background" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-1 sm:mb-2">DSA with Java</h3>
                  <p className="text-lg sm:text-xl text-primary font-medium mb-0.5 sm:mb-1">Apna College</p>
                  <p className="text-sm sm:text-base text-muted-foreground">Certification</p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Learned data structures, algorithms, and problem-solving using Java; includes recursion, backtracking, trees, and graph algorithms.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs sm:text-sm font-medium bg-secondary/10 text-secondary rounded-full border border-secondary/20">Java</span>
                  <span className="px-3 py-1 text-xs sm:text-sm font-medium bg-secondary/10 text-secondary rounded-full border border-secondary/20">DSA</span>
                  <span className="px-3 py-1 text-xs sm:text-sm font-medium bg-secondary/10 text-secondary rounded-full border border-secondary/20">Time Complexity</span>
                  <span className="px-3 py-1 text-xs sm:text-sm font-medium bg-secondary/10 text-secondary rounded-full border border-secondary/20">DP</span>
                  <span className="px-3 py-1 text-xs sm:text-sm font-medium bg-secondary/10 text-secondary rounded-full border border-secondary/20">Graphs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
