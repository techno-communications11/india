import React from "react";

function GeometricShapes() {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-cyan-400/30 rotate-45 animate-spin-slow"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rotate-12 animate-pulse"></div>
      <div className="absolute bottom-32 left-20 w-16 h-16 border border-cyan-300/40 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 right-32 w-20 h-20 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 transform rotate-45"></div>
    </div>
  );
}

export default GeometricShapes;
