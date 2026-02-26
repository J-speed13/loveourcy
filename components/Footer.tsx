import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Instagram, Youtube, ArrowUp } from 'lucide-react';
import { ViewState } from '../types';
import { Logo } from './Logo';

const TiktokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export const Footer: React.FC<{ setView: (view: ViewState) => void }> = ({ setView }) => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    if (window.scrollY === 0 && document.getElementById('home')) {
      // already at top
    } else {
      setView(ViewState.HOME);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    setView(ViewState.HOME);
    setTimeout(() => {
      const element = document.getElementById(id);
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
    }, 100);
  };

  return (
    <footer className="bg-[#fdfbf7] border-t border-slate-200/50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center">
          
          <div className="flex items-center gap-3 mb-16 cursor-pointer" onClick={scrollToTop}>
            <Logo className="w-10 h-10" />
            <span className="text-xl arial-black tracking-tight text-[#d87c28] uppercase">
              LoveOurIsland
            </span>
          </div>

          <div className="text-center max-w-3xl mb-16">
            <p className="text-[#d87c28] font-black text-lg mb-4">{t.footer.rights}</p>
            <p className="text-slate-500 font-medium text-sm leading-relaxed">
              {t.footer.usage}
            </p>
          </div>

          <div className="flex items-center gap-8 mb-20">
            <a href="https://www.instagram.com/jamesincyprus/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-none shadow-lg border border-slate-100 hover:text-pink-600 transition-all hover:-translate-y-1"><Instagram className="w-6 h-6" /></a>
            <a href="https://www.youtube.com/@JamesStanton" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-none shadow-lg border border-slate-100 hover:text-red-600 transition-all hover:-translate-y-1"><Youtube className="w-6 h-6" /></a>
            <a href="https://www.tiktok.com/@james_stanton" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-none shadow-lg border border-slate-100 hover:text-black transition-all hover:-translate-y-1"><TiktokIcon className="w-6 h-6" /></a>
          </div>

          <div className="w-full h-px bg-slate-200/50 mb-12"></div>

          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
            <div className="flex gap-8 order-2 md:order-1">
              <button onClick={() => scrollToSection('privacy')} className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900">{t.footer.privacy}</button>
              <button onClick={() => scrollToSection('terms')} className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900">{t.footer.terms}</button>
            </div>

            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#d87c28] order-1 md:order-2"
            >
              {t.footer.backToTop} 
              <div className="p-3 bg-[#355700] text-white rounded-none group-hover:-translate-y-1 transition-all">
                <ArrowUp className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};