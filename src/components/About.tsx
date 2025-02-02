import React from "react";
import ImageSlider from "./ImageSlider";

const About: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-gray-800/50 py-16 px-6 md:px-8">
      <div className="w-full max-w-[95%] md:max-w-7xl mx-auto">
        <ImageSlider />
      </div>
      {/* <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-green-400 drop-shadow-lg">
          ABOUT US
        </h2>

        <div className="flex flex-col gap-8">
          <div className="w-full">
            <div className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-xl transform -rotate-1 border border-gray-700">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                The grooviest meme token to hit the space, bro. Grinch is Pepe
                the Frog's ultimate bud, sparking up a joint venture into the
                crypto cosmos. Together, they're spreading good vibes and
                embracing the hazy wonders of decentralized finance, man. Get
                ready to ride the high wave with Grinch, blazing a trail of
                innovation and harmony.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
