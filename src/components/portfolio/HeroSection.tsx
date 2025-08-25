import { Button } from "@/components/ui/button";
import { Download, MapPin, Mail, Phone, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-glow border-4 border-white/20 transition-spring hover:scale-105">
                <img 
                  src="/lovable-uploads/45a65c1d-04d2-48c9-b108-f5634562c231.png"
                  alt="Mahesh Gande - Data Analyst & AI Specialist"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating accent ring */}
              <div className="absolute inset-0 rounded-full border-2 border-accent/30 animate-pulse"></div>
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Mahesh Gande
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-6 text-white/90">
            Data Analyst | AI & Automation Specialist
          </h2>
          
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
            Data-driven analyst with proven expertise in automation, reporting, and marketing analytics. 
            Certified in Microsoft Data Analysis and GenAI-powered simulations, proficient in SQL, Excel, 
            Power BI, and Python. Passionate about leveraging data to drive business strategy and empower smarter decisions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 shadow-medium transition-spring"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 transition-spring"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn Profile
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default HeroSection;