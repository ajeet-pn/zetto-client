import React from 'react';

const AppFooter = () => {
  return (
    <footer className="bg-[#141c2c] w-full text-white py-8">
        <div className="bg-[#141c2c] flex justify-between max-w-7xl mx-auto text-white py-8">
      <div className="">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src="/path-to-your-logo.png" alt="Zetto Logo" className="w-32" />
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="hover:text-gray-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" className="hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://youtube.com" className="hover:text-gray-400">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://telegram.org" className="hover:text-gray-400">
            <i className="fab fa-telegram-plane"></i>
          </a>
        </div>
         </div>

        {/* Footer Links */}
        <div className="flex">
          <div>
            <h5 className="font-bold">HELP</h5>
            <ul className="space-y-2">
              <li><a href="/responsible-gambling" className="hover:text-gray-400">Responsible Gambling</a></li>
              <li><a href="/terms-and-conditions" className="hover:text-gray-400">Terms and Conditions</a></li>
              <li><a href="/join-affiliate" className="hover:text-gray-400">Join as Affiliate</a></li>
              <li><a href="/download-app" className="hover:text-gray-400">Download App</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold">INFORMATION</h5>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="/rules" className="hover:text-gray-400">Rules</a></li>
              <li><a href="/blog" className="hover:text-gray-400">Zetto Blog</a></li>
              <li><a href="/sitemap" className="hover:text-gray-400">Sitemap</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold">ABOUT</h5>
            <ul className="space-y-2">
              <li><a href="/about-us" className="hover:text-gray-400">About us</a></li>
              <li><a href="/promotions" className="hover:text-gray-400">Promotions</a></li>
              <li><a href="/contact-us" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>
        </div>
     
      <div className="mt-6 border-t border-gray-600 pt-4 text-center text-xs">
        <div className="flex justify-center space-x-6">
          <img src="/path-to-your-logos/gaming-curacao.png" alt="Gaming Curacao" className="h-6" />
          <img src="/path-to-your-logos/gamcare.png" alt="GamCare" className="h-6" />
          <span className="text-gray-400">Be Gamble Aware</span>
          <span className="text-gray-400">18+</span>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default AppFooter;
