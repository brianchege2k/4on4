import { useState, useEffect, useRef } from 'react';

const slides = [
  {
    image: '/img/toyota-landcruiser.png',
    caption: 'Experience Through Adventure',
    link: '#available-cars',
  },
  {
    image: 'https://via.placeholder.com/1600x500?text=Reliable+Drivers',
    caption: 'Reliable Cars & Trusted Drivers',
    link: '#drivers',
  },
  {
    image: 'https://via.placeholder.com/1600x500?text=Book+Your+Trip',
    caption: 'Book Your Trip With Ease',
    link: '#booking',
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const delta = touchStartX.current - touchEndX.current;

    if (delta > 50) {
      setCurrent((prev) => (prev + 1) % slides.length);
    } else if (delta < -50) {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="relative w-full h-[500px] select-none">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <a
            key={index}
            href={slide.link}
            className="flex-shrink-0 relative"
            style={{ width: `${100 / slides.length}%` }}
          >
            <img
              src={slide.image}
              alt={slide.caption}
              className="w-full h-[500px] object-cover"
              onLoad={(e) =>
                console.log(
                  `Image loaded: ${slide.image}, width: ${e.target.naturalWidth}, height: ${e.target.naturalHeight}`
                )
              }
              onError={() => console.error(`Failed to load image: ${slide.image}`)}
            />
            <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
                {slide.caption}
              </h2>
            </div>
          </a>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}