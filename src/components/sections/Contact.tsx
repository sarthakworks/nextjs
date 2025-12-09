"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 px-4 md:px-8 relative">
       <div className="max-w-4xl mx-auto">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
         >
           <h2 className="text-3xl md:text-5xl font-bold mb-4">Let&apos;s work <span className="text-gradient">together</span></h2>
           <p className="text-gray-400">Have a project in mind? I&apos;d love to hear from you.</p>
         </motion.div>

         <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-8"
            >
               <div className="glass-card p-6 rounded-2xl">
                 <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                 <div className="space-y-4">
                   <div className="flex items-center gap-3 text-gray-300">
                     <Mail className="text-primary" size={20} />
                     hello@johndoe.dev
                   </div>
                   <div className="flex items-center gap-3 text-gray-300">
                     <MapPin className="text-primary" size={20} />
                     San Francisco, CA (Remote)
                   </div>
                 </div>
               </div>
               
               <div className="glass-card p-6 rounded-2xl bg-linear-to-br from-primary/10 to-secondary/10 border-primary/20">
                 <p className="text-lg font-medium italic mb-2">&quot;Quality is not an act, it is a habit.&quot;</p>
                 <p className="text-gray-400">- Aristotle</p>
               </div>
            </motion.div>

            <motion.form 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-4"
               onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell me about your project..." />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-linear-to-r from-primary to-secondary font-bold rounded-lg flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </motion.button>
            </motion.form>
         </div>
       </div>
    </section>
  );
}
