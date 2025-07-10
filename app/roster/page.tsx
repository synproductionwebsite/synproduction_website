"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const artists = [
  {
    name: "AMANTIQUE",
    genre: "ROCK",
    image: "/img/artists/amantique.jpg",
    link: "https://www.amantique.fr",
    label: undefined,
  },
  {
    name: "CAREL",
    genre: "SOUL JAZZ",
    image: "/img/artists/carel.jpg",
    link: "#",
    label: undefined,
  },
  {
    name: "MONSAMP",
    genre: "ELECTRO",
    image: "/img/artists/monsamp.jpg",
    link: "#",
    label: undefined,
  },
  {
    name: "NALLA",
    genre: "POP SOUL",
    image: "/img/artists/nalla.jpg",
    link: "#",
    label: undefined,
  },
];

type Rotation = { x: number; y: number };

const RosterPage = () => {
  const [visibleUpcoming, setVisibleUpcoming] = useState(4);
  const [baseRotations, setBaseRotations] = useState<{ [key: number]: Rotation }>({});
  const [hoverRotations, setHoverRotations] = useState<{ [key: number]: Rotation }>({});

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

  return (
    <div className="relative w-full text-center text-white pb-20 overflow-hidden">
      {/* Fond avec ton image */}
      <div
        className="absolute inset-0 w-full h-full z-0 bg-repeat bg-top bg-fixed"
        style={{ backgroundImage: "url('/img/bg/purple_bg.png')" }}
      />

      {/* Shadow interne haut, plus discret */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-full h-12"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.25), transparent)",
          zIndex: 20,
        }}
      />

      {/* Shadow interne bas, plus discret */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full h-12"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.25), transparent)",
          zIndex: 20,
        }}
      />

      <div className="relative z-10">
        <h2 className="text-3xl lg:text-7xl font-extrabold pt-4">ROSTER</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 mt-8">
          {artists.slice(0, visibleUpcoming).map((artist, index) => {
            const rotation = hoverRotations[index] || { x: 0, y: 0 };

            return (
              <a
                key={index}
                href={artist.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative w-[320px] h-[360px] mx-auto group perspective-[1000px]">
                  <div
                    className="transition-transform duration-200 ease-out transform rounded-lg w-full h-full shadow-lg"
                    onMouseMove={(e) => handleMouseMove(e, index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    style={{
                      transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
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
                    <div
                      className="
                        absolute bottom-0 w-full rounded-b-lg px-6 py-5 backdrop-blur-sm
                        bg-gradient-to-t from-[rgba(44,93,50,0.7)] to-[rgba(44,93,50,0.3)]
                        transition-colors duration-300
                        group-hover:bg-[rgba(44,93,50,0.85)]
                      "
                    >
                      <h3 className="text-2xl font-semibold text-white drop-shadow-md">
                        {artist.name}
                      </h3>
                      <p className="text-sm font-black text-[#d6e7d1] drop-shadow-md">
                        {artist.genre}
                      </p>
                    </div>
                    {artist.label && (
                      <div className="text-[rgba(44,93,50,1)] absolute top-[-10px] left-0 w-full text-center text-5xl font-bold animate-bounce">
                        {artist.label}
                      </div>
                    )}
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {visibleUpcoming < artists.length && (
          <button
            onClick={() => setVisibleUpcoming(visibleUpcoming + 4)}
            className="mt-6 px-6 py-2 bg-[rgba(44,93,50,1)] text-white font-bold rounded hover:bg-green-800 transition-all"
          >
            Afficher plus
          </button>
        )}
      </div>
    </div>
  );
};

export default RosterPage;
