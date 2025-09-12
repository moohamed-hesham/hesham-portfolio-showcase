import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-foreground">
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded mr-1">M</span>
              <span>Hesham</span>
            </div>
            <p className="mt-2 text-muted-foreground max-w-xs">
              Data Analyst specializing in transforming complex data into actionable insights.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://linkedin.com/in/mohamed-hesham" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/mohamed-hesham" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
            <div className="text-muted-foreground text-sm">
              © {currentYear} Mohamed Hesham. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;