import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
            Ready to bring your next project to life? I'm always excited to discuss new opportunities 
            and challenges. Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card border-border shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full min-h-[120px]"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card border-border shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground font-medium">neha.verma@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <p className="text-foreground font-medium">linkedin.com/in/nehaverma</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Github className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <p className="text-foreground font-medium">github.com/nehaverma</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-4">📧</div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Download My Resume
                </h3>
                <p className="text-muted-foreground mb-4">
                  Get a detailed overview of my experience and skills.
                </p>
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a friendly chat about technology and development.
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;