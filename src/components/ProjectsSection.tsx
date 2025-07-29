
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: 'design' | 'graphics' | 'website' | 'dashboard';
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Amazon Sales Dashboard",
    description: "Interactive Excel dashboard analyzing Amazon's sales performance, trends, top-performing products, and regional distribution to optimize inventory and marketing strategies.",
    category: "dashboard",
    image: "/lovable-uploads/e98db284-65ef-4249-b116-8d8b81839770.png",
    link: "https://github.com/moohamed-hesham/Amazone_Sales_Analysis"
  },
  {
    id: 2,
    title: "Telecom Customer Churn Analysis",
    description: "Developed an interactive Power BI dashboard to analyze customer churn rates, segmentation, and key influencing factors. Accessed data via OneDrive for seamless collaboration and provided strategic recommendations to mitigate churn.",
    category: "dashboard",
    image: "/lovable-uploads/9b2e63eb-e331-4c22-bf48-89becaf3b360.png",
    link: "https://github.com/moohamed-hesham/Telecom-Customer-Churn-Analysis"
  },
  {
    id: 3,
    title: "Azure Cloud Migration, E-commerce Analytics",
    description: "Migrated and secured an on-premises SQL Server database to Azure SQL Database. Connected Power BI to Azure SQL using DirectQuery and designed interactive dashboards covering sales performance, customer segmentation, product analytics and returned orders. Leveraged Azure Machine Learning (AutoML) for sales forecasting and customer churn prediction.",
    category: "dashboard",
    image: "/lovable-uploads/a1ec013e-16cf-49b0-a095-a9667c3871df.png",
    link: "https://github.com/moohamed-hesham/Azure-Cloud-Migration-E-commerce-Analytics"
  },
  {
    id: 4,
    title: "Retail Sales Analysis Dashboard (Tableau)",
    description: "Built an interactive dashboard using Tableau to analyze historical sales and profit trends for a fictional multi-category retail store. Visualized key metrics, including regional performance, product category profitability, and time-based sales patterns to support business decision-making.",
    category: "dashboard",
    image: "/lovable-uploads/744225e5-06eb-4bbc-a8e8-eec621b64bc8.png",
    link: "https://public.tableau.com/app/profile/mohamed.hesham8394/viz/project_17231195924280/OverviewDashboard?publish=yes"
  },
  {
    id: 5,
    title: "Profit Margin Analysis",
    description: "Detailed breakdown of product profitability using advanced statistical methods.",
    category: "graphics",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "#"
  },
  {
    id: 6,
    title: "E-commerce Data Portal",
    description: "Web-based dashboard for real-time analytics of e-commerce metrics and KPIs.",
    category: "website",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1420&q=80",
    link: "#"
  },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">My Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Explore my portfolio of data analysis and visualization projects across different domains.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setActiveCategory('all')}>
                All Projects
              </TabsTrigger>
              <TabsTrigger value="design" onClick={() => setActiveCategory('design')}>
                Dashboards
              </TabsTrigger>
              <TabsTrigger value="graphics" onClick={() => setActiveCategory('graphics')}>
                Notebooks
              </TabsTrigger>
              <TabsTrigger value="website" onClick={() => setActiveCategory('website')}>
                Reporting
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="project-card overflow-hidden group">
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="outline" className="text-white border-white hover:bg-white/20" asChild>
                        <a href={project.link} className="flex items-center gap-2">
                          <Link size={16} />
                          <span>View Project</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <div className="uppercase text-xs font-semibold text-primary mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="design" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="project-card overflow-hidden group">
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="outline" className="text-white border-white hover:bg-white/20" asChild>
                        <a href={project.link} className="flex items-center gap-2">
                          <Link size={16} />
                          <span>View Project</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <div className="uppercase text-xs font-semibold text-primary mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="graphics" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="project-card overflow-hidden group">
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="outline" className="text-white border-white hover:bg-white/20" asChild>
                        <a href={project.link} className="flex items-center gap-2">
                          <Link size={16} />
                          <span>View Project</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <div className="uppercase text-xs font-semibold text-primary mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="website" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="project-card overflow-hidden group">
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="outline" className="text-white border-white hover:bg-white/20" asChild>
                        <a href={project.link} className="flex items-center gap-2">
                          <Link size={16} />
                          <span>View Project</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <div className="uppercase text-xs font-semibold text-primary mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
