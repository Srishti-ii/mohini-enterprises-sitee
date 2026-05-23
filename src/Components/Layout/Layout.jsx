import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
};

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="bg-premium-sky text-white font-body selection:bg-secondary-container selection:text-on-secondary-container min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow relative w-full overflow-x-hidden">
  <AnimatePresence mode="popLayout">
    <motion.div 
      key={location.pathname} 
      variants={pageVariants} 
      initial="initial" 
      animate="animate" 
      exit="exit" 
      className="relative z-10 w-full"
    >
      {children}
    </motion.div>
  </AnimatePresence>
</main>
      <Footer />
    </div>
  );
};

export default Layout;