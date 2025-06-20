import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Mai Labs / Kalp Studios",
      position: "Backend Engineer L3",
      duration: "June 2024 – Present",
      description: "Leading backend development initiatives and architecting scalable solutions for AI-integrated platforms.",
      technologies: ["Node.js", "AWS", "AI Integration", "Microservices"]
    },
    {
      id: 2,
      company: "Shyftlabs",
      position: "Senior Backend Engineer",
      duration: "Feb 2024 – May 2024",
      description: "Developed high-performance backend systems and optimized existing architectures for better scalability.",
      technologies: ["NestJS", "PostgreSQL", "Docker", "Cloud Services"]
    },
    {
      id: 3,
      company: "Appinventiv",
      position: "Senior Software Engineer",
      duration: "Aug 2023 – Jan 2024",
      description: "Built enterprise-level applications and mentored junior developers in best practices.",
      technologies: ["Express.js", "MongoDB", "Redis", "CI/CD"]
    },
    {
      id: 4,
      company: "Tribe Inc",
      position: "Senior Backend Engineer",
      duration: "Apr 2021 – Jul 2023",
      description: "Designed and developed complete backend infrastructure for fitness platforms from scratch.",
      technologies: ["Node.js", "MySQL", "WebRTC", "AWS Services"]
    },
    {
      id: 5,
      company: "Click Labs",
      position: "Software Engineer to Associate SE",
      duration: "Jan 2018 – Apr 2021",
      description: "Started career journey, developed delivery management systems and gained expertise in full-stack development.",
      technologies: ["Node.js", "JavaScript", "Databases", "API Development"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background shadow-lg z-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                </div>

                {/* Experience card */}
                <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col space-y-2">
                        <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
                        <h4 className="text-lg font-semibold text-primary">{exp.company}</h4>
                        <p className="text-sm text-muted-foreground font-medium">{exp.duration}</p>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-accent/30 text-accent-foreground text-sm rounded-full border border-accent"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;