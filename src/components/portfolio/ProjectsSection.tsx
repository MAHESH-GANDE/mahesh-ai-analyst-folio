import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Target, TrendingUp, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "🌾 Godavari Rice Mart",
      date: "2024",
      description: "A modern, production-ready e-commerce website for rice and grocery delivery built with React, TypeScript, and Google Maps API integration for location-based services.",
      tools: ["React", "TypeScript", "Vite", "Tailwind CSS", "Google Maps API", "Responsive Design"],
      achievements: [
        "Modern e-commerce interface with product catalog",
        "Real-time location services with Google Maps integration", 
        "Responsive design optimized for mobile and desktop",
        "Production-ready code with TypeScript for type safety"
      ],
      type: "E-commerce Website",
      impact: "Online Grocery Platform",
      github: "https://github.com/mahesh-gande/godavari-rice-mart"
    },
    {
      title: "Tata Group Data Analytics Simulation",
      date: "July 2025",
      description: "Performed comprehensive EDA to assess data quality and proposed predictive framework for delinquency risk analysis. Built an agentic AI-driven collection strategy for finance optimization.",
      tools: ["AI", "GenAI", "Python", "Predictive Analytics"],
      achievements: [
        "Data quality assessment framework",
        "Delinquency risk prediction model",
        "AI-driven collection strategy"
      ],
      type: "Simulation",
      impact: "Finance Optimization"
    },
    {
      title: "GenAI-Powered Data Analytics",
      date: "2025",
      description: "Advanced simulation focusing on leveraging Generative AI for enhanced data analytics workflows, automation, and intelligent insights generation.",
      tools: ["GenAI", "Python", "Automation", "Machine Learning"],
      achievements: [
        "AI-powered workflow automation",
        "Intelligent insights generation",
        "Advanced analytics framework"
      ],
      type: "Certification Project",
      impact: "Process Automation"
    },
    {
      title: "Marketing Analytics Dashboard",
      date: "Ongoing",
      description: "Developed comprehensive marketing analytics solution with ROI tracking, CPL analysis, and campaign funnel optimization using Power BI and advanced Excel techniques.",
      tools: ["Power BI", "Excel", "Google Analytics", "CleverTap"],
      achievements: [
        "ROI tracking system",
        "Campaign performance metrics",
        "Automated reporting pipeline"
      ],
      type: "Business Intelligence",
      impact: "Marketing Optimization"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world applications of data analytics and AI-powered solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-strong transition-spring cursor-pointer bg-gradient-card border-border/50 h-full flex flex-col"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="outline" className="text-xs">
                    {project.type}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {project.date}
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold leading-tight group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tools Used */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-3 text-foreground">Tools & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <Badge 
                        key={toolIndex}
                        variant="secondary" 
                        className="text-xs bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-3 flex items-center gap-2 text-foreground">
                    <Target className="w-4 h-4 text-accent" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div className="mt-auto">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-medium text-accent">
                      <TrendingUp className="w-4 h-4" />
                      {project.impact}
                    </div>
                    {project.github && (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-primary hover:text-primary-foreground hover:bg-primary transition-smooth"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;