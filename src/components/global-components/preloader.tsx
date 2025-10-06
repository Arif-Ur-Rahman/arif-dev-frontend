'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // You can replace this with actual page loading logic
    const handleLoad = () => {
      setIsLoading(false);
      setTimeout(() => setIsVisible(false), 800);
    };

    // If page is already loaded
    if (document.readyState === 'complete') {
      setTimeout(handleLoad, 1000);
    } else {
      window.addEventListener('load', handleLoad);
      // Fallback
      setTimeout(handleLoad, 3000);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-all duration-700 ${
      isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      
      {/* Animated SVG Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg 
          viewBox="0 0 1000 1000" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          <path
            className="fill-current text-purple-800 transition-all duration-1000 ease-out"
            d={isLoading ? "M0,1005S175,995,500,995s500,5,500,5V0H0Z" : "M0,1005S175,995,500,500s500-505,500-505V0H0Z"}
          />
        </svg>
      </div>

      {/* Animated Text */}
      <div className="preloader-heading relative z-10">
        <div className="load-text flex space-x-2 md:space-x-3">
          {['L', 'o', 'a', 'd', 'i', 'n', 'g'].map((letter, index) => (
            <span
              key={index}
              className={`text-4xl md:text-6xl font-bold text-white transition-all duration-300 ${
                isLoading ? 'animate-bounce' : 'opacity-0 scale-50'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>
        
        {/* Loading Bar */}
        <div className="mt-8 w-48 h-1 bg-white/30 rounded-full overflow-hidden">
          <div 
            className={`h-full bg-white rounded-full transition-all duration-2000 ease-out ${
              isLoading ? 'w-0' : 'w-full'
            }`}
            style={{
              transition: isLoading ? 'none' : 'width 2s ease-out'
            }}
          />
        </div>
      </div>
    </div>
  );
}