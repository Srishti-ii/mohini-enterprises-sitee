import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BookConsult = () => {
  const [scope, setScope] = useState('Luxury Estate');
  const [selectedDate, setSelectedDate] = useState(15);
  const [time, setTime] = useState('Morning Arrival');

  return (
    <section className="relative z-10 px-6 max-w-7xl mx-auto py-20">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl font-bold mb-4">Request a Consultation</h2>
        <p className="text-white/60">Configure initial assessment parameters below.</p>
      </div>

      <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-3xl solar-glow">
        

        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-sm font-semibold text-white/90">Enter Your Name</label>
              <input type="text" placeholder="e.g. Alexander Sterling" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-secondary-container/50 focus:border-secondary-container transition-all" />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-semibold text-white/90">Direct Contact</label>
              <input type="email" placeholder="email@address.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-secondary-container/50 focus:border-secondary-container transition-all" />
            </div>
          </div>


          <div className="space-y-6 pt-6 border-t border-white/10">
            <h4 className="text-sm font-semibold text-white/90 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary-container text-xl">calendar_today</span>
              Secure Priority Slot
            </h4>
            
            <div className="grid grid-cols-4 md:grid-cols-7 gap-3">
              {[14, 15, 16, 17, 18, 19, 20].map((date, i) => {
                const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                const isDisabled = date > 18;
                return (
                  <button 
                    key={date} type="button" disabled={isDisabled} onClick={() => setSelectedDate(date)}
                    className={`flex flex-col items-center py-4 rounded-xl border transition-all ${isDisabled ? 'opacity-30 cursor-not-allowed border-white/10 bg-white/5' : selectedDate === date ? 'border-2 border-secondary-container bg-secondary-container/20 text-white solar-glow' : 'border-white/10 bg-white/5 hover:border-secondary-container'}`}
                  >
                    <span className={`text-[10px] uppercase ${selectedDate === date ? 'text-secondary-container' : 'text-white/40'}`}>{days[i]}</span>
                    <span className={`font-bold text-lg ${selectedDate === date ? 'text-white' : 'text-white/80'}`}>{date}</span>
                  </button>
                )
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
               {['Morning Arrival', 'Mid-Day Review', 'Evening Briefing'].map(t => (
                 <button 
                   key={t} type="button" onClick={() => setTime(t)}
                   className={`py-3 rounded-xl border transition-all text-sm font-semibold ${time === t ? 'border-secondary-container bg-secondary-container text-on-secondary-container' : 'border-white/10 bg-white/5 text-white/80 hover:border-secondary-container hover:text-white'}`}
                 >
                   {t}
                 </button>
               ))}
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            type="submit" 
            className="w-full bg-secondary-container text-on-secondary-container py-5 rounded-2xl font-display font-bold text-lg hover:shadow-2xl hover:shadow-secondary-container/40 transition-all flex items-center justify-center gap-3 mt-8"
          >
            Book My Consult
            <span className="material-symbols-outlined">diamond</span>
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default BookConsult;