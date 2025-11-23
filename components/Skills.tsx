import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants';
import { SectionTitle } from './SectionTitle';

export const Skills: React.FC = () => {
  return (
    <section className="py-32 px-4 md:px-10 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle subtitle="CAPABILITIES" title="スキルセット" />
        
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative p-10 rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:border-gold-400/50 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-xl"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                   <h3 className="text-xl font-serif text-slate-800 tracking-wide group-hover:text-gold-700 transition-colors">{category.title}</h3>
                   <category.icon className="text-slate-400 group-hover:text-gold-500 transition-colors" size={24} />
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill.name}
                      className={`px-4 py-2 rounded text-xs font-medium transition-all duration-300 tracking-wide ${
                        skill.highlight 
                          ? 'bg-gold-50 text-gold-700 border border-gold-200' 
                          : 'bg-slate-100 text-slate-500 border border-slate-200 group-hover:border-slate-300 group-hover:text-slate-700'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};