"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";

import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Header = ({ onAboutClick, onServicesClick, onContactClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const currentPath = usePathname() || "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const logoVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.3,
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const hamburgerVariants = {
    initial: { opacity: 0, x: 20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.4 },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-cyan-500/20"
          : "bg-transparent"
      }`}
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)`,
        }}
      />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-2 right-20 w-8 h-8 border border-cyan-400/20 rotate-45 animate-pulse"></div>
        <div className="absolute top-4 left-32 w-4 h-4 bg-purple-500/20 rounded-full animate-bounce"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <motion.div
          variants={logoVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="relative"
        >
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                src="/logoT.png"
                alt="Techno Communications Global LLC Logo"
                width={280}
                height={100}
                className="drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-2xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          </Link>
        </motion.div>
        <div className="flex items-center space-x-8">
          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.5 },
              }}
              className="relative"
            >
              <NavLinks
                currentPath={currentPath}
                onAboutClick={onAboutClick}
                onServicesClick={onServicesClick}
                onContactClick={onContactClick}
              />
            </motion.div>
          </div>
          <motion.button
            className={`md:hidden relative p-3 rounded-full transition-all duration-300 focus:outline-none backdrop-blur-sm border ${
              isMobileMenuOpen
                ? "bg-red-500/80 border-red-400/50 text-white shadow-lg shadow-red-500/25"
                : "bg-slate-800/50 border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400/50 shadow-lg"
            }`}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            variants={hamburgerVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? (
                <RxCross2 size={24} />
              ) : (
                <GiHamburgerMenu size={24} />
              )}
            </motion.div>
          </motion.button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        toggleMenu={toggleMobileMenu}
        currentPath={currentPath}
        onAboutClick={onAboutClick}
        onServicesClick={onServicesClick}
        onContactClick={onContactClick}
      />
    </motion.header>
  );
};

export default Header;
