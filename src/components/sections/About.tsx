import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Code2,
  Database,
  Palette,
  Server,
  Smartphone,
  Terminal,
  Award,
  GraduationCap,
  Briefcase,
  Trophy,
} from "lucide-react";

const About = () => {
  const headingRef = useScrollReveal({ delay: 0 });
  const textRef = useScrollReveal({ delay: 100 });
  const timelineRef = useScrollReveal({ delay: 200 });
  const skillsRef = useScrollReveal({ delay: 300 });

  const skills = [
    { name: "Frontend", icon: Code2 },
    { name: "Backend", icon: Server },
    { name: "Database", icon: Database },
    { name: "Mobile", icon: Smartphone },
    { name: "UI/UX", icon: Palette },
    { name: "DevOps", icon: Terminal },
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

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left Column - Bio */}
          <div
            ref={textRef as any}
            className="reveal space-y-6"
          >
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground/90 leading-relaxed">
              I am a third-year Computer Science student at Acadia University, 
              originally from a small town Kolkata, India. Growing up there helped 
              me stay deeply connected to my culture and religion.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground/90 leading-relaxed">
              At the same time, my passion for technology has always driven me to 
              explore, learn, and build. I love solving real-world problems through 
              code, and I'm always excited to learn new tools and technologies.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground/90 leading-relaxed">
              Outside of academics and programming, riding motorcycles is one of 
              my favorite hobbies.
            </p>
          </div>

          {/* Right Column - Quick Facts */}
          <div
            ref={textRef as any}
            className="reveal space-y-4 glass p-6 sm:p-8 rounded-xl"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-foreground">
              Quick Facts
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold min-w-[24px]">→</span>
                <span className="text-sm sm:text-base">
                  Third-year CS student at Acadia University
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold min-w-[24px]">→</span>
                <span className="text-sm sm:text-base">
                  Originally from Kolkata, India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold min-w-[24px]">→</span>
                <span className="text-sm sm:text-base">
                  Dean's Listed Student
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold min-w-[24px]">→</span>
                <span className="text-sm sm:text-base">
                  Tutor and Mentor for fellow students
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold min-w-[24px]">→</span>
                <span className="text-sm sm:text-base">
                  Motorcycle enthusiast
                </span>
              </li>
            </ul>
          </div>
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-item glass p-6 rounded-xl flex flex-col items-center justify-center gap-3 hover:scale-105 hover:bg-primary/10 transition-all duration-300 touch-manipulation group"
                style={{
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                <skill.icon 
                  className="w-8 h-8 sm:w-10 sm:h-10 text-primary group-hover:scale-110 transition-transform" 
                  aria-hidden="true"
                />
                <span className="text-sm sm:text-base font-medium text-foreground">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
