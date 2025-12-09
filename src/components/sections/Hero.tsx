"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Layers } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 md:px-8">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 50, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-4xl mx-auto z-10 text-center space-y-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm mb-6 text-gray-300 backdrop-blur-sm">
            Available for remote work
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Building digital <br/>
            <span className="text-gradient">experiences that matter</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            I'm a Senior Frontend Developer specializing in building exceptional digital experiences. 
            Currently focused on accessible, human-centered products.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black font-semibold rounded-lg flex items-center gap-2"
            >
              View Projects <ArrowRight size={20} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/10 font-semibold rounded-lg flex items-center gap-2 hover:bg-white/20 transition-colors"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        {/* Tech Stack Icons Floating */}
        <div className="pt-20 flex justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           <Code2 size={40} />
           <Layers size={40} />
           {/* Add more icons as SVGs or Lucide icons if desired */}
        </div>
      </div>
    </section>
  );
}
