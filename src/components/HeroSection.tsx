
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import mohamedPortrait from '@/assets/mohamed-portrait.jpg';

const HeroSection = () => {
  return (
    <section id="hero" className="pt-28 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Hi, I'm <span className="text-primary">Mohamed Hesham</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              A highly motivated Data Analyst with a strong passion for sales and marketing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="#contact">Hire Me</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="#cv" download>
                  <Download size={18} />
                  <span>Download CV</span>
                </a>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-full bg-gradient-to-br from-primary/10 to-primary/30 border-8 border-white shadow-lg animate-scale-in">
              <img 
                src="/lovable-uploads/dd98c1b7-d166-4e48-8c4d-b0aa68c993a6.png" 
                alt="Mohamed Hesham Portrait" 
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white p-3 rounded-lg shadow-lg animate-scale-in delay-300">
              <div className="text-lg font-semibold">Data Analyst</div>
              <div className="text-primary font-medium">5+ Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
