"use client";

import { useState, useEffect, forwardRef } from 'react';
import Image from 'next/image';

interface NavbarProps {
  className?: string;
  onContactClick?: () => void;
  onRosterClick?: () => void;
  onMediaClick?: () => void;
  onActusClick?: () => void;
}

const Navbar = forwardRef<HTMLElement, NavbarProps>(({ className, onContactClick, onRosterClick, onMediaClick, onActusClick }, ref) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      ref={ref}
      className={`fixed top-0 left-0 w-full z-50 px-4 py-2 text-white backdrop-blur-md shadow-lg ${className}`}
      style={{ backgroundColor: "rgba(44, 93, 50, 0.6)" }}
    >
      {/* Image de fond transparente */}
      {/* <div className="absolute inset-0 z-0">
        <Image
          src="/img/bg/navbar_bg.png"
          alt="Navbar Background"
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-100"
        />
      </div> */}

      {/* Contenu de la Navbar */}
      <div className="relative z-10 flex items-center justify-between w-full">
        {/* Logo centré */}
        <div className="absolute left-1/2 top-1.5 transform -translate-x-1/2 cursor-pointer">
          <Image
            src="/img/logo/logo_purple.png"
            alt="SYN logo"
            width={80}
            height={80}
            priority
          />
        </div>

        {/* Bouton menu mobile */}
        <div className="block xl:hidden z-20 relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {menuOpen ? '×' : '☰'}
          </button>
        </div>

        {/* Navigation mobile */}
        {menuOpen && (
          <div
            className="lg:hidden absolute top-[50px] left-0 w-full text-white p-2 flex flex-col space-y-4"
            style={{ backgroundColor: "rgba(44, 93, 50, 0.6)" }}
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onRosterClick?.();
                closeMenu();
              }}
              className="hover:text-[#734A93] transition-colors duration-300"
            >
              ARTISTES
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onActusClick?.();
                closeMenu();
              }}
              className="hover:text-[#734A93] transition-colors duration-300"
            >
              ACTUS
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onMediaClick?.();
                closeMenu();
              }}
              className="hover:text-[#734A93] transition-colors duration-300"
            >
              VADROUILLE
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onContactClick?.();
                closeMenu();
              }}
              className="hover:text-[#734A93] transition-colors duration-300"
            >
              CONTACTS
            </a>
          </div>
        )}
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
