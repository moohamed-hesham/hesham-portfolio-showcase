
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: 'design' | 'graphics' | 'website';
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Sales Dashboard",
    description: "Interactive Power BI dashboard analyzing quarterly sales trends across regions.",
    category: "design",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "#"
  },
  {
    id: 2,
    title: "Customer Segmentation",
    description: "Python analysis identifying key customer segments based on purchasing behavior.",
    category: "design",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    link: "#"
  },
  {
    id: 3,
    title: "Marketing ROI Report",
    description: "Excel-based analysis of marketing campaign effectiveness and ROI by channel.",
    category: "graphics",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "#"
  },
  {
    id: 4,
    title: "Inventory Optimization",
    description: "SQL database project to analyze and optimize inventory levels across warehouses.",
    category: "website",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "#"
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
                Analysis
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
