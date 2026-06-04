import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// --- ANIMATION VARIANTS ---
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

// --- CUSTOM ANIMATED COUNTER COMPONENT ---
const AnimatedCounter = ({ target, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
        setCount(Math.floor(easeOutQuart * target));
        
        if (percentage < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// --- 3D INTERACTIVE SERVICE CARD COMPONENT ---
const ServiceCard = ({ service, index }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    setRotateX((y - centerY) / 10);
    setRotateY(-(x - centerX) / 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  let spanClass = 'md:col-span-1';
  if ([0, 3, 4, 7, 8].includes(index)) spanClass = 'md:col-span-2';
  if (index === 10) spanClass = 'md:col-span-3';

  return (
    <motion.div
      variants={fadeUpVariant}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{ perspective: 1000 }}
      className={`relative p-10 rounded-3xl glass-card border-white/10 hover:bg-white/5 transition-colors group flex flex-col justify-between min-h-[300px] overflow-hidden cursor-pointer ${spanClass}`}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary-container to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      
      <div className="relative z-10 h-full flex flex-col">
        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-8 group-hover:bg-secondary-container/20 group-hover:scale-110 transition-transform duration-300">
          <span className="material-symbols-outlined text-3xl text-secondary-container">{service.icon}</span>
        </div>
        
        <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-secondary-container transition-colors">{service.title}</h3>
        <p className="text-white/60 mb-8 flex-grow leading-relaxed">{service.desc}</p>
        
        <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-secondary-container font-bold flex items-center gap-2 group-hover:gap-4 transition-all w-fit text-sm">
          Read More <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>
      
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary-container/5 rounded-full blur-3xl group-hover:bg-secondary-container/20 transition-colors pointer-events-none z-0" />
    </motion.div>
  );
};

// --- CIRCULAR DIAGRAM PRODUCT COMPONENT ---
const CircularProductDiagram = ({ products }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const radius = 280; 

  return (
    <div className="relative w-full max-w-5xl mx-auto h-[700px] hidden md:flex items-center justify-center mt-10">
      
      {/* SVG Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <g style={{ transform: 'translate(50%, 50%)' }}>
          {products.map((_, i) => {
            const angle = (i * (360 / products.length) - 90) * (Math.PI / 180);
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const isHovered = hoveredIndex === i;
            
            return (
              <line 
                key={i} 
                x1="0" y1="0" 
                x2={x} y2={y} 
                stroke={isHovered ? "#fcd400" : "rgba(255,255,255,0.2)"} 
                strokeWidth={isHovered ? "3" : "1.5"} 
                strokeDasharray={isHovered ? "none" : "6 6"}
                className="transition-all duration-300"
              />
            );
          })}
        </g>
      </svg>

      {/* Center Glowing Core */}
      <div className="absolute z-10 w-40 h-40 rounded-full bg-[#00141e] border border-secondary-container/50 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(252,212,0,0.4)]">
        <div className="absolute inset-0 rounded-full bg-secondary-container/20 animate-ping" style={{ animationDuration: '3s' }}></div>
        <span className="material-symbols-outlined text-5xl text-secondary-container mb-2 relative z-10">solar_power</span>
        <span className="text-white font-bold text-center leading-tight tracking-widest uppercase text-xs relative z-10">Core<br/>Products</span>
      </div>

      {/* Satellite Product Nodes */}
      {products.map((product, i) => {
        const angle = (i * (360 / products.length) - 90) * (Math.PI / 180);
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const isHovered = hoveredIndex === i;

        return (
          <div 
            key={i} 
            className="absolute z-20"
            style={{ transform: `translate(${x}px, ${y}px)` }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.div 
              layout
              className="absolute flex items-center justify-center bg-[#00141e]/95 backdrop-blur-xl border-2 border-secondary-container overflow-hidden shadow-2xl cursor-pointer"
              style={{ x: "-50%", y: "-50%", borderRadius: isHovered ? '24px' : '50%' }}
              animate={{ 
                width: isHovered ? 300 : 80, 
                height: isHovered ? 160 : 80,
                zIndex: isHovered ? 50 : 20
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <AnimatePresence mode="wait">
                {!isHovered ? (
                  // Compact Icon State
                  <motion.div 
                    key="icon"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.1 } }}
                    className="flex items-center justify-center w-full h-full"
                  >
                    <span className="material-symbols-outlined text-3xl text-white">{product.icon}</span>
                  </motion.div>
                ) : (
                  // Expanded Card State
                  <motion.div 
                    key="content"
                    initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.15 } }} exit={{ opacity: 0, transition: { duration: 0.1 } }}
                    className="w-full h-full p-6 flex flex-col justify-center bg-gradient-to-br from-secondary-container/10 to-transparent"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="material-symbols-outlined text-secondary-container">{product.icon}</span>
                      <h4 className="font-display font-bold text-white text-[17px] leading-tight truncate">{product.title}</h4>
                    </div>
                    <p className="text-white/70 text-sm mb-3 line-clamp-2 leading-snug">{product.desc}</p>
                    <Link to="/products" className="text-secondary-container text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all w-fit mt-auto">
                      Read More <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};


// --- MAIN HOME COMPONENT ---
const Home = () => {
  
  // --- Hero Image Fader Logic ---
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0); // State for testimonial carousel
  const heroImages = [
    "/img/solar_hero.webp", 
    "/img/solar_1.webp", 
    "/img/solar_2.jpg", 
    "/img/solar_3.webp",
    "/img/wind.jpg"  
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000); 
    
    return () => clearInterval(interval);
  }, []);
  // Auto-scroll testimonials every 6 seconds
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(testimonialInterval);
  }, []);
  // --- DATA ARRAYS ---
  const statsData = [
    { target: 224, suffix: "k+", label: "Installed Capacity" },
    { target: 35, suffix: "k+", label: "Wtgs Installed" },
    { target: 224, suffix: "+", label: "Project Completed" },
    { target: 983, suffix: "+", label: "Satisfied People" },
    { target: 34, suffix: "+", label: "Award Winning" },
    { target: 78, suffix: "+", label: "Global Brands" },
  ];

  const servicesData = [
    { icon: 'solar_power', title: 'Solar Solutions', desc: 'End-to-end solar installations customized for your property to maximize energy yield.' },
    { icon: 'business', title: 'Commercial Services', desc: 'Large-scale solar EPC services engineered for corporate energy demands.' },
    { icon: 'public', title: 'Global Optimization', desc: 'Advanced monitoring and maintenance for peak efficiency.' },
    { icon: 'energy_savings_leaf', title: 'Renewable Energy', desc: 'Transition from traditional grids to clean, sustainable power.' },
    { icon: 'mode_fan', title: 'Wind Turbine System', desc: 'Complimentary wind energy for robust round-the-clock generation.' },
    { icon: 'hub', title: 'Hybrid Systems', desc: 'Combining grid-tied efficiency and battery backup security.' },
    { icon: 'battery_charging_full', title: 'Off-Grid Systems', desc: 'Complete energy independence for remote areas.' },
    { icon: 'grid_on', title: 'On-Grid Systems', desc: 'Reduce electricity bills by feeding excess power back to the grid.' },
    { icon: 'agriculture', title: 'Solar Atta Chakki', desc: 'Sustainable solar milling solutions for agricultural businesses.' },
    { icon: 'lightbulb', title: 'Solar Street Light', desc: 'Reliable standalone solar illumination for paths and communities.' },
    { icon: 'water_drop', title: 'Solar Water Heater', desc: 'Efficient eco-friendly hot water systems at scale.' },
  ];

  const processData = [
    { step: '01', title: 'Initial Consultation', desc: 'The process begins with an initial consultation where the solar energy company engages.' },
    { step: '02', title: 'Feasibility Study', desc: 'The solar energy company conducts a detailed site assessment to determine the feasibility.' },
    { step: '03', title: 'Customized Design', desc: 'Based on the assessment and feasibility study, the solar energy company designs a customized solar system.' },
    { step: '04', title: 'Contracting', desc: 'The solar energy company provides a comprehensive proposal.' },
  ];

  const productsData = [
    { icon: 'grid_on', title: 'Solar Panels', desc: 'Our high-efficiency solar panels are designed to capture maximum sunlight, delivering reliable power.' },
{ 
  icon: 'battery_charging_full', 
  title: 'Solar Batteries', 
  desc: 'High-performance energy storage solutions designed to capture excess solar power, ensuring uninterrupted, reliable electricity 24/7.' 
},
    { icon: 'electric_meter', title: 'ACDB & DCDB', desc: 'Our ACDB & DCDB units ensure safe and efficient power distribution, protecting your solar system.' },
    { icon: 'cable', title: 'Wiring & Cabling', desc: 'Our solar-grade wiring and cabling are designed for durability and weather resistance.' },
    { icon: 'ac_unit', title: 'Solar Air Conditioners (AC)', desc: 'Stay cool the smart way with energy-efficient air conditioners designed for seamless solar integration.' },
    { icon: 'router', title: 'Inverters', desc: 'Our inverters ensure smooth and efficient DC to AC power conversion, delivering consistent output.' },
  ];

  const projectsData = [
    { image: '/img/projects1.avif', title: 'Easy Installation', tag: 'Commercial' },
    { image: '/img/projects2.avif', title: 'Best Energy Tariffs', tag: 'Energy' },
    { image: '/img/projects3.avif', title: 'Wind Turbine', tag: 'Windmill' },
    { image: '/img/projects4.avif', title: 'Hybrid Project', tag: 'Solar Power' },
    { image: '/img/projects5.avif', title: 'Make it Happen', tag: 'Energy' },
  ];

  const blogData = [
    { date: '20 APR', category: 'INVESTMENT', title: 'All you need to know about solar energy.', image: '/img/solar_1.webp' },
    { date: '20 APR', category: 'BUSINESS', title: 'Five important things to observe in energy.', image: '/img/solar_2.jpg' },
    { date: '20 APR', category: 'MATERIALS', title: 'Never underestimate the influence of energy.', image: '/img/solar_3.webp' },
  ];
const testimonialsData = [
    {
      quote: "I was impressed by how customized the entire process was. Mohini Enterprises really took the time to understand our needs and designed the perfect solar setup for our factory.",
      name: "Rahul Bansal",
    },
    {
      quote: "As a business owner, I wanted a reliable solar partner. Mohini Enterprises delivered exactly what they promised — efficient service, excellent technology, and great after-sales support.",
      name: "Anjali Sharma",
    },
    {
      quote: "Switching to solar with Mohini Enterprises was one of the best decisions for our home. The team was professional, the installation was smooth, and we're already seeing a drop in our electricity bills!",
      name: "Ravi Mehta",
    }
  ];
  return (
    <div className="pb-20 overflow-hidden">
      
      {/* --- 1. HERO SECTION BACKGROUND & ANIMATED SUN --- */}
      <div className="absolute top-0 left-0 w-full z-0 overflow-hidden h-[95vh] bg-[#001e2d]">
        {/* The Base image */}
        <img src="/img/solarmain.jpeg"  alt="Mohini Solar" className="absolute inset-0 w-full h-full object-cover opacity-30 scale-105" />
        
        {/* 👇 THE GLOWING, ANIMATED RISING SUN 👇 */}
        <motion.div
          id="animated-sunrise"
          className="fixed rounded-full z-10 pointer-events-none blur-[100px]"
          // Define the styling of the sun itself (Radial gradient yellow core, massive glow)
          style={{
            width: '20vw',
            height: '20vw',
            background: 'radial-gradient(circle at center, #fff6a2 0%, #fcd400 40%, #ff8c00 70%, transparent 90%)',
         
          }}
          // Path Animation: Start bottom-left, travel toward top-right
          initial={{ opacity: 0, x: '-20vw', y: '60vh', scale: 0.8 }}
          animate={{
            opacity: [0, 1, 1, 0.5], // Fades in, stays solid, fades out slightly
            x: ['-20vw', '10vw', '50vw', '110vw'], // Travels from far left to off-screen right
            y: ['60vh', '30vh', '10vh', '-30vh'], // "Rises" as it travels
            scale: [0.8, 1, 1.2, 1], // Expands slightly at mid-day position
          }}
          transition={{
            duration: 10, // Slowly across screen
            ease: "linear", // Smooth, steady motion
            repeat: Infinity, // Loop the sunrise
            delay: 1, // Start slightly after load
          }}
        />

        {/* Existing Gradient Overlays (on top of sun, z-20) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001e2d]/80 via-transparent to-[#001e2d] z-20"></div>
      </div>
      
      {/* Content wrapper with z-30 to sit ABOVE the sun and gradients */}
      <section className="relative z-30 pt-40 pb-20 px-6 max-w-7xl mx-auto min-h-[85vh] flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side: Text Content */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex-1 text-center lg:text-left">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white premium-text-shadow mb-6 font-bold leading-tight">
            Power & Green <br/><span className="text-secondary-container">Energy Affordable</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 font-medium tracking-wide max-w-2xl mx-auto lg:mx-0">
            Seller & Producer Since 1994! <br className="hidden md:block"/> Smart Energy for Modern Living.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link to="/about-us" className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-secondary-container/40 transition-all group">
              KNOW MORE
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </motion.div>

        {/* Right Side: Featured Hero Photo */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex-1 w-full max-w-lg lg:max-w-none relative mt-12 lg:mt-0">
          <div className="absolute -inset-4 bg-secondary-container/20 rounded-[2.5rem] blur-2xl z-0"></div>
          
          <div className="relative glass-card p-3 rounded-[2rem] border-white/20 transform hover:-translate-y-2 transition-transform duration-500 shadow-2xl z-10">
            <div className="relative w-full h-[350px] lg:h-[500px] rounded-3xl overflow-hidden bg-black/20">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentHeroImage}
                  src={heroImages[currentHeroImage]}
                  alt="Premium Solar Installation"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
            
            <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 glass-card px-6 py-4 rounded-2xl flex items-center gap-4 shadow-2xl border-white/20 animate-bounce z-20" style={{ animationDuration: '3s' }}>
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-secondary-container">eco</span>
              </div>
              <div>
                <p className="text-white font-bold leading-tight">100% Clean</p>
                <p className="text-white/60 text-xs">Energy Solutions</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- 2. ABOUT US & STATS SECTION --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 mb-24 pt-20 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUpVariant}>
            <span className="text-secondary-container font-bold tracking-widest uppercase text-sm mb-4 block">About Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Lighting the Way to a Cleaner, Brighter World</h2>
            <p className="text-white/80 text-lg mb-6">Over 30 year's experience providing top quality solar energy solutions across the world.</p>
            <p className="text-white/60 mb-8 leading-relaxed">
              At <strong className="text-white">Mohini Enterprises</strong>, we believe in a brighter, cleaner, and more sustainable future – powered by the limitless energy of the sun. Established with a mission to make renewable energy both accessible and affordable, we specialize in delivering end-to-end solar power solutions for residential, commercial, and industrial clients.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 mb-10">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-4xl text-secondary-container">verified_user</span>
                <span className="text-white font-bold">Money Back<br/>Guarantee</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-4xl text-secondary-container">water_ec</span>
                <span className="text-white font-bold">Hydropower<br/>Plants</span>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <Link to="/about-us" className="bg-white/10 hover:bg-secondary-container hover:text-on-secondary-container border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-colors">
                KNOW MORE
              </Link>
              <div>
                <p className="text-white/60 text-sm">Call us for help</p>
                <p className="text-white font-bold text-lg">(+91) 6394858689</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-2 gap-4">
            {statsData.map((stat, index) => (
              <motion.div key={index} variants={fadeUpVariant} className="glass-card p-8 rounded-3xl border-white/10 text-center hover:border-secondary-container/50 transition-colors">
                <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </h3>
                <p className="text-white/60 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 3. SERVICES SECTION --- */}
      <section className="relative z-10 w-full bg-[#00111a]/40 backdrop-blur-md border-y border-white/10 py-24 mb-32 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-secondary-container font-bold tracking-widest uppercase text-sm mb-4 block">Our Services</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white">What Services We Offer</h2>
            </div>
            <Link to="/services/" className="shrink-0 bg-secondary-container text-on-secondary-container px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-secondary-container/20 transition-all">
              ALL SERVICES
            </Link>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 4. PROCESS SECTION --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 mb-32 bg-white/5 rounded-3xl p-12 border border-white/10">
        <div className="text-center mb-16">
          <span className="text-secondary-container font-bold tracking-widest uppercase text-sm mb-4 block">Our Process</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">How We Work for Our Customers</h2>
        </div>
        
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {processData.map((process, index) => (
            <motion.div key={index} variants={fadeUpVariant} className="relative">
              <div className="font-display text-7xl font-bold text-white/5 mb-4 absolute -top-10 left-0 -z-10">{process.step}</div>
              <h4 className="text-secondary-container font-bold mb-2 text-sm tracking-widest">STEP {process.step}</h4>
              <h3 className="font-display text-xl font-bold text-white mb-4">{process.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{process.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- 5. PRODUCTS SECTION (Circular Diagram) --- */}
      <section className="relative z-10 w-full bg-[#00111a]/40 backdrop-blur-md border-y border-white/10 py-24 mb-32 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-secondary-container font-bold tracking-widest uppercase text-sm mb-4 block">Our Products</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Our Renewable Energy<br/>Products</h2>
            </div>
            <Link to="/products" className="shrink-0 bg-secondary-container text-on-secondary-container px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-secondary-container/20 transition-all">
              ALL PRODUCTS
            </Link>
          </div>

          <CircularProductDiagram products={productsData} />

          {/* Mobile Fallback: Standard Cards (Hidden on md and up) */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:hidden gap-6 mt-10">
            {productsData.map((product, index) => (
              <motion.div key={index} variants={fadeUpVariant} className="glass-card p-8 rounded-3xl border-white/10">
                <div className="w-14 h-14 rounded-2xl bg-secondary-container/20 flex items-center justify-center mb-6 border border-secondary-container">
                  <span className="material-symbols-outlined text-3xl text-secondary-container">{product.icon}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">{product.title}</h3>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">{product.desc}</p>
                <Link to="/products" className="text-secondary-container font-bold flex items-center gap-2 transition-colors w-fit text-sm">
                  Read More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 6. PROJECTS SECTION --- */}
      <section className="relative z-10 mb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <span className="text-secondary-container font-bold tracking-widest uppercase text-sm mb-4 block">Our Projects</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Spectacular Our<br/>Latest Projects</h2>
          </div>
         <div className="glass-card p-4 rounded-2xl flex items-center gap-4 border border-white/10">
            <div className="flex-1">
              <p className="text-green-400 text-sm">Do you have a project to discuss?</p>
              <p className="text-green-400 font-bold">Let's connect.</p>
            </div>
            {/* WhatsApp Icon Link */}
            <a 
              href="https://wa.me/919532598584" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-green-500/20"
            >
              {/* WhatsApp SVG Icon */}
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="flex gap-6 px-6 pb-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar style={{ scrollbarWidth: 'none' }}">
          {projectsData.map((project, index) => (
            <motion.div key={index} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="min-w-[85vw] md:min-w-[400px] h-[300px] rounded-3xl overflow-hidden relative group snap-center shrink-0 border border-white/10">
              <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <span className="bg-secondary-container text-on-secondary-container text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">{project.tag}</span>
                  <h3 className="font-display text-2xl font-bold text-white">{project.title}</h3>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 7. TESTIMONIAL SECTION --- */}
     <section className="relative z-10 max-w-4xl mx-auto px-6 mb-32 text-center">
        <span className="text-secondary-container font-bold tracking-widest uppercase text-sm mb-4 block">Testimonial</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-12">What Our Clients Say</h2>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }} 
          className="glass-card p-8 md:p-14 rounded-[2rem] relative min-h-[350px] flex flex-col justify-center items-center shadow-2xl"
        >          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl"
            >
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 relative z-10 font-medium drop-shadow-md">
                "{testimonialsData[activeTestimonial].quote}"
              </p>
              <h4 className="font-bold text-secondary-container text-xl">{testimonialsData[activeTestimonial].name}</h4>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-14 h-14 rounded-full border-[3px] flex items-center justify-center transition-all duration-300 ${
                  activeTestimonial === index
                    ? 'border-secondary-container bg-secondary-container/10 text-secondary-container scale-110 shadow-[0_0_15px_rgba(252,212,0,0.3)]'
                    : 'border-white/20 bg-transparent text-white/40 hover:border-white/50 hover:text-white/80'
                }`}
              >
                <span className="material-symbols-outlined text-3xl">person</span>
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* --- 8. BLOG / LATEST UPDATES --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center mb-16">
          <span className="text-secondary-container font-bold tracking-widest uppercase text-sm mb-4 block">Our Blog</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Latest Updates</h2>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogData.map((blog, index) => (
            <motion.div key={index} variants={fadeUpVariant} className="glass-card rounded-3xl overflow-hidden border border-white/10 group hover:-translate-y-2 transition-transform duration-300">
              <div className="relative h-60 overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white text-[#001e2d] font-bold text-sm px-4 py-2 rounded-xl text-center shadow-lg">
                  <span className="block text-xl">{blog.date.split(' ')[0]}</span>
                  <span className="block text-xs opacity-70">{blog.date.split(' ')[1]}</span>
                </div>
              </div>
              <div className="p-8">
                <span className="bg-secondary-container/20 text-secondary-container text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">{blog.category}</span>
                <h3 className="font-display text-xl font-bold text-white mb-6 leading-snug hover:text-secondary-container transition-colors cursor-pointer">{blog.title}</h3>
                <div className="flex items-center justify-between border-t border-white/10 pt-4 text-white/60 text-sm">
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">person</span> Admin</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
      
    </div>
    
  );
};

export default Home;