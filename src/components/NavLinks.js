// components/NavLinks.js
import React from "react";
import Link from "next/link";

const NavLinks = ({
  currentPath,
  onAboutClick,
  onServicesClick,
  onContactClick,
  isScrolled,
}) => {
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
  };

  return (
    <ul className="flex space-x-6 md:space-x-8 font-medium text-sm tracking-wide">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            onClick={(e) => handleClick(e, link.onClick)}
            // legacyBehavior
          >
            <span
              className={`relative inline-block px-1 py-2 transition-all duration-300 hover:text-cyan-300 group ${
                currentPath === link.href
                  ? "text-cyan-400"
                  : isScrolled
                  ? "text-gray-800"
                  : "text-white"
              }`}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full ${
                  currentPath === link.href ? "w-full" : "group-hover:w-full"
                }`}
              ></span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;