import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion ,useAnimationFrame, useMotionValue, useTransform} from 'framer-motion';
// You can expand this data object as you add more products
const productData = {
  'solar-panels': {
    title: 'Solar Panels',
    bgImage:'/img/solar_2.jpg',
    intro: 'At Mohini Enterprises, we offer premium-grade Solar Panels engineered for high efficiency, durability, and performance in all weather conditions. Designed to capture maximum sunlight and convert it into usable energy, our solar panels form the foundation of every reliable solar power system. Whether you’re powering a home, a commercial facility, or an industrial plant, our panels are built using advanced photovoltaic technology that ensures long-term energy production with minimal degradation. With easy installation, strong warranties, and excellent energy conversion rates, our solar panels not only lower electricity costs but also contribute to a greener, more sustainable future.',
    specs: [
    '⚡ High Efficiency Output – Converts more sunlight into electricity for greater savings',
    '🌧️ Weather-Resistant Design – Performs reliably under heat, rain, and dust',
    '🛠️ Easy Installation – Compatible with a wide range of mounting structures and rooftops',
    '🧪 Advanced PV Technology – Built with high-grade materials for long-lasting performance',
    '♻️ Eco-Friendly Energy – Clean, renewable power that reduces your carbon footprint',
    '📉 Low Maintenance – Minimal upkeep with high durability and long service life'
  ],
    description: 'Our panels utilize advanced PERC technology to ensure optimal sunlight conversion. Engineered for durability, they withstand high wind speeds and heavy snow loads.',
  trustedCompanies: [
      { name: 'Adani Solar', logo: '/img/adani.png', desc: "India's first vertically integrated solar PV manufacturer, 4 GW cell & module capacity" },
      { name: 'Tata Power Solar', logo: '/img/tata_panel.webp', desc: 'Part of Tata Group, top rooftop EPC player for 5 consecutive years ' },
       { name: 'Vikram Solar', logo: '/img/vikram_panel.jpg', desc: '4.5 GW capacity, present in 39 countries, specialises in MonoPERC & bifacial modules ' },
        { name: 'Waaree Energies', logo: '/img/waaree_solar.jpg', desc: "India's largest solar module manufacturer, 12 GW+ capacity" }
      // ... add more for this product
    ]
  },
  'acdb-&-dcdb': {
    title: 'ACDB & DCDB',
    bgImage:'/img/acdb.png',
    intro: 'At Mohini Enterprises, our ACDB (Alternating Current Distribution Box) and DCDB (Direct Current Distribution Box) are essential components for secure and efficient power distribution in solar power systems. These advanced distribution boxes serve as critical safeguards for your electrical installations by ensuring proper current flow, protecting systems from overloads, short circuits, and electrical faults. Our ACDB and DCDB units are engineered with high-quality materials to withstand extreme conditions, offering robust protection for both AC and DC circuits. These boxes help in organizing, isolating, and controlling the flow of energy from solar panels to inverters and from inverters to your electrical grid or battery storage system. With customizable configurations, clear labeling, and easy access for maintenance, our distribution boxes are designed to keep your system running smoothly and safely.',
    specs:[ '🔒 Enhanced Safety – Protects systems from electrical faults, overloads, and short circuits',
    '⚙️ Efficient Power Distribution – Ensures smooth, controlled flow of electricity across your solar system',
    '🔧 Easy Installation & Maintenance – Simple to install and maintain with clear labels and accessible components',
    '💼 Durable Construction – Built to withstand harsh environmental conditions, including heat, dust, and moisture',
    '🌐 Customizable Options – Configurable to meet specific system requirements, whether for residential, commercial, or industrial use',
    '🔌 Integrated Protection Features – Includes fuses, circuit breakers, and isolators for added security',
    '🛡️ Compliance with Standards – Designed to meet industry safety and performance standards for reliability and longevity'
  ],
    trustedCompanies: [
      { name: 'Havells', logo: '/img/havells.jpg', desc: 'IMCBs, SPDs widely used inside solar ACDB/DCDB boxes' },
      { name: 'Schneider Electric India', logo: '/img/schneider.png', desc: 'Industrial-grade circuit breakers & protection devices' },
       { name: 'Samptel Energy', logo: '/img/samptel.png', desc: 'CPRI-approved ACDB & DCDB manufacturer (Gujarat)' },
        { name: 'Synchro Electricals', logo: '/img/synchro.jpeg', desc: 'Reliable ACDB/DCDB panels for EPC contractors across India' }
      // ... add more for this product
    ],
    description: 'Our panels utilize advanced PERC technology to ensure optimal sunlight conversion. Engineered for durability, they withstand high wind speeds and heavy snow loads.'
  },
  'wiring-&-cabling': {
    title: 'Wiring & Cabling',
    bgImage:'/img/wiring.jpg',
    intro: 'At Mohini Enterprises, we provide high-quality Wiring & Cabling designed specifically for solar power systems. Our solar-grade wires are built to withstand the rigors of outdoor environments, ensuring long-lasting, reliable performance. Made with durable, weather-resistant materials, these cables are engineered to resist the wear and tear caused by UV rays, rain, heat, and extreme temperatures. Whether you’re installing a rooftop solar system or a large-scale commercial project, our wiring and cabling solutions ensure safe, efficient energy transfer and seamless system operation. With proper insulation, corrosion resistance, and flexibility, our wires minimize energy loss and provide secure connectivity throughout the entire solar power system.',
    specs: [
      '🌦️ Weather-Resistant – Built to withstand harsh outdoor conditions, including rain, wind, and sun exposure',
      '🛡️ UV & Corrosion Protection – Long-lasting insulation that resists UV damage and rust',
      '⚡ Low Energy Loss – Optimized for minimal energy dissipation over long distances',
      '🔒 High Safety Standards – Fire-resistant materials to ensure the safety of your solar system',
      '💪 Heavy-Duty Durability – Designed for strength and durability in high-stress environments',
      '🧰 Easy to Install – Flexible and lightweight for quick and hassle-free installation',
      '💧 Waterproof – Ensures complete protection against water ingress for safe, reliable operation'
    ],
      trustedCompanies: [
      { name: 'Polycab', logo: '/img/polycab.jpg', desc: "India's largest cable brand, certified solar DC cables" },
      { name: 'RR Kabel', logo: '/img/rr.avif', desc: 'TÜV-certified UV-resistant solar wiring' },
       { name: 'KEI Industries', logo: '/img/kei.png', desc: 'New Delhi-based manufacturer offering solar & communication cables since 1968 ' },
        { name: 'Havells', logo: '/img/havells.jpg', desc: 'Trusted household & industrial wiring brand' }
      // ... add more for this product
    ],
    description: 'Our panels utilize advanced PERC technology to ensure optimal sunlight conversion. Engineered for durability, they withstand high wind speeds and heavy snow loads.'
  },
  'air-conditioners-(ac)': {
    title: 'Air Conditioners (AC)',
    bgImage:'/img/ac.webp',
    intro: 'At Mohini Enterprises, our Energy-Efficient Air Conditioners (AC) are designed to offer optimal cooling performance while being eco-friendly and cost-effective. These AC units seamlessly integrate with solar power systems, making them an excellent choice for reducing electricity consumption and maximizing the use of renewable energy. By utilizing solar energy for cooling, our air conditioners not only lower your energy bills but also contribute to a cleaner environment. Whether for residential or commercial use, our AC units are engineered for long-lasting performance, energy savings, and easy integration with existing solar systems. With advanced features like smart thermostats, silent operation, and superior cooling efficiency, you can enjoy comfortable indoor environments without compromising on sustainability.',
    specs: ['☀️ Solar-Powered Cooling – Operates using solar energy to reduce electricity costs',
      '🌱 Energy Efficiency – Low power consumption with high cooling output',
      '🧊 Superior Cooling Performance – Quick and effective temperature control for any space',
      '💡 Smart Thermostat Integration – Automatically adjusts temperature based on usage and time of day',
      '🔇 Silent Operation – Designed for quiet, comfortable cooling in homes or offices',
      '🌍 Eco-Friendly – Reduces carbon footprint and reliance on the grid',
      '🏡 Seamless Solar Integration – Easily connects with existing solar systems for greater savings',
      '🛠️ Low Maintenance – Durable and built to last with minimal upkeep'

],  trustedCompanies: [
      { name: 'Voltas', logo: '/img/voltas.jpg', desc: "India's #1 selling AC brand, widest service network (Tata Group)" },
      { name: 'Blue Star', logo: '/img/bluestar.jpg', desc: 'Premium Indian engineering, best for large rooms & commercial use ' },
       { name: 'Daikin India', logo: '/img/daikin.jpg', desc: ' Most energy-efficient AC, popular in residential & commercial' },
        { name: 'Godrej', logo: '/img/godrej.jpg', desc: 'Affordable, durable ACs suited for Indian conditions' }
      // ... add more for this product
    ],
    description: 'Our panels utilize advanced PERC technology to ensure optimal sunlight conversion. Engineered for durability, they withstand high wind speeds and heavy snow loads.'
  },
  'inverters-&-batteries': {
    title: 'Inverters & Batteries',
    bgImage:'/img/battery.jpg',
    intro: 'At Mohini Enterprises, our Inverters & Battery Storage Systems are the intelligent backbone of your energy infrastructure. Designed for maximum reliability, these systems ensure seamless power transitions, effectively bridging the gap between energy generation and consumption. By integrating high-capacity battery banks with advanced smart inverters, we provide a consistent, stable power supply that keeps your home or business running smoothly, even during grid failures or peak demand periods.',
    specs: [' 🔒 Enhanced Safety – Protects systems from electrical faults, overloads, and short circuits',
'⚙️ Efficient Power Distribution – Ensures smooth, controlled flow of electricity across your solar system',
'🔧 Easy Installation & Maintenance – Simple to install and maintain with clear labels and accessible components',
'💼 Durable Construction – Built to withstand harsh environmental conditions, including heat, dust, and moisture',
'🌐 Customizable Options – Configurable to meet specific system requirements, whether for residential, commercial, or industrial use',
'🔌 Integrated Protection Features – Includes fuses, circuit breakers, and isolators for added security',
'🛡️ Compliance with Standards – Designed to meet industry safety and performance standards for reliability and longevity'],
  trustedCompanies: [
      { name: 'Luminous', logo: '/img/luminous.jpg', desc: "India's top inverter brand, strong solar PCU range" },
      { name: ' Microtek', logo: '/img/microtek.jpg', desc: 'Affordable and reliable solar inverter solutions for homes & small businesses ' },
       { name: 'UTL Solar', logo: '/img/utl.png', desc: 'MPPT-based solar PCUs, popular for rooftop installations' },
        { name: 'Havells', logo: '/img/havells.jpg', desc: 'Expanded into solar inverters with strong brand trust and nationwide distribution ' }
      // ... add more for this product
    ],
    description: 'Our panels utilize advanced PERC technology to ensure optimal sunlight conversion. Engineered for durability, they withstand high wind speeds and heavy snow loads.'
  }
  // Add other products here...
};
const companies = [
  { name: 'TechCorp', logo: '/img/logo.png', desc: 'Optimized energy grid for their HQ.' },
  { name: 'GreenBuild', logo: '/img/wind.jpg', desc: 'Solar-integrated smart building solutions.' },
  { name: 'Global Manufacturing', logo: '/img/off.jpg', desc: 'Reduced carbon footprint by 40%.' },
];
const ProductDetail = () => {
  const { productId } = useParams();
  const product = productData[productId] || { title: 'Product Not Found', intro: 'Please check back later.' };

  return (
    <div className="min-h-screen bg-[#001e2d] px-6 text-white">
       <div className="absolute inset-0 z-0">
        <img 
          src={product.bgImage} 
          alt={product.title} 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001e2d] via-[#001e2d]/70 to-[#001e2d]"></div>
      </div>
      
      {/* Adjusted padding: pt-16 (reduced from 32) and pb-32 (increased from 20) */}
      <div className="relative z-10 pt-16 pb-32 px-6 max-w-5xl mx-auto">
        <Link to="/products" className="text-yellow-500 hover:underline mb-8 block">← Back to Products</Link>
        <h1 className="text-5xl font-bold mb-6">{product.title}</h1>
        <p className="text-xl text-white/70 mb-12">{product.intro}</p>

        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl mb-12">
          <h2 className="text-2xl font-bold mb-4">Specifications</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.specs?.map((spec, idx) => (
              <li key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                <span className="material-symbols-outlined text-yellow-500">check_circle</span>
                {spec}
              </li>
            ))}
          </ul>
        </div>
<section className="mb-12 overflow-hidden">
  <h2 className="text-3xl font-bold mb-12 text-center text-white">
    Leading Companies Using This Technology
  </h2>
  
  <div className="relative w-full overflow-hidden">
    {/* Fade effect on edges for a premium look */}
    <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#001e2d] to-transparent z-20"></div>
    <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#001e2d] to-transparent z-20"></div>

    <motion.div 
      className="flex gap-8"
      // Doubling the array items [a, b, c, d, a, b, c, d] creates the seamless loop
      animate={{ x: ["0%", "-130%"] }} 
      transition={{ 
        repeat: Infinity, 
        duration: 20, // Adjust speed here (higher = slower)
        ease: "linear" 
      }}
    >
      {[...product.trustedCompanies, ...product.trustedCompanies].map((company, idx) => (
        <div 
          key={idx} 
          className="relative group min-w-[280px] bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center transition-all duration-300 hover:border-yellow-500/50"
        >
          <img src={company.logo} alt={company.name} className="h-16 mb-4 object-contain opacity-70 group-hover:opacity-100" />
          <h3 className="text-lg font-bold text-yellow-500 mb-2">{company.name}</h3>
          
          {/* Darkening Hover Box */}
          <div className="absolute inset-0 bg-[#001e2d]/90 p-8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center z-10 border border-yellow-500/30">
            <p className="text-white text-sm font-medium leading-relaxed">{company.desc}</p>
          </div>
        </div>
      ))}
    </motion.div>
  </div>
</section>
      </div>
    </div>
  );
};
export default ProductDetail;