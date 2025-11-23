import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  subtitle: string;
  title: string;
  align?: 'left' | 'center';
}

export const SectionTitle: React.FC<Props> = ({ subtitle, title, align = 'left' }) => {
  return (
    <div className={`mb-24 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`flex items-center gap-4 mb-5 ${align === 'center' ? 'justify-center' : ''}`}
      >
        <span className="text-gold-600/80 font-display tracking-[0.3em] text-[10px] font-bold uppercase">
          {subtitle}
        </span>
        <div className="h-px w-12 bg-gold-400/40" />
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-5xl font-serif text-slate-800 tracking-widest leading-relaxed"
      >
        {title}
      </motion.h2>
    </div>
  );
};