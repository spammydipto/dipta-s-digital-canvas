import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "GSAP", icon: "✨" },
  { name: "Java", icon: "☕" },
  { name: "Python", icon: "🐍" },
  { name: "C", icon: "💻" },
  { name: "DSA", icon: "🧮" },
  { name: "GitHub", icon: "🔧" },
  { name: "MS Office", icon: "📊" },
  { name: "Spline", icon: "🎭" },
];

const About = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      ".about-heading",
      { opacity: 0, y: 60, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power2.out" }
    )
      .fromTo(
        ".about-text",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        ".skill-item",
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, stagger: 0.1, duration: 0.5, ease: "back.out(1.7)" },
        "-=0.3"
      );
  }, []);

  return (
    <section id="about" className="about-section min-h-screen py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="about-heading text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 sm:mb-12">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-8 sm:mb-12">
          <p className="about-text text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
            I'm a passionate Full Stack Web Developer specializing in creating immersive digital experiences. 
            With expertise in modern web technologies and a keen eye for design, I transform ideas into 
            beautiful, functional applications. My approach combines technical excellence with creative 
            innovation to deliver solutions that not only meet but exceed expectations.
          </p>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 gradient-text">Tech Stack</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-item glass rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:bg-card/50 transition-all duration-300 group touch-manipulation"
              >
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <p className="text-sm sm:text-base text-foreground font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
