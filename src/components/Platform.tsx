import { Layers, Lock, Zap, Code, LineChart, RefreshCw } from "lucide-react";

const Platform = () => {
  const features = [
    {
      icon: Layers,
      title: "Unified Platform",
      description: "All communication channels in one powerful, easy-to-use interface",
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "SOC 2 Type II certified with end-to-end encryption",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Built on redundant infrastructure for maximum reliability",
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description: "Comprehensive APIs and SDKs for seamless integration",
    },
    {
      icon: LineChart,
      title: "Advanced Analytics",
      description: "Real-time insights with customizable dashboards",
    },
    {
      icon: RefreshCw,
      title: "Auto Scaling",
      description: "Infrastructure that automatically scales with your needs",
    },
  ];

  return (
    <section id="platform" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="mb-6">Enterprise Platform</h2>
          <p className="text-xl text-muted-foreground">
            Built for scale, designed for simplicity. Our platform handles millions of 
            interactions daily while remaining incredibly easy to use.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="p-6 rounded-xl border-2 border-border hover:border-primary transition-smooth animate-fade-in group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-smooth" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Platform;
