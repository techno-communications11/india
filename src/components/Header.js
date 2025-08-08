"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Head from "next/head";

import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Header = ({ onAboutClick, onServicesClick, onContactClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const currentPath = usePathname() || "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const logoVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
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
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <>

    <Head>
  <title>Techno Communications | IT Services and IT Consulting in Hyderabad, Telangana</title>
  <meta name="description" content="Techno Communications offers innovative IT services and telecom consulting in Hyderabad, Telangana. Partner with us to strengthen your business infrastructure." />

  <meta property="og:title" content="Techno Communications | IT Services and Consulting in Hyderabad" />
  <meta property="og:description" content="Discover IT services and telecom consulting with Techno Communications in Hyderabad, Telangana." />
  <meta property="og:image" content="https://technocommunicationsglobal.com/logoT.png" />
  <meta property="og:url" content="https://technocommunicationsglobal.com/" />
</Head>

    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white"
          : "bg-transparent "
      }`}
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <motion.div
          variants={logoVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Techno Communications Global LLC Logo"
              width={80}
              height={20}
              className="transition-all duration-300"
              // priority
            />
          </Link>
        </motion.div>
        <div className="flex items-center space-x-8">
          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.3 },
              }}
            >
              <NavLinks
                currentPath={currentPath}
                onAboutClick={onAboutClick}
                onServicesClick={onServicesClick}
                onContactClick={onContactClick}
                isScrolled={isScrolled}
              />
            </motion.div>
          </div>
          <motion.button
            className="md:hidden p-2 rounded-full border border-gray-400 hover:bg-gray-100/50 transition-all duration-300 focus:outline-none"
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
                <RxCross2 size={24} className="text-gray-800" />
              ) : (
                <GiHamburgerMenu size={24} className="text-gray-800" />
              )}
            </motion.div>
          </motion.button>
        </div>
      </div>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        toggleMenu={toggleMobileMenu}
        currentPath={currentPath}
        onAboutClick={onAboutClick}
        onServicesClick={onServicesClick}
        onContactClick={onContactClick}
      />
    </motion.header>
    </>
  );
};

export default Header;  