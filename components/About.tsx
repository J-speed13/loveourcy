import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white py-32 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          <div>
            <h2 className="text-5xl sm:text-7xl arial-black text-[#d87c28] tracking-tighter uppercase leading-none mb-12">
              {t.about.label}
            </h2>
            <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-medium">
              <p className="text-slate-900 font-bold">{t.about.title}</p>
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
              <p>{t.about.p4}</p>
              <p>{t.about.p5}</p>
              <p>{t.about.p6}</p>
            </div>
          </div>

          <div className="lg:sticky lg:top-32">
            <div className="relative group rounded-none overflow-hidden shadow-2xl bg-slate-100 aspect-video">
              <iframe 
                className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
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