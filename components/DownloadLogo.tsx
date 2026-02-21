import React, { useState } from 'react';
import { Download, CheckCircle, Info, Loader2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Logo } from './Logo';

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
    <div className="bg-white py-32 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-24">
          <h2 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tighter mb-12 leading-none uppercase">
            {t.adopt.title}
          </h2>
          <p className="text-xl text-slate-600 font-medium max-w-3xl leading-relaxed">
            {t.adopt.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 mb-32">
          {/* Main Download Area */}
          <div className="bg-[#fdfbf7] p-12 border border-slate-100">
            <div className="flex flex-col items-center">
              <div className="mb-12 w-64 h-64 bg-white flex items-center justify-center border border-slate-100">
                <Logo className="w-40 h-40" />
              </div>
              <div className="space-y-6 text-xl text-slate-600 font-medium leading-relaxed mb-12 text-center max-w-md mx-auto">
                <p>{t.adopt.p1}</p>
                <p className="text-slate-900 font-black">{t.adopt.p2}</p>
              </div>
            </div>
            
            <button 
              onClick={handleDownload}
              disabled={downloading}
              className="w-full py-6 bg-slate-900 text-white rounded-none font-black text-xl flex items-center justify-center gap-3 hover:bg-[#d37628] transition-all"
            >
              {downloading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Download className="w-6 h-6" />}
              {t.adopt.cta}
            </button>
          </div>

          {/* Benefits Info Area */}
          <div>
            <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-10">
              {t.adopt.why_title}
            </h3>
            <ul className="space-y-8 mb-12">
              {t.adopt.why_list.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#d37628] mt-1 shrink-0" />
                  <span className="text-xl text-slate-600 font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xl text-slate-400 font-medium leading-relaxed border-t border-slate-100 pt-10">
              {t.adopt.why_outro}
            </p>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="bg-slate-50 p-10 flex items-start gap-6 border border-slate-200/50 max-w-4xl">
          <Info className="w-8 h-8 text-slate-300 shrink-0 mt-1" />
          <p className="text-slate-400 font-medium leading-relaxed text-sm italic">
            {t.adopt.disclaimer}
          </p>
        </div>
      </div>
    </div>
  );
};