import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import { toast } from "sonner";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power2.out" }
    )
      .fromTo(
        ".contact-info",
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, stagger: 0.15, duration: 0.6, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        ".contact-input",
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 0.6, ease: "power2.out" },
        "-=0.8"
      );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="contact-heading text-5xl md:text-6xl font-bold text-center mb-16">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="contact-info glass rounded-3xl p-6 flex items-center gap-4 hover:bg-card/50 transition-all duration-300">
              <div className="p-3 rounded-2xl bg-neon-cyan/10">
                <Mail className="w-6 h-6 text-neon-cyan" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Email</p>
                <a href="mailto:diptakmondal2001.ind@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  diptakmondal2001.ind@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info glass rounded-3xl p-6 flex items-center gap-4 hover:bg-card/50 transition-all duration-300">
              <div className="p-3 rounded-2xl bg-neon-purple/10">
                <Phone className="w-6 h-6 text-neon-purple" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Phone</p>
                <a href="tel:+19029941425" className="text-muted-foreground hover:text-secondary transition-colors">
                  +1 (902) 994-1425
                </a>
              </div>
            </div>

            <div className="contact-info glass rounded-3xl p-6 flex items-center gap-4 hover:bg-card/50 transition-all duration-300">
              <div className="p-3 rounded-2xl bg-neon-pink/10">
                <MapPin className="w-6 h-6 text-neon-pink" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Location</p>
                <p className="text-muted-foreground">Wolfville, Nova Scotia</p>
              </div>
            </div>

            <div className="contact-info">
              <h3 className="text-xl font-bold mb-4 text-foreground">Connect with me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/diptakumar2001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-xl hover:bg-primary/10 hover:glow-cyan transition-all duration-300"
                >
                  <Github className="w-6 h-6 text-primary" />
                </a>
                <a
                  href="https://www.linkedin.com/in/dipta-kumar-mondal-02089b26a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-xl hover:bg-secondary/10 hover:glow-purple transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6 text-secondary" />
                </a>
                <a
                  href="https://instagram.com/dipto_mondal1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-xl hover:bg-accent/10 hover:glow-pink transition-all duration-300"
                >
                  <Instagram className="w-6 h-6 text-accent" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-6">
            <div className="contact-input">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>
            <div className="contact-input">
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>
            <div className="contact-input">
              <Input
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>
            <div className="contact-input">
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="bg-background/50 border-border/50 focus:border-primary resize-none"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-neon-cyan to-neon-purple hover:opacity-90 transition-all duration-300 glow-cyan text-lg py-6"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
