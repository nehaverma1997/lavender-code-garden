import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: ["Node.js", "NestJS", "Express", "Hapi", "Koa", "TypeScript", "JavaScript"],
      icon: "🚀"
    },
    {
      title: "AWS Services",
      skills: ["ECS", "Chime", "Lambda", "IVS", "MediaConvert", "S3", "RDS", "CloudWatch"],
      icon: "☁️"
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "Redis", "MongoDB", "Aerospike", "Cassandra"],
      icon: "🗄️"
    },
    {
      title: "Integrations",
      skills: ["WebRTC (OpenVidu, Zoom)", "Stripe", "Shopify", "Twilio", "Socket.io"],
      icon: "🔌"
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "Heroku", "CI/CD", "Bitbucket Pipelines", "Kafka", "gRPC"],
      icon: "⚙️"
    },
    {
      title: "Architecture",
      skills: ["Microservices", "REST APIs", "GraphQL", "Event-Driven", "Serverless"],
      icon: "🏗️"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience in backend development and system architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 bg-accent/30 text-accent-foreground text-sm rounded-lg border border-accent hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 shadow-lg max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Continuous Learning
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Technology evolves rapidly, and so do I. I'm constantly exploring new tools, 
                frameworks, and methodologies to stay at the forefront of backend development. 
                Currently diving deeper into AI/ML integration and cloud-native architectures.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;