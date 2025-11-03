import { Shield, Zap, Globe, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance with international security standards",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-second response times with global edge network infrastructure",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Coverage across 150+ countries with local presence and support",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 dedicated support team with industry-leading response times",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="mb-6">About Telitics</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're revolutionizing business communications with cutting-edge cloud telephony 
            solutions and real-time analytics. Our platform empowers enterprises to deliver 
            exceptional customer experiences at scale.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.title}
                className="text-center p-8 rounded-2xl bg-card shadow-elegant hover:shadow-glow transition-smooth hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
