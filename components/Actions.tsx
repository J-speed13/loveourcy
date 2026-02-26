import React, { useState } from 'react';
import { Heart, Download, Copy, Check, MessageSquare, Megaphone, Loader2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Actions: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.origin);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const response = await fetch('/assets/logo.png');
      const blob = await response.blob();
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
    <section className="bg-white py-24 px-6 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl arial-black tracking-tighter uppercase mb-16 text-center text-[#d87c28]">
          {t.help.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {/* Spread the word */}
          <div className="flex flex-col bg-[#fdfbf7] p-10 border border-slate-100 h-full">
            <div className="w-12 h-12 bg-[#355700] text-white flex items-center justify-center mb-8">
              <Megaphone className="w-6 h-6" />
            </div>
            <h3 className="text-2xl arial-black uppercase tracking-tight mb-4 text-[#d87c28]">
              {(t.help as any).spread_title}
            </h3>
            <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-grow">
              {(t.help as any).spread_text}
            </p>
            <a 
              href="https://www.youtube.com/watch?v=ISdbGxQYBCE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#355700] text-white font-black uppercase tracking-tight hover:bg-[#2a4500] transition-all"
            >
              {(t.help as any).spread_cta}
            </a>
          </div>

          {/* Collaborate */}
          <div className="flex flex-col bg-[#fdfbf7] p-10 border border-slate-100 h-full">
            <div className="w-12 h-12 bg-[#355700] text-white flex items-center justify-center mb-8">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-2xl arial-black uppercase tracking-tight mb-4 text-[#d87c28]">
              {(t.help as any).collab_title}
            </h3>
            <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-grow">
              {(t.help as any).collab_text}
            </p>
            <a 
              href="https://www.instagram.com/jamesincyprus/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#355700] text-white font-black uppercase tracking-tight hover:bg-[#2a4500] transition-all"
            >
              {(t.help as any).collab_cta}
            </a>
          </div>

          {/* Support the Project */}
          <div className="flex flex-col bg-[#fdfbf7] p-10 border border-slate-100 h-full">
            <div className="w-12 h-12 bg-[#355700] text-white flex items-center justify-center mb-8">
              <Heart className="w-6 h-6 fill-current" />
            </div>
            <h3 className="text-2xl arial-black uppercase tracking-tight mb-4 text-[#d87c28]">
              {(t.help as any).support_title}
            </h3>
            <p className="text-slate-600 font-medium leading-relaxed mb-2">
              {(t.help as any).support_text}
            </p>
            <p className="text-xs text-slate-400 italic font-medium mb-8 flex-grow">
              {(t.help as any).support_transparency}
            </p>
            <a 
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#355700] text-white font-black uppercase tracking-tight hover:bg-[#2a4500] transition-all shadow-lg"
            >
              {(t.help as any).support_cta}
            </a>
          </div>
        </div>

        {/* Adopt the Icon Section */}
        <div className="max-w-4xl mx-auto pt-24 border-t border-slate-100">
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl arial-black uppercase tracking-tighter mb-6 text-[#d87c28]">
              {(t.help as any).adopt_title}
            </h3>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
              {(t.help as any).adopt_text}
            </p>
            <button 
              onClick={handleDownload}
              disabled={downloading}
              className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-[#355700] text-white font-black text-xl uppercase tracking-tight hover:bg-[#2a4500] transition-all shadow-xl disabled:opacity-50"
            >
              {downloading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Download className="w-6 h-6" />}
              {(t.help as any).adopt_cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
