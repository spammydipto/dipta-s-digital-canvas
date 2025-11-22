import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, Globe, ChevronLeft, ChevronRight } from "lucide-react";
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
    title: "Guessing Game Web App",
    description: "A CRUD-based interactive guessing game with database integration",
    fullDescription: "A fun and interactive web application where players guess the object name based on displayed pictures. Built with PHP and MySQL, this project demonstrates full-stack development skills with database integration and dynamic content management.",
    image: project1,
    tech: ["PHP", "MySQL", "JavaScript"],
    features: [
      "CRUD operations with database",
      "Interactive gameplay mechanics",
      "Score tracking system",
      "Responsive design"
    ],
    githubLink: "https://github.com/diptakumar2001/Guessing-Game",
    liveLink: "#",
  },
  {
    title: "FoodLoop",
    description: "An AI-driven website to reduce food waste",
    fullDescription: "FoodLoop is an innovative platform that leverages artificial intelligence to reduce food waste by connecting surplus food with those in need. The application features intelligent matching, real-time notifications, and impact tracking to make a difference in communities.",
    image: project2,
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "PostgreSQL"],
    features: [
      "AI-powered food matching",
      "Real-time notifications",
      "Impact analytics dashboard",
      "Donor and recipient management"
    ],
    githubLink: "https://github.com/diptakumar2001/FoodLoop",
    liveLink: "https://foodloop-ai-amartyakarmakar.replit.app/",
  },
  {
    title: "Do I Need to See Doctor",
    description: "A software to help people decide if they need medical attention",
    fullDescription: "An intelligent health assessment tool that helps users determine whether they should seek medical attention based on their symptoms. This project aims to provide preliminary health guidance while encouraging proper medical care when needed.",
    image: project3,
    tech: ["Coming Soon"],
    features: [
      "Symptom analysis",
      "Health recommendations",
      "Emergency detection",
      "Medical resource links"
    ],
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Garbage Sorter",
    description: "AI-powered software to sort garbage automatically",
    fullDescription: "An innovative AI solution that takes mixed garbage and automatically sorts it into appropriate categories for recycling and disposal. This project aims to improve waste management efficiency and promote environmental sustainability.",
    image: project4,
    tech: ["Coming Soon"],
    features: [
      "AI-powered sorting",
      "Multiple waste categories",
      "Real-time processing",
      "Environmental impact tracking"
    ],
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Neighboorbook",
    description: "A platform to connect nearby neighborhoods",
    fullDescription: "Neighboorbook is a community-focused platform designed to connect people in nearby neighborhoods. Share local events, services, and build stronger community bonds through digital connection.",
    image: project5,
    tech: ["Coming Soon"],
    features: [
      "Local event sharing",
      "Neighborhood messaging",
      "Service marketplace",
      "Community building tools"
    ],
    githubLink: "#",
    liveLink: "#",
  },
];

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    gsap.fromTo(
      ".projects-heading",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-heading",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 60, scale: 0.9, rotateX: 15 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".project-card",
          start: "top 85%",
        },
      }
    );

    // Parallax effect on project images
    const isMobile = window.innerWidth < 768;
    if (!isMobile) {
      document.querySelectorAll(".project-image").forEach((img) => {
        gsap.to(img, {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }
  }, []);

  return (
    <section id="projects" className="projects-section min-h-screen py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <h2 className="projects-heading text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 sm:mb-12">
          <span className="gradient-text">Projects</span>
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
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 sm:pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-primary scrollbar-track-card touch-pan-x"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card w-[420px] h-[520px] glass rounded-2xl sm:rounded-3xl overflow-hidden group snap-center flex-shrink-0 cursor-pointer flex flex-col"
              onClick={() => project.githubLink === "#" && setSelectedProject(index)}
            >
              <div className="relative overflow-hidden h-[280px] flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="project-image w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.githubLink !== "#" && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1.5 bg-card/80 backdrop-blur-sm text-foreground font-medium text-sm rounded-lg border border-border/50 hover:border-primary hover:text-primary transition-all touch-manipulation"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    )}
                    {project.liveLink !== "#" && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1.5 bg-primary text-primary-foreground font-medium text-sm rounded-lg hover:bg-primary/90 transition-all touch-manipulation"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Globe className="w-4 h-4" />
                        Visit Website
                      </a>
                    )}
                    {project.githubLink === "#" && project.liveLink === "#" && (
                      <button className="flex items-center gap-2 text-primary font-medium text-sm sm:text-base touch-manipulation">
                        View Details <ExternalLink className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-5 sm:p-6 space-y-3 sm:space-y-4 flex-1 flex flex-col">
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
