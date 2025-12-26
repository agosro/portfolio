import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Smartphone, Zap } from "lucide-react";

const skills = [
  "React", "Javascript", "HTML5", "CSS3", "Node.js", "Express.js", "Python", "LLM", "RAG", "Git", "Figma", "Responsive Design", "MySQL", "MongoDB", "Testing"
];

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful interfaces with attention to user experience"
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Building applications that work perfectly on all devices"
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed and efficiency"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate frontend developer with expertise in modern web technologies. 
            I love creating digital experiences that combine beautiful design with robust functionality.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-glow-subtle transition-all duration-300 border-border/50">
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Technologies & Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;