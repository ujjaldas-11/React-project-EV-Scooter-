import { useEffect, useState } from "react";
import {Link} from "react-router-dom"

function Slider() {
  const slides = [
    {
      id: 1,
      image:
        "https://media.istockphoto.com/id/2216661972/photo/electric-scooter-charging-at-ev-station-with-electric-vehicle-motorcycle-green-energy-urban.jpg?s=1024x1024&w=is&k=20&c=MtEvYH54k8iFaGfaJhFyXalGlmsPGQngKe0DRIkZJMs=",
      text: "Welcome to our site!",
    },
    {
      id: 2,
      image:
        "https://media.istockphoto.com/id/2029117579/photo/scooter-electric-bike-modern-transportation-3d-icon-illustration-render-design.jpg?s=1024x1024&w=is&k=20&c=eXrBVaaZJJC_OxSmoMdDultMAEZkLWHEPkjkZDQbhBQ=",
      text: "We build awesome products.",
    },
    {
      id: 3,
      image:
        "https://media.istockphoto.com/id/2029118591/photo/electric-vehicle-scooter-bike-motorcycle-parking-on-power-energy-station-3d-icon-illustration.jpg?s=1024x1024&w=is&k=20&c=_H2QjeynRB9zBwfejF9V2tUqkSvXPievRM7QMTJg4yI=",
      text: "Contact us today!",
    },
    {
      id: 4,
      image:
        "https://media.istockphoto.com/id/1587584935/photo/3d-illustration-electric-motorcycle-alternative-energy-for-the-future.jpg?s=1024x1024&w=is&k=20&c=x0iNLHmLKeEBJqNHA93GkNIZTRX5iZkFoeVMcgrndJ8=",
      text: "Contact us today!",
    },
    {
      id: 4,
      image:
        "https://media.istockphoto.com/id/1972021075/vector/scooter-3d-render-cartoon-vector-illustration-realistic-detailed-retro-vintage-classic.jpg?s=1024x1024&w=is&k=20&c=p7fBnD2eXeYPMyZrFRTnFbn2mBfIcE0u3InkGMhHMtk=",
      text: "Contact us today!",
    },
    
  ];



  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
      {/* Slider Container */}
      <div className="w-full max-w-6xl mx-auto">
        {/* Image Container with Navigation */}
        <div className="relative w-full aspect-video sm:aspect-[16/10] lg:aspect-[16/9] mb-2 sm:mb-4 lg:mb-6">
          <img
            className="w-full sm:h-[100%] md:h-[100%] lg:h-[80%] rounded-lg sm:rounded-xl lg:rounded-2xl border border-gray-300 shadow-lg object-contain"
            src={slides[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
          />
          
          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4 lg:px-6 sm:mb-10 md:mb-20 lg:mb-30">
            <button
              className="bg-white/80 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <img
                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                src="https://img.icons8.com/?size=100&id=40217&format=png&color=000000"
                alt="Previous"
              />
            </button>
            <button
              className="bg-white/80 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <img
                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-8"
                src="https://img.icons8.com/?size=100&id=7849&format=png&color=000000"
                alt="Next"
              />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-[-2] left-1/2 transform -translate-x-1/2 flex gap-2 p-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? "bg-black w-6 sm:w-8"
                    : "bg-black/50 hover:bg-gray/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 text-center mt-10">
          <Link to={'/pages/gallery'}>
          <button className="bg-gray-800 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Explore Now
          </button>
          </Link>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl px-4">
            Experience unmatched performance, efficiency, and sustainability
          </p>
        </div>
      </div>
    </div>
  );
}

export default Slider;