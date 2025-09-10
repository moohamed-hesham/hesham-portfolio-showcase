
import React from 'react';
import { Database, Code, ChartBar, Users, MessageSquare, PieChart } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  progress: number;
  index: number;
  isVisible: boolean;
}

const SkillCard = ({ icon, title, description, progress, index, isVisible }: SkillCardProps) => {
  const [value, setValue] = React.useState(0);
  const [titleVisible, setTitleVisible] = React.useState(false);

  React.useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setValue(progress), 300 + index * 200);
      const titleTimer = setTimeout(() => setTitleVisible(true), 500 + index * 200);
      return () => {
        clearTimeout(timer);
        clearTimeout(titleTimer);
      };
    }
  }, [progress, isVisible, index]);

  const animationDelay = `${index * 150}ms`;

  return (
    <Card 
      className={`skill-card group transition-all duration-700 ${
        isVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0 translate-x-[-100px]'
      }`}
      style={{ animationDelay }}
    >
      <CardContent className="p-0">
        <div className="p-6 space-y-4">
          <div className="bg-primary/10 p-3 rounded-lg inline-flex group-hover:bg-primary/20 transition-all duration-300 hover:scale-110">
            {icon}
          </div>
          <div className="overflow-hidden">
            <h3 
              className={`text-xl font-semibold transition-all duration-500 ${
                titleVisible ? 'animate-typewriter' : 'opacity-0'
              }`}
              style={{ animationDelay: `${300 + index * 200}ms` }}
            >
              {title}
            </h3>
          </div>
          <p 
            className={`text-gray-600 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ 
              transitionDelay: `${600 + index * 200}ms`
            }}
          >
            {description}
          </p>
          <div 
            className={`transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ 
              transitionDelay: `${800 + index * 200}ms`
            }}
          >
            <Progress value={value} className="h-2" />
            <span className="text-sm text-primary font-medium mt-1 inline-block">
              {value}%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const SkillsSection = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);

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

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-100px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 
            className={`section-title transition-all duration-700 ${
              isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
            }`}
          >
            My Skills
          </h2>
          <p 
            className={`text-gray-600 max-w-2xl mx-auto mt-4 transition-all duration-700 ${
              isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
            }`}
            style={{ animationDelay: '200ms' }}
          >
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
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
