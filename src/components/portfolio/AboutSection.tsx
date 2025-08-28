import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TrendingUp, Target, Users, Award } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Campaign Performance",
      description: "Optimized marketing campaigns achieving 25% improvement in cost-per-lead across multiple channels"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Data-Driven Insights",
      description: "Leveraged analytics to identify key performance drivers and optimize ROI for enterprise clients"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Cross-Functional Collaboration",
      description: "Led analytics initiatives across marketing, sales, and product teams to drive business growth"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Microsoft certified with ongoing specialization in AI and advanced analytics methodologies"
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
            About Mahesh
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A dedicated Campaign Analyst with a passion for transforming data into actionable insights. 
            Currently transitioning into advanced data analytics with Microsoft certifications and hands-on 
            experience in AI-powered solutions.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">My Journey</h3>
                <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                  <p className="mb-4">
                    My career began in campaign analysis, where I discovered the power of data to tell compelling stories 
                    and drive business decisions. Working with diverse clients, I've developed expertise in translating 
                    complex datasets into clear, actionable insights that directly impact bottom-line results.
                  </p>
                  <p className="mb-4">
                    What sets me apart is my ability to bridge the gap between technical analysis and business strategy. 
                    I don't just crunch numbers—I uncover the narrative within the data and present findings in ways that 
                    stakeholders can immediately understand and act upon. My strong communication skills enable me to 
                    effectively collaborate with cross-functional teams, ensuring seamless knowledge transfer and alignment 
                    across departments.
                  </p>
                  <p>
                    Currently, I'm expanding my expertise into advanced data analytics and AI, earning Microsoft certifications 
                    and working on cutting-edge projects that leverage GenAI for enhanced analytics workflows. My goal is to 
                    become a leader in data-driven decision making, combining traditional analytics with emerging AI technologies.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-gradient-card border-border/50 hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                        {highlight.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-foreground">
                          {highlight.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;