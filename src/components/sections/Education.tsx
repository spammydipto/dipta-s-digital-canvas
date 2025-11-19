import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Award, Trophy } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".education-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      ".education-heading",
      { opacity: 0, y: 60, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power2.out" }
    ).fromTo(
      ".education-card",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.5"
    );
  }, []);

  return (
    <section id="education" className="education-section min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="education-heading text-5xl md:text-6xl font-bold text-center mb-16">
          <span className="gradient-text">Education</span>
        </h2>

        <div className="education-card glass rounded-3xl p-8 md:p-12 hover:bg-card/50 transition-all duration-300">
          <div className="flex items-start gap-6 mb-8">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-purple glow-cyan">
              <GraduationCap className="w-12 h-12 text-background" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-foreground mb-2">Bachelor of Computer Science</h3>
              <p className="text-xl text-primary font-medium mb-1">Acadia University</p>
              <p className="text-muted-foreground">2023 - Present</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl border border-primary/20">
              <Award className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">GPA: 3.83 / 4.33</p>
                <p className="text-sm text-muted-foreground">Outstanding Academic Performance</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-secondary/5 rounded-xl border border-secondary/20">
              <Trophy className="w-6 h-6 text-secondary flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Dean's List 2024-2025</p>
                <p className="text-sm text-muted-foreground">Academic Excellence Recognition</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-accent/5 rounded-xl border border-accent/20">
              <Award className="w-6 h-6 text-accent flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Acadia Excellence Scholarship</p>
                <p className="text-sm text-muted-foreground">Merit-Based Scholarship Award</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
