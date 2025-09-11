import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Mail, Phone, Linkedin, User, Award, Book, Github } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
const AboutSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section 
      ref={ref}
      id="about" 
      className="py-20 bg-accent/30"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <User size={24} className="text-primary" />
              <span>My Background</span>
            </h3>
            <p className="text-gray-700 leading-relaxed">I'm a highly motivated Data Analyst with a strong passion for E-commerce and Sales. My analytical approach and attention to detail allow me to transform complex data into meaningful insights that drive business decisions.</p>
            <p className="text-gray-700 leading-relaxed">
              With expertise in Excel, SQL, Python, and Power BI, I specialize in descriptive analysis 
              and creating impactful data visualizations that tell compelling stories.
            </p>
            
            <div className="pt-4">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Book size={24} className="text-primary" />
                <span>Education</span>
              </h3>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-4">
                      <div className="font-medium">Bachelor of Engineering in Computer Science</div>
                      <div className="text-gray-600 mt-1">Faculty of Electronic Engineering</div>
                      <div className="text-gray-600">Menoufia University</div>
                      <div className="text-primary font-medium mt-2">
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
            
          </motion.div>
          
          <motion.div 
            className="grid gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail size={20} className="text-primary mt-1" />
                    <div>
                      <div className="font-medium">Email</div>
                      <a href="mailto:mohishamwork@gmail.com" className="text-primary hover:underline">
                        mohishamwork@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Linkedin size={20} className="text-primary mt-1" />
                    <div>
                      <div className="font-medium">LinkedIn</div>
                      <a href="https://www.linkedin.com/in/moohamed-hesham/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        linkedin.com/in/moohamed-hesham
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Github size={20} className="text-primary mt-1" />
                    <div>
                      <div className="font-medium">GitHub</div>
                      <a href="https://github.com/moohamed-hesham" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        github.com/moohamed-hesham
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Details</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  <div>
                    <div className="font-medium">Languages</div>
                    <div className="text-gray-500">Arabic (Native), English (Conversational)</div>
                  </div>
                  
                  <div>
                    <div className="font-medium">
                  </div>
                    <div className="text-gray-500">
                  </div>
                  </div>
                  
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-gray-500">Cairo, Egypt</div>
                  </div>
                  
                  <div>
                    <div className="font-medium">Availability</div>
                    <div className="text-gray-500">Full-time, Freelance</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
export default AboutSection;