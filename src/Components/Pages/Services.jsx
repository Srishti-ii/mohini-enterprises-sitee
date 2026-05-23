import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const services = [
  { 
    icon: 'solar_power', 
    title: 'Solar Solutions', 
    desc: 'End-to-end solar installations customized for your property to maximize energy yield. We provide comprehensive site assessments and precision engineering. Our high-efficiency panels ensure your property benefits from maximum sunlight conversion throughout the year.' 
  },
  { 
    icon: 'business', 
    title: 'Commercial Services', 
    desc: 'Large-scale solar EPC services engineered for corporate energy demands. Designed to scale with your business growth while drastically reducing overhead operational costs. We manage everything from regulatory compliance to final grid synchronization.' 
  },
  { 
    icon: 'public', 
    title: 'Global Optimization', 
    desc: 'Advanced monitoring and maintenance for peak efficiency. Our remote diagnostic tools track performance metrics in real-time to identify potential issues early. We ensure your infrastructure consistently meets its projected energy output benchmarks.' 
  },
  { 
    icon: 'energy_savings_leaf', 
    title: 'Renewable Energy', 
    desc: 'Transition from traditional grids to clean, sustainable power. We help you reduce your carbon footprint while securing long-term energy price stability. Our solutions are built to support both individual environmental goals and broader corporate sustainability mandates.' 
  },
  { 
    icon: 'mode_fan', 
    title: 'Wind Turbine System', 
    desc: 'Complimentary wind energy for robust round-the-clock generation. By pairing wind capture with solar, we create a hybrid generation environment that functions regardless of time. This ensures consistent power availability even during low-light conditions.' 
  },
  { 
    icon: 'hub', 
    title: 'Hybrid Systems', 
    desc: 'Combining grid-tied efficiency and battery backup security. Gain the benefit of grid savings with the safety of seamless power transitions during outages. Our smart-inverter technology automatically switches power sources for uninterrupted service.' 
  },
  { 
    icon: 'battery_charging_full', 
    title: 'Off-Grid Systems', 
    desc: 'Complete energy independence for remote areas. Ideal for locations without reliable utility access, our systems provide total self-sufficiency through advanced storage banks. We engineer these platforms for extreme reliability and minimal maintenance.' 
  },
  { 
    icon: 'grid_on', 
    title: 'On-Grid Systems', 
    desc: 'Reduce electricity bills by feeding excess power back to the grid. Benefit from net-metering policies while maintaining a connection to traditional infrastructure. Our systems turn your roof into a revenue-generating asset.' 
  },
  { 
    icon: 'agriculture', 
    title: 'Solar Atta Chakki', 
    desc: 'Sustainable solar milling solutions for agricultural businesses. We modernize traditional milling operations by integrating solar power, significantly lowering fuel and electricity expenses. This creates a more profitable and eco-conscious production line for farmers.' 
  },
  { 
    icon: 'lightbulb', 
    title: 'Solar Street Light', 
    desc: 'Reliable standalone solar illumination for paths and communities. Featuring dusk-to-dawn sensors, these lights operate autonomously without the need for trenching or grid cabling. They enhance safety and visibility while keeping energy costs at zero.' 
  },
  { 
    icon: 'water_drop', 
    title: 'Solar Water Heater', 
    desc: 'Efficient eco-friendly hot water systems at scale. By leveraging thermal solar collectors, we provide high-volume hot water without electrical heating elements. This is an essential solution for residential complexes and industrial facilities looking to save.' 
  },
];

const Services = () => {
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
        <h1 className="text-5xl font-bold text-white mb-20 text-center">Our Services</h1>
        
        {/* Centered vertical list */}
        <div className="flex flex-col items-center gap-12">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group relative flex items-center justify-center 
                         w-60 h-60 bg-white/5 border border-white/10 rounded-full 
                         transition-all duration-700 ease-in-out cursor-pointer
                         hover:w-full hover:h-56 hover:rounded-3xl hover:bg-white/10 hover:justify-start hover:px-12"
            >
              {/* Icon - Stays visible, shifts left on hover */}
              <div className="flex flex-col items-center transition-all duration-500 group-hover:flex-row group-hover:gap-8">
                <span className="material-symbols-outlined text-6xl text-yellow-500 mb-4 group-hover:mb-0">
                  {service.icon}
                </span>
                
                <div className="flex flex-col items-center group-hover:items-start text-center group-hover:text-left">
                  <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                  
                  {/* Expanded content */}
                  <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-white/60 text-sm mb-2 line-clamp-2">{service.desc}</p>
                    <Link 
                      to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} 
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

export default Services;