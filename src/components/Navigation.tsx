
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-primary">Neha.</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('learning')}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                Learning
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border border-border rounded-md mt-2">
              <button
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('learning')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
              >
                Learning
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
