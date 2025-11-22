import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../constants';
import { SectionTitle } from './SectionTitle';

export const Certifications: React.FC = () => {
  return (
    <section className="py-32 px-4 md:px-10 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle subtitle="QUALIFICATIONS" title="資格・ライセンス" align="center" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-navy-950/40 backdrop-blur-md border border-slate-800 p-8 rounded-xl hover:border-gold-500/40 transition-all duration-500 group flex flex-col items-center text-center relative overflow-hidden shadow-lg"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-14 h-14 bg-navy-900/80 rounded-full flex items-center justify-center mb-6 text-gold-500 group-hover:scale-110 transition-transform duration-500 border border-slate-800 group-hover:border-gold-500/30">
                <cert.icon size={24} />
              </div>
              <h3 className="text-slate-800 font-serif mb-4 text-sm min-h-[40px] flex items-center justify-center leading-tight">
                {cert.title}
              </h3>
              <span className="px-4 py-1.5 rounded-full bg-navy-900/80 text-slate-500 text-[10px] border border-slate-800 tracking-widest uppercase font-semibold group-hover:text-gold-400 group-hover:border-gold-500/20 transition-all">
                {cert.badge}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};