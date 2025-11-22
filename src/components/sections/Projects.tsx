import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, Globe } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.png";
import project6 from "@/assets/project-6.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "FoodLoop",
    description: "An AI-driven website to reduce food waste by connecting NGOs and food donors",
    fullDescription: "FoodLoop is an innovative platform that leverages artificial intelligence to bridge the gap between food donors and NGOs. The system intelligently matches surplus food with organizations in need, reducing waste while helping communities. Features include real-time inventory tracking, automated matching algorithms, and impact analytics.",
    image: project1,
    tech: ["React", "AI", "Node.js", "MongoDB", "Express"],
    features: [
      "AI-powered matching algorithm",
      "Real-time inventory management",
      "Donation tracking and analytics",
      "Mobile-responsive interface"
    ],
    githubLink: "https://github.com/diptakumar2001",
    liveLink: "#",
  },
  {
    title: "Guessing Game",
    description: "A fun web app where players guess the object name based on a displayed picture",
    fullDescription: "An interactive web application that challenges players to identify objects from images. The game features multiple difficulty levels, a scoring system, and a collection of diverse image categories. Built with vanilla JavaScript to demonstrate core programming concepts and DOM manipulation.",
    image: project2,
    tech: ["JavaScript", "HTML", "CSS"],
    features: [
      "Multiple difficulty levels",
      "Score tracking system",
      "Timer functionality",
      "Diverse image categories"
    ],
    githubLink: "https://github.com/diptakumar2001",
    liveLink: "#",
  },
  {
    title: "Snake Game",
    description: "Classic Snake game implemented to strengthen OOP concepts and core coding fundamentals",
    fullDescription: "A modern take on the classic Snake game, built in Java to demonstrate object-oriented programming principles. The project showcases inheritance, encapsulation, and design patterns while providing an engaging gaming experience with smooth controls and progressive difficulty.",
    image: project3,
    tech: ["Java", "OOP", "Swing"],
    features: [
      "Object-oriented architecture",
      "Collision detection system",
      "Progressive difficulty",
      "High score persistence"
    ],
    githubLink: "https://github.com/diptakumar2001",
    liveLink: "#",
  },
  {
    title: "Coming Soon",
    description: "Exciting new project in development",
    fullDescription: "Stay tuned for an exciting new project that's currently in development. More details will be revealed soon!",
    image: project4,
    tech: ["TBA"],
    features: ["In Development"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Coming Soon",
    description: "Exciting new project in development",
    fullDescription: "Stay tuned for an exciting new project that's currently in development. More details will be revealed soon!",
    image: project5,
    tech: ["TBA"],
    features: ["In Development"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Coming Soon",
    description: "Exciting new project in development",
    fullDescription: "Stay tuned for an exciting new project that's currently in development. More details will be revealed soon!",
    image: project6,
    tech: ["TBA"],
    features: ["In Development"],
    githubLink: "#",
    liveLink: "#",
  },
];

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      ".projects-heading",
      { opacity: 0, y: 60, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power2.out" }
    ).fromTo(
      ".project-card",
      { opacity: 0, scale: 0.9, y: 40 },
      { opacity: 1, scale: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    );
  }, []);

  return (
    <section id="projects" className="projects-section min-h-screen py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <h2 className="projects-heading text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 sm:mb-16">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 sm:pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-primary scrollbar-track-card px-4 sm:px-0 -mx-4 sm:mx-0"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card min-w-[280px] sm:min-w-[320px] md:min-w-[380px] glass rounded-2xl sm:rounded-3xl overflow-hidden group snap-center flex-shrink-0 cursor-pointer"
              onClick={() => setSelectedProject(index)}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                  <button className="flex items-center gap-2 text-primary font-medium text-sm sm:text-base touch-manipulation">
                    View Details <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-5 sm:p-6 space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="glass max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl sm:text-3xl font-bold gradient-text">
                  {projects[selectedProject].title}
                </DialogTitle>
                <DialogDescription className="text-base sm:text-lg text-muted-foreground">
                  {projects[selectedProject].description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-xl aspect-video">
                  <img
                    src={projects[selectedProject].image}
                    alt={projects[selectedProject].title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Full Description */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">About</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {projects[selectedProject].fullDescription}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {projects[selectedProject].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20 glow-cyan"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-border/50">
                  {projects[selectedProject].githubLink !== "#" && (
                    <a
                      href={projects[selectedProject].githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-card hover:bg-card/80 text-foreground rounded-lg border border-border/50 transition-all hover:scale-105 touch-manipulation min-h-[44px]"
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                  )}
                  {projects[selectedProject].liveLink !== "#" && (
                    <a
                      href={projects[selectedProject].liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all hover:scale-105 touch-manipulation min-h-[44px]"
                    >
                      <Globe className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
