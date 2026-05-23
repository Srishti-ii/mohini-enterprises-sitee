import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const products = [
  { icon: 'solar_power', title: 'Solar Panels', desc: 'High-efficiency monocrystalline and polycrystalline panels designed for maximum energy harvest.' },
  { icon: 'settings_input_composite', title: 'ACDB & DCDB', desc: 'Robust distribution boxes ensuring safety and optimal power flow for your solar system.' },
  { icon: 'settings_ethernet', title: 'Wiring & Cabling', desc: 'UV-resistant, high-durability wiring systems for long-term outdoor solar performance.' },
  { icon: 'ac_unit', title: 'Air Conditioners (AC)', desc: 'Energy-efficient cooling solutions optimized for integration with solar power setups.' },
  { icon: 'battery_full', title: 'Inverters & Batteries', desc: 'State-of-the-art power conversion and storage solutions for consistent energy availability.' }
];

const Products = () => {
  return (
  <div className="relative min-h-screen bg-[#001e2d]/20 overflow-hidden">
      
      {/* 3. The Motion Sun Component */}
      <motion.div
        id="animated-sunrise"
        className="fixed rounded-full z-10 pointer-events-none blur-[100px]"
        style={{
          width: '20vw',
          height: '20vw',
          background: 'radial-gradient(circle at center, #fff6a2 0%, #fcd400 40%, #ff8c00 70%, transparent 90%)',
        }}
        initial={{ opacity: 0, x: '-20vw', y: '60vh', scale: 0.8 }}
        animate={{
          opacity: [0, 1, 1, 0.5],
          x: ['-20vw', '10vw', '50vw', '110vw'],
          y: ['60vh', '30vh', '10vh', '-30vh'],
          scale: [0.8, 1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
          delay: 1,
        }}
      />

      {/* 4. Gradient Overlay (z-20) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001e2d]/80 via-transparent to-[#001e2d] z-20"></div>

      {/* 5. Your Content Wrapper (z-30) */}
      <section className="relative z-30 pt-32 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-20 text-center">Our Products</h1>
        
        
        <div className="flex flex-col items-center gap-12">
          {products.map((product, idx) => (
            <div 
              key={idx} 
              className="group relative flex items-center justify-center 
                         w-48 h-48 bg-white/5 border border-white/10 rounded-full 
                         transition-all duration-700 ease-in-out cursor-pointer
                         hover:w-full hover:h-56 hover:rounded-3xl hover:bg-white/10 hover:justify-start hover:px-12"
            >
              <div className="flex flex-col items-center transition-all duration-500 group-hover:flex-row group-hover:gap-8">
                <span className="material-symbols-outlined text-6xl text-yellow-500 mb-4 group-hover:mb-0">
                  {product.icon}
                </span>
                
                <div className="flex flex-col items-center group-hover:items-start text-center group-hover:text-left">
                  <h3 className="text-xl font-bold text-white mb-1">{product.title}</h3>
                  
                  <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-white/60 text-sm mb-2 line-clamp-2">{product.desc}</p>
                    <Link 
                      to={`/products/${product.title.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="text-yellow-500 font-bold text-sm hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      </div>
  
  );
};

export default Products;