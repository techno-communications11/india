"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

import { motion } from "framer-motion";
import services from "@/constants/services";
import { floatVariants, rippleVariants, textVariants } from "@/utils/animationVariants";
import GeometricShapes from "@/utils/GeometricShapes";


const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [expandedService, setExpandedService] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const fadeInUp = `transform transition-all duration-1000 ${
    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
  }`;

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div
      id="services"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"
          variants={rippleVariants}
          animate="pulse"
        />
        <motion.div
          className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"
          variants={rippleVariants}
          animate="pulse"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute bottom-20 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl"
          variants={rippleVariants}
          animate="pulse"
          transition={{ delay: 2 }}
        />
        <motion.div
          className="absolute top-10 right-40 w-16 h-16 border-2 border-cyan-400/50 rotate-45"
          variants={floatVariants}
          animate="float"
        />
        <motion.div
          className="absolute bottom-10 left-60 w-12 h-12 bg-cyan-400/30 rounded-full"
          variants={floatVariants}
          animate="float"
          transition={{ delay: 0.5 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)`,
          }}
        />
      </div>

    

      {/* Services Section */}
      <section className="py-20 px-6">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`,
          }}
        />

        {/* Floating Geometric Shapes */}
       <GeometricShapes/>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-px h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-cyan-300/20"></div>
            ))}
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <motion.div
            className={`${fadeInUp} delay-200 text-center mb-16`}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={0}
          >
            <motion.h2
              className="text-5xl font-bold mb-6"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {"Explore Our Solutions".split("").map((char, i) => (
                <motion.span key={i} variants={textVariants} custom={i}>
                  {char}
                </motion.span>
              ))}
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              variants={textVariants}
              custom={1}
            >
              From payroll to web development, our services are tailored to meet
              your unique business needs.
            </motion.p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`${fadeInUp} group transition-all duration-500`}
                style={{ animationDelay: `${index * 100}ms` }}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                custom={index}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                }}
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500">
                  <motion.div
                    className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300"
                    variants={floatVariants}
                    animate="float"
                  >
                    {service.icon}
                  </motion.div>
                  <motion.h3
                    className="text-xl font-bold mb-4 text-white cursor-pointer"
                    variants={textVariants}
                    custom={index + 0.5}
                    onClick={() => toggleService(index)}
                  >
                    {service.title}
                    <ArrowRight
                      className={`inline-block ml-2 w-5 h-5 transform transition-transform duration-300 ${
                        expandedService === index ? "rotate-90" : ""
                      }`}
                    />
                  </motion.h3>
                  <motion.p
                    className="text-gray-400 leading-relaxed mb-4"
                    variants={textVariants}
                    custom={index + 1}
                  >
                    {service.description}
                  </motion.p>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: expandedService === index ? "auto" : 0,
                      opacity: expandedService === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {service.subServices.map((subService, subIndex) => (
                      <motion.div
                        key={subIndex}
                        className="bg-gray-900/30 p-4 rounded-lg mb-2 border border-gray-700/30 hover:border-blue-400/50 transition-all duration-300"
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        custom={subIndex + 2}
                      >
                        <h4 className="text-lg font-semibold text-white">
                          {subService.title}
                        </h4>
                        <p className="text-gray-400">
                          {subService.description}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
