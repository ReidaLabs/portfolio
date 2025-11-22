import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Bot, Database, Network } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export const Highlights: React.FC = () => {
  return (
    <section className="py-32 px-4 md:px-10 relative">
      <div className="container mx-auto max-w-7xl">
        <SectionTitle subtitle="INNOVATION" title="技術的強みと革新性" align="center" />
        
        <div className="relative mt-20">
          {/* Glassmorphic Container */}
          <div className="glass-panel rounded-3xl p-1 overflow-hidden relative shadow-2xl shadow-black/50">
             {/* Background Image - Increased Opacity */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay grayscale contrast-125" />
             
             <div className="bg-navy-950/80 grid lg:grid-cols-5 gap-0 relative z-10">
                
                {/* Left Text Area */}
                <div className="lg:col-span-3 p-10 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-800/50">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-gold-400 mb-8"
                  >
                    <Sparkles className="w-5 h-5" />
                    <span className="font-bold tracking-widest uppercase text-xs font-display">AI & Data Architecture</span>
                  </motion.div>
                  
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-serif text-slate-100 mb-8 leading-snug"
                  >
                    未来を構築する<br/>
                    <span className="text-gradient-gold">インテリジェント・データプラットフォーム</span>
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-700 leading-loose mb-10 font-light text-justify tracking-wide"
                  >
                     PMとして大規模プロジェクトを推進する傍ら、アーキテクトとしてDifyを活用したセキュアなRAG環境を構築。
                     SnowflakeとStreamlitを組み合わせ、生データから意思決定に必要なインサイトを即座に可視化する
                     次世代のアナリティクス基盤を実現しました。
                  </motion.p>

                  <div className="flex flex-wrap gap-4">
                    {['AWS', 'Claude Code', 'Generative AI', 'Snowflake', 'Dify'].map((tag, i) => (
                      <motion.span 
                        key={tag}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                        className="px-5 py-2 rounded-full bg-slate-900/80 border border-slate-700 text-gold-100/80 text-xs font-medium hover:border-gold-500/50 hover:text-gold-300 transition-colors tracking-wider uppercase"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Right Features Area */}
                <div className="lg:col-span-2 p-10 md:p-16 flex flex-col justify-center gap-8 bg-navy-900/40 backdrop-blur-md">
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="group"
                    >
                      <div className="flex items-start gap-4 mb-3">
                        <div className="p-2 rounded bg-navy-900 border border-slate-800 text-gold-400 group-hover:border-gold-500/30 transition-colors">
                          <Bot size={20} />
                        </div>
                        <h4 className="text-lg font-serif text-slate-800 group-hover:text-gold-200 transition-colors">AI Chatbot Architecture</h4>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed pl-11 border-l border-slate-800 ml-3 group-hover:border-gold-500/30 transition-colors">
                        テキスト・画像・音声を統合的に処理するマルチモーダルAI。社内規定や技術文書を学習させ、業務効率を最大化。
                      </p>
                    </motion.div>

                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="group"
                    >
                      <div className="flex items-start gap-4 mb-3">
                        <div className="p-2 rounded bg-navy-900 border border-slate-800 text-gold-400 group-hover:border-gold-500/30 transition-colors">
                          <Network size={20} />
                        </div>
                        <h4 className="text-lg font-serif text-slate-800 group-hover:text-gold-200 transition-colors">Modern Data Stack</h4>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed pl-11 border-l border-slate-800 ml-3 group-hover:border-gold-500/30 transition-colors">
                        RedshiftからSnowflakeへの移行完遂。コンピュート分離によるパフォーマンス最適化とコスト効率の向上。
                      </p>
                    </motion.div>
                </div>

             </div>
          </div>
        </div>
      </div>
    </section>
  );
};