import { Quote } from "lucide-react";

const Values = () => {
  return (
    <section className="py-24 gradient-primary text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Quote className="h-16 w-16 mx-auto mb-8 text-primary" />
          <blockquote className="text-3xl md:text-4xl font-light leading-relaxed mb-8">
            "A customer is the most important visitor on our premises. He is not dependent 
            on us. We are dependent on him. He is not an interruption in our work. He is the 
            purpose of it."
          </blockquote>
          <div className="text-xl text-white/80">
            — Mahatma Gandhi
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-white/90 leading-relaxed">
              Empower businesses worldwide with reliable, innovative communication solutions 
              that drive growth and enhance customer experiences.
            </p>
          </div>
          <div className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-white/90 leading-relaxed">
              To be the global leader in cloud communication technology, setting new standards 
              for quality, security, and customer satisfaction.
            </p>
          </div>
          <div className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <p className="text-white/90 leading-relaxed">
              Innovation, integrity, and customer-centricity guide everything we do. We believe 
              in building lasting relationships through exceptional service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
