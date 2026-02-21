import React from 'react';
import { ViewState } from '../types';
import { Play, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Logo } from './Logo';

interface HeroProps {
  setView: (view: ViewState) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const { t } = useLanguage();

  const scrollToDownload = () => {
    const element = document.getElementById('download');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative pt-10 pb-24 overflow-hidden bg-[#94c3e0]">
      {/* Organic Background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none opacity-30">
        <div className="absolute top-10 left-[10%] w-72 h-72 bg-[#d37628]/20 rounded-none blur-[100px]"></div>
        <div className="absolute bottom-10 right-[10%] w-96 h-96 bg-[#4d612b]/20 rounded-none blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Logo above title - Large and transparent background */}
          <div className="flex justify-center mb-4">
            <div className="w-44 h-44 sm:w-64 sm:h-64 flex items-center justify-center transform transition-transform duration-700 hover:scale-110">
              <Logo className="w-full h-full drop-shadow-xl" />
            </div>
          </div>

          <h1 className="text-5xl sm:text-7xl arial-black tracking-tighter leading-[0.9] mb-8 text-[#fcf0da]">
            <span className="block">{t.hero.titleStart}</span>
            <span className="block">{t.hero.titleEnd}</span>
          </h1>
          
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-xl sm:text-2xl text-white leading-relaxed font-bold">
              {t.hero.subtitle}
            </p>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-medium">
              {(t.hero as any).description}
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://www.youtube.com/watch?v=ISdbGxQYBCE"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center px-10 py-5 bg-[#2d3a1a] text-white text-lg font-black rounded-none overflow-hidden shadow-2xl hover:shadow-[#2d3a1a]/40 transition-all hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Play className="w-5 h-5 fill-current" /> {t.hero.ctaFilm}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </a>

            <button
              onClick={() => {
                const element = document.getElementById('help');
                if (element) {
                  const offset = 80;
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementRect = element.getBoundingClientRect().top;
                  const elementPosition = elementRect - bodyRect;
                  const offsetPosition = elementPosition - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="flex items-center justify-center gap-3 px-10 py-5 bg-white border-2 border-slate-200 text-slate-700 text-lg font-black rounded-none hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
            >
              {t.help.title}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};