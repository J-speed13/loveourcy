import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Youtube, Instagram, Share2, ExternalLink } from 'lucide-react';

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export const Help: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-slate-900 py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl sm:text-7xl font-black text-white tracking-tighter mb-8 uppercase">
          {t.help.title}
        </h2>
        <p className="text-2xl text-slate-400 font-bold mb-16 italic">
          {t.help.p1}
        </p>

        <ul className="space-y-12">
          <li className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex items-center gap-4 text-white">
              <span className="text-xl font-black uppercase">Share the film</span>
            </div>
            <a 
              href="https://www.youtube.com/watch?v=ISdbGxQYBCE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-[#d37628] text-white font-bold transition-all"
            >
              Watch & Share <ExternalLink className="w-4 h-4" />
            </a>
          </li>

          <li className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex items-center gap-4 text-white">
              <span className="text-xl font-black uppercase">Follow the journey</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.instagram.com/jamesincyprus/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-[#d37628] text-white transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="https://www.tiktok.com/@james_stanton" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-[#d37628] text-white transition-all"><TiktokIcon className="w-5 h-5" /></a>
              <a href="https://www.youtube.com/@JamesStanton" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-[#d37628] text-white transition-all"><Youtube className="w-5 h-5" /></a>
            </div>
          </li>

          <li className="flex items-start gap-4 text-white">
             <span className="text-xl font-bold text-slate-300">Tag businesses you want to see adopt the icon</span>
          </li>

          <li className="flex items-start gap-4 text-white">
             <span className="text-xl font-bold text-slate-300">Print a poster</span>
          </li>

          <li className="flex items-start gap-4 text-white">
             <span className="text-xl font-bold text-slate-300">Put it in your gym, café, office</span>
          </li>
        </ul>

        <div className="mt-24 pt-12 border-t border-white/10">
          <p className="text-[#d37628] text-3xl sm:text-4xl font-black italic uppercase tracking-tighter">
            {t.help.outro}
          </p>
        </div>
      </div>
    </section>
  );
};