import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services({ darkMode }: { darkMode: boolean }) {
  const services = [
    {
      title: "Pembangunan Web",
      description: "Laman web dan aplikasi web kustom yang dibina menggunakan teknologi moden seperti React, Tailwind, dan Node.js.",
      price: "Dari RM 150",
    },
    {
      title: "Reka Bentuk Grafik",
      description: "Reka bentuk logo profesional, penjenamaan, dan bahan pemasaran yang disesuaikan dengan keperluan bisnes anda.",
      price: "Dari RM 50",
    },
    {
      title: "Reka Bentuk UI/UX",
      description: "Reka bentuk interface yang berpusatkan pengguna untuk memastikan pengalaman terbaik bagi pengguna anda.",
      price: "Dari RM 100",
    }
  ];

  return (
    <div className={`w-full max-w-[420px] relative flex flex-col pt-8`}>
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
          Senarai Servis
        </h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col gap-4 mb-12"
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.1 }}
            className={`p-5 rounded-[15px] border transition-all ${
              darkMode ? "bg-white/5 border-white/10" : "bg-white border-neutral-200"
            }`}
          >
            <div className="flex flex-col">
              <h3 className={`font-bold text-[17px] tracking-tight ${darkMode ? "text-white" : "text-neutral-900"}`}>{service.title}</h3>
              <p className={`text-[13px] mt-1.5 leading-relaxed ${darkMode ? "text-neutral-400" : "text-neutral-500"}`}>{service.description}</p>
              <div className={`inline-flex items-center gap-1.5 mt-3 px-2.5 py-1 rounded-md text-[12px] font-bold w-fit ${
                darkMode ? "bg-[#b3ce18]/10 text-[#b3ce18]" : "bg-emerald-100 text-emerald-700"
              }`}>
                <Clock size={12} strokeWidth={2.5} />
                {service.price}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className={`w-full rounded-[15px] border p-6 text-center ${
          darkMode ? "bg-[#b3ce18]/10 border-[#b3ce18]/20" : "bg-emerald-50 border-emerald-200"
        }`}
      >
        <h3 className={`font-bold text-[18px] mb-2 ${darkMode ? "text-white" : "text-emerald-900"}`}>Berminat?</h3>
        <p className={`text-[13px] mb-5 ${darkMode ? "text-neutral-300" : "text-emerald-700"}`}>Hubungi saya untuk maklumat lanjut dan perbincangan projek.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link 
            to="/sebutharga"
            className={`flex-1 inline-flex items-center justify-center px-6 py-3 font-bold rounded-[12px] transition-all text-[14px] hover:scale-[1.02] active:scale-[0.98] border ${
              darkMode ? "bg-white/10 border-white/20 text-white hover:bg-white/20" : "bg-white border-emerald-200 text-emerald-700 hover:bg-emerald-50"
            }`}
          >
            Sebutharga
          </Link>
          <a 
            href="https://wa.me/601170006477"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 inline-flex items-center justify-center px-6 py-3 font-bold rounded-[12px] transition-all text-[14px] hover:scale-[1.02] active:scale-[0.98] ${
              darkMode ? "bg-[#b3ce18] text-[#1e3438]" : "bg-emerald-600 text-white"
            }`}
          >
            WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  );
}
