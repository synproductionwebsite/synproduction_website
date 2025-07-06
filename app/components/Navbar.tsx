"use client";

import { useState, useEffect, forwardRef } from 'react';
import Image from 'next/image';

interface NavbarProps {
  className?: string;
  onContactClick?: () => void;
}

// Définition du composant Navbar avec forwardRef
const Navbar = forwardRef<HTMLElement, NavbarProps>(({ className, onContactClick }, ref) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    <nav
      ref={ref}
      className={`text-white flex items-center justify-between fixed top-0 px-5 z-50 
         backdrop-blur-md shadow-lg 
        ${className} h-[60px]`}
      style={{ backgroundColor: "rgba(44, 93, 50, 0.6)" }}

    >
      <h1 style={{ position: "absolute", left: "-9999px", top: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}>amantique</h1>
      {/* Conteneur pour les icônes sociaux */}
      <div className="flex items-center justify-between space-x-3">
        

        {/* Instagram */}
        <a href="https://www.instagram.com/synproduction?igsh=MTkyNzdwZjRvZnh6NQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">
          <Image src="/img/icon/instagram_white.png" alt="Instagram Icon" width={30} height={30} className="rounded-md transition-opacity duration-300" />
          <Image src="/img/icon/instagram_purple.png" alt="Instagram Icon Hover" width={30} height={30} className="absolute top-0 left-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100" />
        </a>


        {/* TikTok */}
        <a href="https://www.tiktok.com/@syn.production?_t=ZN-8xhQ0wpdRCA&_r=1" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">
          <Image src="/img/icon/tiktok_white.png" alt="TikTok Icon" width={30} height={30} className="rounded-md transition-opacity duration-300" />
          <Image src="/img/icon/tiktok_purple.png" alt="TikTok Icon Hover" width={30} height={30} className="absolute top-0 left-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100" />
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/company/syn-production/" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">
          <Image src="/img/icon/linkedin_white.png" alt="LinkedIn Icon" width={30} height={30} className="rounded-md transition-opacity duration-300" />
          <Image src="/img/icon/linkedin_purple.png" alt="LinkeIn Icon Hover" width={30} height={30} className="absolute top-0 left-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100" />
        </a>

        {/* Facebook */}
        <a href="https://www.facebook.com/profile.php?id=61566561786488" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">
          <Image src="/img/icon/facebook_white.png" alt="Facebook Icon" width={30} height={30} className="rounded-md transition-opacity duration-300" />
          <Image src="/img/icon/facebook_purple.png" alt="Facebook Icon Hover" width={30} height={30} className="absolute top-0 left-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100" />
        </a>

      </div>

      {/* Logo centré */}
      <div className="absolute left-1/2 top-1 transform -translate-x-1/2 cursor-pointer">
        <Image
          src="/img/logo/logo.png"
          alt="SYN logo"
          width={scrolled ? 168 : 280}  // 12*4 = 48px, 20*4=80px (taille en px, car Tailwind h-12 = 3rem = 48px)
          height={scrolled ? 48 : 80}
          className="transition-all duration-300 origin-top"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      </div>

      {/* Liens de navigation */}
      <div className="text-2xl flex items-center justify-between space-x-3">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onContactClick?.();
          }}
          className="px-1 hover:text-[#675A95] transition-colors-transform duration-300 rounded-md hover:scale-120"
        >
          CONTACTS
        </a>
      </div>
    </nav>
  );
});

// Définir le displayName pour faciliter le débogage
Navbar.displayName = 'Navbar';

export default Navbar;