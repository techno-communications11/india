// components/MobileMenu.js
"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const MobileMenu = ({
  isOpen,
  toggleMenu,
  currentPath,
  onAboutClick,
  onServicesClick,
  onContactClick,
}) => {
  // Disable background scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about", onClick: onAboutClick },
    { name: "Services", href: "/#services", onClick: onServicesClick },
    { name: "Contact", href: "/#contact", onClick: onContactClick },
    { name: "Careers", href: "/careers/jobs" },
  ];

  const handleClick = (e, onClick) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
    toggleMenu();
  };

  return (
    isOpen && (
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100%" }}
        transition={{ type: "tween", duration: 0.4 }}
        className="fixed inset-0 z-50 bg-gray-700 flex flex-col items-center justify-center gap-12 text-white font-medium text-2xl"
      >
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        <nav className="flex flex-col items-center space-y-10 text-center">
          {links.map(({ name, href, onClick }) => (
            <Link key={name} href={href} legacyBehavior>
              <a
                onClick={(e) => handleClick(e, onClick)}
                className={`relative pb-1 hover:text-cyan-300 transition-colors ${
                  currentPath === href ? "text-cyan-400" : "text-white"
                }`}
              >
                {name}
                {currentPath === href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400"></span>
                )}
              </a>
           
            </Link>
          ))}
           
        </nav>
          <small className="text-gray-400"> © Techno Communications Global PVT LTD</small>
      </motion.div>
    )
  );
};

export default MobileMenu;
