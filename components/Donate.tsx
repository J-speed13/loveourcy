import React, { useState } from 'react';
import { Heart, Share2, Info, Copy, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Donate: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Love Our Island',
          text: 'Check out this initiative to keep Cyprus clean.',
          url: window.location.origin,
        });
      } catch (err) {
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.origin);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white py-32 px-6 border-t border-slate-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-left mb-20">
          <h2 className="text-5xl sm:text-7xl arial-black text-[#d87c28] tracking-tighter mb-12 leading-none uppercase">
            {t.donate.title}
          </h2>
          <p className="text-xl text-slate-600 font-medium max-w-2xl leading-relaxed">
            {t.donate.usage}
          </p>
        </div>

        <div className="bg-[#fdfbf7] p-12 md:p-20 border border-slate-100 text-center">
           <div className="flex justify-center mb-12">
              <div className="w-20 h-20 bg-[#355700] rounded-none flex items-center justify-center text-white">
                 <Share2 className="w-8 h-8" />
              </div>
           </div>

           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
             <a 
               href="#"
               className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-[#355700] text-white rounded-none font-black text-xl hover:bg-[#2a4500] transition-all shadow-xl"
             >
               {(t.donate as any).donateBtn}
               <Heart className="w-5 h-5 fill-current" />
             </a>

             <button 
               onClick={handleShare}
               className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-[#fcf0da] text-[#d87c28] rounded-none font-black text-xl hover:bg-[#f5e6cc] transition-all shadow-xl"
             >
               {t.donate.btn}
               <Share2 className="w-5 h-5" />
             </button>
           </div>

           <div className="mt-8 flex justify-center">
             <button 
               onClick={copyToClipboard}
               className="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors font-bold uppercase text-xs tracking-widest"
             >
               {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
               {copied ? 'Copied' : 'Copy link'}
             </button>
           </div>

           <div className="mt-16 flex items-start justify-center gap-3 p-6 bg-white border border-slate-100 max-w-lg mx-auto text-left">
             <Info className="w-5 h-5 text-slate-400 mt-1 shrink-0" />
             <p className="text-sm text-slate-400 font-medium leading-relaxed">
               {t.donate.transparency}
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};