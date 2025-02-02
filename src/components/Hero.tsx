import React, { useState } from "react";
import Banner from "../assets/banner.jpg";
import { FaXTwitter, FaTelegram } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa";

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "000000000000000000000"; // Replace with actual address

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="min-h-[80vh] w-full bg-gradient-to-br from-gray-900/50 via-gray-800/50 to-gray-900/50 flex justify-center items-center px-6 md:px-8 py-4">
      <div className="w-full max-w-[95%] md:max-w-4xl mx-auto">
        <div className="relative bg-yellow-100 transform rotate-2 p-6 md:p-8 rounded-lg shadow-2xl border-2 border-yellow-200 animate-float mb-[100px] mt-[20px]">
          {/* Top Peg */}
          <div className="absolute -top-3 left-1/4 w-12 h-4 bg-red-500 rounded-lg shadow-md transform -rotate-2" />
          {/* Bottom Peg */}
          <div className="absolute -bottom-3 right-1/4 w-12 h-4 bg-red-500 rounded-lg shadow-md transform -rotate-2" />

          <div className="transform -rotate-2">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-green-700 mb-4 text-center drop-shadow-sm">
              FUCKING RETARDED SOL
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 text-center">
              Amid the recent market dump, Solana has been the most retarded
              shit. Fuck Sol, XRP is our next Bitcoin!
            </p>

            {/* Contract Address */}
            <div className="bg-gray-100 p-3 rounded-lg mb-6 flex items-center justify-between">
              <div className="text-sm text-gray-600 truncate">
                {contractAddress}
              </div>
              <button
                onClick={handleCopyAddress}
                className="ml-2 p-2 hover:bg-gray-200 rounded-lg transition-all"
              >
                {copied ? (
                  <span className="text-green-600 text-sm">Copied!</span>
                ) : (
                  <FaCopy className="text-gray-500 hover:text-gray-700" />
                )}
              </button>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-all text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                BUY $FRS
              </button>
              <button className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 text-green-400 px-6 py-3 rounded-lg transition-all text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                HOW TO BUY $FRS
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <a
                href="https://x.com/frsonxrp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-700 hover:text-blue-400 transition-colors"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://t.me/frsonxrp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-700 hover:text-blue-500 transition-colors"
              >
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>
        <img
          src={Banner}
          alt="Banner"
          className="w-full max-w-[90%] mx-auto rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
};

export default Hero;
