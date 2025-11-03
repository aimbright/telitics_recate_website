import { CheckCircle } from "lucide-react";

const WhyChoose = () => {
  const reasons = [
    "Industry-leading 99.9% uptime guarantee",
    "Advanced AI-powered analytics and insights",
    "Seamless integration with existing systems",
    "Scalable infrastructure that grows with you",
    "Real-time monitoring and reporting",
    "Cost-effective pricing with no hidden fees",
    "Compliance with global security standards",
    "Dedicated account management",
  ];

  return (
    <section className="py-24 gradient-primary text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="mb-6">Why Choose Telitics?</h2>
            <p className="text-xl text-white/90">
              Join hundreds of enterprises who trust Telitics for their mission-critical communications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div 
                key={reason}
                className="flex items-start gap-4 p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-lg">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
