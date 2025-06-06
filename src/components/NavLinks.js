import React from 'react';

const NavLinks = ({ currentPath, onAboutClick, onServicesClick, onContactClick }) => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about', onClick: onAboutClick },
    { name: 'Services', href: '/#services', onClick: onServicesClick },
    { name: 'Contact', href: '/#contact', onClick: onContactClick },
     { name: 'Careers', href: '/careers' },
  ];


  return (
    <nav className="flex space-x-6">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={link.onClick}
          className={`text-lg font-medium transition-all duration-300 ${
            currentPath === link.href
              ? 'text-cyan-400 border-b-2 border-cyan-400'
              : 'text-gray-300 hover:text-cyan-400 hover:border-b-2 hover:border-cyan-400/50'
          }`}
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default NavLinks;