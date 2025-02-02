import React, { useEffect, useState } from "react";

interface Image {
  url: string;
  alt: string;
}

const ImageSlider: React.FC = () => {
  const images: Image[] = [
    { url: "/slide1.jpg", alt: "Slide 1" },
    { url: "/slide 3.jpg", alt: "Slide 2" },
    { url: "/slide2.jpg", alt: "Slide 3" },
    // Add more images as needed
  ];

  const [sliderImages, setSliderImages] = useState<Image[]>([]);

  useEffect(() => {
    // Duplicate the images array to create the infinite effect
    setSliderImages([...images, ...images]);
  }, []);

  return (
    <div className="w-full overflow-hidden relative">
      <div className="flex animate-infiniteSlide">
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className="w-[280px] h-[180px] md:w-[320px] md:h-[200px] mx-3 flex-shrink-0"
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
