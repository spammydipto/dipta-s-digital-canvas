import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.png";
import project6 from "@/assets/project-6.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "3D Interactive Email Platform",
    description: "Email service for developers with 3D interactive UI and modern design",
    image: project1,
    tech: ["React", "Three.js", "Spline"],
  },
  {
    title: "Gaming UI Dashboard",
    description: "Next-level gaming interface with character stats and arena features",
    image: project2,
    tech: ["React", "GSAP", "CSS3"],
  },
  {
    title: "3D Portfolio Website",
    description: "Developer portfolio with immersive 3D elements and smooth animations",
    image: project3,
    tech: ["HTML", "CSS", "JavaScript", "Spline"],
  },
  {
    title: "Gaming Website Platform",
    description: "Creative gaming platform with vibrant colors and engaging UI",
    image: project4,
    tech: ["React", "Tailwind", "Animation"],
  },
  {
    title: "Web Animation Tools",
    description: "Portfolio showcasing top web animation tools and techniques",
    image: project5,
    tech: ["GSAP", "React", "Motion"],
  },
  {
    title: "Animated Portfolio Tutorial",
    description: "Step-by-step tutorial for creating animated portfolio websites",
    image: project6,
    tech: ["HTML", "CSS", "GSAP"],
  },
];

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

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
    <section id="projects" className="projects-section min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <h2 className="projects-heading text-5xl md:text-6xl font-bold text-center mb-16">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-primary scrollbar-track-card"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card min-w-[350px] md:min-w-[450px] glass rounded-3xl overflow-hidden group snap-center"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <button className="flex items-center gap-2 text-primary font-medium">
                    View Project <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
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
    </section>
  );
};

export default Projects;
