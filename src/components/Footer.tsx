import teliticsLogo from "@/assets/telitics-logo.png";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: [
      { label: "Cloud PBX", href: "#" },
      { label: "SMS & Messaging", href: "#" },
      { label: "Call Analytics", href: "#" },
      { label: "Contact Center", href: "#" },
      { label: "Virtual Numbers", href: "#" },
      { label: "AI Voice Bot", href: "#" },
    ],
    Company: [
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Blog", href: "#" },
    ],
    Resources: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Support Center", href: "#" },
      { label: "Status", href: "#" },
      { label: "Pricing", href: "#pricing" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Security", href: "#" },
    ],
  };

  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src={teliticsLogo} alt="Telitics" className="h-10 w-10" />
              <span className="text-2xl font-bold">Telitics</span>
            </div>
            <p className="text-white/80 mb-6 max-w-sm">
              Transforming business communications with enterprise-grade cloud telephony 
              and analytics solutions.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-smooth flex items-center justify-center">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-smooth flex items-center justify-center">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-smooth flex items-center justify-center">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-smooth flex items-center justify-center">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="text-white/70 hover:text-primary transition-smooth"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center md:flex md:justify-between md:items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Telitics Technologies Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-white/60 text-sm">
            Made with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
