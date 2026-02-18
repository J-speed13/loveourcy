import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Logo } from './Logo';

export const Goal: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-[#fdfbf7] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tighter mb-6 uppercase">
            {t.goal.title}
          </h2>
          <p className="max-w-2xl mx-auto text-3xl text-slate-900 font-black uppercase italic">
            To see this symbol on
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-slate-200">
          {t.goal.items.map((item, idx) => (
            <div key={idx} className="bg-white p-10 border-r border-b border-slate-200 flex flex-col items-center text-center gap-6 group hover:bg-slate-50 transition-colors last:border-r-0 lg:[&:nth-child(3n)]:border-r-0">
              <div className="w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110">
                <Logo className="w-full h-full grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
              </div>
              <span className="text-xl font-bold text-slate-800">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-24 max-w-xl mx-auto text-center border-l-4 border-[#d37628] pl-8 text-left">
          <p className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
            Zero cost to companies.<br />
            Shared responsibility.<br />
            Cultural upside.
          </p>
        </div>
      </div>
    </section>
  );
};