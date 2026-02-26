import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Youtube, Instagram, Share2, ExternalLink, Printer, MapPin, Building2, UserPlus } from 'lucide-react';

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export const Help: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-32 px-6 border-t border-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl sm:text-7xl arial-black text-[#d87c28] tracking-tighter uppercase leading-none mb-6">
              {t.help.title}
            </h2>
            <p className="text-xl text-slate-600 font-medium mb-12">
              {t.help.p1}
            </p>

            <div className="space-y-8 text-2xl font-black text-slate-900 uppercase tracking-tight">
              <div className="flex flex-col gap-2">
                <a 
                  href="https://www.youtube.com/watch?v=ISdbGxQYBCE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#d37628] transition-colors flex items-center gap-3"
                >
                  {t.help.items[0]} <ExternalLink className="w-6 h-6" />
                </a>
              </div>

              <div className="flex flex-col gap-4">
                <span>{t.help.items[1]}</span>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/jamesincyprus/" target="_blank" rel="noopener noreferrer" className="p-4 border border-slate-200 bg-white text-slate-400 hover:border-slate-900 hover:text-slate-900 transition-all"><Instagram className="w-6 h-6" /></a>
                  <a href="https://www.tiktok.com/@james_stanton" target="_blank" rel="noopener noreferrer" className="p-4 border border-slate-200 bg-white text-slate-400 hover:border-slate-900 hover:text-slate-900 transition-all"><TiktokIcon className="w-6 h-6" /></a>
                  <a href="https://www.youtube.com/@JamesStanton" target="_blank" rel="noopener noreferrer" className="p-4 border border-slate-200 bg-white text-slate-400 hover:border-slate-900 hover:text-slate-900 transition-all"><Youtube className="w-6 h-6" /></a>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-slate-400">{t.help.items[2]}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-20 border-t border-slate-100">
          <p className="text-[#d37628] text-3xl font-black uppercase tracking-tighter leading-none">
            {t.help.outro}
          </p>
        </div>
      </div>
    </section>
  );
};