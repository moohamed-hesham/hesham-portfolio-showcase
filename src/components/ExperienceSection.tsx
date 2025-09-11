import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Building } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const ExperienceSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const experiences = [
    {
      id: 1,
      title: "Freelance Data Analyst",
      company: "Self-Employed",
      period: "Aug 2025 to now",
      location: "Remote",
      description: "I've helped clients across various sectors turn messy data into meaningful insights. My freelance work includes creating interactive dashboards in Excel and Power BI, analyzing customer behavior, cleaning and structuring large datasets, and automating reporting tasks to save time and boost decision-making."
    },
    {
      id: 2,
      title: "Data Analytics Trainee",
      company: "ITI (Information Technology Institute)",
      period: "Jul 2024 - Aug 2024",
      location: "Egypt",
      description: "Completed intensive hands-on training in data analysis, covering real-world projects using Excel, SQL, Tableau, and Python. Gained experience in business problem-solving, storytelling with data, and working in teams under tight deadlines."
    }
  ];

  return (
    <motion.section 
      ref={ref}
      id="experience" 
      className="py-20 bg-muted/50"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey in data analytics and business intelligence
          </p>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{experience.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Building className="h-4 w-4" />
                      <span className="font-medium">{experience.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;