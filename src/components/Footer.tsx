import React from "react";
import { FaXTwitter, FaTelegram } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-gray-900/80 to-black py-12 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo/Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-green-400 mb-4">$FRS</h3>
            <p className="text-gray-400">
              The most based token in the crypto space
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-xl font-semibold text-green-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Buy Now
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Chart
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-semibold text-green-400 mb-4">
              Community
            </h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://x.com/frsonxrp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors text-2xl"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://t.me/frsonxrp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors text-2xl"
              >
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© 2025 $FRS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
