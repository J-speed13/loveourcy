import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Droplets, 
  Coffee, 
  Package, 
  Palmtree, 
  Megaphone, 
  Map 
} from 'lucide-react';

export const Goal: React.FC = () => {
  const { t } = useLanguage();

  const getIcon = (index: number) => {
    const iconProps = { className: "w-full h-full grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:text-[#d37628] transition-all duration-300" };
    switch (index) {
      case 0: return <Droplets {...iconProps} />;
      case 1: return <Coffee {...iconProps} />;
      case 2: return <Package {...iconProps} />;
      case 3: return <Palmtree {...iconProps} />;
      case 4: return <Megaphone {...iconProps} />;
      case 5: return <Map {...iconProps} />;
      default: return <Droplets {...iconProps} />;
    }
  };

  return (
    <section className="bg-[#fdfbf7] py-32 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-7xl arial-black text-[#d87c28] tracking-tighter uppercase leading-none mb-6">
            {t.goal.title}
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-slate-600 font-medium">
            Creating awareness through the physical objects we interact with every day.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-slate-200 bg-white">
          {t.goal.items.map((item, idx) => (
            <div key={idx} className="p-10 border-r border-b border-slate-200 flex flex-col items-center text-center gap-6 group hover:bg-slate-50 transition-colors last:border-r-0 lg:[&:nth-child(3n)]:border-r-0">
              <div className="w-10 h-10 flex items-center justify-center">
                {getIcon(idx)}
              </div>
              <span className="text-lg font-bold text-slate-800 uppercase tracking-tight">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-24 max-w-xl mx-auto text-center">
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            {t.goal.tagline} Shared responsibility. A simple shift in identity that costs nothing to implement but changes how we see our litter.
          </p>
        </div>
      </div>
    </section>
  );
};