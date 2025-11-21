import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [nameImage, setNameImage] = useState<string>('');

  // Generate Name as Image to prevent SEO indexing
  useEffect(() => {
    // Wait for fonts to load to ensure "Shippori Mincho" is used
    document.fonts.ready.then(() => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          canvas.width = 400;
          canvas.height = 120; // Slightly taller for vertical balance
          
          // Clear
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          ctx.fillStyle = '#e2e8f0'; // slate-200
          
          // Using Shippori Mincho with a bold weight to approximate a brush/Kaisho feel
          ctx.font = '700 56px "Shippori Mincho", "Yu Mincho", serif'; 
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          
          // Add a slight shadow for depth
          ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
          ctx.shadowBlur = 4;
          ctx.shadowOffsetX = 2;
          ctx.shadowOffsetY = 2;

          ctx.fillText('禮田 純一', canvas.width / 2, canvas.height / 2);
          setNameImage(canvas.toDataURL());
        }
      }
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-10 pt-20 overflow-hidden">
      {/* Hidden canvas for generating name image */}
      <canvas ref={canvasRef} className="hidden" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10"
          >
            <span className="px-5 py-2 border border-gold-500/30 rounded-full bg-gold-900/20 text-gold-300 text-xs tracking-[0.2em] uppercase font-medium backdrop-blur-sm shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              Portfolio 2025
            </span>
          </motion.div>

          {/* Name Image Display */}
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, delay: 0.3 }}
             className="mb-8"
          >
            {nameImage && <img src={nameImage} alt="Profile Name" className="h-20 md:h-24 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />}
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center justify-center gap-4"
          >
            <span className="text-xl md:text-2xl font-serif font-medium text-slate-400 tracking-widest">
              Data Architect <span className="text-gold-500 mx-2">×</span> Finance Specialist
            </span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mt-8 mb-8"
          />

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-base md:text-lg font-serif text-slate-300 max-w-4xl mb-12 leading-loose tracking-wide"
          >
            <p className="mb-6 text-xl md:text-2xl font-semibold text-white">
              「会計的整合性」と「データ戦略」の融合。
            </p>
            <p className="text-slate-300 mb-4">
              80億レコード規模のデータ基盤構築力と、数十億円を管理した経理・財務の実務知見。<br className="hidden md:block" />
              この二つを掛け合わせることで、単なる可視化にとどまらない<br className="hidden md:block" />
              <span className="text-gold-200 border-b border-gold-500/30 pb-1">経営層の意思決定に直結するインテリジェントなデータ活用</span>を実現します。
            </p>
            <p className="text-slate-500 text-sm mt-6 flex items-center justify-center gap-4">
              <span className="flex items-center gap-2"><span className="w-1 h-1 bg-gold-500 rounded-full"></span>30名規模PM経験</span>
              <span className="flex items-center gap-2"><span className="w-1 h-1 bg-gold-500 rounded-full"></span>アジャイル開発</span>
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Vertical Text - Japanese Only */}
      <div className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 text-slate-600 text-xs tracking-[0.6em] [writing-mode:vertical-rl] font-serif opacity-60 border-l border-slate-800 pl-6 h-72">
        経営戦略直結型データアーキテクチャ
      </div>
      <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 text-slate-600 text-xs tracking-[0.6em] [writing-mode:vertical-rl] font-serif opacity-60 border-r border-slate-800 pr-6 h-72">
        財務会計視点による価値創出
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-gold-500/50"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold-500/0 via-gold-500/70 to-gold-500/0"></div>
      </motion.div>
    </section>
  );
};