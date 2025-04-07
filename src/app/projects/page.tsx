'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';

const projects = [
  {
    title: 'Project One',
    description: 'A modern web application built with Next.js and TypeScript',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/project1.jpg',
  },
  {
    title: 'Project Two',
    description: 'An e-commerce platform with real-time features',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '/project2.jpg',
  },
  {
    title: 'Project Three',
    description: 'A mobile-first social media dashboard',
    technologies: ['React Native', 'Firebase', 'Redux'],
    image: '/project3.jpg',
  },
];

const ProjectsPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-8 text-center"
          >
            My Projects
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjectsPage; 