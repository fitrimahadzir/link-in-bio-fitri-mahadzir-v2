import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { supabase } from "./supabase";
import {
  Heart,
  LayoutGrid,
  MapPin,
  Palette,
  Github,
  Linkedin,
  Instagram,
  Globe,
  Keyboard,
  Cat,
  PenTool,
  Mail,
  ArrowUpRight,
  AtSign,
  Brush,
  Share2,
  Check,
  Briefcase,
  FileText,
} from "lucide-react";

export default function Home({ darkMode }: { darkMode: boolean }) {
  const [products, setProducts] = useState<any[]>([
    {
      title: "Effect Haltone Template (PSD Format)",
      price: "Free",
      image: "https://images.unsplash.com/photo-1511407397940-d57f68e81203?q=80&w=400&auto=format&fit=crop",
      is_free: true
    },
    {
      title: "Graphic Bundle (Template Desain & Brush Premium)",
      price: "RM 15.00",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=400&auto=format&fit=crop",
      is_free: false
    }
  ]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const { data, error } = await supabase.from('products').select('*').limit(2);
        if (data && data.length > 0) {
          setProducts(data);
        }
      } catch (e) {
        console.error(e);
      }
    }
    loadProducts();
  }, []);

  const links: any[] = [
    {
      title: "Website",
      subtitle: "Laman web portfolio peribadi",
      url: "https://www.fitrimahadzir.my",
      icon: Globe,
      external: true,
    },
    {
      title: "Senarai Servis",
      subtitle: "Lihat servis yang ditawarkan",
      url: "/services",
      icon: Briefcase,
      external: false,
    },
    {
      title: "Minta Sebutharga",
      subtitle: "Untuk design dan pembangunan web anda",
      url: "/sebutharga",
      icon: FileText,
      external: false,
    },
  ];

  const socials = [
    { icon: Github, url: "https://github.com/fitrimahadzir" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/fitri-mahadzir/" },
    { icon: Instagram, url: "https://instagram.com/fitri.mahadzir" },
    { 
      icon: ({ size = 20, ...props }: any) => (
        <svg width={size} height={size} {...props} viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M16.969 16.927a2.561 2.561 0 0 0 1.901.677 2.501 2.501 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.091 5.091 0 0 1-1.9 2.896 5.292 5.292 0 0 1-3.091.88 5.839 5.839 0 0 1-2.284-.433 4.871 4.871 0 0 1-1.723-1.211 5.657 5.657 0 0 1-1.08-1.874 7.057 7.057 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.313 5.313 0 0 1 5.088-3.604 4.87 4.87 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187ZM6.947 4.084a8.065 8.065 0 0 1 1.928.198 4.29 4.29 0 0 1 1.49.638c.418.303.748.711.958 1.182.241.579.357 1.203.341 1.83a3.506 3.506 0 0 1-.506 1.961 3.726 3.726 0 0 1-1.503 1.287 3.588 3.588 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.593 4.593 0 0 1-.423 2.032 3.945 3.945 0 0 1-1.163 1.413 5.114 5.114 0 0 1-1.683.807 7.135 7.135 0 0 1-1.928.259H0V4.084h6.947Zm-.235 12.9c.308.004.616-.029.916-.099a2.18 2.18 0 0 0 .766-.332c.228-.158.411-.371.534-.619.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715 2.618 2.618 0 0 0-1.696-.505h-3.54v4.279h3.471Zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619 2.336 2.336 0 0 0-1.163.259 2.474 2.474 0 0 0-.738.62 2.359 2.359 0 0 0-.396.792c-.074.239-.12.485-.137.734h4.769a3.239 3.239 0 0 0-.679-1.785l-.002-.001Zm-13.813-.648a2.254 2.254 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.916 1.916 0 0 0-.178-.891 1.298 1.298 0 0 0-.495-.533 1.851 1.851 0 0 0-.711-.274 3.966 3.966 0 0 0-.835-.073H3.241v3.631h3.293v-.014ZM21.62 5.122h-5.976v1.527h5.976V5.122Z" />
        </svg>
      ), 
      url: "https://www.behance.net/fitrimahadzir" 
    },
    { 
      icon: ({ size = 20, ...props }: any) => (
        <svg width={size} height={size} {...props} viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.103-.104z" />
        </svg>
      ), 
      url: "https://www.tiktok.com/@fitri.mahadzir" 
    }
  ];

  const renderLinkWrapper = (link: any, children: React.ReactNode, i: number, className: string) => {
    if (link.external) {
      return (
        <motion.a
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.1 }}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 + i * 0.1 }}
      >
        <Link to={link.url} className={className}>
          {children}
        </Link>
      </motion.div>
    );
  };

  return (
    <div className="w-full max-w-[420px] relative flex flex-col">
      {/* Profile Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center mb-8 pt-8"
      >
        <div className="relative group">
          <img
            src="https://github.com/fitrimahadzir.png"
            alt="Fitri Mahadzir"
            className={`w-[104px] h-[104px] rounded-full border-2 object-cover shadow-2xl transition-transform group-hover:scale-105 duration-500 ${
              darkMode ? "border-[#b3ce18]/30" : "border-emerald-200"
            }`}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://ui-avatars.com/api/?name=Fitri+Mahadzir&background=b3ce18&color=1e3438&size=128";
            }}
          />
          <div className={`absolute inset-0 rounded-full blur-2xl -z-10 opacity-30 ${
            darkMode ? "bg-[#b3ce18]" : "bg-emerald-300"
          }`}></div>
        </div>
        
        <h1 className={`text-[26px] font-bold mt-4 tracking-tight ${darkMode ? "text-[#b3ce18]" : "text-[#b3ce18]"}`}>Fitri Mahadzir</h1>
        <p className={`font-jakarta font-semibold text-[15px] mt-1 tracking-wide ${darkMode ? "text-[#b3ce18]/70" : "text-emerald-600"}`}>Pereka Grafik & Pembangun Web</p>

        <div className={`flex items-center gap-1.5 mt-2.5 px-3 py-1 rounded-full border transition-colors ${
          darkMode ? "text-neutral-400 bg-white/5 border-white/10" : "text-neutral-500 bg-white border-neutral-200"
        }`}>
          <MapPin size={12} strokeWidth={2.5} />
          <span className="text-[13px] font-medium tracking-wide">Perak, Malaysia</span>
        </div>
      </motion.div>

      {/* Social Icons */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex items-center justify-center gap-3.5 mb-10 w-full"
      >
        {socials.map((social, i) => (
          <a 
            key={i} 
            href={social.url} 
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-[50px] h-[50px] rounded-full border transition-all group ${
              darkMode 
              ? "bg-transparent border-white/10 hover:bg-white/5 hover:border-[#b3ce18]/30" 
              : "bg-white border-neutral-200 hover:bg-emerald-50 hover:border-emerald-200"
            }`}
          >
            <social.icon size={20} strokeWidth={1.5} className={`transition-colors ${
              darkMode ? "text-neutral-400 group-hover:text-[#b3ce18]" : "text-neutral-500 group-hover:text-emerald-600"
            }`} />
          </a>
        ))}
      </motion.div>

      {/* Featured Portfolio Card */}
      <motion.a 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        href="https://redirect.fitrimahadzir.my/portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex flex-col rounded-[15px] overflow-hidden border mb-6 transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98] ${
          darkMode ? "border-[#b3ce18]/30 bg-white/5" : "border-[#b3ce18]/40 bg-white"
        }`}
      >
        <div className="relative overflow-hidden aspect-[16/10]">
          <img 
            src="https://link-cdn.fitrimahadzir.my/portfoliothumbnail.webp" 
            alt="Portfolio Cover"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className={`p-4 flex items-center justify-between transition-colors ${
          darkMode ? "bg-white/5" : "bg-white"
        }`}>
          <div className="flex items-center gap-4">
            <div className={`w-11 h-11 rounded-[14px] flex items-center justify-center ${
              darkMode ? "bg-white/5 border border-white/10" : "bg-emerald-50 border border-emerald-100"
            }`}>
              <Palette size={22} className={darkMode ? "text-[#b3ce18]" : "text-emerald-600"} />
            </div>
            <span className={`font-bold text-[17px] font-jakarta tracking-tight ${darkMode ? "text-white" : "text-neutral-900"}`}>Lihat Portfolio Saya</span>
          </div>
          <div className="mr-2">
            <ArrowUpRight strokeWidth={2.5} size={20} className={darkMode ? "text-neutral-600 group-hover:text-[#b3ce18]" : "text-neutral-400 group-hover:text-emerald-600"} />
          </div>
        </div>
      </motion.a>

      {/* Links List */}
      <div className="flex flex-col gap-3.5 w-full mb-8">
        {links.map((link, i) => renderLinkWrapper(
          link,
          <>
            <div className="flex items-center gap-4">
              <div className={`w-11 h-11 rounded-[14px] border flex items-center justify-center group-hover:scale-105 transition-transform ${
                darkMode ? "bg-white/5 border-white/10" : "bg-emerald-50 border-emerald-100"
              }`}>
                <link.icon size={22} strokeWidth={1.5} className={darkMode ? "text-[#b3ce18]" : "text-emerald-600"} />
              </div>
              <div className="flex flex-col justify-center">
                <span className={`font-bold text-[16px] tracking-tight ${darkMode ? "text-white" : "text-neutral-900"}`}>{link.title}</span>
                <span className={darkMode ? "text-neutral-400 text-[13px] mt-0.5" : "text-neutral-500 text-[13px] mt-0.5"}>{link.subtitle}</span>
              </div>
            </div>
            <div className={`mr-3 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              darkMode ? "group-hover:bg-white/5" : "group-hover:bg-emerald-100"
            }`}>
              <ArrowUpRight strokeWidth={2} size={18} className={`transition-colors ${
                darkMode ? "text-neutral-600 group-hover:text-[#b3ce18]" : "text-neutral-400 group-hover:text-emerald-600"
              }`} />
            </div>
          </>,
          i,
          `group flex items-center justify-between p-2.5 rounded-[15px] border transition-all cursor-pointer shadow-sm ${
            darkMode 
            ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-[#b3ce18]/30" 
            : "bg-white border-neutral-200 hover:bg-emerald-50 hover:border-emerald-200"
          }`
        ))}
      </div>

      {/* Divider */}
      <div className={`w-full h-px mb-8 ${darkMode ? "bg-white/10" : "bg-neutral-200"}`}></div>

      {/* Products Section */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="w-full mb-12"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className={`font-bold text-[18px] tracking-tight ${darkMode ? "text-white" : "text-neutral-900"}`}>Produk Pilihan</h2>
          <Link
            to="/shop"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-bold transition-all ${
              darkMode ? "bg-white/10 hover:bg-white/20 text-white" : "bg-neutral-100 hover:bg-neutral-200 text-neutral-900"
            }`}
          >
            Kedai Digital <ArrowUpRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {products.map((product, i) => (
            <a
              key={i}
              href="#"
              className={`group flex flex-col rounded-[16px] overflow-hidden border transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98] ${
                darkMode ? "bg-white/5 border-white/10 hover:border-[#b3ce18]/30" : "bg-white border-neutral-200 hover:border-emerald-200"
              }`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-800">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-3.5 flex flex-col flex-1 justify-between">
                <h3 className={`font-bold text-[13px] leading-snug mb-4 line-clamp-2 ${darkMode ? "text-white" : "text-neutral-900"}`}>
                  {product.title}
                </h3>
                <div className="flex items-center justify-between mt-auto">
                  <span className={`px-2.5 py-1 rounded-full text-[12px] font-bold ${
                    product.is_free
                      ? (darkMode ? "bg-[#b3ce18]/20 text-[#b3ce18]" : "bg-[#b3ce18]/20 text-[#7a8c10]")
                      : (darkMode ? "bg-white/10 text-neutral-300" : "bg-neutral-100 text-neutral-700")
                  }`}>
                    {product.price}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                    darkMode ? "bg-white/10 group-hover:bg-[#b3ce18]/20" : "bg-neutral-100 group-hover:bg-emerald-100"
                  }`}>
                    <ArrowUpRight size={14} className={darkMode ? "text-neutral-400 group-hover:text-[#b3ce18]" : "text-neutral-500 group-hover:text-emerald-700"} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className={`w-full rounded-[15px] border p-7 relative overflow-hidden shadow-xl ${
          darkMode ? "bg-white/5 border-white/10 text-white" : "bg-white border-neutral-200 text-neutral-900"
        }`}
      >
        <div className={`absolute top-0 left-0 right-0 h-[1px] ${
          darkMode ? "bg-gradient-to-r from-transparent via-[#b3ce18]/20 to-transparent" : "bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent"
        }`}></div>
        
        <div className={`w-[52px] h-[52px] rounded-[18px] border flex items-center justify-center mb-5 ${
          darkMode ? "bg-[#b3ce18]/10 border-[#b3ce18]/20 text-[#b3ce18]" : "bg-emerald-50 border-emerald-200 text-emerald-600"
        }`}>
          <Mail size={24} strokeWidth={2} />
        </div>
        <h2 className={`font-bold text-[22px] tracking-tight mb-2 ${darkMode ? "text-[#b3ce18]" : "text-emerald-600"}`}>Hubungi Saya</h2>
        <div className="mb-6">
          <p className={`text-[15px] font-semibold mb-2 ${darkMode ? "text-neutral-200" : "text-neutral-800"}`}>
            Ada idea projek atau ingin berkolaborasi?
          </p>
          <p className={`text-[14px] leading-relaxed ${darkMode ? "text-neutral-400" : "text-neutral-500"}`}>
            Saya sentiasa terbuka untuk berbincang tentang reka bentuk, pembangunan web, teknologi, tech stack dan pelbagai idea digital lain.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a 
            href="mailto:hi@fitrimahadzir.my"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center py-3.5 font-bold rounded-[16px] transition-all text-[15px] hover:scale-[1.01] active:scale-[0.98] ${
              darkMode ? "bg-white/10 border border-white/10 hover:bg-white/20 text-white" : "bg-neutral-100 border border-neutral-200 hover:bg-neutral-200 text-neutral-900"
            }`}
          >
            hi@fitrimahadzir.my
          </a>
          <a 
            href="https://wa.me/601170006477"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center p-3.5 px-6 font-bold rounded-[16px] transition-all text-[15px] hover:scale-[1.01] active:scale-[0.98] ${
              darkMode ? "bg-[#b3ce18] hover:opacity-90 text-[#1e3438] shadow-[0_0_20px_rgba(179,206,24,0.2)]" : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_0_20px_rgba(16,185,129,0.1)]"
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="mr-2">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  );
}
