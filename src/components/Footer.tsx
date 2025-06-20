import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Neha.</h3>
            <p className="text-muted-foreground leading-relaxed">
              Senior Backend Engineer passionate about building scalable systems 
              with elegance and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Experience
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="mailto:neha.verma@example.com"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/nehaverma"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/nehaverma"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Neha Verma. Built with passion and precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;