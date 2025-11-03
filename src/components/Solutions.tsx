import { Phone, MessageSquare, BarChart3, Cloud, Headphones, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const Solutions = () => {
  const solutions = [
    {
      icon: Phone,
      title: "Cloud PBX",
      description: "Complete business phone system in the cloud with advanced call routing and IVR",
      features: ["Multi-level IVR", "Call Recording", "Auto Attendant"],
    },
    {
      icon: MessageSquare,
      title: "SMS & Messaging",
      description: "Two-way SMS communication and bulk messaging with automation capabilities",
      features: ["SMS Campaigns", "2-Way Messaging", "API Integration"],
    },
    {
      icon: BarChart3,
      title: "Call Analytics",
      description: "Real-time insights and detailed reporting on all communication activities",
      features: ["Live Dashboard", "Custom Reports", "Performance Metrics"],
    },
    {
      icon: Cloud,
      title: "Contact Center",
      description: "Full-featured contact center solution with omnichannel support",
      features: ["Queue Management", "Agent Desktop", "Quality Monitoring"],
    },
    {
      icon: Headphones,
      title: "Virtual Numbers",
      description: "Local and toll-free numbers in 150+ countries for global presence",
      features: ["Instant Setup", "Number Porting", "Global Coverage"],
    },
    {
      icon: Bot,
      title: "AI Voice Bot",
      description: "Intelligent voice automation powered by advanced AI technology",
      features: ["Natural Language", "24/7 Availability", "Easy Training"],
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="mb-6">Our Solutions</h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive cloud communication tools designed for modern businesses
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div 
                key={solution.title}
                className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-smooth hover:-translate-y-2 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-smooth mb-6">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
