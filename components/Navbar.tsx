import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { ViewState } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { Logo } from './Logo';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'el' : 'en');
  };

  const scrollToSection = (id: ViewState) => {
    if (currentView !== ViewState.HOME) {
      setView(ViewState.HOME);
      // We need a small delay to allow the home view to render before scrolling
      setTimeout(() => {
        const elementId = id === ViewState.HOME ? 'home' : 'help';
        const element = document.getElementById(elementId);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const elementId = id === ViewState.HOME ? 'home' : 'help';
      const element = document.getElementById(elementId);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const getLabel = (id: string) => {
    switch(id) {
      case ViewState.HOME: return t.nav.home;
      case 'help': return t.help.title;
      default: return '';
    }
  };

  const navItems = [
    { id: ViewState.HOME },
    { id: 'help' }
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent px-6 py-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand */}
        <div 
          className="flex items-center cursor-pointer group space-x-3"
          onClick={() => scrollToSection(ViewState.HOME)}
        >
          <Logo className="w-10 h-10 drop-shadow-md" />
          <span className="text-xl arial-black tracking-tight text-white drop-shadow-md">
            #LoveOurIsland
          </span>
        </div>

        {/* Language Toggle */}
        <button 
          onClick={toggleLanguage}
          className="text-white font-bold hover:text-white/80 transition-colors drop-shadow-md"
        >
          {language === 'en' ? 'Ελληνικά' : 'English'}
        </button>
      </div>
    </nav>
  );
};