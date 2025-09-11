
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
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      <Card className="skill-card group h-full shadow-lg hover:shadow-xl transition-all duration-300">
        <CardContent className="p-0 h-full">
          <div className="p-6 space-y-4 h-full flex flex-col">
            <motion.div 
              className="bg-primary/10 p-2 rounded-lg inline-flex group-hover:bg-primary/20 transition-colors"
              whileHover={{ 
                rotate: 360,
                transition: { duration: 0.5 }
              }}
            >
              {icon}
            </motion.div>
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{title}</h3>
            <p className="text-gray-600 flex-grow">{description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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

  return (
    <motion.section 
      ref={ref}
      id="skills" 
      className="py-20 bg-white"
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
          <h2 className="section-title">My Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            My expertise spans various data analysis techniques and tools that help me deliver valuable insights.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
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
    </motion.section>
  );
};

export default SkillsSection;
