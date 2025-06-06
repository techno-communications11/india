 const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.5 },
    }),
  };

  const rippleVariants = {
    pulse: {
      scale: [1, 1.5, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const floatVariants = {
    float: {
      y: [-10, 10, -10],
      x: [0, 5, 0],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  export { textVariants, rippleVariants, floatVariants };