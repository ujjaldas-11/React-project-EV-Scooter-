import React from 'react';

function Footer() {
  return (
    <footer id="contact" className="bg-[#1F2937] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-blue-300 mb-3">Future EV's</h3>
            <p className="text-sm text-gray-400">
              Leading the way in sustainable electric mobility. Experience the future of transportation today.
            </p>
          </div>
          
          {/* Product Section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#specs" className="hover:text-white transition-colors">Specifications</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          {/* Company Section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Support Section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; 2024 Future EV's. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-sm">
            <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;