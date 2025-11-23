import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".nav-item",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: "power2.out", delay: 2.5 }
    );
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 pointer-events-none ${
        scrolled ? "glass border-b border-border/50 py-3 sm:py-4" : "py-4 sm:py-6"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="/" className="nav-item text-xl sm:text-2xl font-bold gradient-text touch-manipulation pointer-events-auto">Dipta</a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {["Home", "About", "Projects", "Experience", "Education", "Contact"].map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="nav-item text-sm lg:text-base text-foreground/80 hover:text-primary transition-colors duration-300 touch-manipulation pointer-events-auto"
              style={{ opacity: 0 }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden nav-item min-h-[44px] min-w-[44px] touch-manipulation pointer-events-auto"
          onClick={() => setIsOpen(!isOpen)}
          style={{ opacity: 0 }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass border-t border-border/50 mt-3 sm:mt-4">
          <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col gap-3 sm:gap-4">
            {["Home", "About", "Projects", "Experience", "Education", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 text-left py-2 touch-manipulation min-h-[44px] pointer-events-auto"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
