import React from 'react';
import { ViewState } from '../types';
import { Play, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Logo } from './Logo';
import { heroBackgroundImage } from './heroImage';
import { heroMobileBackgroundImage } from './heroMobileImage';

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
    <div className="relative min-h-screen flex items-start justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <picture>
          {heroMobileBackgroundImage && (
            <source 
              media="(max-width: 640px)" 
              srcSet={heroMobileBackgroundImage} 
            />
          )}
          <img 
            src={heroBackgroundImage} 
            alt="Cyprus Landscape" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </picture>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12 sm:pt-16">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-[6vw] sm:text-[3rem] lg:text-[4rem] arial-black tracking-tighter leading-[0.75] mb-8 text-[#fcf0da] uppercase drop-shadow-2xl flex flex-col">
            <span>{t.hero.titleStart}</span>
            <span>{t.hero.titleEnd}</span>
          </h1>
          
          <p className="text-lg sm:text-3xl text-[#2d3a1a] leading-tight font-black mb-12 max-w-2xl mx-auto uppercase tracking-tight">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://www.youtube.com/watch?v=ISdbGxQYBCE"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-10 py-5 bg-[#355700] text-white text-lg font-black rounded-none shadow-2xl hover:bg-[#2a4500] transition-all hover:-translate-y-1 w-full sm:w-auto min-w-[240px]"
            >
              <Play className="w-5 h-5 fill-current" /> {t.hero.ctaFilm}
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
              className="flex items-center justify-center px-10 py-5 bg-[#fcf0da] text-[#d87c28] text-lg font-black rounded-none hover:bg-[#f5e6cc] transition-all shadow-2xl w-full sm:w-auto min-w-[240px]"
            >
              {t.help.title}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
