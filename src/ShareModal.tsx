import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import QRCode from 'react-qr-code';
import { Copy, Check, MessageCircle } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export default function ShareModal({ isOpen, onClose, darkMode }: ShareModalProps) {
  const [copiedUrl, setCopiedUrl] = React.useState(false);
  const [copiedPhone, setCopiedPhone] = React.useState(false);
  const shareUrl = "https://link.fitrimahadzir.my";
  const phone = "+601170006477";

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    } catch (err) {
      console.error("Failed to copy URL: ", err);
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch (err) {
      console.error("Failed to copy phone: ", err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Bottom Sheet Modal */}
          <motion.div
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 1 }}
            onDragEnd={(e, info) => {
              if (info.offset.y > 100 || info.velocity.y > 500) {
                onClose();
              }
            }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`fixed bottom-0 left-0 right-0 z-50 flex flex-col rounded-t-[24px] p-6 pb-10 w-full max-w-[420px] mx-auto border-t shadow-2xl ${
              darkMode ? "bg-[#112124] border-white/10" : "bg-white border-neutral-200"
            }`}
          >
            {/* Drag Handle */}
            <div className="w-12 h-1.5 rounded-full bg-neutral-400/30 mx-auto mb-6" />

            {/* QR Code Container */}
            <div className="flex gap-4 mb-6">
              <div className={`flex-1 p-4 rounded-[20px] flex flex-col justify-center items-center shadow-inner ${
                darkMode ? "bg-white/5" : "bg-neutral-50"
              }`}>
                <div className="bg-white p-2.5 rounded-[12px] shadow-sm mb-3">
                  <QRCode value={shareUrl} size={100} level="H" />
                </div>
                <span className={`text-[12px] font-bold ${darkMode ? "text-neutral-300" : "text-neutral-600"}`}>Pautan Website</span>
              </div>
              
              <div className={`flex-1 p-4 rounded-[20px] flex flex-col justify-center items-center shadow-inner ${
                darkMode ? "bg-white/5" : "bg-neutral-50"
              }`}>
                <div className="bg-white p-2.5 rounded-[12px] shadow-sm mb-3">
                  <QRCode value={`https://wa.me/${phone.replace('+', '')}`} size={100} level="H" />
                </div>
                <span className={`text-[12px] font-bold ${darkMode ? "text-neutral-300" : "text-neutral-600"}`}>WhatsApp</span>
              </div>
            </div>

            {/* URL Section */}
            <div className="mb-4">
              <label className={`block text-[12px] font-bold mb-2 uppercase tracking-wider ${
                darkMode ? "text-neutral-400" : "text-neutral-500"
              }`}>
                URL Pautan
              </label>
              <div className="flex gap-2">
                <div className={`flex-1 px-4 py-3 rounded-[12px] overflow-hidden text-ellipsis whitespace-nowrap text-[14px] border ${
                  darkMode ? "bg-white/5 border-white/10 text-neutral-300" : "bg-white border-neutral-200 text-neutral-600"
                }`}>
                  {shareUrl}
                </div>
                <button
                  onClick={handleCopyUrl}
                  className={`flex items-center justify-center w-12 h-12 rounded-[12px] transition-all border ${
                    copiedUrl 
                    ? (darkMode ? "bg-[#b3ce18]/20 border-[#b3ce18]/30 text-[#b3ce18]" : "bg-emerald-100 border-emerald-200 text-emerald-600")
                    : (darkMode ? "bg-white/5 border-white/10 hover:bg-white/10 text-neutral-300" : "bg-white border-neutral-200 hover:bg-neutral-50 text-neutral-600")
                  }`}
                >
                  {copiedUrl ? <Check size={20} /> : <Copy size={20} />}
                </button>
              </div>
            </div>

            {/* Phone Section */}
            <div className="mb-2">
              <label className={`block text-[12px] font-bold mb-2 uppercase tracking-wider ${
                darkMode ? "text-neutral-400" : "text-neutral-500"
              }`}>
                Nombor Telefon / WhatsApp
              </label>
              <div className="flex gap-2">
                <div className={`flex-1 px-4 py-3 rounded-[12px] overflow-hidden text-ellipsis whitespace-nowrap text-[14px] border ${
                  darkMode ? "bg-white/5 border-white/10 text-neutral-300" : "bg-white border-neutral-200 text-neutral-600"
                }`}>
                  {phone}
                </div>
                <button
                  onClick={handleCopyPhone}
                  className={`flex items-center justify-center w-12 h-12 rounded-[12px] transition-all border ${
                    copiedPhone 
                    ? (darkMode ? "bg-[#b3ce18]/20 border-[#b3ce18]/30 text-[#b3ce18]" : "bg-emerald-100 border-emerald-200 text-emerald-600")
                    : (darkMode ? "bg-white/5 border-white/10 hover:bg-white/10 text-neutral-300" : "bg-white border-neutral-200 hover:bg-neutral-50 text-neutral-600")
                  }`}
                >
                  {copiedPhone ? <Check size={20} /> : <Copy size={20} />}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
