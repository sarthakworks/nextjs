"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";


const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive analytics dashboard for online retailers with real-time data visualization and inventory management.",
    tags: ["React", "Tailwind", "Recharts", "Node.js"],
    links: { demo: "#", code: "#" },
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "AI Chat Interface",
    description: "Modern chat application powered by OpenAI's GPT-4, featuring streaming responses and thread history.",
    tags: ["Next.js", "OpenAI", "Framer Motion", "PostgreSQL"],
    links: { demo: "#", code: "#" },
    color: "from-cyan-500 to-blue-500",
  },
];

export default function Projects() {
  return (
    <section className="py-24 px-4 md:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-gray-400">A selection of my recent work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              {/* Placeholder for project image - using a gradient div for now */}
              <div className={`h-48 w-full bg-linear-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 h-20">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href={project.links.demo} className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={project.links.code} className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                    <Github size={16} /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
