import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Download, Send, Github } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "maheshgande1997@gmail.com",
      link: "mailto:maheshgande1997@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91-8125438433",
      link: "tel:+918125438433"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Bengaluru, India",
      link: null
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "mahesh-gande1997",
      link: "https://linkedin.com/in/mahesh-gande1997"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "mahesh-gande",
      link: "https://github.com/mahesh-gande"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss campaign analytics opportunities and collaboration
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                      {item.link ? (
                        <a 
                          href={item.link}
                          className="text-foreground hover:text-primary transition-smooth font-medium"
                          target={item.link.startsWith('http') ? '_blank' : '_self'}
                          rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Actions</h3>
                <div className="space-y-3">
                  <Button 
                    className="w-full justify-start bg-primary hover:bg-primary/90 text-primary-foreground shadow-medium transition-spring"
                    size="lg"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/Mahesh_Gande_Campaign_Analyst_Resume.pdf';
                      link.download = 'Mahesh_Gande_Campaign_Analyst_Resume.pdf';
                      link.click();
                    }}
                  >
                    <Download className="mr-3 h-5 w-5" />
                    Download Complete Resume
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full justify-start border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-spring"
                    size="lg"
                    onClick={() => window.open('https://linkedin.com/in/mahesh-gande1997', '_blank')}
                  >
                    <Linkedin className="mr-3 h-5 w-5" />
                    View LinkedIn Profile
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full justify-start border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-spring"
                    size="lg"
                    onClick={() => window.open('https://github.com/mahesh-gande', '_blank')}
                  >
                    <Github className="mr-3 h-5 w-5" />
                    View GitHub Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card border-border/50 shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <Send className="w-5 h-5 text-white" />
                </div>
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <Input 
                    placeholder="Your first name"
                    className="border-border/50 focus:border-primary transition-smooth"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <Input 
                    placeholder="Your last name"
                    className="border-border/50 focus:border-primary transition-smooth"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email Address</label>
                <Input 
                  type="email"
                  placeholder="your.email@example.com"
                  className="border-border/50 focus:border-primary transition-smooth"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Subject</label>
                <Input 
                  placeholder="Project inquiry, collaboration, etc."
                  className="border-border/50 focus:border-primary transition-smooth"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea 
                  placeholder="Tell me about your project or how we can work together..."
                  rows={6}
                  className="border-border/50 focus:border-primary transition-smooth resize-none"
                />
              </div>
              
              <Button 
                className="w-full bg-gradient-primary hover:shadow-glow text-primary-foreground shadow-medium transition-spring"
                size="lg"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                I'll get back to you within 24 hours. Looking forward to connecting!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;