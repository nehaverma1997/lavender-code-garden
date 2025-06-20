import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/10 to-secondary/20">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)`
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-secondary/30 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary/20 rounded-full blur-lg animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8 lg:text-left text-center">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm border border-border rounded-full shadow-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-muted-foreground">Available for new opportunities</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
                <span className="block text-foreground">Neha</span>
                <span className="block bg-gradient-to-r from-primary via-accent-foreground to-primary bg-clip-text text-transparent">
                  Verma
                </span>
              </h1>
              
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="h-px bg-primary flex-1 max-w-20"></div>
                <h2 className="text-xl md:text-2xl font-semibold text-primary whitespace-nowrap">
                  Senior Backend Engineer
                </h2>
                <div className="h-px bg-primary flex-1 max-w-20"></div>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Building <span className="text-primary font-semibold">scalable systems</span> with 
              <span className="text-accent-foreground font-semibold"> elegance</span> and 
              <span className="text-primary font-semibold"> precision</span>.
            </p>

            {/* Description */}
            <div className="prose prose-lg max-w-2xl mx-auto lg:mx-0">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm a backend developer passionate about building solid and efficient architectures 
                for complex digital platforms. With hands-on experience in AI-integrated systems and 
                cloud-native apps, I bring products to life from scratch.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                Explore My Work
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="mailto:neha.verma@example.com"
                className="w-12 h-12 bg-card/80 backdrop-blur-sm border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/nehaverma"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-card/80 backdrop-blur-sm border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/nehaverma"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-card/80 backdrop-blur-sm border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Right Column - Profile & Stats */}
          <div className="space-y-8">
            {/* Profile Picture */}
            <div className="relative mx-auto lg:mx-0 w-fit">
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-3xl bg-gradient-to-br from-primary via-accent to-secondary border-4 border-card shadow-2xl flex items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse"></div>
                  <span className="relative text-6xl font-bold text-primary-foreground z-10">NV</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-500"></div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <div className="text-3xl font-bold text-primary mb-2">6+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
            </div>

            {/* Tech Stack Preview */}
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Core Technologies</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Node.js", "AWS", "TypeScript", "PostgreSQL", "Redis"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-accent/30 text-accent-foreground text-sm rounded-lg border border-accent hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
              <div className="w-1 h-3 bg-current rounded-full mt-2 animate-pulse"></div>
            </div>
            <span className="text-sm font-medium group-hover:translate-y-1 transition-transform duration-300">Scroll</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;