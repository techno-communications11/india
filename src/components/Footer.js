"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaCode,
  FaServer,
  FaDatabase,
  FaNetworkWired,
} from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";
import Link from "next/link";
import BusinessHours from "./BusinessHours";
import { useRouter } from "next/navigation";

const Footer = () => {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [ripples, setRipples] = useState([]);
  const router = useRouter();

  // Navigation handler
  const handleNavigation = (path) => {
    if (path.startsWith('#')) {
      const element = document.getElementById(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(path);
    }
  };

  // Ripple effect
  const createRipple = (e) => {
    if (ripples.length >= 10) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      x,
      y,
      id: Date.now(),
    };
    
    setRipples((prev) => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 1000);
  };

  // Auto-generate ripples
  useEffect(() => {
    const interval = setInterval(() => {
      if (ripples.length < 5 && typeof window !== 'undefined') {
        const newRipple = {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight * 0.8,
          id: Date.now(),
        };
        setRipples((prev) => [...prev, newRipple]);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [ripples.length]);

  // Animation variants
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
      x: 5,
      color: "#f472b6",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const techIconVariants = {
    float: (delay) => ({
      y: [0, -15, 0],
      transition: {
        repeat: Infinity,
        duration: 5 + delay,
        ease: "easeInOut",
      },
    }),
  };

  const rippleVariants = {
    initial: { scale: 0, opacity: 1 },
    animate: { scale: 3, opacity: 0 },
  };

  // Data
  const companyLinks = [
    { name: "About Us", path: "/#about" },
    { name: "Our Services", path: "/#services" },
    { name: "Careers", path: "/careers/jobs" },
  ];

  const servicesList = [
  "Custom Software Development",
  "Software Maintenance & Support",
  "System Integration Services",
  "Software Testing & QA",
  "UI/UX Design Services",
  "Cloud & DevOps Services",
  "Software Consulting",
  "Product Engineering",
  "Technical Support Services"
];


  const legalLinks = [
    { name: "Contact Us", path: "#contact" },
    { name: "Privacy Policy", path: "/legal/privacy_policy" },
  ];

 

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

      {/* Tech Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
       

        {/* Circuit Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="absolute inset-0">
            <pattern id="circuit" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" />
              <path d="M20,0 V40 M0,20 H40" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Company Info */}
          <motion.div className="lg:col-span-5" variants={itemVariants}>
            <motion.div
              className="mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-4xl font-bold text-white">
                Techno Communications <br /> Global PVT LTD
              </h2>
            </motion.div>
            
            <p className="text-gray-300 text-lg mb-6">
              Leading IT solutions provider with excellence in technology services and customer support.
            </p>
            
            <div className="space-y-4 text-gray-400 mb-6">
              <motion.div whileHover={{ x: 5, color: "#34d399" }} className="flex items-center gap-3">
                <motion.div
                  className="w-6 h-6 bg-green-500/50 rounded-full flex items-center justify-center border border-green-400/50"
                  whileHover={{ scale: 1.2, rotate: 360, backgroundColor: "#34d399" }}
                >
                  <FaPhoneAlt className="text-green-300 text-sm" />
                </motion.div>
                <span>+918019316555</span>
              </motion.div>
              
              <motion.div whileHover={{ x: 5, color: "#a855f7" }} className="flex items-center gap-3">
                <motion.div
                  className="w-6 h-6 bg-purple-500/50 rounded-full flex items-center justify-center border border-purple-400/50"
                  whileHover={{ scale: 1.2, rotate: 360, backgroundColor: "#a855f7" }}
                >
                  <FaEnvelope className="text-purple-300 text-sm" />
                </motion.div>
                <span className="break-all">info@technocommunicationsglobal.com</span>
              </motion.div>
            </div>
            
              {/* <motion.button
                onClick={() => handleNavigation("#about")}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="text-pink-400 hover:text-pink-300 font-medium flex items-center gap-2"
              >
                Learn More About Us
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  →
                </motion.span>
              </motion.button> */}
          </motion.div>

          {/* Company Links */}
          <motion.div 
            className="lg:col-span-2"
            variants={itemVariants}
            onHoverStart={() => setHoveredSection("company")}
            onHoverEnd={() => setHoveredSection(null)}
          >
            <h3 className="text-xl font-bold mb-6 text-blue-400">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <motion.li key={item.name}>
                  <motion.button
                    onClick={() => handleNavigation(item.path)}
                    className="text-gray-300 flex items-center gap-2 w-full text-left"
                    variants={linkHoverVariants}
                    whileHover="hover"
                  >
                    <motion.span
                      className="text-pink-400"
                      animate={{ opacity: hoveredSection === "company" ? 1 : 0 }}
                    >
                      •
                    </motion.span>
                    {item.name}
                  </motion.button>
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
            <h3 className="text-xl font-bold mb-6 text-purple-400">Services</h3>
            <ul className="space-y-3">
              {servicesList.map((service) => (
                <motion.li key={service}>
                  <motion.span
                    className="text-gray-300 cursor-pointer"
                    variants={linkHoverVariants}
                    whileHover="hover"
                  >
                    {service}
                  </motion.span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div 
            className="lg:col-span-3"
            variants={itemVariants}
            onHoverStart={() => setHoveredSection("legal")}
            onHoverEnd={() => setHoveredSection(null)}
          >
            <h3 className="text-xl font-bold mb-6 text-green-400">Support & Legal</h3>
            <ul className="space-y-3 mb-6">
              {legalLinks.map((item) => (
                <motion.li key={item.name}>
                  {item.path.startsWith('#') ? (
                    <motion.button
                      onClick={() => handleNavigation(item.path)}
                      className="text-gray-300 w-full text-left"
                      variants={linkHoverVariants}
                      whileHover="hover"
                    >
                      {item.name}
                    </motion.button>
                  ) : (
                    <Link href={item.path} passHref>
                      <motion.a
                        className="text-gray-300"
                        variants={linkHoverVariants}
                        whileHover="hover"
                      >
                        {item.name}
                      </motion.a>
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
            <BusinessHours />
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div 
          className="py-6 border-t border-gray-700/50 mt-12 text-center relative"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Techno Communications Global PVT LTD. All rights reserved.
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
};

export default Footer;