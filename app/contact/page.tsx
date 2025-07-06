"use client";

import React from "react";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 text-center text-gray-900">
      <h2 className="lg:text-7xl md:text-3xl font-bold mb-12 tracking-wide">CONTACT</h2>

      <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center gap-8">
        <div
          className="cursor-pointer w-50 relative"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Image
            src="/img/logo/global_logo.png"
            alt="SYN logo"
            width={200} // ajuste selon ta taille souhaitée
            height={100} // ajuste selon ta taille souhaitée
            className="transition-transform duration-300 hover:scale-110"
          />
        </div>

        <div className="space-y-2 text-left md:text-left">
          <p className="text-lg">
            <span className="font-semibold">eMail: </span>
            <a
              href="mailto:hello@synproduction.fr"
              className="text-[#734A93] hover:underline"
            >
              hello@synproduction.fr
            </a>
          </p>
          <p className="text-lg">
            <span className="font-semibold">Téléphone: </span>
            <a
              href="tel:+33646139243"
              className="text-[#734A93] hover:underline"
            >
              06 46 13 92 43
            </a>
          </p>

          <div className="flex items-center justify-start space-x-3 relative">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/synproduction?igsh=MTkyNzdwZjRvZnh6NQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="relative transition-transform transform hover:scale-150"
            >
              <Image
                src="/img/icon/instagram_purple.png"
                alt="Instagram Icon"
                width={30}
                height={30}
                className="rounded-md transition-opacity duration-300"
              />
              <Image
                src="/img/icon/instagram_white.png"
                alt="Instagram Icon Hover"
                width={30}
                height={30}
                className="absolute top-0 left-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100"
              />
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@syn.production?_t=ZN-8xhQ0wpdRCA&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="relative transition-transform transform hover:scale-150"
            >
              <Image
                src="/img/icon/tiktok_purple.png"
                alt="TikTok Icon"
                width={30}
                height={30}
                className="rounded-md transition-opacity duration-300"
              />
              <Image
                src="/img/icon/tiktok_white.png"
                alt="TikTok Icon Hover"
                width={30}
                height={30}
                className="absolute top-0 left-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/syn-production/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative transition-transform transform hover:scale-150"
            >
              <Image
                src="/img/icon/linkedin_purple.png"
                alt="LinkedIn Icon"
                width={30}
                height={30}
                className="rounded-md transition-opacity duration-300"
              />
              <Image
                src="/img/icon/linkedin_white.png"
                alt="LinkedIn Icon Hover"
                width={30}
                height={30}
                className="absolute top-0 left-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100"
              />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61566561786488"
              target="_blank"
              rel="noopener noreferrer"
              className="relative transition-transform transform hover:scale-150"
            >
              <Image
                src="/img/icon/facebook_purple.png"
                alt="Facebook Icon"
                width={30}
                height={30}
                className="rounded-md transition-opacity duration-300"
              />
              <Image
                src="/img/icon/facebook_white.png"
                alt="Facebook Icon Hover"
                width={30}
                height={30}
                className="absolute top-0 left-0 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
