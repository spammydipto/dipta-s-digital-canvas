import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { useLenis } from "@/hooks/useLenis";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Index = () => {
  useLenis();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Spline 3D Background - Hidden on mobile for performance */}
      <div className="fixed inset-0 z-0 hidden md:block">
        <iframe
          src="https://my.spline.design/genkubgreetingrobot-Ivbyn6wLVGEhEOeah8wnVoUw/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full spline-iframe"
        />
      </div>
      
      {/* Gradient background for mobile */}
      <div className="fixed inset-0 z-0 md:hidden bg-gradient-to-br from-background via-background to-primary/5" />
      
      <div className="relative z-10 pointer-events-none">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
      
      {/* Floating Download Resume Button */}
      <Button
        asChild
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-primary/20 backdrop-blur-md border border-primary/30 text-foreground hover:bg-primary/30 hover:glow-purple transition-all duration-300 shadow-lg px-4 py-6 md:px-6 md:py-7 rounded-xl group pointer-events-auto"
      >
        <a href="/Dipta_Kumar_Mondal_resume.pdf" download="Dipta_Kumar_Mondal_resume.pdf" className="flex items-center gap-2">
          <Download className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-bounce" />
          <span className="hidden md:inline">Download Resume</span>
        </a>
      </Button>
    </div>
  );
};

export default Index;
