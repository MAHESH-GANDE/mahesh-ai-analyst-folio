import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Microsoft Data Analysis Certificate",
      issuer: "LinkedIn Learning",
      date: "July 2024",
      category: "Data Analytics",
      description: "Comprehensive certification covering advanced data analysis techniques, statistical methods, and Microsoft ecosystem tools.",
      skills: ["Data Analysis", "Statistical Methods", "Microsoft Tools"]
    },
    {
      title: "GenAI-Powered Data Analytics Simulation",
      issuer: "Forage",
      date: "2025",
      category: "AI & Machine Learning",
      description: "Advanced simulation focusing on leveraging Generative AI for enhanced data analytics workflows and automation.",
      skills: ["GenAI", "Automation", "Advanced Analytics"]
    },
    {
      title: "Tata Group Data Analytics Simulation",
      issuer: "Forage",
      date: "July 2025",
      category: "Business Analytics",
      description: "Real-world simulation involving EDA, predictive modeling, and AI-driven collection strategies for finance optimization.",
      skills: ["EDA", "Predictive Modeling", "AI Strategy"]
    },
    {
      title: "Career Essentials in Data Analysis",
      issuer: "Microsoft & LinkedIn",
      date: "August 2024",
      category: "Professional Development",
      description: "Essential skills and methodologies for building a successful career in data analysis and business intelligence.",
      skills: ["Career Development", "Industry Best Practices"]
    },
    {
      title: "Digital Marketing",
      issuer: "HubSpot Academy",
      date: "September 2024",
      category: "Marketing Analytics",
      description: "Comprehensive digital marketing certification with focus on analytics, campaign optimization, and ROI measurement.",
      skills: ["Marketing Analytics", "Campaign Optimization", "ROI Analysis"]
    },
    {
      title: "SQL Basics & Introduction to Analytics",
      issuer: "Great Learning",
      date: "June 2024",
      category: "Technical Skills",
      description: "Foundation certification in SQL database management and introductory analytics concepts.",
      skills: ["SQL", "Database Management", "Analytics Fundamentals"]
    }
  ];

  const categories = ["All", "Data Analytics", "AI & Machine Learning", "Business Analytics", "Marketing Analytics", "Technical Skills"];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Certifications & Training
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in data analytics and AI
          </p>
        </div>

        {/* Category Filter - Optional for future enhancement */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.slice(0, 4).map((category, index) => (
            <Badge 
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="group hover:shadow-medium transition-spring cursor-pointer bg-gradient-card border-border/50 h-full flex flex-col"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-accent" />
                    <Badge variant="secondary" className="text-xs">
                      {cert.category}
                    </Badge>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-smooth" />
                </div>
                
                <CardTitle className="text-lg font-semibold leading-tight group-hover:text-primary transition-smooth">
                  {cert.title}
                </CardTitle>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="font-medium">{cert.issuer}</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {cert.date}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                  {cert.description}
                </p>

                {/* Skills Covered */}
                <div>
                  <h4 className="text-xs font-medium mb-2 text-foreground uppercase tracking-wide">
                    Skills Covered
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="outline" 
                        className="text-xs bg-accent/10 text-accent border-accent/20 hover:bg-accent hover:text-accent-foreground transition-smooth"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-card rounded-lg border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Certifications Earned</div>
          </div>
          <div className="text-center p-6 bg-gradient-card rounded-lg border border-border/50">
            <div className="text-3xl font-bold text-accent mb-2">3</div>
            <div className="text-sm text-muted-foreground">AI Specializations</div>
          </div>
          <div className="text-center p-6 bg-gradient-card rounded-lg border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">2025</div>
            <div className="text-sm text-muted-foreground">Latest Certification</div>
          </div>
          <div className="text-center p-6 bg-gradient-card rounded-lg border border-border/50">
            <div className="text-3xl font-bold text-accent mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Completion Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;