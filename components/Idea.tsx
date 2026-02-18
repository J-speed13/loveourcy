import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Idea: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-slate-900 py-32 px-6 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d37628]/10 rounded-none blur-[120px] -mr-48 -mt-48"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <span className="text-[#d37628] font-black uppercase tracking-[0.3em] text-xs mb-10 block">
          {t.idea.title}
        </span>
        
        <div className="text-lg sm:text-xl font-bold text-slate-300 leading-relaxed max-w-3xl whitespace-pre-line">
          <p className="mb-2">{t.idea.line1}</p>
          <p className="mb-2">{t.idea.line2}</p>
          <p className="mb-6">{t.idea.line3}</p>
          
          <p className="mb-2 text-white text-2xl font-black">{t.idea.line4}</p>
          <p className="mb-8 text-white text-2xl font-black italic">{t.idea.line5}</p>
          
          <p className="opacity-70 font-medium">
            {t.idea.line6}
          </p>
          <p className="text-white text-4xl font-black mt-4 uppercase tracking-tighter">
            {t.idea.line7}
          </p>
        </div>
      </div>
    </section>
  );
};