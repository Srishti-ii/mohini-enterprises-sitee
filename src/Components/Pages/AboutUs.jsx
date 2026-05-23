import React from 'react';

const AboutUs = () => {
  return (
<div className="bg-gradient-to-b from-[yellow-500] via-[#002a3d] to-[#001e2d] text-white min-h-screen">      
      {/* Hero Section (Isolated background) */}
      <section className="relative min-h-[80vh] w-full pt-32 pb-16 px-6 bg-[#001e2d]">
        <video 
          autoPlay loop muted playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="/videos/video.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Headlines & Contact */}
          <div>
            <p className="text-white/70 font-medium mb-4">Your Trusted Partner in Clean Energy</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-12 leading-tight text-yellow-400">
              Affordable, Efficient,<br></br>and Customized Solar Power Systems Built for the Future
            </h1>
            
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-secondary-container">mail</span>
                <p>info@mohinisolar.co.in</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-secondary-container">phone_iphone</span>
                <p>+91 6394858689</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary-container mt-1">location_on</span>
                <p className="max-w-xs">Mohammad Zai, Infront of Bank of Baroda, Mandi, Shahjahanpur U.P. – 242001</p>
              </div>
            </div>
          </div>

          {/* Right Column: Feature Icons Grid */}
          <div className="grid grid-cols-3 gap-6 lg:mt-0 mt-12">
            {[
              { icon: 'compost', label: 'Environmental Sensitivity' },
              { icon: 'solar_power', label: 'Personalized Solutions' },
              { icon: 'tune', label: 'Performance Measures' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl border border-white/20 flex items-center justify-center mb-4 hover:border-secondary-container transition-colors">
                  <span className="material-symbols-outlined text-3xl text-secondary-container">{item.icon}</span>
                </div>
                <p className="text-sm font-bold leading-tight">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT CONTENT & IMAGE GRID --- */}
<section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
          <h2 className="text-4xl font-bold mb-8">About Mohini Enterprises</h2>
          <div className="space-y-6 text-white/70 leading-relaxed">
            <p><strong>Mohini Enterprises</strong> is a leading provider of comprehensive solar energy solutions, dedicated to advancing the transition to clean, sustainable, and cost-effective power. Founded with a vision to make renewable energy widely accessible, we specialize in designing, supplying, and installing high-performance solar systems for residential, commercial, and industrial applications.</p>
            <p>With a strong focus on <strong>quality, innovation, and customer-centric service</strong>, we deliver customized solar solutions that reduce energy costs, decrease carbon footprints, and promote long-term energy independence. Our offerings include solar panels, inverters, rooftop systems, and complete project execution, supported by advanced technology and a skilled team of professionals.</p>
          </div>
          <a 
  href="tel:+916394858689" 
  className="mt-8 inline-block bg-secondary-container text-[#001e2d] px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform text-center"
>
  BOOK A CALL NOW
</a>
        </div>
        
        {/* Overlapping Images */}
        <div className="relative h-[500px]">
          <img src="/img/about2.jpg" className="absolute top-0 right-0 w-[80%] h-[300px] object-cover rounded-2xl shadow-2xl" alt="Solar" />
          <img src="/img/about1.webp" className="absolute bottom-0 left-0 w-[80%] h-[300px] object-cover rounded-2xl shadow-2xl" alt="Wind" />
        </div>
      </section>

     {/* Mission & Vision - Updated to use glass-card instead of bg-white/5 */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 mb-20">
        <div className="p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm">
          <h3 className="text-3xl font-bold mb-6 text-yellow-400">Our Mission</h3>
          <p className="text-white/70 leading-relaxed">At Mohini Enterprises, our mission is to provide reliable, affordable, and innovative solar energy solutions that empower businesses, homeowners, and communities to reduce their energy costs and carbon footprints while embracing a cleaner, sustainable future.</p>
        </div>
        <div className="p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm">
          <h3 className="text-3xl font-bold mb-6 text-yellow-400">Our Vision</h3>
          <p className="text-white/70 leading-relaxed">Our vision is to be a leading provider of renewable energy solutions, helping individuals and organizations transition to solar power by offering cutting-edge technology, exceptional service, and impactful solutions that contribute to a greener planet.</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;