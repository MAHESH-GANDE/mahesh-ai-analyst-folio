import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  BarChart3, 
  Code2, 
  Bot, 
  TrendingUp,
  FileSpreadsheet 
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <FileSpreadsheet className="w-8 h-8" />,
      title: "Excel Mastery",
      skills: ["Pivot Tables", "Dashboards", "VLOOKUP", "HLOOKUP", "VBA"],
      color: "text-green-600"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "SQL & Databases",
      skills: ["SQLite", "MySQL", "Joins", "Views", "Aggregations"],
      color: "text-blue-600"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Business Intelligence",
      skills: ["Power BI", "DAX", "Power Query", "Visuals", "Filters"],
      color: "text-primary"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Programming",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "OpenPyXL"],
      color: "text-accent"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI & Automation",
      skills: ["ChatGPT", "AI Data Queries", "Low-code Builders", "n8n"],
      color: "text-purple-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Analytics & Marketing",
      skills: ["ROI Tracking", "CPL Analysis", "Google Analytics", "CleverTap"],
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for modern data analysis and business intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-spring cursor-pointer bg-gradient-card border-border/50"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`${category.color} transition-spring group-hover:scale-110`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary" 
                      className="text-sm hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;