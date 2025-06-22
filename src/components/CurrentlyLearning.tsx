
import { BookOpen, Code2, Brain, Zap } from "lucide-react";

const CurrentlyLearning = () => {
  const learningItems = [
    {
      title: "Advanced System Design",
      description: "Exploring microservices architecture patterns and distributed systems",
      icon: Code2,
      progress: 75,
      category: "Architecture"
    },
    {
      title: "Machine Learning Operations",
      description: "MLOps practices, model deployment, and monitoring in production",
      icon: Brain,
      progress: 60,
      category: "AI/ML"
    },
    {
      title: "Kubernetes & Container Orchestration",
      description: "Deep diving into K8s for scalable container management",
      icon: Zap,
      progress: 45,
      category: "DevOps"
    },
    {
      title: "GraphQL Federation",
      description: "Building federated GraphQL APIs for microservices",
      icon: BookOpen,
      progress: 30,
      category: "API Design"
    }
  ];

  return (
    <section id="learning" className="py-20 bg-gradient-to-br from-background via-accent/5 to-secondary/10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm border border-border rounded-full shadow-lg mb-6">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Continuous Growth</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Currently <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">Learning</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Staying ahead of the curve by continuously expanding my knowledge in cutting-edge technologies and methodologies.
          </p>
        </div>

        {/* Learning Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {learningItems.map((item, index) => (
            <div 
              key={item.title}
              className="group bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <item.icon size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <span className="px-2 py-1 bg-accent/30 text-accent-foreground text-xs rounded-lg border border-accent">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground">Progress</span>
                  <span className="text-sm text-primary font-semibold">{item.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-700 ease-out rounded-full"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">Always learning, always growing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyLearning;
