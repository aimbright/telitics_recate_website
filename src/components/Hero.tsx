import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-primary flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 animate-fade-in">
            <h1 className="leading-tight">
              Transform Your Business Communications
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-xl">
              Enterprise-grade cloud telephony solutions and real-time communication analytics that scale with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Get Started <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-secondary">
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-white/80">Enterprise Clients</div>
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-white/80">Uptime SLA</div>
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">24/7</div>
                <div className="text-sm text-white/80">Support</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl blur-2xl opacity-30" />
              <img 
                src={heroImage} 
                alt="Professional using Telitics cloud telephony platform" 
                className="relative rounded-3xl shadow-elegant w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
