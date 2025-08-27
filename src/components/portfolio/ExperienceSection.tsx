import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Campaign Analyst",
      company: "Profuse Services",
      location: "Bengaluru, India",
      period: "2024 - Present",
      type: "Full-time",
      description: "Specializing in campaign analytics, marketing automation, and AI-powered business intelligence solutions. Leading initiatives in digital marketing analytics and campaign performance optimization.",
      achievements: [
        "Developed automated campaign reporting systems reducing manual work by 75%",
        "Implemented AI-driven marketing data analysis improving campaign insights",
        "Created comprehensive campaign performance dashboards for ROI tracking",
        "Optimized campaign data collection and attribution workflows"
      ],
      skills: ["Excel", "SQL", "Power BI", "Python", "Campaign Analytics"]
    },
    {
      title: "Campaign Executive",
      company: "KrazyBee Services",
      location: "Bengaluru, India", 
      period: "2023 - 2024",
      type: "Full-time",
      description: "Executed multi-channel marketing campaigns and managed campaign performance tracking. Focused on digital marketing initiatives and campaign optimization strategies.",
      achievements: [
        "Managed end-to-end campaign execution across multiple digital channels",
        "Improved campaign performance metrics through data-driven optimizations",
        "Delivered campaign insights leading to 20% improvement in engagement rates",
        "Established campaign tracking and performance measurement procedures"
      ],
      skills: ["Campaign Management", "Digital Marketing", "Analytics", "Performance Tracking"]
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proven track record in data analytics and business intelligence
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="group hover:shadow-medium transition-spring bg-gradient-card border-border/50"
              >
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Left Column - Basic Info */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Building className="w-5 h-5 text-primary" />
                        <Badge variant="outline" className="text-xs">
                          {exp.type}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-smooth">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-3">{exp.company}</p>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="lg:col-span-3">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-sm font-medium mb-3 text-foreground">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-3">
                              <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="text-sm font-medium mb-3 text-foreground">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <Badge 
                              key={skillIndex}
                              variant="secondary" 
                              className="text-xs bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;