import React from 'react';

const GradientHero = ({ title, subtitle }) => {
  return (
    <div className="w-screen relative left-[50%] right-[50%] -mx-[50vw] h-screen bg-gradient-to-br from-qrio-light via-qrio-emerald to-qrio-dark-green animate-gradient bg-[length:400%_400%] flex items-center justify-center">
      <div className="text-center z-10 px-4 max-w-4xl">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
          {title}
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl text-white opacity-90 drop-shadow-lg mb-12">
          {subtitle}
        </p>
        <button 
          onClick={() => {
            const element = document.getElementById('how-it-works');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="bg-white/90 backdrop-blur-sm text-qrio-emerald px-12 py-4 rounded-full text-xl font-bold hover:scale-105 hover:bg-white hover:shadow-2xl transition-all duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GradientHero;