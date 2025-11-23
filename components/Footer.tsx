import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-slate-200 bg-slate-100 relative z-10">
      <div className="container mx-auto px-6 text-center">
        <div className="text-3xl font-display text-slate-400 mb-6 tracking-widest opacity-70">PORTFOLIO</div>
        <div className="w-12 h-px bg-slate-300 mx-auto mb-8"></div>
        <div className="flex justify-center gap-8 text-xs text-slate-500 font-sans tracking-[0.2em] uppercase mb-8">
          <a href="#" className="hover:text-gold-600 transition-colors duration-300">Github</a>
          <a href="#" className="hover:text-gold-600 transition-colors duration-300">LinkedIn</a>
          <a href="#" className="hover:text-gold-600 transition-colors duration-300">Contact</a>
        </div>
        <div className="text-[10px] text-slate-400 font-mono">
          © 2025 K.K. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};