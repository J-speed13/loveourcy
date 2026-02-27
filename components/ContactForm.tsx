import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, Send, CheckCircle } from 'lucide-react';

interface ContactFormProps {
  onBack: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onBack }) => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Debug: Check health endpoint
    try {
      const healthCheck = await fetch(`${window.location.origin}/api/health`);
      console.log('Health check status:', healthCheck.status);
    } catch (e) {
      console.warn('Health check failed:', e);
    }

    try {
      const apiUrl = `${window.location.origin}/api/contact`;
      console.log('Submitting to:', apiUrl);
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.comment
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          onBack();
        }, 5000);
      } else {
        let errorMessage = 'There was an error sending your message.';
        try {
          const errorData = await response.json();
          errorMessage = errorData.details || errorData.error || errorMessage;
        } catch (e) {
          // If response is not JSON
          errorMessage = `Server error (${response.status}). Please try again later.`;
        }
        alert(errorMessage);
      }
    } catch (error: any) {
      console.error('Submission error:', error);
      alert(`Connection error: ${error.message || 'Please check your internet connection.'}`);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <CheckCircle className="w-16 h-16 text-[#355700] mb-6" />
        <h2 className="text-3xl font-black text-[#d87c28] uppercase mb-4">
          {(t as any).contact.success}
        </h2>
        <button
          onClick={onBack}
          className="mt-8 flex items-center gap-2 text-slate-500 font-bold hover:text-[#355700] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-24 px-6">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 font-bold hover:text-[#355700] transition-colors mb-12"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      <h2 className="text-4xl sm:text-5xl arial-black tracking-tighter uppercase mb-4 text-[#d87c28]">
        {(t as any).help.collab_title}
      </h2>
      <p className="text-xl text-slate-600 font-medium mb-12">
        {(t as any).help.collab_text}
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label htmlFor="name" className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3">
            {(t as any).contact.name}
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-6 py-4 bg-[#fdfbf7] border border-slate-200 focus:border-[#355700] outline-none transition-colors font-medium"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3">
            {(t as any).contact.email}
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-6 py-4 bg-[#fdfbf7] border border-slate-200 focus:border-[#355700] outline-none transition-colors font-medium"
          />
        </div>

        <div>
          <label htmlFor="comment" className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3">
            {(t as any).contact.comment}
          </label>
          <textarea
            id="comment"
            required
            rows={5}
            value={formData.comment}
            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
            className="w-full px-6 py-4 bg-[#fdfbf7] border border-slate-200 focus:border-[#355700] outline-none transition-colors font-medium resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-3 px-10 py-5 bg-[#355700] text-white text-lg font-black rounded-none shadow-2xl hover:bg-[#2a4500] transition-all hover:-translate-y-1"
        >
          <Send className="w-5 h-5" /> {(t as any).contact.submit}
        </button>
      </form>
    </div>
  );
};
