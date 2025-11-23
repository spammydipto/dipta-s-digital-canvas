import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Instagram, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
    tl.fromTo(
      ".contact-heading",
      { opacity: 0, y: 60, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power2.out" },
    ).fromTo(
      ".contact-info",
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, stagger: 0.15, duration: 0.6, ease: "power2.out" },
      "-=0.5",
    );
  }, []);
  return (
    <section id="contact" className="contact-section min-h-screen py-16 sm:py-20 px-4 sm:px-6 pointer-events-auto">
      {" "}
      <div className="container mx-auto max-w-6xl">
        <h2 className="contact-heading text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 sm:mb-8">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        
        <p className="contact-info text-xl sm:text-2xl md:text-3xl text-center text-muted-foreground mb-12 sm:mb-16">
          Let's build something together
        </p>
        
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8 sm:space-y-10">
            {/* Email Me Button */}
            <div className="contact-info flex justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary/20 backdrop-blur-md border border-primary/30 text-foreground text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-8 rounded-2xl hover:bg-primary/30 hover:glow-cyan transition-all duration-300"
              >
                <a href="mailto:diptakmondal2001.ind@gmail.com" className="flex items-center gap-3">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  Email me
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="contact-info">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-foreground text-center">Let's Connect</h3>
              <div className="flex gap-4 sm:gap-6 justify-center">
                <a
                  href="https://github.com/diptakumar2001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 sm:p-5 glass rounded-xl hover:bg-primary/10 hover:glow-cyan transition-all duration-300 touch-manipulation"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </a>
                <a
                  href="https://www.linkedin.com/in/dipta-kumar-mondal-02089b26a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 sm:p-5 glass rounded-xl hover:bg-secondary/10 hover:glow-purple transition-all duration-300 touch-manipulation"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" />
                </a>
                <a
                  href="https://www.instagram.com/dipto_mondal1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 sm:p-5 glass rounded-xl hover:bg-accent/10 hover:glow-pink transition-all duration-300 touch-manipulation"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
