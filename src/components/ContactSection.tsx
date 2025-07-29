import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, MessageSquare, Phone, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
const ContactSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!webhookUrl) {
      toast({
        title: "Webhook Required",
        description: "Please enter your Zapier webhook URL to send messages to mohishamwork@gmail.com",
        variant: "destructive",
      });
      return;
    }

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before sending your message.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          recipient: "mohishamwork@gmail.com",
          timestamp: new Date().toISOString(),
          triggered_from: window.location.origin,
        }),
      });

      toast({
        title: "Message Sent!",
        description: "Your message has been sent to mohishamwork@gmail.com. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
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
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="webhookUrl" className="text-sm font-medium text-primary">
                      Zapier Webhook URL (Required to send to mohishamwork@gmail.com)
                    </label>
                    <Input 
                      id="webhookUrl" 
                      type="url"
                      placeholder="https://hooks.zapier.com/hooks/catch/..." 
                      value={webhookUrl}
                      onChange={(e) => setWebhookUrl(e.target.value)}
                      className="border-primary/20"
                    />
                    <p className="text-xs text-gray-500">
                      Create a Zap with a webhook trigger that sends email to mohishamwork@gmail.com
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input 
                        id="name" 
                        placeholder="John Doe" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="Project Discussion" 
                      value={formData.subject}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="I'd like to discuss a potential project..." 
                      rows={5} 
                      value={formData.message}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send Message'}
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
                  <a href="https://www.linkedin.com/in/moohamed-hesham/" target="_blank" rel="noopener noreferrer" className="bg-[#0077b5] hover:bg-[#0077b5]/90 text-white p-3 rounded-full transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="https://github.com/moohamed-hesham" target="_blank" rel="noopener noreferrer" className="bg-[#333] hover:bg-[#333]/90 text-white p-3 rounded-full transition-colors">
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