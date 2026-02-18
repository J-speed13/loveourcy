import React, { useState } from 'react';
import { Download, CheckCircle, Info, Loader2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Logo } from './Logo';
import { Help } from './Help';

export const DownloadLogo: React.FC = () => {
  const { t } = useLanguage();
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const response = await fetch('/assets/logo.png');
      let blob;
      if (!response.ok) {
        blob = await (await fetch('assets/logo.png')).blob();
      } else {
        blob = await response.blob();
      }
      
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'LoveOurIsland_Symbol.png');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      window.open('assets/logo.png', '_blank');
    } finally {
      setTimeout(() => setDownloading(false), 1000);
    }
  };

  return (
    <div className="bg-[#fdfbf7]">
      <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="inline-block px-4 py-1.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-none mb-8">
            Adopt the Icon
          </span>
          <h2 className="text-6xl sm:text-8xl font-black text-slate-900 tracking-tighter mb-8 leading-none uppercase">
            {t.adopt.title}
          </h2>
          <p className="mt-6 text-xl text-[#d37628] max-w-3xl mx-auto leading-relaxed font-black uppercase tracking-tight">
            {t.adopt.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-32">
          {/* Main Card */}
          <div className="bg-white rounded-none border border-slate-100 shadow-2xl p-12 md:p-16 flex flex-col justify-between group">
            <div className="flex flex-col items-center">
              <div className="mb-12 w-64 h-64 bg-slate-50 rounded-none flex items-center justify-center border border-slate-100 group-hover:scale-105 transition-transform duration-500">
                <Logo className="w-40 h-40" />
              </div>
              <div className="space-y-6 text-xl text-slate-500 font-medium leading-relaxed mb-12 text-center max-w-md mx-auto">
                <p>{t.adopt.p1}</p>
                <p className="text-slate-900 font-black">{t.adopt.p2}</p>
              </div>
            </div>
            
            <button 
              onClick={handleDownload}
              disabled={downloading}
              className="w-full py-6 bg-slate-900 text-white rounded-none font-black text-xl flex items-center justify-center gap-3 hover:bg-[#d37628] transition-all transform active:scale-95 disabled:opacity-50 shadow-xl"
            >
              {downloading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Download className="w-6 h-6" />}
              {t.adopt.cta}
            </button>
          </div>

          {/* Why Adopt Card */}
          <div className="bg-[#2d3a1a] rounded-none p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-none blur-[80px]"></div>
            <h3 className="text-4xl font-black mb-10">{t.adopt.why_title}</h3>
            <ul className="space-y-8 mb-12">
              {t.adopt.why_list.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#d37628] mt-1 shrink-0" />
                  <span className="text-xl font-bold">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xl text-slate-300 font-medium leading-relaxed italic border-t border-white/10 pt-10">
              {t.adopt.why_outro}
            </p>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="bg-slate-50 rounded-none p-10 flex items-start gap-6 border border-slate-200/50 max-w-4xl mx-auto mb-24">
          <Info className="w-8 h-8 text-slate-400 shrink-0 mt-1" />
          <p className="text-slate-400 font-medium leading-relaxed text-sm italic">
            {t.adopt.disclaimer}
          </p>
        </div>
      </div>
      <Help />
    </div>
  );
};