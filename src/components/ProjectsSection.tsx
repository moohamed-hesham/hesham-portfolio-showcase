import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import hrDashboard from '@/assets/hr-dashboard.png';

interface Project {
  id: number;
  title: string;
  description: string;
  category: 'design' | 'graphics' | 'website' | 'dashboard';
  image: string;
  link: string;
  date: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Azure Cloud Migration, E-commerce Analytics - Power BI",
    description: "Migrated and secured an on-premises SQL Server database to Azure SQL Database. Connected Power BI to Azure SQL using DirectQuery and designed interactive dashboards covering sales performance, customer segmentation, product analytics and returned orders. Leveraged Azure Machine Learning (AutoML) for sales forecasting and customer churn prediction.",
    category: "dashboard",
    image: "/lovable-uploads/a1ec013e-16cf-49b0-a095-a9667c3871df.png",
    link: "https://github.com/moohamed-hesham/Azure-Cloud-Migration-E-commerce-Analytics",
    date: "May 2025"
  },
  {
    id: 2,
    title: "Telecom Customer Churn Analysis - Power BI",
    description: "Developed an interactive Power BI dashboard to analyze customer churn rates, segmentation, and key influencing factors. Accessed data via OneDrive for seamless collaboration and provided strategic recommendations to mitigate churn.",
    category: "dashboard",
    image: "/lovable-uploads/9b2e63eb-e331-4c22-bf48-89becaf3b360.png",
    link: "https://github.com/moohamed-hesham/Telecom-Customer-Churn-Analysis",
    date: "Apr 2025"
  },
  {
    id: 3,
    title: "Retail Sales Analysis Dashboard",
    description: "Built an interactive dashboard using Tableau to analyze historical sales and profit trends for a fictional multi-category retail store. Visualized key metrics, including regional performance, product category profitability, and time-based sales patterns to support business decision-making.",
    category: "dashboard",
    image: "/lovable-uploads/744225e5-06eb-4bbc-a8e8-eec621b64bc8.png",
    link: "https://public.tableau.com/app/profile/mohamed.hesham8394/viz/project_17231195924280/OverviewDashboard?publish=yes",
    date: "Aug 2024"
  },
  {
    id: 4,
    title: "Amazon Sales Dashboard - Excel",
    description: "Interactive Excel dashboard analyzing Amazon's sales performance, trends, top-performing products, and regional distribution to optimize inventory and marketing strategies.",
    category: "dashboard",
    image: "/lovable-uploads/e98db284-65ef-4249-b116-8d8b81839770.png",
    link: "https://github.com/moohamed-hesham/Amazone_Sales_Analysis",
    date: "Jun 2024"
  },
  {
    id: 5,
    title: "HR Analytics Dashboard - Power BI",
    description: "HR Analytics project using Power BI focusing on salary and workforce insights. This dashboard empowers HR teams and leadership to make data-driven decisions about compensation, workforce planning, and resource allocation. The visualization transforms complex HR data into clear, actionable intelligence.",
    category: "dashboard",
    image: hrDashboard,
    link: "https://github.com/moohamed-hesham/HR-Analytics-Dashoard",
    date: "Oct 2025"
  },
];

const ProjectCard = ({ project, index, isInView }: { project: Project; index: number; isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
    whileHover={{ y: -8 }}
  >
    <Card className="project-card overflow-hidden group h-full shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden h-48">
        <motion.img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="ghost" className="text-white border border-white hover:bg-white/20 transition-all duration-300" asChild>
              <a href={project.link} className="flex items-center gap-2">
                <Link size={16} />
                <span>View Project</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <CardContent className="p-5">
        <div className="flex justify-between items-center mb-2">
          <div className="uppercase text-xs font-semibold text-primary">
            {project.category}
          </div>
          <span className="text-muted-foreground text-xs capitalize">{project.date}</span>
        </div>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm">{project.description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <motion.section 
      ref={ref}
      id="projects" 
      className="py-20 bg-gray-50"
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
          <h2 className="section-title">My Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Explore my portfolio of data analysis and visualization projects across different domains.
          </p>
        </motion.div>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setActiveCategory('all')}>
                All Projects
              </TabsTrigger>
              <TabsTrigger value="dashboard" onClick={() => setActiveCategory('dashboard')}>
                Dashboards
              </TabsTrigger>
              <TabsTrigger value="graphics" onClick={() => setActiveCategory('graphics')}>
                Notebooks
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="dashboard" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="graphics" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;