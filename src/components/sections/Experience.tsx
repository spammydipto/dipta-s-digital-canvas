import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, ShoppingCart, GraduationCap, ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".experience-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      ".experience-heading",
      { opacity: 0, y: 60, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power2.out" }
    ).fromTo(
      ".experience-card",
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: "power2.out" },
      "-=0.5"
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
    <section id="experience" className="experience-section min-h-screen py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="experience-heading text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 sm:mb-16">
          Work <span className="gradient-text">Experience</span>
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
            <div className="experience-card w-[340px] sm:w-[380px] glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:bg-card/50 transition-all duration-300 group snap-center flex-shrink-0">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-neon-purple/10 group-hover:glow-purple transition-all duration-300 flex-shrink-0">
                  <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-neon-purple" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">Cache Tutor</h3>
                  <p className="text-sm sm:text-base text-primary font-medium">Acadia University</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Oct 2024 - Dec 2024</p>
                </div>
              </div>
              <ul className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-2 list-disc list-inside">
                <li>Tutored university students in Java, Python and DSA by explaining complex programming concepts into clear, practical explanations.</li>
                <li>Supported learners in developing coding proficiency and problem-solving skills, earning positive feedback for clarity, communication and support.</li>
              </ul>
            </div>

            <div className="experience-card w-[340px] sm:w-[380px] glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:bg-card/50 transition-all duration-300 group snap-center flex-shrink-0">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-neon-cyan/10 group-hover:glow-cyan transition-all duration-300 flex-shrink-0">
                  <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-neon-cyan" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">Line Cook</h3>
                  <p className="text-sm sm:text-base text-primary font-medium">The Church Brewing Co</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Sept 2023 - Present</p>
                </div>
              </div>
              <ul className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-2 list-disc list-inside">
                <li>Prepared and delivered high-quality foods with restaurant standards, ensuring consistency and taste.</li>
                <li>Trained and mentored new team members on kitchen procedures, workflow efficiency and safety.</li>
                <li>Promoted to Shift Supervisor, lead kitchen team during shifts, ensure all tasks are being done efficiently and safety standards in a fast-paced environment.</li>
              </ul>
            </div>

            <div className="experience-card w-[340px] sm:w-[380px] glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:bg-card/50 transition-all duration-300 group snap-center flex-shrink-0">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-neon-purple/10 group-hover:glow-purple transition-all duration-300 flex-shrink-0">
                  <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8 text-neon-purple" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">Store Associate</h3>
                  <p className="text-sm sm:text-base text-secondary font-medium">Your Independent Grocer</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Feb 2024 - May 2024</p>
                </div>
              </div>
              <ul className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-2 list-disc list-inside">
                <li>Accurately processed cash and credit transactions while ensuring attention to detail and efficiency.</li>
                <li>Provided excellent customer support while ensuring a positive checkout experience.</li>
                <li>Trained and support new team members, developing leadership and mentoring skills.</li>
                <li>Maintained a clean, organized, and efficient work environment.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
