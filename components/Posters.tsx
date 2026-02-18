import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Camera, Share2, MapPin } from 'lucide-react';

export const Posters: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Portrait Graphic Block - Empty Minimalist Frame */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[450px] aspect-[3/4] group bg-slate-50 rounded-none overflow-hidden shadow-2xl transform lg:-rotate-2 border border-slate-100 flex items-center justify-center p-12">
               <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center">
                  <span className="text-slate-200 font-black uppercase tracking-[0.4em] text-xs">Poster Series</span>
                  <span className="text-slate-300 font-black uppercase tracking-[0.4em] text-[10px] mt-4">Coming Soon</span>
               </div>
               
               {/* Aesthetic overlays */}
               <div className="absolute top-8 left-8 border-t border-l border-slate-200 w-8 h-8"></div>
               <div className="absolute top-8 right-8 border-t border-r border-slate-200 w-8 h-8"></div>
               <div className="absolute bottom-8 left-8 border-b border-l border-slate-200 w-8 h-8"></div>
               <div className="absolute bottom-8 right-8 border-b border-r border-slate-200 w-8 h-8"></div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-[#d37628] font-black uppercase tracking-[0.3em] text-xs mb-8 block">
              Awareness
            </span>
            <h2 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tighter mb-8">
              {t.posters.title}
            </h2>
            
            <p className="text-xl text-slate-900 font-bold mb-8 italic">{t.posters.intro}</p>

            <div className="space-y-1 text-lg sm:text-xl text-slate-500 font-medium leading-relaxed mb-12">
              {t.posters.verse.map((line, idx) => (
                <p key={idx} className={line === '' ? 'h-4' : ''}>
                  {line}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6">
              <div className="flex items-center gap-3 px-6 py-4 bg-slate-50 rounded-none border border-slate-100 text-slate-600 font-bold">
                <Camera className="w-5 h-5 text-[#d37628]" /> Snap it
              </div>
              <div className="flex items-center gap-3 px-6 py-4 bg-slate-50 rounded-none border border-slate-100 text-slate-600 font-bold">
                <Share2 className="w-5 h-5 text-[#d37628]" /> Tag it
              </div>
              <div className="flex items-center gap-3 px-6 py-4 bg-slate-50 rounded-none border border-slate-100 text-slate-600 font-bold">
                <MapPin className="w-5 h-5 text-[#d37628]" /> Cyprus
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};