import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      {!isLoading && (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
          <Navigation />
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Education />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
