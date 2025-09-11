
import React from 'react';
import { Database, Code, ChartBar, Users, MessageSquare, PieChart } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  progress: number;
}

const SkillCard = ({ icon, title, description, progress }: SkillCardProps) => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setValue(progress), 300);
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <Card className="skill-card group">
      <CardContent className="p-0">
        <div className="p-6 space-y-4">
          <div className="bg-primary/10 p-3 rounded-lg inline-flex group-hover:bg-primary/20 transition-colors">
            {icon}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </CardContent>
    </Card>
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

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">My Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            My expertise spans various data analysis techniques and tools that help me deliver valuable insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard 
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              progress={skill.progress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
