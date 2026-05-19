import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase, isSupabaseConfigured } from './supabase';
import { formatPrice, isFreeProduct } from './utils';

export default function Shop({ darkMode }: { darkMode: boolean }) {
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        if (!isSupabaseConfigured) throw new Error("Supabase is not configured");
        const { data, error } = await supabase.from('products').select('*');
        if (error) throw error;
        if (data && data.length > 0) {
          setProducts(data);
        } else {
          // Fallback dummy data jika table kosong
          setProducts([
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
            },
            {
              title: "Social Media Template Pack (Canva)",
              price: "RM 25.00",
              image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=400&auto=format&fit=crop",
              is_free: false
            },
            {
              title: "Website UI Kit (Figma)",
              price: "RM 45.00",
              image: "https://images.unsplash.com/photo-1581291518857-4e27b48fc1a2?q=80&w=400&auto=format&fit=crop",
              is_free: false
            },
            {
              title: "3D Icon Pack Premium",
              price: "RM 35.00",
              image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop",
              is_free: false
            },
            {
              title: "Notion Template Workspace",
              price: "Free",
              image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=400&auto=format&fit=crop",
              is_free: true
            }
          ]);
        }
      } catch (e) {
        console.error(e);
        // Fallback jika API key tiada atau berlaku ralat
        setProducts([
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
          },
          {
            title: "Social Media Template Pack (Canva)",
            price: "RM 25.00",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=400&auto=format&fit=crop",
            is_free: false
          },
          {
            title: "Website UI Kit (Figma)",
            price: "RM 45.00",
            image: "https://images.unsplash.com/photo-1581291518857-4e27b48fc1a2?q=80&w=400&auto=format&fit=crop",
            is_free: false
          },
          {
            title: "3D Icon Pack Premium",
            price: "RM 35.00",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop",
            is_free: false
          },
          {
            title: "Notion Template Workspace",
            price: "Free",
            image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=400&auto=format&fit=crop",
            is_free: true
          }
        ]);
      } finally {
        setIsLoading(false);
      }
    }
    loadProducts();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-[420px] relative flex flex-col pt-8 mx-auto"
    >
      <div className="flex items-center gap-4 mb-8">
        <Link 
          to="/"
          className={`flex items-center justify-center w-[44px] h-[44px] rounded-full transition-all shadow-sm ${
            darkMode ? "bg-white/5 text-neutral-300 hover:bg-white/10 border border-white/10" : "bg-white text-neutral-600 hover:bg-neutral-50 border border-neutral-200"
          }`}
        >
          <ArrowLeft size={20} strokeWidth={2} />
        </Link>
        <h1 className={`font-bold text-[20px] tracking-tight ${darkMode ? "text-white" : "text-neutral-900"}`}>
          Kedai Digital
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-10">
        {isLoading ? (
          [...Array(6)].map((_, i) => (
            <div key={i} className={`group flex flex-col rounded-[16px] overflow-hidden border shadow-sm ${
              darkMode ? "bg-white/5 border-white/10" : "bg-white border-neutral-200"
            }`}>
              <div className={`aspect-[4/3] w-full animate-pulse ${darkMode ? "bg-white/10" : "bg-neutral-200"}`}></div>
              <div className="p-3.5 flex flex-col flex-1 justify-between">
                <div className="flex flex-col gap-2 mb-4">
                  <div className={`h-3 w-full rounded animate-pulse ${darkMode ? "bg-white/10" : "bg-neutral-200"}`}></div>
                  <div className={`h-3 w-2/3 rounded animate-pulse ${darkMode ? "bg-white/10" : "bg-neutral-200"}`}></div>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div className={`h-6 w-14 rounded-full animate-pulse ${darkMode ? "bg-white/10" : "bg-neutral-200"}`}></div>
                  <div className={`w-7 h-7 rounded-full animate-pulse ${darkMode ? "bg-white/10" : "bg-neutral-200"}`}></div>
                </div>
              </div>
            </div>
          ))
        ) : (
          products.map((product, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
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
                    isFreeProduct(product) 
                      ? (darkMode ? "bg-[#b3ce18]/20 text-[#b3ce18]" : "bg-emerald-50 text-emerald-700")
                      : (darkMode ? "bg-white/10 text-neutral-300" : "bg-neutral-100 text-neutral-700")
                  }`}>
                    {formatPrice(product.price)}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                    darkMode ? "bg-white/10 group-hover:bg-[#b3ce18]/20" : "bg-neutral-100 group-hover:bg-emerald-100"
                  }`}>
                    <ArrowUpRight size={14} className={darkMode ? "text-neutral-400 group-hover:text-[#b3ce18]" : "text-neutral-500 group-hover:text-emerald-700"} />
                  </div>
                </div>
              </div>
            </motion.a>
          ))
        )}
      </div>
    </motion.div>
  );
}
