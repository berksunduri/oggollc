"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

type Project = {
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
};

const projects: Project[] = [
  {
    title: 'Alpine Cable Car System',
    category: 'Cable Transport',
    location: 'Swiss Alps',
    image: 'https://images.pexels.com/photos/15112128/pexels-photo-15112128/free-photo-of-cable-cars-over-snow-covered-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Designed and manufactured critical steel components for a high-altitude cable car system in the Swiss Alps, ensuring safety and durability in extreme weather conditions.',
  },
  {
    title: 'Hamburg Port Expansion',
    category: 'Ports & Harbors',
    location: 'Germany',
    image: 'https://images.pexels.com/photos/32385316/pexels-photo-32385316/free-photo-of-container-ship-at-hamburg-harbor-during-sunset.jpeg',
    description: 'Supplied specialized galvanized steel structures for the expansion of container handling facilities at Hamburg Port, enhancing operational efficiency and longevity.',
  },
  {
    title: 'Adriatic Shipyard Modernization',
    category: 'Marine & Shipyards',
    location: 'Croatia',
    image: 'https://images.pexels.com/photos/32399135/pexels-photo-32399135/free-photo-of-massive-cargo-ship-at-rotterdam-port-in-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Comprehensive steel fabrication for the modernization of a major shipyard on the Adriatic coast, including specialized marine-grade components.',
  },
  {
    title: 'Baltic Cargo Terminal',
    category: 'Cargo Transport',
    location: 'Estonia',
    image: 'https://images.pexels.com/photos/21657940/pexels-photo-21657940/free-photo-of-transshipment-terminal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Engineered and manufactured custom steel loading systems for a major Baltic cargo terminal, optimizing throughput and handling capabilities.',
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  interface OpenProjectDialog {
    (project: Project): void;
  }

  const openProjectDialog: OpenProjectDialog = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing our expertise across various industries and applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => openProjectDialog(project)}
            >
              <div className="relative h-64 overflow-hidden rounded-lg mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-chart-1 text-white px-3 py-1 text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-chart-1 transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground">{project.location}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-chart-1 text-chart-1 hover:bg-chart-1 hover:text-white"
          >
            View All Projects
          </Button>
        </div>
      </div>

      {selectedProject && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
              <DialogDescription className="text-base text-muted-foreground">
                {selectedProject.category} | {selectedProject.location}
              </DialogDescription>
            </DialogHeader>
            <div className="relative h-72 overflow-hidden rounded-md my-4">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                sizes="(max-width: 768px) 100vw, 90vw"
                className="object-cover"
              />
            </div>
            <p className="text-foreground">{selectedProject.description}</p>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}