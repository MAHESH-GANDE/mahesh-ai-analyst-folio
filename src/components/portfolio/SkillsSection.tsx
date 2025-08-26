import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for modern data analysis and business intelligence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="group hover:shadow-medium transition-all duration-300 cursor-pointer bg-gradient-card border-border/50 h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div 
                      className={`${category.color}`}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {category.icon}
                    </motion.div>
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-smooth">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;