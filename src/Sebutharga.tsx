import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sebutharga({ darkMode }: { darkMode: boolean }) {
  const [formData, setFormData] = useState({
    name: "",
    service: "Pembangunan Web",
    budget: "RM 150 - RM 500",
    details: ""
  });

  const services = ["Pembangunan Web", "Reka Bentuk Grafik", "Reka Bentuk UI/UX", "Lain-lain"];
  const budgets = ["Bawah RM 150", "RM 150 - RM 500", "RM 500 - RM 1000", "Bincang Dahulu"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hai Fitri, saya berminat untuk berbincang mengenai projek:\n\n*Nama:* ${formData.name}\n*Servis:* ${formData.service}\n*Bajet:* ${formData.budget}\n*Perincian Projek:* ${formData.details}`;
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/601170006477?text=${encodedText}`, '_blank');
  };

  const inputClass = `w-full p-3.5 rounded-[12px] border transition-all outline-none ${
    darkMode 
      ? "bg-white/5 border-white/10 text-white focus:border-[#b3ce18]/50 focus:bg-white/10" 
      : "bg-white border-neutral-200 text-neutral-900 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10"
  }`;

  const labelClass = `block text-[13px] font-bold mb-2 ${
    darkMode ? "text-neutral-300" : "text-neutral-700"
  }`;

  return (
    <div className="w-full max-w-[420px] relative flex flex-col pt-8">
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <Link 
          to="/"
          className={`flex items-center justify-center w-[44px] h-[44px] rounded-full transition-all shadow-sm ${
            darkMode ? "bg-white/5 text-neutral-300 hover:bg-white/10 border border-white/10" : "bg-white text-neutral-600 hover:bg-neutral-50 border border-neutral-200"
          }`}
        >
          <ArrowLeft size={20} strokeWidth={2} />
        </Link>
        <h1 className={`font-bold text-[20px] tracking-tight ${darkMode ? "text-white" : "text-neutral-900"}`}>
          Minta Sebutharga
        </h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className={`p-6 rounded-[15px] border mb-8 ${darkMode ? "bg-white/5 border-white/10" : "bg-white border-neutral-200"}`}>
          <p className={`text-[14px] leading-relaxed mb-6 ${darkMode ? "text-neutral-400" : "text-neutral-500"}`}>
            Isi borang di bawah untuk berkongsi butiran projek anda. Saya akan membalas secepat mungkin melalui WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className={labelClass}>Nama Anda</label>
              <input
                type="text"
                required
                placeholder="Cth: Ahmad Abu"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Jenis Servis</label>
              <div className="relative">
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className={`${inputClass} appearance-none cursor-pointer`}
                >
                  {services.map((s, i) => (
                    <option key={i} value={s} className={darkMode ? "bg-[#1e3438] text-white" : "bg-white text-neutral-900"}>
                      {s}
                    </option>
                  ))}
                </select>
                <div className={`absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none ${darkMode ? "text-neutral-400" : "text-neutral-500"}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className={labelClass}>Anggaran Bajet</label>
              <div className="relative">
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className={`${inputClass} appearance-none cursor-pointer`}
                >
                  {budgets.map((b, i) => (
                    <option key={i} value={b} className={darkMode ? "bg-[#1e3438] text-white" : "bg-white text-neutral-900"}>
                      {b}
                    </option>
                  ))}
                </select>
                <div className={`absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none ${darkMode ? "text-neutral-400" : "text-neutral-500"}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className={labelClass}>Perincian Projek</label>
              <textarea
                required
                rows={4}
                placeholder="Ceritakan sedikit tentang projek atau idea anda..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className={`mt-2 flex items-center justify-center w-full py-4 font-bold rounded-[16px] transition-all text-[15px] hover:scale-[1.02] active:scale-[0.98] ${
                darkMode ? "bg-[#b3ce18] hover:opacity-90 text-[#1e3438] shadow-[0_0_20px_rgba(179,206,24,0.2)]" : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_0_20px_rgba(16,185,129,0.1)]"
              }`}
            >
              <Send size={18} className="mr-2" />
              Hantar ke WhatsApp
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
