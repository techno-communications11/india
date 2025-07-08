"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight, Target, Sparkles, Eye, Star, Users, Globe, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import dnaTraits from "@/constants/dnaTraits";
import teamStats from "@/constants/teamStats";
import corevalues from "@/constants/coreValues";

import {
  textVariants,
  floatVariants,
} from "@/utils/animationVariants";

const AboutUsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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

  return (
    <div
      id="about"
      className="min-h-screen bg-white text-gray-800 p-6"
    >
      {/* Enhanced Animated Background (Lightened) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-40 w-72 h-72 bg-gradient-to-r from-teal-200/20 to-cyan-200/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Interactive mouse gradient (Lightened) */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Hero Section with Background Image */}
      <section className="relative pt-40 pb-32 px-6">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-white/90 via-blue-50/70 to-white/90 absolute inset-0 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Modern office building"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-20">
          <div className={`${fadeInUp} delay-200`}>
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg"
              initial="hidden"
              animate="visible"
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
              {"Techno Communications".split("").map((char, i) => (
                <motion.span key={i} variants={textVariants} custom={i}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl mb-4 text-gray-600 font-light"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              custom={0}
            >
              Global Private Limited
            </motion.p>
            <div className="w-40 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mx-auto mb-8 rounded-full shadow-md shadow-blue-300/50"></div>
            <motion.p
              className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              custom={1}
            >
              Specializing in backend operations, HR management, payroll processing, 
              order management, and internal IT development. We focus on streamlining 
              processes and supporting seamless day-to-day operations for businesses.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Stats with Icons */}
      <section className="py-20 px-6 relative bg-gray-50">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4 text-gray-800"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              Our Impact in Numbers
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {teamStats.map((stat, index) => {
              const icons = [Users, Globe, Award, TrendingUp];
              const IconComponent = icons[index % icons.length];
              
              return (
                <motion.div
                  key={index}
                  className={`${fadeInUp} text-center group`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)",
                  }}
                >
                  <div className="bg-white p-8 rounded-3xl border border-gray-200 hover:border-blue-300 transition-all duration-500 shadow-md hover:shadow-lg">
                    <motion.div
                      className="mb-6"
                      variants={floatVariants}
                      animate="float"
                    >
                      <IconComponent className="w-12 h-12 text-blue-500 mx-auto" />
                    </motion.div>
                    <motion.div
                      className="text-5xl font-bold text-gray-800 mb-2"
                      initial="hidden"
                      animate="visible"
                      variants={textVariants}
                      custom={index}
                    >
                      {stat.number}
                    </motion.div>
                    <motion.div
                      className="text-gray-600 font-medium"
                      initial="hidden"
                      animate="visible"
                      variants={textVariants}
                      custom={index + 0.5}
                    >
                      {stat.label}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision with Images */}
      <section className="py-24 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Mission */}
            <motion.div
              className={`${fadeInUp} delay-300`}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              custom={0}
            >
              <div className="flex items-center mb-8">
                <motion.div 
                  variants={floatVariants} 
                  animate="float"
                  className="bg-blue-100 p-4 rounded-2xl mr-6 shadow-md"
                >
                  <Target className="w-8 h-8 text-blue-600" />
                </motion.div>
                <motion.h2
                  className="text-4xl md:text-5xl font-bold text-gray-800"
                  variants={textVariants}
                  custom={1}
                >
                  Our Mission
                </motion.h2>
              </div>
              
              <div className="relative mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Team collaboration"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent rounded-2xl"></div>
              </div>
              
              <motion.div
                className="bg-blue-50 p-8 rounded-3xl border border-blue-100 shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.02 }}
              >
                <motion.p
                  className="text-lg leading-relaxed text-gray-700 font-light"
                  variants={textVariants}
                  custom={2}
                >
                  To empower businesses by providing exceptional backend operational support 
                  that enables them to focus on their core competencies. We are committed to 
                  delivering reliable, efficient, and innovative solutions in HR management, 
                  payroll processing, order management, and IT development that drive 
                  organizational success.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Vision */}
            <motion.div
              className={`${fadeInUp} delay-400`}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              custom={0}
            >
              <div className="flex items-center mb-8">
                <motion.div
                  variants={floatVariants}
                  animate="float"
                  transition={{ delay: 0.3 }}
                  className="bg-purple-100 p-4 rounded-2xl mr-6 shadow-md"
                >
                  <Eye className="w-8 h-8 text-purple-600" />
                </motion.div>
                <motion.h2
                  className="text-4xl md:text-5xl font-bold text-gray-800"
                  variants={textVariants}
                  custom={1}
                >
                  Our Vision
                </motion.h2>
              </div>
              
              <div className="relative mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Modern workspace"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent rounded-2xl"></div>
              </div>
              
              <motion.div
                className="bg-purple-50 p-8 rounded-3xl border border-purple-100 shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.02 }}
              >
                <motion.p
                  className="text-lg leading-relaxed text-gray-700 font-light"
                  variants={textVariants}
                  custom={2}
                >
                  To become the most trusted partner for backend operations in India, 
                  known for our excellence in streamlining business processes. We envision 
                  a future where organizations can achieve seamless operational efficiency 
                  through our comprehensive IT services and consulting expertise.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 relative bg-gray-50">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className={`${fadeInUp} delay-200 text-center mb-20`}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={0}
          >
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-6 text-gray-800"
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
              {"Our Core Values".split("").map((char, i) => (
                <motion.span key={i} variants={textVariants} custom={i}>
                  {char}
                </motion.span>
              ))}
            </motion.h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
              variants={textVariants}
              custom={1}
            >
              The principles that guide our approach to business and client relationships
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {corevalues.map((value, index) => (
              <motion.div
                key={index}
                className={`${fadeInUp} group`}
                style={{ animationDelay: `${index * 100}ms` }}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                custom={index}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.1)",
                }}
              >
                <div className="bg-white p-8 rounded-3xl border border-gray-200 hover:border-blue-300 transition-all duration-500 shadow-md hover:shadow-lg h-full">
                  <motion.div
                    className="text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300"
                    variants={floatVariants}
                    animate="float"
                  >
                    {value.icon}
                  </motion.div>
                  <motion.h3
                    className="text-xl font-bold mb-4 text-gray-800"
                    variants={textVariants}
                    custom={index + 0.5}
                  >
                    {value.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 leading-relaxed font-light"
                    variants={textVariants}
                    custom={index + 1}
                  >
                    {value.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company DNA with Team Image */}
      <section className="py-24 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className={`${fadeInUp} delay-200 text-center mb-20`}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={0}
          >
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-6 flex items-center justify-center text-gray-800"
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
              <motion.div 
                variants={floatVariants} 
                animate="float"
                className="bg-yellow-100 p-4 rounded-2xl mr-6 shadow-md"
              >
                <Sparkles className="w-10 h-10 text-yellow-600" />
              </motion.div>
              {"Our DNA".split("").map((char, i) => (
                <motion.span key={i} variants={textVariants} custom={i}>
                  {char}
                </motion.span>
              ))}
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
              variants={textVariants}
              custom={1}
            >
              The core competencies that define our excellence in backend operations
            </motion.p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              {dnaTraits.map((trait, index) => (
                <motion.div
                  key={index}
                  className={`${fadeInUp}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  custom={index}
                >
                  <div className="flex justify-between mb-3">
                    <motion.span
                      className="text-lg font-semibold text-gray-800"
                      variants={textVariants}
                      custom={index + 0.5}
                    >
                      {trait.label}
                    </motion.span>
                    <motion.span
                      className="text-blue-600 font-bold text-lg"
                      variants={textVariants}
                      custom={index + 0.5}
                    >
                      {trait.percentage}%
                    </motion.span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 h-4 rounded-full shadow-md"
                      initial={{ width: "0%" }}
                      animate={{
                        width: isVisible ? `${trait.percentage}%` : "0%",
                      }}
                      transition={{ duration: 2, ease: "easeOut", delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className={`${fadeInUp} delay-300`}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              custom={0}
            >
              <div className="relative mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Professional team"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent rounded-2xl"></div>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 shadow-md hover:shadow-lg transition-shadow">
                <motion.h3
                  className="text-2xl font-bold mb-6 text-gray-800"
                  variants={textVariants}
                  custom={1}
                >
                  What Makes Us Unique
                </motion.h3>
                <ul className="space-y-4 text-gray-700">
                  {[
                    "50+ experienced professionals dedicated to your success",
                    "Located in Hyderabad - India's IT hub",
                    "Comprehensive backend operations under one roof",
                    "Proven track record in IT services and consulting",
                    "Growing community of 2K+ LinkedIn followers",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start group"
                      variants={textVariants}
                      custom={index + 2}
                    >
                      <motion.div
                        variants={floatVariants}
                        animate="float"
                        transition={{ delay: index * 0.2 }}
                        className="mr-4 mt-1"
                      >
                        <Star className="w-5 h-5 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
                      </motion.div>
                      <span className="font-light">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative bg-gray-50">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Modern office"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-blue-50/90"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            className={`${fadeInUp} delay-200`}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={0}
          >
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-8 text-gray-800"
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
              {"Ready to Streamline Your Operations?"
                .split("")
                .map((char, i) => (
                  <motion.span key={i} variants={textVariants} custom={i}>
                    {char}
                  </motion.span>
                ))}
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
              variants={textVariants}
              custom={1}
            >
              Let our experienced team handle your backend operations while you focus on growing your business. 
              Transform your operations with our cutting-edge solutions.
            </motion.p>
            <motion.button
              onClick={handleClick}
              className="group bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 hover:from-blue-600 hover:via-indigo-700 hover:to-purple-700 px-16 py-5 rounded-full text-xl font-semibold transition-all duration-300 border border-blue-200 backdrop-blur-sm shadow-md hover:shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
              <ArrowRight className="inline-block ml-3 w-6 h-6 text-white group-hover:translate-x-2 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;