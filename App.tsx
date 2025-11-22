import React from 'react';
import { Background } from './components/Background';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Highlights } from './components/Highlights';
import { Skills } from './components/Skills';
import { Timeline } from './components/Timeline';
import { Certifications } from './components/Certifications';
import { Footer } from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-transparent min-h-screen text-slate-800 selection:bg-gold-400/20 selection:text-gold-900 relative font-sans">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 origin-left z-50"
        style={{ scaleX }}
      />

      <Background />
      
      <main className="relative z-10 flex flex-col gap-0">
        <Hero />
        <Stats />
        <Highlights />
        <Timeline />
        <Skills />
        <Certifications />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;