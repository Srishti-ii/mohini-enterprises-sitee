import React from 'react';
import { motion } from 'framer-motion';

const GenericPage = ({ title, icon, description }) => {
  return (
    <section className="relative z-10 px-6 max-w-7xl mx-auto py-32 text-center">
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-24 h-24 mx-auto rounded-3xl bg-white/5 border border-white/20 flex items-center justify-center mb-8 glass-card">
        <span className="material-symbols-outlined text-5xl text-secondary-container">{icon}</span>
      </motion.div>
      <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="font-display text-5xl font-bold text-white mb-6">
        {title}
      </motion.h2>
      <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
        {description}
      </motion.p>
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="glass-card p-12 rounded-3xl max-w-3xl mx-auto">
          <p className="text-white/80 italic">Content infrastructure ready for {title.toLowerCase()} data population.</p>
      </motion.div>
    </section>
  );
};

export default GenericPage;