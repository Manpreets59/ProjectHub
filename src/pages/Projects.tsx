import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Heart, MessageSquare } from 'lucide-react';

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 min-h-screen bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">Featured Projects</h1>
          <button className="px-6 py-2 bg-white text-black rounded-md hover:bg-gray-100 transition-colors">
            Add Project
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project }: { project: any }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    className="border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-all"
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-400 text-sm">{project.author}</p>
        </div>
        <div className="flex space-x-2">
          <a href={project.github} className="p-2 hover:bg-white/5 rounded-full transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={project.demo} className="p-2 hover:bg-white/5 rounded-full transition-colors">
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag: string, index: number) => (
          <span
            key={index}
            className="px-3 py-1 bg-white/5 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between text-gray-400">
        <div className="flex items-center space-x-2">
          <Heart className="w-4 h-4" />
          <span>{project.likes}</span>
        </div>
        <div className="flex items-center space-x-2">
          <MessageSquare className="w-4 h-4" />
          <span>{project.comments}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const projects = [
  {
    title: "AI-Powered Task Manager",
    author: "Sarah Chen",
    description: "A smart task management app that uses AI to prioritize and organize tasks effectively.",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80",
    github: "#",
    demo: "#",
    tags: ["React", "TypeScript", "AI"],
    likes: 128,
    comments: 32
  },
  {
    title: "EcoTrack",
    author: "James Wilson",
    description: "Mobile app for tracking and reducing personal carbon footprint through daily activities.",
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&q=80",
    github: "#",
    demo: "#",
    tags: ["React Native", "Node.js", "MongoDB"],
    likes: 95,
    comments: 24
  },
  {
    title: "Virtual Study Rooms",
    author: "Emma Rodriguez",
    description: "A platform for students to create and join virtual study rooms with built-in productivity tools.",
    image: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&q=80",
    github: "#",
    demo: "#",
    tags: ["Vue.js", "WebRTC", "Firebase"],
    likes: 156,
    comments: 45
  }
];

export default Projects;