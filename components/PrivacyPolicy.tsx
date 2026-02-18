import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-red-50 rounded-full mb-4">
            <Shield className="w-8 h-8 text-red-500" />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            {t.legal.privacy_title}
          </h1>
          <p className="mt-4 text-slate-500 text-sm">
            {t.legal.privacy_date}
          </p>
        </div>

        <div className="prose prose-lg prose-slate mx-auto">
          <p className="lead text-lg text-slate-600 mb-8">
            {t.legal.privacy_intro}
          </p>

          <div className="space-y-10">
            {t.legal.privacy_sections.map((section, index) => (
              <div key={index} className="border-t border-slate-100 pt-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{section.heading}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-100 text-sm text-slate-500">
             <p>{t.footer.rights}</p>
          </div>
        </div>
      </div>
    </div>
  );
};