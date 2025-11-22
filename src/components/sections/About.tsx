import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import {
  Code2,
  Database,
  Terminal,
  Award,
  GraduationCap,
  Briefcase,
  Trophy,
} from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";

const About = () => {
  const headingRef = useScrollReveal({ delay: 0 });
  const textRef = useScrollReveal({ delay: 100 });
  const timelineRef = useScrollReveal({ delay: 200 });
  const skillsRef = useScrollReveal({ delay: 300 });
  const isMobile = useIsMobile();
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);

  const skills = [
    { 
      name: "Programming & Development", 
      icon: Code2,
      technologies: [
        "Java",
        "Python",
        "C",
        "JavaScript",
        "React",
        "HTML/CSS",
        "Data Structures & Algorithms"
      ]
    },
    { 
      name: "Databases & Tools", 
      icon: Database,
      technologies: [
        "SQL",
        "Git",
        "Linux",
        "Pandas",
        "NumPy"
      ]
    },
    { 
      name: "Development Environment", 
      icon: Terminal,
      technologies: [
        "VS Code",
        "Linux",
        "Windows",
        "GitHub"
      ]
    },
    { 
      name: "Productivity", 
      icon: Briefcase,
      technologies: [
        "MS Office (Word, Excel, PowerPoint, Outlook)"
      ]
    },
  ];

  const milestones = [
    {
      year: "2023",
      title: "Started at Acadia",
      icon: GraduationCap,
      description: "Began Computer Science journey",
    },
    {
      year: "2024",
      title: "Dean's List",
      icon: Award,
      description: "Achieved academic excellence",
    },
    {
      year: "2024",
      title: "Tutor & Mentor",
      icon: Briefcase,
      description: "Helping students succeed",
    },
    {
      year: "2025",
      title: "Building Projects",
      icon: Trophy,
      description: "Creating real-world solutions",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen py-16 sm:py-24 px-4 sm:px-6 overflow-hidden"
    >
      <div className="container mx-auto max-w-[1200px]">
        {/* Heading */}
        <h2
          ref={headingRef as any}
          className="reveal text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 gradient-text"
          style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
        >
          About Me
        </h2>

        {/* Bio */}
        <div
          ref={textRef as any}
          className="reveal max-w-4xl mx-auto mb-16"
        >
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground/90 leading-relaxed text-center">
            I am a third-year Computer Science student at Acadia University, 
            originally from a small town Kolkata, India. Growing up there helped 
            me stay deeply connected to my culture and religion. At the same time, 
            my passion for technology has always driven me to explore, learn, and build. 
            I love solving real-world problems through code, and I'm always excited to 
            learn new tools and technologies. Outside of academics and programming, 
            riding motorcycles is one of my favorite hobbies.
          </p>
        </div>

        {/* Timeline / Milestones */}
        <div
          ref={timelineRef as any}
          className="reveal mb-16"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-foreground">
            My Journey
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="glass p-6 rounded-xl hover:scale-105 transition-all duration-300 touch-manipulation group"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <milestone.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  <span className="text-sm font-bold text-primary">
                    {milestone.year}
                  </span>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {milestone.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div
          ref={skillsRef as any}
          className="reveal"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-foreground">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => {
              if (isMobile) {
                // Mobile: Click to open dialog
                return (
                  <div
                    key={skill.name}
                    onClick={() => setSelectedSkill(index)}
                    className="skill-item glass p-6 rounded-xl flex flex-col items-center justify-center gap-3 active:scale-95 hover:bg-primary/10 transition-all duration-300 touch-manipulation cursor-pointer min-h-[44px]"
                    style={{
                      animationDelay: `${index * 0.05}s`,
                    }}
                  >
                    <skill.icon 
                      className="w-8 h-8 sm:w-10 sm:h-10 text-primary" 
                      aria-hidden="true"
                    />
                    <span className="text-sm sm:text-base font-medium text-foreground text-center">
                      {skill.name}
                    </span>
                  </div>
                );
              }

              // Desktop: Hover card
              return (
                <HoverCard key={skill.name}>
                  <HoverCardTrigger asChild>
                    <div
                      className="skill-item glass p-6 rounded-xl flex flex-col items-center justify-center gap-3 hover:scale-105 hover:bg-primary/10 transition-all duration-300 touch-manipulation group cursor-pointer"
                      style={{
                        animationDelay: `${index * 0.05}s`,
                      }}
                    >
                      <skill.icon 
                        className="w-8 h-8 sm:w-10 sm:h-10 text-primary group-hover:scale-110 transition-transform" 
                        aria-hidden="true"
                      />
                      <span className="text-sm sm:text-base font-medium text-foreground text-center">
                        {skill.name}
                      </span>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-64 glass">
                    <h4 className="text-sm font-semibold mb-3 text-foreground">{skill.name}</h4>
                    <ul className="space-y-2">
                      {skill.technologies.map((tech) => (
                        <li key={tech} className="text-sm text-muted-foreground flex items-start">
                          <span className="mr-2">•</span>
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </HoverCardContent>
                </HoverCard>
              );
            })}
          </div>
          
          {/* Mobile Tech Stack Dialog */}
          <Dialog open={selectedSkill !== null} onOpenChange={() => setSelectedSkill(null)}>
            <DialogContent className="glass max-w-md">
              {selectedSkill !== null && (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                      {(() => {
                        const SkillIcon = skills[selectedSkill].icon;
                        return <SkillIcon className="w-6 h-6 text-primary" />;
                      })()}
                      {skills[selectedSkill].name}
                    </DialogTitle>
                    <DialogDescription className="sr-only">
                      Technologies in {skills[selectedSkill].name}
                    </DialogDescription>
                  </DialogHeader>
                  <ul className="space-y-3 mt-4">
                    {skills[selectedSkill].technologies.map((tech) => (
                      <li key={tech} className="text-base text-muted-foreground flex items-start">
                        <span className="mr-3 text-primary">•</span>
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default About;
