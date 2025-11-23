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
          {/* Main container with high transparency to show earth clearly */}
          <div className="rounded-3xl p-1 overflow-hidden relative shadow-2xl border border-white/30 bg-white/5 backdrop-blur-[2px]">
             {/* Background Image - Earth - High opacity */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop')] bg-cover bg-center opacity-90" />
             
             {/* Very slight overlay */}
             <div className="absolute inset-0 bg-slate-900/10" />

             <div className="relative z-10 grid lg:grid-cols-5 gap-0">
                
                {/* Left Text Area - Semi-transparent background for text readability */}
                <div className="lg:col-span-3 p-10 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/20 bg-white/70 backdrop-blur-md shadow-lg">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-gold-700 mb-8"
                  >
                    <Sparkles className="w-5 h-5" />
                    <span className="font-bold tracking-widest uppercase text-xs font-display">AI & Data Architecture</span>
                  </motion.div>
                  
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-serif text-slate-900 mb-8 leading-snug"
                  >
                    未来を構築する<br/>
                    <span className="text-gradient-gold font-bold">インテリジェント・データプラットフォーム</span>
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-800 leading-loose mb-10 font-medium text-justify tracking-wide"
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
                        className="px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-900 text-xs font-bold hover:border-gold-400 hover:text-gold-700 transition-colors tracking-wider uppercase shadow-sm"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Right Features Area - highly transparent to reveal earth */}
                <div className="lg:col-span-2 p-10 md:p-16 flex flex-col justify-center gap-8 bg-slate-100/30 backdrop-blur-sm">
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="group p-6 rounded-xl bg-white/80 hover:bg-white/95 transition-all duration-300 shadow-lg border border-white/50"
                    >
                      <div className="flex items-start gap-4 mb-3">
                        <div className="p-2 rounded bg-white border border-slate-200 text-gold-600 group-hover:border-gold-500/50 transition-colors shadow-sm">
                          <Bot size={20} />
                        </div>
                        <h4 className="text-lg font-serif text-slate-900 group-hover:text-gold-700 transition-colors font-bold">AI Chatbot Architecture</h4>
                      </div>
                      <p className="text-sm text-slate-800 leading-relaxed pl-11 font-medium">
                        テキスト・画像・音声を統合的に処理するマルチモーダルAI。社内規定や技術文書を学習させ、業務効率を最大化。
                      </p>
                    </motion.div>

                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="group p-6 rounded-xl bg-white/80 hover:bg-white/95 transition-all duration-300 shadow-lg border border-white/50"
                    >
                      <div className="flex items-start gap-4 mb-3">
                        <div className="p-2 rounded bg-white border border-slate-200 text-gold-600 group-hover:border-gold-500/50 transition-colors shadow-sm">
                          <Network size={20} />
                        </div>
                        <h4 className="text-lg font-serif text-slate-900 group-hover:text-gold-700 transition-colors font-bold">Modern Data Stack</h4>
                      </div>
                      <p className="text-sm text-slate-800 leading-relaxed pl-11 font-medium">
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