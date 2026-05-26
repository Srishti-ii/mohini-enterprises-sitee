import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'Solar Solutions', path: '/services/solar-solutions' },
        { name: 'Commercial Services', path: '/services/commercial-services' },
        { name: 'Global Optimization', path: '/services/global-optimization' },
        { name: 'Renewable Energy', path: '/services/renewable-energy' },
        { name: 'Wind Turbine System', path: '/services/wind-turbine-system' },
        { name: 'Hybrid Systems', path: '/services/hybrid-systems' },
        { name: 'Off-Grid Systems', path: '/services/off-grid-systems' },
        { name: 'On-Grid Systems', path: '/services/on-grid-systems' },
        { name: 'Solar Atta Chakki', path: '/services/solar-atta-chakki' },
        { name: 'Solar Street Light', path: '/services/solar-street-light' },
        { name: 'Solar Water Heater', path: '/services/solar-water-heater' }
      ]
    },
    { 
      name: 'Products', 
      path: '/products',
      dropdown: [
        { name: 'Solar Panels', path: '/products/solar-panels' },
        { name: 'ACDB & DCDB', path: '/products/acdb-&-dcdb' },
        { name: 'Wiring & Cabling', path: '/products/wiring-&-cabling' },
        { name: 'Air Conditioners (AC)', path: '/products/air-conditioners-(ac)' },
        { name: 'Inverters & Batteries', path: '/products/inverters-&-batteries' }
      ]
    },
    { name: 'Contact Us', path: '/contact-us' }
  ];

  return (
    <header className="sticky top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center justify-between px-6 md:px-12 max-w-7xl mx-auto h-20">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 z-50">
          <img src="/img/logo.png" alt="Mohini Enterprises Logo" className="h-12 w-12" />
          <h1 className="font-display text-2xl font-bold tracking-tight text-white">Mohini Enterprises</h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 items-center h-full">
          {navItems.map((item) => (
            <div key={item.name} className="relative group h-full flex items-center">
              <Link 
                to={item.path} 
                className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-200 py-6 ${location.pathname === item.path ? 'text-secondary-container' : 'text-white/80 hover:text-secondary-container'}`}
              >
                {item.name}
                {item.dropdown && <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:rotate-180">expand_more</span>}
              </Link>

              {item.dropdown && (
                <div className="absolute top-[70px] left-1/2 -translate-x-1/2 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-4 group-hover:translate-y-0 z-50">
                  <div className="bg-[#00141e]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-2xl">
                    {item.dropdown.map((subItem, index) => (
                      <Link key={index} to={subItem.path} className="block px-4 py-3 text-sm text-white/70 hover:text-secondary-container hover:bg-white/5 rounded-xl transition-all">
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        
        {/* Mobile Hamburger Button */}
        <button className="lg:hidden text-white z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className="material-symbols-outlined text-3xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
        </button>

        {/* CTA Button (Desktop) */}
        <Link to="/book-consult" className="hidden lg:block text-sm font-semibold px-6 py-2.5 rounded-full bg-secondary-container text-on-secondary-container hover:bg-secondary-fixed transition-all active:scale-95 shadow-lg shadow-yellow-500/20 z-50">
          Book a Consult
        </Link>
      </div>

      {/* Mobile Navigation Overlay */}
{isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-[#001e2d] border-b border-white/10 p-6 flex flex-col gap-4 z-40">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-semibold text-white/80 hover:text-secondary-container py-2 border-b border-white/5"
            >
              {item.name}
            </Link>
          ))}
          
          {/* Mobile Book a Consult Button */}
          <Link 
            to="/book-consult" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 text-center text-sm font-semibold px-6 py-3 rounded-full bg-secondary-container text-on-secondary-container hover:bg-secondary-fixed transition-all shadow-lg shadow-yellow-500/20"
          >
            Book a Consult
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;