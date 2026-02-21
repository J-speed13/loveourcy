import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Idea: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-32 px-6 overflow-hidden relative border-t border-slate-100">
      <div className="max-w-4xl mx-auto relative z-10">
        
        <h2 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-none mb-12">
          {t.idea.title}
        </h2>

        <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-medium max-w-3xl">
          <p>{t.idea.line1}</p>
          <p>{t.idea.line2}</p>
          <p>{t.idea.line3}</p>
          <p>{t.idea.line4}</p>
          <p>{t.idea.line5}</p>
          <p>{t.idea.line6}</p>
          <p className="text-[#d37628] font-black">{t.idea.line7}</p>
        </div>
      </div>
    </section>
  );
};