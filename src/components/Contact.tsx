import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="mb-6">Get In Touch</h2>
          <p className="text-xl text-muted-foreground">
            Ready to transform your business communications? Contact us today for a personalized demo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@telitics.com" className="text-primary hover:underline">
                      info@telitics.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <a href="tel:+918008009000" className="text-primary hover:underline">
                      +91 800 800 9000
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Address</div>
                    <p className="text-muted-foreground">
                      Hyderabad, Telangana<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20">
              <h4 className="font-bold mb-2">Enterprise Support</h4>
              <p className="text-muted-foreground mb-4">
                Need dedicated support? Our enterprise team is available 24/7 to assist you.
              </p>
              <Button variant="outline">Contact Enterprise Team</Button>
            </div>
          </div>
          
          <form className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold mb-2">
                  First Name *
                </label>
                <Input id="firstName" placeholder="John" required />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold mb-2">
                  Last Name *
                </label>
                <Input id="lastName" placeholder="Doe" required />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email *
              </label>
              <Input id="email" type="email" placeholder="john@company.com" required />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                Phone
              </label>
              <Input id="phone" type="tel" placeholder="+91 98765 43210" />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-semibold mb-2">
                Company
              </label>
              <Input id="company" placeholder="Your Company Name" />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message *
              </label>
              <Textarea 
                id="message" 
                placeholder="Tell us about your requirements..." 
                rows={5}
                required 
              />
            </div>
            
            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
