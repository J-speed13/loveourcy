import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Posters: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-[#fdfbf7] py-32 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[450px] aspect-[3/4] bg-white rounded-none overflow-hidden shadow-2xl transform lg:-rotate-2 border border-slate-100 flex items-center justify-center p-12">
               <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center">
                  <span className="text-slate-200 font-black uppercase tracking-[0.4em] text-xs">Poster Series</span>
                  <span className="text-slate-300 font-black uppercase tracking-[0.4em] text-[10px] mt-4">Coming Soon</span>
               </div>
               <div className="absolute top-8 left-8 border-t border-l border-slate-100 w-8 h-8"></div>
               <div className="absolute bottom-8 right-8 border-b border-r border-slate-100 w-8 h-8"></div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-none mb-12">
              {t.posters.title}
            </h2>
            
            <p className="text-xl text-slate-900 font-bold mb-8 uppercase tracking-tight">{t.posters.intro}</p>

            <div className="space-y-1 text-xl text-slate-600 font-medium leading-relaxed">
              {t.posters.verse.map((line, idx) => (
                <p key={idx} className={line === '' ? 'h-4' : ''}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};