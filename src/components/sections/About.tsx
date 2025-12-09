"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Zap, Code } from "lucide-react";

const skills = [
  { name: "React / Next.js", icon: <Code size={24} />, level: 95 },
  { name: "TypeScript", icon: <Cpu size={24} />, level: 90 },
  { name: "Node.js", icon: <Zap size={24} />, level: 85 },
  { name: "Web Performance", icon: <Globe size={24} />, level: 88 },
];

export default function About() {
  return (
    <section className="py-24 px-4 md:px-8 relative bg-black/50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-size-[32px_32px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">More than just <br/><span className="text-gradient">code</span></h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I believe that great software is a blend of technical excellence and intuitive design. 
            With over 5 years of experience, I&apos;ve helped startups and enterprise clients build scalable, visually stunning applications.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            When I&apos;m not coding, you can find me exploring new design trends or contributing to open source.
          </p>
        </motion.div>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-4 rounded-xl flex items-center gap-4 hover:bg-white/5 transition-colors"
            >
              <div className="p-2 bg-primary/20 text-primary rounded-lg">
                {skill.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-linear-to-r from-primary to-secondary"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
