import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent/20 to-secondary/30 px-4 pt-16">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-accent border-4 border-card shadow-lg flex items-center justify-center">
            <span className="text-2xl font-bold text-primary-foreground">NV</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
          Neha Verma
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-6">
          Senior Backend Engineer
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Building scalable systems with elegance and precision.
        </p>
        
        <div className="prose prose-lg max-w-4xl mx-auto mb-12 text-foreground">
          <p className="text-lg leading-relaxed">
            I'm Neha Verma, a backend developer passionate about building solid and efficient architectures 
            for complex digital platforms. With hands-on experience in AI-integrated systems and cloud-native apps, 
            I bring products to life from scratch.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('projects')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            Explore My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            Contact Me
          </Button>
        </div>

        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;