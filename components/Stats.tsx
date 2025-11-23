import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../constants';

export const Stats: React.FC = () => {
  return (
    <section className="py-16 border-y border-slate-200 bg-white/60 backdrop-blur-sm relative z-20">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-slate-200">
          {STATS.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center group px-4"
            >
              <div className="text-3xl md:text-5xl font-display font-bold text-slate-800 mb-3 group-hover:text-gold-600 transition-colors duration-500">
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600/80 mb-2">
                {stat.label}
              </div>
              <div className="text-[10px] text-slate-500 font-sans tracking-wide">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};