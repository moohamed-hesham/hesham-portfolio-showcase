import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, MessageSquare, Phone, Twitter } from 'lucide-react';
const ContactSection = () => {
  return <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Project Discussion" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="I'd like to discuss a potential project..." rows={5} required />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Phone Number</div>
                      <a href="tel:+201234567890" className="text-primary hover:underline">+20 1099383972
                    </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Email Address</div>
                      <a href="mailto:mohamed.hesham@example.com" className="text-primary hover:underline">mohishamwork@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Languages</div>
                      <div className="text-gray-600">Arabic (Native), English (Conversational)</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
                <div className="flex flex-wrap gap-4">
                  <a href="https://linkedin.com/in/mohamed-hesham" target="_blank" rel="noopener noreferrer" className="bg-[#0077b5] hover:bg-[#0077b5]/90 text-white p-3 rounded-full transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="https://github.com/mohamed-hesham" target="_blank" rel="noopener noreferrer" className="bg-[#333] hover:bg-[#333]/90 text-white p-3 rounded-full transition-colors">
                    <Github className="h-6 w-6" />
                  </a>
                  
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-3">Available For</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      Full-time Opportunities
                    </span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      Freelance Projects
                    </span>
                    
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;