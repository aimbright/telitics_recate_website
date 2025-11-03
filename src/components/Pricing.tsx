import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Startup",
      price: "49",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 10 users",
        "1,000 minutes included",
        "Basic analytics",
        "Email support",
        "Mobile apps",
        "API access",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Business",
      price: "199",
      description: "For growing businesses",
      features: [
        "Up to 50 users",
        "5,000 minutes included",
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee",
        "White-label options",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Unlimited users",
        "Unlimited minutes",
        "Enterprise analytics",
        "24/7 phone support",
        "Custom development",
        "On-premise deployment",
        "Advanced security",
        "Training & onboarding",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="mb-6">Flexible Pricing</h2>
          <p className="text-xl text-muted-foreground">
            Choose the plan that fits your business needs. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-smooth hover:-translate-y-2 animate-fade-in relative ${
                plan.popular ? 'border-2 border-primary' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <div className="mb-6">
                  {plan.price === "Custom" ? (
                    <div className="text-4xl font-bold">Custom</div>
                  ) : (
                    <>
                      <span className="text-5xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </>
                  )}
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.popular ? "default" : "outline"} 
                size="lg" 
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
