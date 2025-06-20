import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Full-stack web application development with modern technologies and best practices. From concept to deployment, I ensure your web presence is fast, secure, and scalable.",
      features: [
        "Custom web applications",
        "Progressive Web Apps (PWAs)",
        "RESTful API development",
        "Database design & optimization",
        "Performance optimization"
      ],
      icon: "🌐",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      id: 2,
      title: "Backend Architecture Design",
      description: "Scalable and robust backend architectures tailored to your business needs. I design systems that grow with your business and handle increasing loads efficiently.",
      features: [
        "Microservices architecture",
        "Cloud-native solutions",
        "System scalability planning",
        "Security implementation",
        "Infrastructure as Code"
      ],
      icon: "🏗️",
      gradient: "from-green-500 to-teal-500"
    },
    {
      id: 3,
      title: "API Development",
      description: "Comprehensive API solutions that connect your applications and enable seamless data flow. From design to documentation, I create APIs that are developer-friendly and robust.",
      features: [
        "RESTful API design",
        "GraphQL implementation",
        "API documentation",
        "Rate limiting & security",
        "Third-party integrations"
      ],
      icon: "🔌",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Services I Offer
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
            Comprehensive backend development services to bring your digital vision to life. 
            From initial architecture to deployment and maintenance, I've got you covered.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="bg-card border-border shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <CardHeader className="text-center relative">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              
              <CardContent className="relative">
                <h4 className="text-lg font-semibold text-foreground mb-4">What's Included:</h4>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 shadow-lg">
            <CardContent className="p-8 text-center">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Custom Solutions
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-4xl mx-auto">
                Every project is unique, and so are the solutions I provide. Whether you need a simple API 
                or a complex distributed system, I work closely with you to understand your requirements 
                and deliver exactly what your business needs.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Custom Built</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">∞</div>
                  <div className="text-muted-foreground">Scalability Focus</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;