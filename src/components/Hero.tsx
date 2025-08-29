import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Developer workspace"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-subtle" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-in fade-in-0 duration-700 slide-in-from-bottom-4">
          <p className="text-lg md:text-xl text-muted-foreground mb-2">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent pb-2">
            Agostina Torres
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Frontend Developer
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Crafting beautiful, responsive web experiences with modern technologies and clean code
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
            <Button variant="outline" size="icon" className="hover:shadow-glow-subtle transition-all duration-300" asChild>
              <a href="https://github.com/agosro" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="hover:shadow-glow-subtle transition-all duration-300" asChild>
              <a href="https://www.linkedin.com/in/agosro/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="hover:shadow-glow-subtle transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
        </button>
      </div>
    </section>
  );
};

export default Hero;