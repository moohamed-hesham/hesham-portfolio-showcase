import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Mail, Phone, Linkedin, User, Award, Book } from 'lucide-react';
const AboutSection = () => {
  return <section id="about" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Get to know more about my background, skills, and what drives me in the world of data analysis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <User size={24} className="text-primary" />
              <span>My Background</span>
            </h3>
            <p className="text-gray-700 leading-relaxed">
              I'm a highly motivated Data Analyst with a strong passion for sales and marketing. 
              My analytical approach and attention to detail allow me to transform complex data into 
              meaningful insights that drive business decisions.
            </p>
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
                <Card>
                  <CardContent className="p-4">
                    <div className="font-medium">Bachelor of Engineering in Computer Science</div>
                    <div className="text-gray-600 mt-1">Faculty of Electronic Engineering</div>
                    <div className="text-gray-600">Menoufia University</div>
                    <div className="text-primary font-medium mt-2">GPA: 3.75/4.0</div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
          </div>
          
          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Personal Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar size={20} className="text-primary mt-1" />
                    <div>
                      <div className="font-medium">Date of Birth</div>
                      <div className="text-gray-500">October 24, 2003</div>
                    </div>
                  </div>
                  
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
                    <Phone size={20} className="text-primary mt-1" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <a href="tel:+201234567890" className="text-primary hover:underline">+20 1099383972</a>
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
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Details</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  <div>
                    <div className="font-medium">Languages</div>
                    <div className="text-gray-500">Arabic (Native), English (Conversational)</div>
                  </div>
                  
                  <div>
                    <div className="font-medium">Nationality</div>
                    <div className="text-gray-500">Egyptian</div>
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
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;