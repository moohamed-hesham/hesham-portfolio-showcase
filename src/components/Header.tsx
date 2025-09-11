
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      className="fixed top-0 w-full bg-background/90 backdrop-blur-md z-50 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
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
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild variant="outline" size="sm" className="hidden md:flex gap-2 hover:shadow-md transition-all duration-300">
                <a href="https://drive.google.com/uc?export=download&id=1Sg-ZC9p5_dmt4n1dNv8khuGdZAK5Ymxv" download="Mohamed_Hesham_CV.pdf">
                  <Download size={16} />
                  <span>Resume</span>
                </a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="sm" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                <a href="#contact">Hire Me</a>
              </Button>
            </motion.div>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
