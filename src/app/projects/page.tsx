'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Taco Cloud - Online shop simulation',
    description: `Developed a backend-driven web app in Java with Spring Boot to simulate a taco ordering system. 
    Integrated form validation, relational database persistence, and static UI with Thymeleaf. 
    Enhanced functionality by logging user access data, tracking daily visits, and building a structured navigation flow 
    for improved user experience.`,
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Thymeleaf'],
    image: '/tacocloud4.png',
    link: 'https://tacocloud.alexmonk.au',
    linkText: 'View Taco Cloud on GitHub',
    link2: 'https://github.com/AlexanderTheGrape/TacoCloud',
    linkText2: 'Open Taco Cloud in a new tab',
  },
  {
    title: 'Home Network Hosting & Security',
    description: `Designed and configured a secure, self-hosted environment for a personal website and database on a Linux machine. 
    Implemented firewall rules and network segmentation via a DMZ, enabling remote SSH access and internet-facing web services 
    without compromising internal network security.`,
    technologies: ['Linux', 'Networking', 'SSH', 'Firewall', 'DMZ (Demilitarized Zone)', 'Port Forwarding', 'Static IP'],
    image: '/dmz-network-diagram-2.png',
  },
  {
    title: 'Portfolio Website',
    description: `Built a sleek, responsive personal website using TypeScript, React with Next.js, Tailwind CSS, shadCN UI, 
    and Framer Motion, with the help of AI. Showcases projects, with a focus on clean UX, interactive design, 
    and performance optimization.`,
    technologies: ['AI', 'TypeScript', 'React', 'Next.js', 'Tailwind', 'Framer Motion'],
    image: '/portfolio-website.png',
  },
  {
    title: 'Publications',
    linkText: `How to achieve a Java Certification from Oracle`,
    link: 'https://medium.com/@amonk446/how-to-achieve-a-java-certification-from-oracle-1f64e2f553b1',
    technologies: [],
    image: '/man-up-java-mountain.jpg',
  },
];

const ProjectsPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-8 text-center text-white"
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
                {project.link ? (
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden cursor-pointer bg-gray-900 border-gray-800">
                      <div className={`relative h-48 w-full ${project.title === 'Home Network Hosting & Security' ? 'bg-white' : ''}`}>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-white">{project.title}</CardTitle>
                        <CardDescription className="text-gray-300">
                          {project.description}
                          {project.linkText && (
                            <div className="flex flex-col gap-1 mt-2">
                              <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline transition-all duration-300"
                              >
                                {project.linkText2}
                              </a>
                              <a 
                                href={project.link2} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline transition-all duration-300"
                              >
                                {project.linkText}
                              </a>
                            </div>
                          )}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-primary/20 text-white rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ) : (
                  <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden bg-gray-900 border-gray-800">
                    <div className={`relative h-48 w-full ${project.title === 'Home Network Hosting & Security' ? 'bg-white' : ''}`}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-white">{project.title}</CardTitle>
                      <CardDescription className="text-gray-300">
                        {project.description}
                        {project.linkText && (
                          <div className="flex flex-col gap-1 mt-2">
                            <a 
                              href={project.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:underline transition-all duration-300"
                            >
                              {project.linkText2}
                            </a>
                            <a 
                              href={project.link2} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:underline transition-all duration-300"
                            >
                              {project.linkText}
                            </a>
                          </div>
                        )}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-primary/20 text-white rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjectsPage; 