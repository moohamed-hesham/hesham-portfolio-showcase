
import React from 'react';
import { Database, Code, ChartBar, Users, MessageSquare, PieChart } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { motion, useInView } from 'framer-motion';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  progress: number;
}

const SkillCard = ({ icon, title, description, progress }: SkillCardProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setValue(progress), 300);
      return () => clearTimeout(timer);
    }
  }, [progress, isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card className="skill-card group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2">
        <CardContent className="p-0">
          <div className="p-6 space-y-4">
            <motion.div 
              className="bg-primary/10 p-3 rounded-lg inline-flex group-hover:bg-primary group-hover:scale-110 transition-all duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="text-primary group-hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {icon}
              </motion.div>
            </motion.div>
            <motion.h3 
              className="text-xl font-semibold group-hover:text-primary transition-colors duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {title}
            </motion.h3>
            <motion.p 
              className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {description}
            </motion.p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const SkillsSection = () => {
  const skills = [
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: "Descriptive Analysis",
      description: "Analyzing complex datasets to identify patterns and insights that drive decision-making.",
      progress: 95,
    },
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "Technical Skills",
      description: "Proficient in Excel, SQL, Python, Statistics and Probability, and Power BI.",
      progress: 90,
    },
    {
      icon: <ChartBar className="w-6 h-6 text-primary" />,
      title: "Data Visualization",
      description: "Creating clear, impactful dashboards and charts that communicate complex data stories.",
      progress: 85,
    },
    {
      icon: <PieChart className="w-6 h-6 text-primary" />,
      title: "Analytical Thinking",
      description: "Problem-solving and deriving actionable insights from large datasets.",
      progress: 92,
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Collaboration",
      description: "Teamwork and cross-functional experience to deliver data-driven solutions.",
      progress: 88,
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      title: "Communication",
      description: "Proficient in Arabic and English, with strong skills in presenting data to stakeholders.",
      progress: 93,
    },
  ];

  const titleRef = React.useRef(null);
  const isHeaderInView = useInView(titleRef, { once: true, margin: "-50px" });

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          ref={titleRef}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My Skills
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            My expertise spans various data analysis techniques and tools that help me deliver valuable insights.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
            >
              <SkillCard 
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                progress={skill.progress}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
