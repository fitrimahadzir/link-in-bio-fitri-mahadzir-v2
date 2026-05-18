import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Routes, Route, Link } from "react-router-dom";
import {
  Sun,
  Moon,
  Home as HomeIcon,
  Share2,
} from "lucide-react";
import Home from "./Home";
import Services from "./Services";
import Sebutharga from "./Sebutharga";
import ShareModal from "./ShareModal";

import Shop from "./Shop";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen font-sans flex flex-col items-center py-8 px-4 overflow-x-hidden transition-colors duration-500 selection:bg-[#b3ce18]/30 ${
      darkMode ? "bg-[#1e3438] text-neutral-200" : "bg-[#f4f7f5] text-neutral-900"
    }`}>
      <div className="w-full max-w-[420px] relative flex flex-col">
        
        {/* Top Navbar */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center w-full mb-2"
        >
          {/* Home Button */}
          <a 
            href="https://www.fitrimahadzir.my"
            className={`flex items-center justify-center w-[44px] h-[44px] rounded-full transition-all shadow-sm ${
              darkMode ? "bg-white/5 text-neutral-300 hover:bg-white/10 border border-white/10" : "bg-white text-neutral-600 hover:bg-neutral-50 border border-neutral-200"
            }`}
          >
            <HomeIcon size={18} strokeWidth={2} />
          </a>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsShareModalOpen(true)}
              className={`relative flex items-center justify-center w-[44px] h-[44px] rounded-full transition-all shadow-sm ${
                darkMode ? "bg-white/5 text-neutral-300 hover:bg-white/10 border border-white/10" : "bg-white text-neutral-600 hover:bg-neutral-50 border border-neutral-200"
              }`}
            >
              <Share2 size={18} strokeWidth={2} />
            </button>
            
            <button 
              onClick={toggleTheme}
              className={`flex items-center justify-center w-[44px] h-[44px] rounded-full transition-all shadow-sm ${
                darkMode ? "bg-white/5 text-neutral-300 hover:bg-white/10 border border-white/10" : "bg-white text-neutral-600 hover:bg-neutral-50 border border-neutral-200"
              }`}
            >
              {darkMode ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
            </button>
          </div>
        </motion.div>

        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/services" element={<Services darkMode={darkMode} />} />
          <Route path="/sebutharga" element={<Sebutharga darkMode={darkMode} />} />
          <Route path="/shop" element={<Shop darkMode={darkMode} />} />
        </Routes>
        
      </div>

      <ShareModal 
        isOpen={isShareModalOpen} 
        onClose={() => setIsShareModalOpen(false)} 
        darkMode={darkMode} 
      />
    </div>
  );
}

