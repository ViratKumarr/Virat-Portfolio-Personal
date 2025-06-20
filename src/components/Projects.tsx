import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './section-heading';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  longDescription?: string;
  features?: string[];
}

const projects: Project[] = [
  {
    title: "3D iPhone 15 Pro Website",
    description: "Built a responsive 3D iPhone 15 Pro clone with scroll animations, dynamic lighting, and realistic models using Three.js and GSAP.",
    technologies: ["React.js", "Three.js", "GSAP", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com/ViratKumarr/Iphone_Website",
    liveUrl: "https://iphone-website-178s5gpga-virat-kumars-projects-240764d6.vercel.app/",
    imageUrl: "/projects/iphone_home.png"
  },
  {
    title: "Personal Portfolio Website",
    description: "A modern, interactive portfolio website built with Next.js and Tailwind CSS. Features include dark/light mode, 3D globe visualization, smooth animations, and responsive design. Perfect showcase for skills, projects, and professional journey.",
    technologies: ["Next.js", "Three.js", "Tailwind CSS", "Framer Motion", "EmailJS"],
    githubUrl: "https://github.com/ViratKumarr/Iphone_Website",
    liveUrl: "https://iphone-website-178s5gpga-virat-kumars-projects-240764d6.vercel.app/",
    imageUrl: "/projects/portfolio_home.png"
  },
  
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-4">
      <SectionHeading 
        title="My Projects" 
        subtitle="Here are some of my featured projects that showcase my skills and experience"
      />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <AnimatePresence>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="bg-[var(--color-background)] rounded-xl overflow-hidden group relative cursor-pointer
                        transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
                        border border-[var(--color-border)]"
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[var(--color-background)] p-3 rounded-full hover:scale-110 transition-transform duration-200"
                    whileHover={{ scale: 1.2 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub className="w-6 h-6 text-[var(--color-primary)]" />
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[var(--color-background)] p-3 rounded-full hover:scale-110 transition-transform duration-200"
                    whileHover={{ scale: 1.2 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt className="w-6 h-6 text-[var(--color-primary)]" />
                  </motion.a>
                </div>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">
                  {project.title}
                </h3>
                <p className="text-[var(--color-secondary)] mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-[var(--color-border)] text-[var(--color-primary)] px-3 py-1 rounded-full text-sm
                               transform transition-transform hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[var(--color-background)] rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-[var(--color-border)] transition-colors"
                aria-label="Close modal"
              >
                <FaTimes className="w-6 h-6 text-[var(--color-primary)]" />
              </button>

              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />

              <h2 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">
                {selectedProject.title}
              </h2>
              
              <p className="text-[var(--color-secondary)] mb-6">
                {selectedProject.longDescription || selectedProject.description}
              </p>

              {selectedProject.features && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-[var(--color-primary)]">
                    Key Features
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="text-[var(--color-secondary)]">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-3 mb-6">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-[var(--color-border)] text-[var(--color-primary)]
                             px-4 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[var(--color-primary)] text-[var(--color-background)] py-3 rounded-xl
                           flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300
                           border border-[var(--color-border)]"
                >
                  <FaGithub className="w-5 h-5" />
                  View Source
                </a>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[var(--color-primary)] text-[var(--color-background)] py-3 rounded-xl
                           flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300
                           border border-[var(--color-border)]"
                >
                  <FaExternalLinkAlt className="w-5 h-5" />
                  Live Demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 