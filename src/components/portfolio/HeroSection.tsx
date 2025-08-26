import { Button } from "@/components/ui/button";
import { Download, MapPin, Mail, Phone, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 container mx-auto px-4 text-center text-white"
      >
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-glow border-4 border-white/20">
                <img 
                  src="/lovable-uploads/45a65c1d-04d2-48c9-b108-f5634562c231.png"
                  alt="Mahesh Gande - Campaign Analyst & AI Specialist"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating accent ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-accent/30"
              />
            </motion.div>
          </motion.div>

          {/* Name & Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold mb-4 tracking-tight"
          >
            Mahesh Gande
          </motion.h1>
          
          {/* Location & Contact */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-white/80">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Bengaluru, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>maheshgande1997@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+91-8125438433</span>
            </div>
          </div>

          {/* Summary */}
          <p className="text-xl leading-relaxed mb-10 max-w-3xl mx-auto text-white/90">
            🎯 Campaign Analyst | Transitioning to Data Analyst | Microsoft Certified & Tata | Excel • SQL • Power BI • Python Basics | No Code AI Agent Builder | GenAI
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 shadow-medium transition-spring"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Mahesh_Gande_Campaign_Analyst_Resume.pdf';
                link.download = 'Mahesh_Gande_Campaign_Analyst_Resume.pdf';
                link.click();
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-medium transition-spring"
              onClick={() => window.open('https://linkedin.com/in/mahesh-gande1997', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn Profile
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-medium transition-spring"
              onClick={() => window.open('https://github.com/mahesh-gande', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub Profile
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default HeroSection;