import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a Senior Backend Engineer with over 6 years of experience, I specialize in building 
                robust, scalable systems that power modern digital experiences. My journey in technology 
                has been driven by a passion for solving complex problems and creating efficient solutions.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I've had the privilege of working with cutting-edge technologies, from cloud-native 
                architectures to AI-integrated systems. My expertise spans across various domains including 
                delivery management platforms, fitness applications, and enterprise solutions.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
                and mentoring fellow developers. I believe in writing clean, maintainable code that not only 
                works but stands the test of time.
              </p>
            </div>
          </div>

          <div>
            <Card className="p-6 bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Education</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="text-lg font-semibold text-foreground">
                        B.Tech in Computer Science
                      </h4>
                      <p className="text-muted-foreground">
                        Maharishi Markandeshwar University, Mullana
                      </p>
                      <p className="text-sm text-muted-foreground">
                        2014 - 2018
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">Quick Facts</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-accent/20 rounded-lg">
                      <div className="text-2xl font-bold text-primary">6+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="text-center p-3 bg-accent/20 rounded-lg">
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-sm text-muted-foreground">Projects Completed</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;