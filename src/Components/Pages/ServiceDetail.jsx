import React from 'react';
import { useParams, Link } from 'react-router-dom';

const serviceData = {
  'solar-solutions': {
    title: 'Solar Solutions',
    bgImage: '/img/solar_solutions.jpeg',
    intro: 'At Mohini Enterprises, our Solar Solutions are at the heart of our mission to build a cleaner, more energy-efficient future. We specialize in providing fully integrated solar power systems for residential, commercial, and industrial clients—designed to reduce electricity bills, minimize carbon footprints, and promote long-term energy independence. From initial consultation to final installation and post-service support, our team delivers high-quality, tailor-made solar systems backed by cutting-edge technology and industry-leading warranties. Whether you’re looking to power your home, business, or factory, we offer scalable solar solutions that are both smart and sustainable.',
    offerings: [
     { icon: 'solar_power', text: 'Complete Solar Installations – End-to-end systems including panels, inverters, and mounting structures' },
        { icon: 'draw', text: 'Custom Designs for Every Need – Tailored for residential rooftops, commercial buildings, and industrial facilities' },
        { icon: 'engineering', text: 'Expert Installation & Support – Delivered by certified professionals with ongoing maintenance options' },
        { icon: 'savings', text: 'Energy Efficiency & Cost Savings – Significantly lower electricity bills and protect against rising energy prices' },
        { icon: 'settings_input_composite', text: 'Hybrid & Battery Integration – Seamlessly add storage or combine with wind systems for 24/7 energy' },
        { icon: 'eco', text: 'Eco-Friendly Impact – Reduce your environmental footprint with clean, renewable energy' },
        { icon: 'trending_up', text: 'High ROI & Long-Term Value – Durable systems with strong warranties and rapid payback periods' }
      ]
  },
  'commercial-services': {
    title: 'Commercial Services',
    bgImage: '/img/commercial_services.webp',
    intro: 'At Mohini Enterprises, we provide specialized Commercial Solar and Energy Solutions designed to help businesses transition to clean, cost-effective power without compromising performance or reliability. Whether you’re managing a retail space, office complex, manufacturing unit, or institutional facility, our commercial services are tailored to meet the energy demands of large-scale operations. We understand the unique challenges businesses face — from rising electricity costs to sustainability goals — and offer smart, scalable systems that deliver measurable savings and long-term value. With expert project management, seamless installation, and end-to-end support, we empower organizations to reduce operational costs, improve energy efficiency, and strengthen their environmental commitments.',
    offerings: [
     { icon: 'settings_suggest', text: 'Customized Solar Power Systems – Engineered to match your business’s energy needs and usage patterns' },
      { icon: 'factory', text: 'High-Capacity Installations – Suitable for factories, warehouses, malls, office parks, and more' },
      { icon: 'analytics', text: 'Energy Audits & Consultations – Detailed assessments to maximize efficiency and ROI' },
      { icon: 'verified_user', text: 'Professional Design & Installation – Carried out by experienced engineers and certified technicians' },
      { icon: 'speed', text: 'Smart Monitoring Solutions – Real-time performance tracking and analytics for better control' },
      { icon: 'battery_std', text: 'Battery Storage & Hybrid Systems – Ensure uninterrupted power and enhanced savings' },
      { icon: 'description', text: 'Compliance & Documentation Support – Assistance with permits, subsidies, and regulatory approvals' },
      { icon: 'eco', text: 'Sustainable Business Practices – Reduce your carbon footprint and enhance your brand’s green image' }
    ]
  },
  'global-optimization': {
    title: 'Global Optimization',
    bgImage: '/img/global_opt.jpeg',
    intro: 'At Mohini Enterprises, our Global Optimization services are designed to maximize the efficiency, performance, and impact of renewable energy systems across diverse applications and geographies. Whether you’re managing a single solar installation or overseeing multiple energy assets across regions, our optimization strategies ensure that every component of your system operates at peak performance. By leveraging data analytics, intelligent monitoring, and advanced control technologies, we help our clients achieve higher energy yields, reduced operational costs, and improved long-term sustainability. Our goal is to not only deliver clean energy—but to make it smarter, more efficient, and globally scalable.',
    offerings: [
        { icon: 'monitoring', text: 'Performance Monitoring & Analytics – Real-time insights to track, evaluate, and enhance system output' },
    { icon: 'tune', text: 'Smart System Tuning – Fine-tuning components for maximum efficiency across different conditions' },
    { icon: 'cloud_queue', text: 'Solar Resource Forecasting – Predictive analysis for better energy planning and grid integration' },
    { icon: 'hub', text: 'Multi-Site Optimization – Centralized control and coordination of energy systems across various locations' },
    { icon: 'psychology', text: 'AI-Driven Energy Management – Intelligent algorithms that adapt and optimize based on real-world data' },
    { icon: 'assignment_turned_in', text: 'Operational Efficiency Audits – Identifying inefficiencies and providing actionable recommendations' },
    { icon: 'layers', text: 'Sustainable Scalability – Strategies to expand systems without compromising performance or reliability' }
  ]

  },
  'renewable-energy': {
    title: 'Renewable Energy',
    bgImage:'/img/renew.avif',
    intro: 'At Mohini Enterprises, we are proud to lead the charge in the transition toward renewable energy, offering smart, sustainable, and future-ready solutions for a cleaner planet. Our commitment goes beyond just installing systems — we help individuals, businesses, and communities embrace energy sources that are not only environmentally friendly but also economically rewarding. Through a combination of solar power, wind energy, and hybrid solutions, we provide reliable alternatives to traditional energy, reducing dependency on fossil fuels and lowering greenhouse gas emissions. Every project we undertake is tailored to the client’s unique needs, ensuring maximum efficiency, long-term performance, and meaningful environmental impact.',
    offerings: [
     { icon: 'solar_power', text: 'Solar Power Systems – High-performance solar panels, inverters, and rooftop installations for clean electricity' },
    { icon: 'mode_fan', text: 'Wind Turbine Systems – Efficient wind energy solutions designed for residential, commercial, and industrial use' },
    { icon: 'hub', text: 'Hybrid Energy Solutions – Seamless integration of solar and wind for continuous, off-grid power' },
    { icon: 'business', text: 'Industrial & Commercial Projects – Scalable energy systems to meet large-scale demands sustainably' },
    { icon: 'draw', text: 'Customized Design & Installation – Tailor-made setups based on location, energy goals, and usage patterns' },
    { icon: 'savings', text: 'Cost Reduction & Energy Independence – Save on energy bills while gaining long-term energy control' },
    { icon: 'eco', text: 'Environmental Stewardship – Reduce your carbon footprint and support global sustainability efforts' }
  ]
  },
  'wind-turbine-system': {
    title: 'Wind Turbine System',
    intro: 'At Mohini Enterprises, we are committed to delivering complete renewable energy solutions — and our Wind Turbine Systems are a powerful step in that direction. By capturing the natural energy of the wind, our systems offer a reliable, efficient, and eco-friendly source of electricity for residential, commercial, and industrial applications. Built to perform in diverse environmental conditions, our wind energy solutions are engineered for maximum efficiency, long-term durability, and seamless integration with solar setups. Whether used independently or as part of a hybrid system, wind power helps reduce energy costs, increase sustainability, and provide greater energy independence.',
   bgImage:'/img/wind.jpg',
    offerings: [
     { icon: 'speed', text: 'Efficient Energy Generation – Delivers consistent power even in moderate wind zones' },
    { icon: 'business_center', text: 'Versatile Applications – Suitable for homes, businesses, farms, and industrial sites' },
    { icon: 'hub', text: 'Hybrid-Ready – Easily integrates with solar systems for continuous energy supply' },
    { icon: 'shield', text: 'Robust & Weather-Resistant – Designed to withstand extreme weather conditions' },
    { icon: 'trending_up', text: 'Low Maintenance & High ROI – Long lifespan with minimal upkeep costs' },
    { icon: 'eco', text: 'Eco-Friendly Power – Zero emissions, quiet operation, and reduced carbon footprint' }
  ]
  },
  'hybrid-systems': {
    title: 'Hybrid Systems',
    intro: 'At Mohini Enterprises, we offer innovative solar energy solutions to meet the evolving needs of our clients. One such cutting-edge solution is our Hybrid Solar Panel System, which seamlessly combines the advantages of both on-grid and off-grid systems. This advanced setup allows users to draw power from solar panels during the day, store excess energy in batteries, and switch to grid electricity when needed—ensuring a consistent, uninterrupted power supply. Ideal for areas with frequent outages or those seeking greater energy independence, our hybrid systems are designed to deliver maximum efficiency, flexibility, and reliability. Whether for residential, commercial, or industrial use, this solution provides the perfect balance between sustainability and practicality.',
    bgImage:'/img/solar_2.jpg',
    offerings: [
      { icon: 'settings_input_composite', text: 'Dual Power Source – Combines solar and grid power for 24/7 energy availability' },
    { icon: 'battery_alert', text: 'Backup During Outages – Battery storage keeps your home or business powered during blackouts' },
    { icon: 'savings', text: 'Optimized Energy Savings – Use solar when it’s available, fall back on grid only when necessary' },
    { icon: 'tune', text: 'Smart Energy Management – Automatic switching and intelligent load balancing' },
    { icon: 'draw', text: 'Customizable Design – Tailored setups based on your energy needs and usage patterns' },
    { icon: 'eco', text: 'Environmentally Friendly – Reduce your carbon footprint while maintaining energy security' },
    { icon: 'trending_up', text: 'High Return on Investment – Save more over time with reduced energy bills and increased self-reliance' }
  ]
  },
  'off-grid-systems': {
    title: 'Off-Grid Systems',
    intro: 'At Mohini Enterprises, we offer a range of advanced solar energy solutions tailored to the unique needs of our clients — including highly reliable Off-Grid Solar Systems. These standalone systems are perfect for locations where access to the electricity grid is limited or unavailable, providing complete energy independence and uninterrupted power. Off-grid solar systems convert sunlight into electricity, which is then stored in high-capacity batteries for use at any time — day or night, regardless of weather conditions. Whether you’re powering a remote home, a farm, a small business, or a backup energy system, off-grid solar technology ensures reliable performance, cost savings, and zero emissions. Our team works closely with each client to design and install fully customized systems that deliver clean, consistent energy — even in the most remote areas.',
   bgImage:'/img/off.jpg',
    offerings: [
      { icon: 'explore', text: 'Independent Power Supply – Ideal for remote areas without access to the grid' },
    { icon: 'schedule', text: '24/7 Electricity – Stores solar power in batteries for round-the-clock use' },
    { icon: 'verified', text: 'Reliable Backup – Perfect as an emergency power solution during outages' },
    { icon: 'payments', text: 'No Monthly Bills – Eliminate electricity bills with self-sustained energy' },
    { icon: 'draw', text: 'Custom Design & Installation – Tailored systems to meet your exact needs' },
    { icon: 'eco', text: 'Eco-Friendly Operation – Clean energy with zero emissions or fuel use' },
    { icon: 'build', text: 'Low Maintenance – Built for durability with minimal upkeep' }
  ]
  },
  'on-grid-systems': {
    title: 'On-Grid Systems',
    intro: 'At Mohini Enterprises, we are dedicated to providing our clients with a variety of solar energy solutions that promote sustainability, efficiency, and long-term savings. One of our most popular offerings is the On-Grid Solar System, which connects directly to the utility power grid. This system is ideal for residential, commercial, and industrial applications where reducing electricity bills and maximizing energy efficiency are top priorities. By generating electricity during the day and using the grid as backup at night or during low-sunlight periods, the on-grid system ensures seamless power availability. It also enables net metering, allowing users to export excess energy back to the grid in exchange for credits — making solar not just smart, but profitable. With expert installation, high-quality components, and ongoing support, Mohini Enterprises ensures that your transition to solar is smooth, reliable, and rewarding.',
    bgImage:'/img/solar_hero.webp',
    offerings: [
      { icon: 'payments', text: 'Lower Electricity Bills – Generate your own power and reduce reliance on the utility grid' },
    { icon: 'swap_horiz', text: 'Net Metering Advantage – Earn credits by exporting surplus energy back to the grid' },
    { icon: 'apartment', text: 'Ideal for Urban Areas – Perfect for homes, offices, and commercial buildings with stable grid access' },
    { icon: 'build', text: 'Low Maintenance – Fewer components and no battery storage make upkeep minimal' },
    { icon: 'flash_on', text: 'Seamless Power Supply – Use solar power during the day and grid power when needed' },
    { icon: 'trending_up', text: 'High Return on Investment – Benefit from government subsidies and long-term savings' },
    { icon: 'eco', text: 'Environmentally Friendly – Reduce your carbon footprint by switching to clean, renewable energy' }
  ]
},
  'solar-atta-chakki': {
    title: 'Solar Atta Chakki',
    intro: 'At Mohini Enterprises, we are proud to offer the innovative Solar Aata Chakki, a smart and sustainable solution for flour milling powered entirely by solar energy. Designed with rural and semi-urban communities in mind, this system harnesses sunlight through high-efficiency solar panels to generate electricity. The energy is stored in batteries, ensuring uninterrupted operation even during non-sunny hours. The stored power runs a durable and efficient grinding mechanism that mills wheat into fresh, high-quality flour — all without relying on the traditional power grid. With zero fuel consumption and minimal environmental impact, the Solar Aata Chakki not only supports clean energy use but also promotes self-sufficiency and cost savings for users. It’s an ideal solution for households, small businesses, and community-based flour processing setups.',
    bgImage:'/img/atta.jpg',
    offerings: [
     { icon: 'wb_sunny', text: 'Solar-Powered Operation – Utilizes sunlight to generate clean, renewable electricity' },
    { icon: 'battery_std', text: 'Battery Backup System – Ensures continuous grinding even during cloudy weather or at night' },
    { icon: 'grain', text: 'Fresh Flour On Demand – Produces high-quality flour from wheat and other grains' },
    { icon: 'build', text: 'Low Maintenance Design – Built with robust components for long-lasting performance' },
    { icon: 'payments', text: 'Cost-Effective – Reduces or eliminates electricity bills and fuel costs' },
    { icon: 'eco', text: 'Eco-Friendly & Sustainable – No carbon emissions or reliance on fossil fuels' },
    { icon: 'landscape', text: 'Ideal for Rural & Off-Grid Areas – Perfect for homes, villages, or small-scale entrepreneurs' }
  ]
  },
  'solar-street-light': {
    title: 'Solar Street Light',
    intro: 'At Mohini Enterprises, our Solar Street Light solutions are designed to offer reliable, energy-efficient outdoor lighting that operates entirely off the grid. These smart lighting systems are ideal for streets, pathways, parking lots, and public spaces where traditional wiring can be challenging or costly. Each unit consists of a solar panel, battery, LED light, and controller — working together to provide seamless, automated illumination. During the day, the solar panel captures sunlight and converts it into electrical energy, which is stored in the battery. As night falls, the LED light automatically switches on using the stored energy, providing bright and consistent lighting throughout the night. The intelligent controller regulates charging and lighting times, ensuring efficient operation and energy conservation. With no electricity bills, low maintenance, and a long service life, solar street lights are a smart investment for safer, greener communities.',
    bgImage:'/img/solar_3.webp',
    offerings: [
     { icon: 'wb_sunny', text: 'Solar-Powered Operation – No dependency on the grid; harnesses free, renewable energy from the sun' },
    { icon: 'battery_std', text: 'Efficient Energy Storage – High-capacity batteries store power for consistent nighttime lighting' },
    { icon: 'brightness_6', text: 'Automatic On/Off Functionality – Lights turn on at dusk and off at dawn without manual control' },
    { icon: 'settings', text: 'Smart Controller System – Manages charging cycles and light performance for optimal efficiency' },
    { icon: 'lightbulb', text: 'High-Quality LED Illumination – Bright, energy-saving LEDs with long lifespan and low power usage' },
    { icon: 'build', text: 'Easy Installation & Low Maintenance – No trenching or wiring required; minimal upkeep needed' },
    { icon: 'eco', text: 'Eco-Friendly & Cost-Effective – Zero emissions, reduced electricity costs, and long-term savings' }
  ]
  },
  'solar-water-heater': {
    title: 'Solar Water Heater',
    intro: 'At Mohini Enterprises, our Solar Water Heater systems offer a smart, energy-efficient solution for heating water using the power of the sun. Designed for both residential and commercial use, these systems use advanced solar collectors that are strategically installed on rooftops or sun-facing areas to capture maximum sunlight. The energy from the sun is absorbed by the collector and transferred to a fluid — typically water or antifreeze — which is then circulated through a heat exchanger to warm the water in the storage tank. This eco-friendly technology reduces dependency on electricity or gas, cuts down utility bills, and contributes to a cleaner environment. With a focus on durability, performance, and cost-effectiveness, our solar water heating solutions are ideal for households, hotels, hospitals, and industries looking to adopt sustainable practices without compromising on comfort.',
    bgImage:'/img/heater.jpg',
    offerings: [
      { icon: 'water_drop', text: 'Efficient Heating – Harnesses solar energy to provide consistent hot water supply' },
    { icon: 'corporate_fare', text: 'Versatile Applications – Perfect for homes, commercial kitchens, hospitals, and more' },
    { icon: 'payments', text: 'Cost Savings – Reduces electricity or gas bills significantly over time' },
    { icon: 'eco', text: 'Eco-Friendly Operation – Minimizes carbon emissions and environmental impact' },
    { icon: 'build', text: 'Low Maintenance – Simple system design ensures long-term reliability' },
    { icon: 'cloud', text: 'All-Weather Performance – Works efficiently even on cloudy days with backup options' },
    { icon: 'ac_unit', text: 'Freeze Protection – Uses antifreeze-based systems in colder climates for year-round use' },
    { icon: 'trending_up', text: 'Quick Payback Period – Long-lasting systems that deliver fast return on investment' }
  ]
  }
  // Add other service keys (renewable-energy, wind-turbine-system, etc.) here
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const data = serviceData[serviceId];

  // Fallback for missing services
  if (!data) {
    return (
      <div className="min-h-screen bg-[#001e2d] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Service Under Construction</h1>
          <Link to="/services" className="text-secondary-container underline">Back to All Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-[#001e2d] overflow-hidden">
      
      {/* 1. Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={data.bgImage} 
          alt={data.title} 
          className="w-full h-full object-cover opacity-70" // Adjust opacity here
        />
        {/* 2. Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001e2d] via-[#001e2d]/70 to-[#001e2d]"></div>
      </div>

      {/* 3. Content Layer */}
      <div className="relative z-10 pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <Link 
          to="/services" 
          className="inline-flex items-center text-secondary-container mb-8 hover:gap-2 transition-all font-medium"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Services
        </Link>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          {data.title}
        </h1>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Side: Intro */}
          <div className="lg:col-span-2">
            <p className="text-xl text-white/90 leading-relaxed mb-10 bg-black/20 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
              {data.intro}
            </p>

            <h3 className="text-2xl font-bold mb-6 text-secondary-container">Key Offerings</h3>
            <div className="space-y-4">
              {data.offerings.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white/5 p-5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined text-secondary-container text-3xl">
                    {item.icon}
                  </span>
                  <p className="text-lg text-white/80">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: CTA Card */}
          <div className="lg:col-span-1">
            <div className="bg-secondary-container/10 border border-secondary-container/20 p-8 rounded-3xl backdrop-blur-md sticky top-32">
              <h4 className="text-xl font-bold text-white mb-4">Interested in this service?</h4>
              <p className="text-white/60 mb-8 text-sm">Our experts are ready to help you transition to sustainable energy.</p>
              
              <div className="space-y-4">
                <a href="tel:+916394858689" className="flex items-center justify-center gap-2 w-full py-4 bg-secondary-container text-[#001e2d] font-bold rounded-xl hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined">call</span> Call Now
                </a>
                <Link to="/contact-us" className="flex items-center justify-center w-full py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors">
                  Enquire Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;