"use client";

import { useState, useEffect, forwardRef } from 'react';
import Image from 'next/image';

interface NavbarProps {
  className?: string;
  onContactClick?: () => void;
}

const Navbar = forwardRef<HTMLElement, NavbarProps>(({ className, onContactClick }, ref) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      ref={ref}
      className={`text-white flex items-center justify-between fixed top-0 px-4 py-2 z-50 w-full backdrop-blur-md shadow-lg ${className}`}
      style={{ backgroundColor: "rgba(44, 93, 50, 0.6)" }}
    >
      {/* Logo centré */}
      <div className="absolute left-1/2 top-3.5 transform -translate-x-1/2 cursor-pointer">
        <Image
          src="/img/logo/logo.png"
          alt="SYN logo"
          width={80}
          height={80}
          priority
        />
      </div>

      {/* Bouton menu mobile */}
      <div className="block lg:hidden">
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
          className="lg:hidden absolute top-[52px] left-0 w-full text-white p-4 flex flex-col space-y-4"
          style={{ backgroundColor: "rgba(44, 93, 50, 0.6)" }}
        >
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

      {/* Conteneur des icônes sociaux visible sur desktop */}
      <div className="hidden lg:flex space-x-4">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/synproduction?igsh=MTkyNzdwZjRvZnh6NQ%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="relative transition-transform transform hover:scale-150"
        >
          <Image src="/img/icon/instagram_white.png" alt="Instagram Icon" width={30} height={30} className="rounded-md transition-opacity duration-300" />
          <Image src="/img/icon/instagram_purple.png" alt="Instagram Icon Hover" width={30} height={30} className="absolute top-0 left-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100" />
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@syn.production?_t=ZN-8xhQ0wpdRCA&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="relative transition-transform transform hover:scale-150"
        >
          <Image src="/img/icon/tiktok_white.png" alt="TikTok Icon" width={30} height={30} className="rounded-md transition-opacity duration-300" />
          <Image src="/img/icon/tiktok_purple.png" alt="TikTok Icon Hover" width={30} height={30} className="absolute top-0 left-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/syn-production/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative transition-transform transform hover:scale-150"
        >
          <Image src="/img/icon/linkedin_white.png" alt="LinkedIn Icon" width={30} height={30} className="rounded-md transition-opacity duration-300" />
          <Image src="/img/icon/linkedin_purple.png" alt="LinkedIn Icon Hover" width={30} height={30} className="absolute top-0 left-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100" />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/profile.php?id=61566561786488"
          target="_blank"
          rel="noopener noreferrer"
          className="relative transition-transform transform hover:scale-150"
        >
          <Image src="/img/icon/facebook_white.png" alt="Facebook Icon" width={30} height={30} className="rounded-md transition-opacity duration-300" />
          <Image src="/img/icon/facebook_purple.png" alt="Facebook Icon Hover" width={30} height={30} className="absolute top-0 left-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100" />
        </a>
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
