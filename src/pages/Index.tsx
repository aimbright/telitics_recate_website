import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import Solutions from "@/components/Solutions";
import Platform from "@/components/Platform";
import Pricing from "@/components/Pricing";
import Values from "@/components/Values";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <WhyChoose />
        <Solutions />
        <Platform />
        <Pricing />
        <Values />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
