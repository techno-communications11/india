"use client";
import React, { useState, useEffect } from 'react';
import GeometricShapes from '@/utils/GeometricShapes';
import textVariations from '@/constants/textVariations';

function LandingHeader() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentText, setCurrentText] = useState(0);

  const handleClick = () => {
    const contactSection = document.getElementById("about");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textVariations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
      
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(59, 130, 246, 0.4) 0%, transparent 60%)`
        }}
      />
      
      <GeometricShapes/>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-8">
        <div className="grid grid-cols-12 gap-px h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-blue-400/10"></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-2 max-w-6xl mx-auto mt-25">
        {/* Animated WE */}
        <div className="relative mb-8">
          <h1 className="text-9xl sm:text-[12rem] lg:text-[15rem] font-black tracking-tighter">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                WE
              </span>
              {/* Glowing Effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent blur-2xl opacity-60 animate-pulse">
                WE
              </span>
            </span>
          </h1>
          
          {/* Dynamic Underline */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-lg shadow-blue-500/50"></div>
        </div>

        {/* Dynamic Subtitle */}
        <div className="relative h-20 mb-12">
          <h2 className="absolute inset-0 text-3xl sm:text-4xl lg:text-5xl font-bold text-white opacity-0 animate-fade-in-out drop-shadow-lg">
            <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
              {textVariations[currentText]}
            </span>
          </h2>
        </div>

        {/* Floating Concept Tags */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            "Innovation", "Excellence", "Reliability", "Growth", 
            "Leadership", "Solutions", "Partnership", 
            "Technology", "Vision", "Success"
          ].map((concept, index) => (
            <div
              key={concept}
              className="px-4 py-2 bg-slate-900/70 backdrop-blur-sm border border-blue-400/40 rounded-full text-blue-200 text-sm hover:bg-blue-500/20 hover:border-blue-300/60 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'float 3s ease-in-out infinite'
              }}
            >
              {concept}
            </div>
          ))}
        </div>

        {/* Pulsing CTA */}
        <div className="relative mb-8">
          <button 
            onClick={handleClick} 
            className="group relative px-12 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 border border-blue-400/30"
          >
            <span className="relative z-10 drop-shadow-sm">Discover Our Vision</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full border-2 border-blue-400/60 animate-ping"></div>
          <div className="absolute inset-0 rounded-full border border-indigo-400/40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Company Name */}
        <div className="text-blue-200/80 text-lg font-light tracking-widest drop-shadow-sm">
          TECHNO COMMUNICATIONS GLOBAL PVT LTD
        </div>
      </div>

      {/* Side Accent Lines */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-blue-400 to-transparent shadow-lg shadow-blue-400/50"></div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-indigo-400 to-transparent shadow-lg shadow-indigo-400/50"></div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fade-in-out {
          0%, 100% { opacity: 0; transform: translateY(10px); }
          20%, 80% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-fade-in-out {
          animation: fade-in-out 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default LandingHeader;