import React from 'react';
// --- CHANGE 1: Import Youtube, remove Twitter (and Camera, which was unused) ---
import { Instagram, Facebook, Mail, Phone, MapPin, Heart, Youtube } from 'lucide-react';

export default function Footer() {
  // Define the phone number and the pre-filled message
  const phoneNumber = '919921371016'; // Number without '+' or spaces
  const whatsappMessage = 'I want to know more';
  
  // URL-encode the message
  const encodedMessage = encodeURIComponent(whatsappMessage);
  
  // Construct the WhatsApp link
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;


  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              
              <h3 className="text-2xl font-bold" style={{ fontFamily: 'Cinzel, serif',color: '#FFD700' }}>Shree Production Films</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Capturing life's most precious moments with artistic vision and professional excellence. 
              Every frame tells a story worth preserving.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/shree_pro" 
                className="w-10 h-10 bg-accent hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-accent-foreground hover:text-white transition-colors duration-300" />
              </a>
              <a 
                href="https://www.facebook.com/shreepro007/" 
                className="w-10 h-10 bg-accent hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-accent-foreground hover:text-white transition-colors duration-300" />
              </a>
              {/* --- CHANGE 2: Replaced Twitter with Youtube --- */}
              <a 
                href="https://www.youtube.com/@shreeproductionfilmskolhap4145" // Update this href to your YouTube channel link
                className="w-10 h-10 bg-accent hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-accent-foreground hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold" style={{ fontFamily: 'Cinzel, serif' }}>Our Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                  Wedding Photography
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                  Pre-Wedding Sessions
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                  Event Photography
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                  Portrait Sessions
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                  Calligraphy Services
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                  Videography
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold" style={{ fontFamily: 'Cinzel, serif' }}>Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-primary-foreground/80">BONDRENAGAR PHULEWADI RINGROAD</p>
                  <p className="text-primary-foreground/80">KOLHAPUR-416010</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                {/* *** CHANGE HERE: Updated href to use the WhatsApp API link with pre-filled message *** */}
                <a 
                  href={whatsappLink} 
                  target="_blank" // Opens in a new tab
                  rel="noopener noreferrer" // Security best practice
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                >
                  +91 99213 71016
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:shreeporduction007@gmail.com" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                  shreeporduction007@gmail.com
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            {/* <div className="mt-8">
              <h5 className="font-semibold mb-3" style={{ fontFamily: 'Cinzel, serif' }}>Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 border border-primary-foreground/20 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
                <button className="px-6 py-3 bg-accent hover:bg-accent/80 text-accent-foreground rounded-r-lg transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <p className="text-primary-foreground/60">
                © 2025 SPF Photography. All rights reserved.
              </p>
              <Heart className="w-4 h-4 text-accent" />
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <a href="meandai.vercel.app" className="text-primary-foreground/60 hover:text-accent transition-colors duration-200">
                Website created by @MEandAI.
              </a>
              
            </div>
          </div>
          
          
        </div>
      </div>
    </footer>
  );
}
