import React from "react";
import { motion, AnimatePresence } from "framer-motion";



const MobileMenu = ({ isOpen, toggleMenu, currentPath, onAboutClick, onServicesClick, onContactClick }) => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about', onClick: onAboutClick },
    { name: 'Services', href: '/#services', onClick: onServicesClick },
    { name: 'Contact', href: '/#contact', onClick: onContactClick },
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <motion.div
      className={`md:hidden fixed top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-t border-cyan-400/20 shadow-2xl ${
        isOpen ? 'block' : 'hidden'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="flex flex-col items-center py-6 space-y-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => {
              if (link.onClick) link.onClick(e);
              toggleMenu();
            }}
            className={`text-lg font-medium transition-all duration-300 ${
              currentPath === link.href
                ? 'text-cyan-400'
                : 'text-gray-300 hover:text-cyan-400'
            }`}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </motion.div>
  );
};

export default MobileMenu;
