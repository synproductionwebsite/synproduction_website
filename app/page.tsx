"use client";

import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Navbar_Responsive from "./components/Navbar_responsive";
import CorePage from "./core/page";
import ContactPage from "./contact/page";
import Footer from "./components/Footer";
import RosterPage from "./roster/page";
import ActusPage from "./actus/page";
import MediaPage from "./media/page";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage: React.FC = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);

  const contactPageRef = useRef<HTMLDivElement>(null);
  const rosterPageRef = useRef<HTMLDivElement>(null);
  const mediaPageRef = useRef<HTMLDivElement>(null);
  const actusPageRef = useRef<HTMLDivElement>(null);

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
      setIsSmallScreen(window.innerWidth < 1500);
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

      {/* Fond image qui suit la hauteur du contenu (absolute dans un conteneur relatif) */}
      <div className="relative w-full min-h-screen">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat bg-[#fff9f2] z-[-10]"
          // décommente et mets ta vraie image ici si besoin
          // style={{ backgroundImage: 'url("/img/bg/main_bg.jpeg")' }}
        />

        {/* Bandeau défilant en arrière-plan */}
        {/* <div
          className="absolute top-0 left-0 w-full h-full bg-repeat z-0 opacity-10"
          style={{
            backgroundImage: "url('/img/logo/logo_green.png')",
            backgroundSize: "auto 200px",
            backgroundPosition: "0 0",
          }}
        /> */}

        {/* Contenu principal */}
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
            onRosterClick={() => scrollToSection(rosterPageRef)}
            onMediaClick={() => scrollToSection(mediaPageRef)}
            onActusClick={() => scrollToSection(actusPageRef)}
          />
        ) : (
          <Navbar
            ref={navbarRef}
            className="sticky top-0 z-50"
            onContactClick={() => scrollToSection(contactPageRef)}
            onRosterClick={() => scrollToSection(rosterPageRef)}
            onMediaClick={() => scrollToSection(mediaPageRef)}
            onActusClick={() => scrollToSection(actusPageRef)}
          />
        )}

        {/* Sections */}
        <div ref={contactPageRef} data-aos="fade-up">
          <CorePage />
        </div>

        <div ref={rosterPageRef} data-aos="fade-up">
          <RosterPage />
        </div>

        <div ref={actusPageRef} data-aos="fade-up">
          <ActusPage />
        </div>

        <div ref={mediaPageRef} data-aos="fade-up">
          <MediaPage />
        </div>

        <div ref={contactPageRef} data-aos="fade-up">
          <ContactPage />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
