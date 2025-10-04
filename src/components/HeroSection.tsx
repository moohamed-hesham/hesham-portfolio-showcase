import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import mohamedPortrait from '@/assets/mohamed-portrait.jpg';
const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ['Data Analyst', 'Dashboard Designer', 'AI Enthusiast'];

  useEffect(() => {
    const currentText = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setCurrentRole(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentRole(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <motion.section 
      id="hero" 
      className="pt-28 pb-20 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-primary">Mohamed Hesham</span>
            </motion.h1>
            <motion.div 
              className="text-xl md:text-2xl text-muted-foreground mb-2 min-h-[2em]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {currentRole}
              <span className="animate-pulse">|</span>
            </motion.div>
            <motion.p 
              className="text-lg text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              A highly motivated professional with a strong passion for E-commerce and Sales.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                  <a href="#contact">Hire Me</a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild variant="outline" size="lg" className="gap-2 hover:shadow-lg transition-all duration-300">
                  <a href="https://drive.google.com/uc?export=download&id=1Sg-ZC9p5_dmt4n1dNv8khuGdZAK5Ymxv" download="Mohamed_Hesham_CV.pdf">
                    <Download size={18} />
                    <span>Download CV</span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="aspect-square max-w-md mx-auto overflow-hidden rounded-full bg-gradient-to-br from-accent via-primary/20 to-primary/40 border-4 border-primary/20 shadow-2xl shadow-primary/25"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/lovable-uploads/d8423e38-b1ae-4394-a9fd-35a43eed57bd.png" 
                alt="Mohamed Hesham Portrait" 
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110" 
                style={{
                  filter: 'brightness(1.1) contrast(1.08) saturate(0.95)',
                  objectPosition: 'center 10%',
                  transform: 'scale(1.15)'
                }} 
              />
            </motion.div>
            <motion.div 
              className="absolute -bottom-5 -right-5 bg-card p-3 rounded-lg shadow-lg border border-border"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-lg font-semibold">Data Analyst</div>
              <div className="text-primary font-medium">1+ Years Experience</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
export default HeroSection;