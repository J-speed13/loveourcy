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

  const getLabel = (id: string) => {
    switch(id) {
      case ViewState.HOME: return t.nav.home;
      case ViewState.STORY: return t.nav.story;
      case ViewState.DONATE: return t.nav.donate;
      case ViewState.DOWNLOAD: return t.nav.download;
      default: return '';
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#fdfbf7]/80 backdrop-blur-xl border-b border-slate-200/50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between h-20 items-center">
          {/* Brand */}
          <div 
            className="flex items-center cursor-pointer group space-x-3"
            onClick={() => setView(ViewState.HOME)}
          >
            <div className="w-10 h-10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
               <Logo className="w-full h-full" />
            </div>
            <span className="text-xl font-black tracking-tight text-slate-900">
              LoveOur<span className="text-[#d37628]">Island</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center bg-white/50 border border-slate-200/50 rounded-none px-2 py-1.5 shadow-sm">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setView(item.id as ViewState)}
                className={`flex items-center px-4 py-2 rounded-none text-sm font-bold transition-all duration-300 ${
                  currentView === item.id
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {getLabel(item.id)}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-none border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 text-sm font-bold transition-all"
            >
              <Globe className="w-4 h-4 text-[#d37628]" />
              {language === 'en' ? 'Ελληνικά' : 'English'}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden gap-3">
             <button 
              onClick={toggleLanguage}
              className="p-2.5 rounded-none bg-white border border-slate-200 text-slate-700"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-none bg-slate-900 text-white shadow-lg focus:outline-none"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-t border-slate-100 absolute left-0 right-0 p-4 shadow-2xl rounded-none">
          <div className="space-y-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setView(item.id as ViewState);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-6 py-4 rounded-none text-base font-bold transition-all ${
                  currentView === item.id
                    ? 'bg-orange-50 text-[#d37628]'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {getLabel(item.id)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};