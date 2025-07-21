"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type Artist = {
  name: string;
  title: string;
  location?: string;
  image: string;
  link?: string;
  label?: string;
  details?: React.ReactNode[];
  contact?: string;
  syn: string;
  video?: string; // URL YouTube
};

const artists: Artist[] = [
  {
    name: "AMANTIQUE",
    title: "Rock punkifié en français",
    location: "Paris/Nantes",
    image: "/img/artists/amantique.jpg",
    link: "https://www.amantique.fr",
    details: [
      <>
        <span className=" text-green-300">Amantique</span> recherche le mouvement dans sa quête du grand réconfort. C&apos;est l'effet d'une grande montagne autocentrée qui aime crier, parfois.
      </>,
      <>
        Leur premier EP <span className="italic text-green-300">Laurent</span> est sorti le 17 février 2025.
        Cette création résonne comme un bourdonnement de cinq morceaux tout aussi puissants que poétiques.
      </>,
    ],
    syn: "SYN Production accompagne le groupe sur leur développement live. (Booking, Communication, Administratif, Production)",
    contact: "Eva DUC",
    video: "https://youtu.be/cmtglxtHvzI?si=nMPNnRTNgaNjdMjt ",
  },
  {
    name: "DANAÉ AKKARI",
    title: "Cinéaste",
    location: "Paris",
    image: "/img/artists/danae_akkari.png",
    link: "#",
    details: [
      <>
        <span className="italic text-green-300">Le chant du bouc</span> est un projet documentaire autofictionnel qui explore la question de la mémoire : 
        celle qui se transmet, celle qui s&apos;oublie, celle qui nous reste, celle que l&apos;on construit. A la fois intime et collectif, c&apos;est le récit d&apos;une femme 
        descendante de la diaspora algérienne qui tente de réinventer les contours de son histoire familiale pour garder un peu de sa grand-mère. Retisser les 
        mémoires pour leur donner du sens et réinscrire les individus dans une histoire collective.
      </>,
      <>
        Afin de construire ce documentaire, <span className=" text-green-300">Danaé Akkari</span> souhaite partir à la rencontre des diasporas algérienne, prenant la route à l&apos;envers de sa grand-mère. 
        Se jouant de la temporalité comme de la spatialité, c&apos;est un road-movie qui se prépare ; un documentaire sujet à la subjectivité de l&apos;artiste.
      </>,
    ],
    syn: "SYN Production accompagne Danaé Akkari dans le développement, la création et la réalisation du film.",
    contact: "Nathia JEGANATHAN - JEYARAJAH",
  },
  {
    name: "ALISSALIA",
    title: "Compositrice, pédagogue et poétesse",
    location: "Paris",
    image: "/img/artists/alissalia.png",
    link: "#",
    details: [
      "Habitée par ses imaginaires complexes, elle déploie divers projets mêlant poésie et création musicale s&apos;interrogeant sur les notions d&apos;écologie, d&apos;identités diasporiques, de transformation à travers le voyage et de contemplation de paysages acoustiques. Victor Wooten dans les oreilles, elle se rend régulièrement à la Philharmonie de Paris-Cité de la musique où elle conçoit et anime des ateliers pédagogiques.",
      "Actuellement, elle développe un projet transdisciplinaire qui repose sur son recueil de poème, La chair du monde – à paraître en septembre 2025 – illustré par Diane-Line Ferré. On y suit l&apos;histoire d&apos;Okpée, une okapi qui observe et explore le monde et les stigmates des vies passées qui ont laissé derrière elle un enchevêtrement de cicatrices et de ruines où la paix peut enfin exister.",
      "A travers la volonté de re-poétiser le mouvement des êtres et de nos migrations, elle s&apos;associe à un musicien et un chanteur lyrique kurde pour son projet Moodkollector, lequel met en voix et en musique l&apos;épopée d&apos;Okpée, accompagnée de Mamudou Soha à la kora et de Emre Sertkaya au chant.",
    ],
    syn: "SYN Production accompagne Alissasilla dans la diffusion de ces projets (Communication, Evénementiel, Marketing).",
    contact: "Nathia JEGANATHAN - JEYARAJAH",
    video: "https://youtu.be/_AM5LtuMq-I?si=bOlXJIDJGgNRGHAB"
  },
];

type Rotation = { x: number; y: number };

const RosterPage = () => {
  const [visibleUpcoming, setVisibleUpcoming] = useState(4);
  const [baseRotations, setBaseRotations] = useState<{ [key: number]: Rotation }>({});
  const [hoverRotations, setHoverRotations] = useState<{ [key: number]: Rotation }>({});
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const newBaseRotations: { [key: number]: Rotation } = {};
    artists.forEach((_, index) => {
      newBaseRotations[index] = {
        x: Math.random() * 20 - 10,
        y: Math.random() * 20 - 10,
      };
    });
    setBaseRotations(newBaseRotations);
    setHoverRotations(newBaseRotations);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    setHoverRotations((prev) => ({
      ...prev,
      [index]: { x: rotateX, y: rotateY },
    }));
  };

  const handleMouseLeave = (index: number) => {
    setHoverRotations((prev) => ({
      ...prev,
      [index]: baseRotations[index],
    }));
  };

  const toggleSelect = (index: number) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  function getYouTubeEmbedUrl(url: string): string | null {
    try {
      const parsedUrl = new URL(url);
      let videoId = "";
  
      if (parsedUrl.hostname === "youtu.be") {
        // URL courte : https://youtu.be/VIDEO_ID
        videoId = parsedUrl.pathname.slice(1);
      } else if (
        parsedUrl.hostname === "www.youtube.com" || 
        parsedUrl.hostname === "youtube.com"
      ) {
        // URL normale : https://www.youtube.com/watch?v=VIDEO_ID
        videoId = parsedUrl.searchParams.get("v") || "";
      }
  
      if (!videoId) return null;
  
      return `https://www.youtube.com/embed/${videoId}`;
    } catch {
      return null;
    }
  }  

  return (
    <div className="relative w-full text-center text-white pb-20 overflow-hidden">
      {/* Fond */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/img/bg/purple_bg.png')",
          backgroundRepeat: "repeat-y",
          backgroundSize: "100% auto",
          backgroundPosition: "top center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Shadow haut */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-full h-12"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.25), transparent)",
          zIndex: 20,
        }}
      />
      {/* Shadow bas */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full h-12"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.25), transparent)",
          zIndex: 20,
        }}
      />

      <div className="relative z-10 max-w-[1300px] mx-auto px-4">
        <h2 className="text-3xl lg:text-7xl font-extrabold pt-4 mb-8">ARTISTS</h2>

        {/* Grille des cartes + détails */}
        <div
          className={
            selectedIndex === null
              ? "flex flex-wrap justify-center gap-8"
              : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center"
          }
        >
          {artists.slice(0, visibleUpcoming).map((artist, index) => (
            <React.Fragment key={index}>
              <button
                onClick={() => toggleSelect(index)}
                className="focus:outline-none"
                aria-expanded={selectedIndex === index}
                aria-controls={`artist-details-${index}`}
              >
                <div className="relative w-[320px] h-[360px] mx-auto group perspective-[1000px]">
                  <div
                    className="transition-transform duration-200 ease-out transform rounded-lg w-full h-full shadow-lg"
                    onMouseMove={(e) => handleMouseMove(e, index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    style={{
                      transform: `rotateX(${hoverRotations[index]?.x ?? 0}deg) rotateY(${hoverRotations[index]?.y ?? 0}deg)`,
                      boxShadow:
                        "0 8px 20px rgba(0,0,0,0.7), 0 15px 25px rgba(44, 93, 50, 0.4)",
                    }}
                  >
                    <div className="relative w-[320px] h-[320px] rounded-lg overflow-hidden">
                      <Image
                        src={artist.image}
                        alt={artist.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="absolute bottom-0 w-full rounded-b-lg px-6 py-5 backdrop-blur-sm bg-gradient-to-t from-[rgba(44,93,50,0.7)] to-[rgba(44,93,50,0.3)] transition-colors duration-300 group-hover:bg-[rgba(44,93,50,0.85)]">
                      <h3 className="text-2xl font-semibold text-white drop-shadow-md">
                        {artist.name}
                      </h3>
                      <p className="text-sm font-black text-[#d6e7d1] drop-shadow-md">
                        {artist.title}
                      </p>
                    </div>
                  </div>
                </div>
              </button>

              {/* Détails + vidéo */}
              {selectedIndex === index && (
                <div
                  id={`artist-details-${index}`}
                  className="col-span-full mt-4 max-w-[90%] mx-auto px-6 text-left bg-black/70 p-6 rounded-lg border border-green-900 shadow-xl"
                  style={{ gridColumn: "span 4" }}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Texte */}
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-white">{artist.name}</h3>
                      {artist.title && <p className="mb-2">{artist.title}</p>}
                      {artist.location && (
                        <p className="text-sm text-green-200 italic mb-2">
                          {artist.location}
                        </p>
                      )}
                      {artist.details?.map((detail, i) => (
                        <p key={i} className="mt-4 text-white leading-relaxed">
                          {detail}
                        </p>
                      ))}
                      {artist.syn && (
                        <p className="mt-5 italic text-green-300">
                          {artist.syn}
                        </p>
                      )}
                      {artist.link && (
                        <p className="mt-6">
                          <a
                            href={artist.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-300 underline hover:text-green-100"
                          >
                            En savoir plus
                          </a>
                        </p>
                      )}
                      {artist.contact && (
                        <p className="mt-4 text-green-200">Contact: <span className="italic">{artist.contact}</span></p>
                      )}
                    </div>

                    {/* Vidéo YouTube */}
                    {artist.video && (
                      <div
                        className="w-full max-w-[560px] mx-auto rounded-lg shadow-lg"
                        style={{ minHeight: '315px', position: 'relative', paddingBottom: '56.25%' }}
                      >
                        <iframe
                          className="absolute top-0 left-0 w-full h-full rounded-lg"
                          src={getYouTubeEmbedUrl(artist.video) ?? ""}
                          title={`${artist.name} video`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RosterPage;
