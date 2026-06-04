import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#00141e] border-t border-white/5 py-16 relative ">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
          <img src="/img/logo.png" alt="Mohini Enterprises Logo" className="h-12 w-12" />
              <h2 className="font-display text-2xl font-bold text-yellow-500">Mohini Enterprises</h2>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Mohini Enterprises is a trusted provider of solar and wind energy solutions, offering end-to-end services for homes, businesses, and industries. We are committed to delivering smart, sustainable power systems that reduce costs and support a greener future.
            </p>
          </div>
      
          {/* Contact & Socials */}
          <div className="space-y-8">
            <h4 className="text-sm text-yellow-500 font-bold uppercase tracking-widest">Contact Us</h4>
            
            <div className="text-white/70 text-sm space-y-4">
              <p><span className="font-bold text-white">Address:</span><br/>Mohammad Zai, Infront of Bank of Baroda, Mandi, Shahjahanpur U.P. – 242001.</p>
              <p><span className="font-bold text-white">Mail:</span> mohinienterprises80@gmail.com</p>
              <p><span className="font-bold text-white">Phone:</span> +916394858689, +919532598584
</p>
         
              <p><span className="font-bold text-white">Proprietor:</span> Nandani Verma</p>
            </div>

            {/* Social Media Logos */}
            <div className="flex items-center gap-4 pt-2">
            <a 
  href="https://www.instagram.com/mohinienterprises80?igsh=Y3pyYXZjZjhsZWFv" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-yellow-500 transition-all"
>
  <img src="/img/ig.png" alt="Instagram" className="w-full h-full object-contain" />
</a>

<a 
  href="https://www.facebook.com/share/197dDVePpf/" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-yellow-500 transition-all"
>
  <img src="/img/meta.png" alt="Facebook" className="w-full h-full object-contain" />
</a>

<a 
  href="https://youtube.com/@mohinienterprises80?si=M-Pg4wvc-BRcky5H" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-yellow-500 transition-all"
>
  <img src="/img/youtube.webp" alt="YouTube" className="w-full h-full object-contain" />
</a>
            </div>
          </div>
        </div>

        {/* Thin Glowing Divider Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent my-8"></div>

        {/* Copyright Section */}
        <div className="text-center text-white/40 text-xs tracking-wider">
          © All Copyright Reserved by Mohini Enterprises | Developed by Srishti Srivastava
        </div>
      </div>
    </footer>
  );
};

export default Footer;