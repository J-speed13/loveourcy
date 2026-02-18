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
    <div className="bg-[#fdfbf7] py-24 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-red-600 rounded-none text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            <Heart className="w-3 h-3 fill-current" />
            Join the movement
          </div>
          <h2 className="text-6xl sm:text-8xl font-black text-slate-900 tracking-tighter mb-8 leading-none">
            {t.donate.title}
          </h2>
          <p className="text-xl text-[#d37628] font-black uppercase tracking-tight mb-12">
            {t.donate.subtitle}
          </p>
        </div>

        <div className="bg-white rounded-none p-12 md:p-20 shadow-2xl border border-slate-100 text-center relative overflow-hidden">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-2 bg-gradient-to-r from-transparent via-[#d37628] to-transparent"></div>
           
           <div className="flex justify-center mb-12">
              <div className="w-24 h-24 bg-slate-900 rounded-none flex items-center justify-center text-white shadow-xl">
                 <Share2 className="w-10 h-10" />
              </div>
           </div>

           <p className="text-2xl font-bold text-slate-800 mb-12 leading-tight max-w-2xl mx-auto">
             {t.donate.usage}
           </p>

           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <button 
               onClick={handleShare}
               className="inline-flex items-center justify-center gap-4 px-16 py-8 bg-slate-900 text-white rounded-none font-black text-2xl hover:bg-[#d37628] transition-all shadow-2xl transform hover:-translate-y-1 active:scale-95"
             >
               {t.donate.btn}
               <Share2 className="w-6 h-6" />
             </button>
             
             <button 
               onClick={copyToClipboard}
               className="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors font-bold uppercase text-xs tracking-widest"
             >
               {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
               {copied ? 'Copied' : 'Copy link'}
             </button>
           </div>

           <div className="mt-16 flex items-center justify-center gap-3 p-6 bg-slate-50 rounded-none border border-slate-100 max-w-lg mx-auto">
             <div className="text-slate-400">
               <Info className="w-5 h-5" />
             </div>
             <p className="text-sm text-slate-400 font-medium italic leading-relaxed">
               {t.donate.transparency}
             </p>
           </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.4em]">
            Thank you for being part of the journey
          </p>
        </div>
      </div>
    </div>
  );
};