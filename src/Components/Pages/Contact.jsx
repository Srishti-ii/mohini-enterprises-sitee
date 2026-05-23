import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#001e2d]/30 pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-2">Proprietor : Nandani Verma</h2>
          <div className="w-20 h-1 bg-cyan-500"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 shadow-2xl rounded-2xl overflow-hidden">
          {/* Left Side: Form */}
          <div className="bg-white p-10 md:p-16">
            <h1 className="text-4xl font-bold mb-8">Get In Touch</h1>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                  <input type="text" placeholder="Your name here" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Email *</label>
                  <input type="email" placeholder="Your email here" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Subject *</label>
                <input type="text" placeholder="Your subject here" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
                <input type="tel" placeholder="Your phone number here" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea rows="4" placeholder="Tell us a few words" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
              </div>
              <button className="w-full md:w-auto bg-cyan-500 text-white px-10 py-4 rounded-lg font-bold hover:bg-blue-700 transition-all">
                SEND MESSAGE
              </button>
            </form>
          </div>
{/* Right Side: Contact Details with Background Image */}
          <div 
            className="text-white p-16 flex flex-col justify-center relative bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `linear-gradient(rgba(26, 45, 57, 0.9), rgba(26, 45, 57, 0.9)), url('/img/contact.webp')` 
            }}
          >
            {/* Dark tint overlay for text readability (handled by gradient in style) */}
            
            <div className="relative z-10"> {/* Ensures content sits above the gradient/image */}
              <h2 className="text-3xl font-bold mb-6">Our Contact Detail</h2>
              <p className="text-white/70 mb-12">Need any consultations? Contact us.</p>
              
              <div className="space-y-10">
                <div>
                  <h4 className="font-bold text-lg mb-2">Phone Number</h4>
                  <p className="text-white/70">+91 6394858689<br/>+91 9532598584</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Email Address</h4>
                  <p className="text-white/70">info@mohinisolar.co.in<br/>mohinisolar80@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Location</h4>
                  <p className="text-white/70">Mohammad Zai, Infront of Bank of Baroda, Mandi, Shahjahanpur U.P.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;