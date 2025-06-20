import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Tookan",
      subtitle: "Delivery Management Software",
      description: "A comprehensive delivery management platform with multiple modules including Dashboard, Agent App, and Customer App. Built and maintained robust backend architecture across all modules, handling real-time tracking, order management, and analytics.",
      features: [
        "Real-time delivery tracking",
        "Multi-module architecture",
        "Scalable backend infrastructure",
        "Analytics dashboard",
        "Mobile app integration"
      ],
      technologies: ["Node.js", "Express", "MySQL", "Redis", "Socket.io", "AWS"],
      impact: "Processed 100K+ deliveries daily",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Tribe Fitness",
      subtitle: "Online Fitness Platform",
      description: "An innovative fitness platform enabling at-home gym experiences through web and mobile applications. Developed complete backend infrastructure from scratch, including user management, workout tracking, and social features.",
      features: [
        "User workout tracking",
        "Social fitness features",
        "Video streaming integration",
        "Payment processing",
        "Mobile-first approach"
      ],
      technologies: ["Node.js", "NestJS", "PostgreSQL", "WebRTC", "Stripe", "AWS"],
      impact: "Served 50K+ active users",
      gradient: "from-blue-500 to-teal-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
            Showcasing some of the impactful projects I've architected and built, 
            demonstrating expertise in scalable backend systems and modern technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="bg-card border-border shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group overflow-hidden"
            >
              <CardHeader className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="relative">
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    {project.title}
                  </CardTitle>
                  <p className="text-lg text-primary font-semibold mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent/30 text-accent-foreground text-sm rounded-full border border-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Impact</p>
                    <p className="text-lg font-semibold text-primary">{project.impact}</p>
                  </div>
                  <Button 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                These projects represent just a glimpse of what's possible. 
                Let's collaborate to bring your next big idea to life with robust, scalable backend architecture.
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-semibold"
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start a Conversation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;