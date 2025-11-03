import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import teliticsLogo from "@/assets/telitics-logo.png";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { label: "Solutions", href: "#solutions" },
    { label: "Platform", href: "#platform" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={teliticsLogo} alt="Telitics Technologies" className="h-10 w-10" />
            <span className="text-2xl font-bold text-secondary">Telitics</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">Sign In</Button>
            <Button>Get Started</Button>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6 text-secondary" />
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-smooth font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="ghost" className="w-full">Sign In</Button>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
