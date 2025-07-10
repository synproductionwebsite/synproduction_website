"use client";

import { useState, useEffect, forwardRef } from 'react';
import Image from 'next/image';

interface NavbarProps {
  className?: string;
  onContactClick?: () => void;
  onRosterClick?: () => void;
}

// Définition du composant Navbar avec forwardRef
const Navbar = forwardRef<HTMLElement, NavbarProps>(({ className, onContactClick, onRosterClick }, ref) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      ref={ref}
      className={`text-white flex items-center justify-between fixed top-0 w-full h-[60px] px-5 z-50 backdrop-blur-md shadow-lg ${className}`}
      style={{ backgroundColor: "rgba(44, 93, 50, 0.6)" }}
    >
      {/* Image de fond */}
      {/* <div className="absolute inset-0 -z-10">
        <Image
          src="/img/bg/navbar_bg.png" // Remplace avec ton image
          alt="Navbar Background"
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-100"
        />
      </div> */}

      {/* Accessibilité */}
      <h1 style={{ position: "absolute", left: "-9999px", top: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}>amantique</h1>

      {/* Icônes sociaux */}
      <div className="flex items-center space-x-3">
        {/* Instagram */}
        <a href="https://www.instagram.com/synproduction?igsh=MTkyNzdwZjRvZnh6NQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="relative transition-transform transform hover:scale-150">
          <Image src="/img/icon/instagram_white.png" alt="Instagram" width={30} height={30} className="rounded-md" />
          <Image src="/img/icon/instagram_purple.png" alt="Instagram Hover" width={30} height={30} className="absolute top-0 left-0 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </a>

        {/* TikTok */}
        <a href="https://www.tiktok.com/@syn.production?_t=ZN-8xhQ0wpdRCA&_r=1" target="_blank" rel="noopener noreferrer" className="relative transition-transform transform hover:scale-150">
          <Image src="/img/icon/tiktok_white.png" alt="TikTok" width={30} height={30} className="rounded-md" />
          <Image src="/img/icon/tiktok_purple.png" alt="TikTok Hover" width={30} height={30} className="absolute top-0 left-0 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/company/syn-production/" target="_blank" rel="noopener noreferrer" className="relative transition-transform transform hover:scale-150">
          <Image src="/img/icon/linkedin_white.png" alt="LinkedIn" width={30} height={30} className="rounded-md" />
          <Image src="/img/icon/linkedin_purple.png" alt="LinkedIn Hover" width={30} height={30} className="absolute top-0 left-0 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </a>

        {/* Facebook */}
        <a href="https://www.facebook.com/profile.php?id=61566561786488" target="_blank" rel="noopener noreferrer" className="relative transition-transform transform hover:scale-150">
          <Image src="/img/icon/facebook_white.png" alt="Facebook" width={30} height={30} className="rounded-md" />
          <Image src="/img/icon/facebook_purple.png" alt="Facebook Hover" width={30} height={30} className="absolute top-0 left-0 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </a>
      </div>

      {/* Logo centré */}
      <div className="absolute left-1/2 top-0.5 transform -translate-x-1/2 cursor-pointer">
        <Image
          src="/img/logo/logo.png"
          alt="SYN logo"
          width={scrolled ? 168 : 480}
          height={scrolled ? 48 : 160}
          className="transition-all duration-300 origin-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
      </div>

      {/* Liens navigation */}
      <div className="text-2xl flex items-center space-x-3">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onRosterClick?.();
          }}
          className="px-1 hover:text-[#675A95] transition-transform duration-300 hover:scale-110"
        >
          ROSTER
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onContactClick?.();
          }}
          className="px-1 hover:text-[#675A95] transition-transform duration-300 hover:scale-110"
        >
          CONTACTS
        </a>
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';
export default Navbar;
