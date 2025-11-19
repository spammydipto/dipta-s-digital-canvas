import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Spline 3D Background for entire site */}
      <div className="fixed inset-0 z-0">
        <iframe
          src="https://my.spline.design/distortingtypography-wijsIk1oyEBjaSdIpuZNDDHq/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full spline-iframe"
        />
      </div>
      
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
