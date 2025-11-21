import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES, FEATURED_EXPERIENCE } from '../constants';
import { SectionTitle } from './SectionTitle';

export const Timeline: React.FC = () => {
  return (
    <section className="py-32 px-4 md:px-10 relative overflow-hidden z-10">
      <div className="container mx-auto max-w-6xl">
        
        {/* FEATURED SECTION (2018-Present) */}
        <div className="mb-40">
          <SectionTitle subtitle="CURRENT FOCUS" title="主要プロジェクト" align="center" />
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 glass-panel rounded-2xl p-8 md:p-12 border border-gold-500/20 relative overflow-hidden group bg-navy-950/50"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
             
             <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-8 border-b border-slate-800">
                  <div>
                    <div className="text-gold-400 font-display text-sm tracking-[0.2em] mb-2 font-bold">
                      {FEATURED_EXPERIENCE.period}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-serif text-slate-100 mb-3">
                      {FEATURED_EXPERIENCE.title}
                    </h3>
                    <div className="text-lg text-slate-300 font-medium">
                      {FEATURED_EXPERIENCE.role} <span className="mx-2 text-slate-600">|</span> {FEATURED_EXPERIENCE.company}
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {FEATURED_EXPERIENCE.techStack.slice(0,4).map(t => (
                       <span key={t} className="px-3 py-1 border border-gold-500/20 text-gold-300 text-xs rounded-full bg-gold-500/5 font-medium">
                         {t}
                       </span>
                    ))}
                  </div>
                </div>

                <p className="text-slate-300 leading-loose mb-12 text-lg max-w-4xl tracking-wide">
                  {FEATURED_EXPERIENCE.description}
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                  {FEATURED_EXPERIENCE.details.map((detail, i) => (
                    <div key={i} className="bg-navy-900/60 p-6 rounded-xl border border-slate-800 hover:border-gold-500/40 transition-colors shadow-lg backdrop-blur-sm">
                      <h4 className="text-gold-200 font-serif text-lg mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
                        {detail.title}
                      </h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {detail.desc}
                      </p>
                    </div>
                  ))}
                </div>
             </div>
          </motion.div>
        </div>

        {/* HISTORY TIMELINE */}
        <SectionTitle subtitle="HISTORY" title="キャリアの軌跡" align="left" />

        <div className="relative mt-20 pl-8 md:pl-0 max-w-5xl mx-auto">
          <div className="absolute left-8 md:left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-slate-700 via-slate-800 to-transparent md:-translate-x-1/2" />

          {EXPERIENCES.map((exp, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 mb-24 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Center Dot */}
              <div className="absolute left-8 md:left-1/2 w-5 h-5 rounded-full bg-navy-950 border-[3px] border-slate-600 transform -translate-x-[9.5px] md:-translate-x-1/2 mt-1.5 z-20 group-hover:border-gold-500 transition-colors shadow-[0_0_10px_rgba(0,0,0,0.5)]" />

              {/* Content */}
              <div className="md:w-1/2 md:px-16 pl-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group"
                >
                  <div className="text-gold-500/80 text-sm font-bold tracking-widest mb-2 font-display">{exp.period}</div>
                  <h3 className="text-2xl font-serif font-bold text-slate-100 mb-2 group-hover:text-gold-300 transition-colors duration-300">{exp.title}</h3>
                  <div className="text-base text-slate-300 mb-5 font-medium border-b border-slate-800/50 pb-2 inline-block">
                    {exp.role}
                  </div>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 tracking-wide">
                    {exp.description}
                  </p>

                  <div className="space-y-2 bg-navy-900/40 backdrop-blur-sm p-4 rounded border border-slate-800/50">
                     {exp.achievements.map((ach, i) => (
                       <div key={i} className="text-xs text-slate-400 leading-relaxed flex items-start gap-2">
                         <span className="text-gold-500 mt-1">•</span>
                         {ach}
                       </div>
                     ))}
                  </div>
                </motion.div>
              </div>
              
              <div className="md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};