"use client";

import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Navbar_Responsive from "./components/Navbar_responsive";
import CorePage from "./core/page";
import ContactPage from "./contact/page";
import Footer from "./components/Footer";

const HomePage: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);

  const contactPageRef = useRef<HTMLDivElement>(null);

  const getNavbarHeight = () =>
    navbarRef.current ? navbarRef.current.offsetHeight : 0;

  const scrollToSection = (
    sectionRef: React.RefObject<HTMLDivElement | null>
  ) => {
    if (sectionRef.current) {
      const elementPosition =
        sectionRef.current.getBoundingClientRect().top + window.scrollY;
      const offset = getNavbarHeight();
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const checkWindowSize = () => {
      setIsSmallScreen(window.innerWidth < 1250);
    };

    window.addEventListener("resize", checkWindowSize);
    checkWindowSize();

    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);

  return (
    <>
      <Head>
        <title>SYN Production</title>
        <meta name="description" content="syn production" />
        <meta property="og:title" content="syn production" />
        <meta property="og:description" content="syn production" />
        <meta property="og:image" content="/img/logo.png" />
        <meta property="og:url" content="" />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* ✅ Image de fond fixe derrière toute la page */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed bg-[#fffbf7] z-[-10]"
        // style={{ backgroundImage: 'url("/img/bg/main_bg.jpeg")' }}
      />

      {/* ✅ Contenu principal */}
      <div className="relative w-full min-h-screen">
        <h1
          style={{
            position: "absolute",
            left: "-9999px",
            top: "-9999px",
            width: "1px",
            height: "1px",
            overflow: "hidden",
          }}
        >
          amantique
        </h1>

        {isSmallScreen ? (
          <Navbar_Responsive
            ref={navbarRef}
            className="sticky top-0 z-50"
            onContactClick={() => scrollToSection(contactPageRef)}
          />
        ) : (
          <Navbar
            ref={navbarRef}
            className="sticky top-0 z-50"
            onContactClick={() => scrollToSection(contactPageRef)}
          />
        )}

        {/* Sections */}
        <div className="mt-10">
          <CorePage />
        </div>

        <div ref={contactPageRef}>
          <ContactPage />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
