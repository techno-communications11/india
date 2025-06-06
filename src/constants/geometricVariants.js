 const geometricVariants = {
    rotate: {
      rotate: [0, 360],
      transition: { duration: 20, repeat: Infinity, ease: "linear" },
    },
    rotateReverse: {
      rotate: [360, 0],
      transition: { duration: 15, repeat: Infinity, ease: "linear" },
    },
    scaleRotate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
    },
    morphing: {
      borderRadius: ["20%", "50%", "80%", "50%", "20%"],
      scale: [1, 1.1, 0.9, 1.1, 1],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
    triangle: {
      rotate: [0, 120, 240, 360],
      scale: [1, 1.3, 0.8, 1],
      transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
    },
    hexagon: {
      rotate: [0, 60, 120, 180, 240, 300, 360],
      transition: { duration: 12, repeat: Infinity, ease: "linear" },
    },
    orbital: {
      rotate: [0, 360],
      transition: { duration: 25, repeat: Infinity, ease: "linear" },
    },
  };

   export default geometricVariants;