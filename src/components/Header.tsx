
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto py-4 px-4 md:px-6">
        <nav className="flex justify-between items-center">
          <div className="text-xl font-bold text-primary">
            <span className="bg-primary text-white px-2 py-1 rounded mr-1">M</span>
            <span>Hesham</span>
          </div>
          
          <ul className="hidden md:flex space-x-8">
            <li><a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a></li>
            <li><a href="#skills" className="text-gray-700 hover:text-primary transition-colors">Skills</a></li>
            <li><a href="#projects" className="text-gray-700 hover:text-primary transition-colors">Projects</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a></li>
          </ul>
          
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" size="sm" className="hidden md:flex gap-2">
              <a href="#cv">
                <Download size={16} />
                <span>Resume</span>
              </a>
            </Button>
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
              <a href="#contact">Hire Me</a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
