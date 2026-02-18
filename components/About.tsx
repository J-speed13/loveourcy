import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-[#f8f1e7] py-24 sm:py-32 rounded-none relative z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] border-t border-white/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <div className="inline-block px-4 py-1 bg-[#d37628]/10 text-[#d37628] text-[10px] font-black uppercase tracking-[0.2em] rounded-none mb-6">
              {t.about.label}
            </div>
            <h2 className="text-5xl sm:text-6xl font-black text-slate-900 leading-tight mb-8">
              {t.about.title}
            </h2>
            <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-medium">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
              <p className="text-slate-900 font-black text-2xl">{t.about.p4}</p>
              <p>{t.about.p5}</p>
              <p>{t.about.p6}</p>
            </div>
          </div>

          <div className="space-y-12 lg:sticky lg:top-32">
            <div className="relative group rounded-none overflow-hidden shadow-2xl bg-slate-900 aspect-video">
              <iframe 
                className="absolute inset-0 w-full h-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                src="https://www.youtube.com/embed/ISdbGxQYBCE?rel=0"
                title="James' Story"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};