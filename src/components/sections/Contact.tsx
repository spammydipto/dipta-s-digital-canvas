import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
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
    <section id="contact" className="contact-section min-h-screen py-16 sm:py-20 px-4 sm:px-6">
      {" "}
      <div className="container mx-auto max-w-6xl">
        {" "}
        <h2 className="contact-heading text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 sm:mb-16">
          {" "}
          Get In <span className="gradient-text">Touch</span>{" "}
        </h2>{" "}
        <div className="max-w-2xl mx-auto">
          {" "}
          {/* Contact Info */}{" "}
          <div className="space-y-6 sm:space-y-8">
            {" "}
            <div className="contact-info glass rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex items-center gap-3 sm:gap-4 hover:bg-card/50 transition-all duration-300">
              {" "}
              <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-neon-cyan/10 flex-shrink-0">
                {" "}
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-neon-cyan" />{" "}
              </div>{" "}
              <div className="min-w-0">
                {" "}
                <p className="font-semibold text-foreground text-sm sm:text-base">Email</p>{" "}
                <a
                  href="mailto:diptakmondal2001.ind@gmail.com"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  {" "}
                  diptakmondal2001.ind@gmail.com{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
            <div className="contact-info glass rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex items-center gap-3 sm:gap-4 hover:bg-card/50 transition-all duration-300">
              {" "}
              <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-neon-purple/10 flex-shrink-0">
                {" "}
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-neon-purple" />{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="font-semibold text-foreground text-sm sm:text-base">Phone</p>{" "}
                <a
                  href="tel:+19029941425"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-secondary transition-colors touch-manipulation"
                >
                  {" "}
                  +1 (902) 994-1425{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
            <div className="contact-info glass rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex items-center gap-3 sm:gap-4 hover:bg-card/50 transition-all duration-300">
              {" "}
              <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-neon-pink/10 flex-shrink-0">
                {" "}
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-neon-pink" />{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="font-semibold text-foreground text-sm sm:text-base">Location</p>{" "}
                <p className="text-xs sm:text-sm text-muted-foreground">Wolfville, Nova Scotia</p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="contact-info">
              {" "}
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">Connect with me</h3>{" "}
              <div className="flex gap-3 sm:gap-4">
                {" "}
                <a
                  href="https://github.com/diptakumar2001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-4 glass rounded-xl hover:bg-primary/10 hover:glow-cyan transition-all duration-300 touch-manipulation"
                  aria-label="GitHub Profile"
                >
                  {" "}
                  <Github className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />{" "}
                </a>{" "}
                <a
                  href="https://www.linkedin.com/in/dipta-kumar-mondal-02089b26a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-4 glass rounded-xl hover:bg-secondary/10 hover:glow-purple transition-all duration-300 touch-manipulation"
                  aria-label="LinkedIn Profile"
                >
                  {" "}
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />{" "}
                </a>{" "}
                <a
                  href="https://www.instagram.com/dipto_mondal1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-4 glass rounded-xl hover:bg-accent/10 hover:glow-pink transition-all duration-300 touch-manipulation"
                  aria-label="Instagram Profile"
                >
                  {" "}
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default Contact;
