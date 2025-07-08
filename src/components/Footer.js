"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,

  FaCode,
  FaServer,
  FaDatabase,
  FaNetworkWired,
} from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";
import GeometricShapes from "@/utils/GeometricShapes";
import BusinessHours from "./BusinessHours";

function Footer() {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [email, setEmail] = useState("");
  const [ripples, setRipples] = useState([]);

  const handleNavigation = (path) => {
    console.log(`Navigate to: ${path}`);
  };

  const handleSubscribe = () => {
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  const createRipple = (e) => {
    const newRipple = {
      x: e.clientX,
      y: e.clientY,
      id: Date.now(),
    };
    setRipples([...ripples, newRipple]);
    setTimeout(() => {
      setRipples(ripples.filter((ripple) => ripple.id !== newRipple.id));
    }, 1000);
  };

  useEffect(() => {
    // Auto-generate some ripples periodically
    const interval = setInterval(() => {
      if (ripples.length < 10) {
        // Limit number of ripples
        const newRipple = {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight * 0.8, // Keep in footer area
          id: Date.now(),
        };
        setRipples([...ripples, newRipple]);
        setTimeout(() => {
          setRipples(ripples.filter((ripple) => ripple.id !== newRipple.id));
        }, 1000);
      }
    }, 1500);
    return () => clearInterval(interval);
  }, [ripples]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const linkHoverVariants = {
    hover: {
      x: 10,
      color: "#f472b6",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const socialIconVariants = {
    hover: {
      y: -8,
      scale: 1.3,
      rotate: 15,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15,
      },
    },
  };

  const techIconVariants = {
    float: {
      y: [0, -20, 0],
      rotate: [0, 360],
      transition: {
        y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
        rotate: { repeat: Infinity, duration: 10, ease: "linear" },
      },
    },
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  const rippleVariants = {
    initial: { scale: 0, opacity: 1 },
    animate: { scale: 3, opacity: 0 },
  };

  return (
    <footer
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
      onClick={createRipple}
    >
      {/* Ripple Effects */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="absolute rounded-full bg-blue-400/20 pointer-events-none"
          style={{
            left: ripple.x - 20,
            top: ripple.y - 20,
            width: 40,
            height: 40,
          }}
          variants={rippleVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 1, ease: "easeOut" }}
        />
      ))}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Floating Tech Icons */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-500/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
            variants={techIconVariants}
            animate="float"
            transition={{ delay: Math.random() * 2 }}
          >
            {
              [
                <FaCode key="code" />,
                <FaServer key="server" />,
                <FaDatabase key="database" />,
                <FaNetworkWired key="network" />,
                <SiBlockchaindotcom key="blockchain" />,
              ][i % 5]
            }
          </motion.div>
        ))}

        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg
            width="100%"
            height="100%"
            className="absolute inset-0"
            preserveAspectRatio="none"
          >
            <pattern
              id="circuit"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="1" fill="currentColor" />
              <path
                d="M20,0 V40 M0,20 H40"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        {/* Binary Code Animation */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-400/10 font-mono whitespace-nowrap text-xs"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              {Array.from({ length: 30 }, () => Math.round(Math.random())).join(
                ""
              )}
            </motion.div>
          ))}
        </div>

        {/* More Tech-Inspired Shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-24 h-24 border-2 border-blue-400/20 rounded-lg opacity-30"
          style={{
            clipPath:
              "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
          }} // Octagon
          variants={techIconVariants}
          animate="float"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-16 h-16 border-2 border-purple-400/20 opacity-30"
          style={{
            clipPath:
              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }} // Star
          variants={techIconVariants}
          animate="float"
          transition={{ delay: 1.5 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-green-400/20 opacity-30"
          style={{ clipPath: "circle(25% at 50% 50%)" }} // Circle
          variants={techIconVariants}
          animate="float"
          transition={{ delay: 2 }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Newsletter Section */}
       

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Company Info */}

            <GeometricShapes />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-12 gap-px h-full">
                {Array.from({ length: 144 }).map((_, i) => (
                  <div key={i} className="border border-cyan-300/20"></div>
                ))}
              </div>
            </div>

            <motion.div className="lg:col-span-5" variants={itemVariants}>
              <motion.div
                className="mb-6 flex items-center space-x-4"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-4xl font-bold text-white">
                  Techno Communications <br /> Global PVT LTD
                </span>
              </motion.div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Techno Communications Global PVT LTD is an Indian-based,
                results-oriented company with a passion for excellence in sales
                and execution. Ranked in the{" "}
                <span className="font-bold text-pink-400">TOP</span> as the
                largest Techno Communications authorized Back Office.
              </p>

              <div className="space-y-4 text-gray-400">
                <motion.div
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5, color: "#60a5fa" }}
                >
                  <motion.div
                    className="w-6 h-6 bg-blue-500/50 rounded-full flex items-center justify-center border border-blue-400/50"
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      backgroundColor: "#60a5fa",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaMapMarkerAlt className="text-blue-300 text-sm" />
                  </motion.div>
                  <span>Madhapur, Hyderabad, Telangana</span>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5, color: "#34d399" }}
                >
                  <motion.div
                    className="w-6 h-6 bg-green-500/50 rounded-full flex items-center justify-center border border-green-400/50"
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      backgroundColor: "#34d399",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaPhoneAlt className="text-green-300 text-sm" />
                  </motion.div>
                  <span>+918019316555</span>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5, color: "#a855f7" }}
                >
                  <motion.div
                    className="w-6 h-6 bg-purple-500/50 rounded-full flex items-center justify-center border border-purple-400/50"
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      backgroundColor: "#a855f7",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaEnvelope className="text-purple-300 text-sm" />
                  </motion.div>
                  <span className="break-all">
                    info@techno-communications.com
                  </span>
                </motion.div>
              </div>

              <motion.button
                className="mt-6 text-pink-400 hover:text-pink-300 font-medium flex items-center space-x-2"
                onClick={() => handleNavigation("#about")}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More About Us</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              className="lg:col-span-2"
              variants={itemVariants}
              onHoverStart={() => setHoveredSection("company")}
              onHoverEnd={() => setHoveredSection(null)}
            >
              <h4 className="text-xl font-bold mb-6 text-blue-400">Company</h4>
              <ul className="space-y-4">
                {[
                  { name: "About Us", path: "#about" },
                  { name: "Our Services", path: "/#services" },
                  // { name: "Leadership", path: "/#leadership" },
                  { name: "Careers", path: "/#careers" },
                ].map((item) => (
                  <motion.li key={item.name}>
                    <motion.a
                      href={item.path}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.path);
                      }}
                      className="cursor-pointer text-gray-300 flex items-center space-x-2"
                      variants={linkHoverVariants}
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.span
                        className="text-pink-400"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: hoveredSection === "company" ? 1 : 0,
                        }}
                      >
                        •
                      </motion.span>
                      <span>{item.name}</span>
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              className="lg:col-span-2"
              variants={itemVariants}
              onHoverStart={() => setHoveredSection("services")}
              onHoverEnd={() => setHoveredSection(null)}
            >
              <h4 className="text-xl font-bold mb-6 text-purple-400">
                Services
              </h4>
              <ul className="space-y-4">
                {[
                  { name: "Hr Payroll" },
                  { name: "Surveillance" },
                  { name: "Web Development" },
                  { name: "Data Analysis" },
                  { name: "Process Support" },
                  { name: "Client Services" },
                  { name: "HR Services" },
                  { name: "Data Management" },
                  { name: "Consultancy Services" },
                  { name: "Expenses Management" },
                ].map((item) => (
                  <motion.li key={item.name}>
                    <motion.a
                      // onClick={() => handleNavigation(item.path)}
                      className="cursor-pointer text-gray-300"
                      variants={linkHoverVariants}
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Support & Legal */}
            <motion.div
              className="lg:col-span-3"
              variants={itemVariants}
              onHoverStart={() => setHoveredSection("support")}
              onHoverEnd={() => setHoveredSection(null)}
            >
              <h4 className="text-xl font-bold mb-6 text-green-400">
                Support & Legal
              </h4>
              <ul className="space-y-4 mb-8">
                {[
                  { name: "Contact Us", path: "/contact" },
                  // { name: "Help Center", path: "/help" },
                  // { name: "Privacy Policy", path: "/privacy-policy" },
                  // { name: "Terms of Service", path: "/terms" },
                  // { name: "Cookie Policy", path: "/cookies" },
                ].map((item) => (
                  <motion.li key={item.name}>
                    <motion.a
                      onClick={() => handleNavigation(item.path)}
                      className="cursor-pointer text-gray-300"
                      variants={linkHoverVariants}
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>

              <BusinessHours />
            </motion.div>
          </div>
        </div>

        {/* Social Media & Awards Section */}
        <motion.div
          className="py-8 border-t border-gray-700/50"
          variants={itemVariants}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Awards & Certifications */}
            <div className="flex items-center space-x-8">
              <motion.div
                className="text-center relative"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute -inset-2 bg-yellow-400/20 rounded-full blur-md"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              </motion.div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Follow Us:</span>
              <div className="flex space-x-4">
                {[
                  { name: "Facebook", color: "#3b5998", icon: <FaFacebookF /> },
                  { name: "Twitter", color: "#1DA1F2", icon: <FaTwitter /> },
                  {
                    name: "LinkedIn",
                    color: "#0077B5",
                    icon: <FaLinkedinIn />,
                  },
                  {
                    name: "Instagram",
                    color: "#E1306C",
                    icon: <FaInstagram />,
                  },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={`https://${social.name.toLowerCase()}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-400 backdrop-blur-sm border border-gray-700/30"
                    variants={socialIconVariants}
                    whileHover={{
                      ...socialIconVariants.hover,
                      backgroundColor: social.color,
                      color: "#ffffff",
                      boxShadow: `0 0 15px ${social.color}80`,
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Copyright Section */}
        <motion.div
          className="py-6 border-t border-gray-700/50 text-center relative"
          variants={itemVariants}
        >
          <div className="flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              Copyright © {new Date().getFullYear()} Techno Communications
              Global PVT LTD. All rights reserved.
            </p>
          </div>
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-pink-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;
