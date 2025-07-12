"use client";

import React from "react";

const MediaPage = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Bandeau défilant incliné */}
      <div
        className="absolute left-[20%] w-[200%] h-0 flex items-center pointer-events-none opacity-20"
        style={{
          top: "0%",
          transform: "rotate(30deg)",
          transformOrigin: "left center",
        }}
      >
        <div className="flex animate-scroll ml-8">
          {[...Array(20)].map((_, i) => (
            <img
              key={`scroll2-${i}`}
              src="/img/logo/logo_green.png"
              alt="logo"
              className="h-20 mx-4 object-contain"
            />
          ))}
        </div>
      </div>
      <div
        className="absolute left-[20%] w-[200%] h-0 flex items-center pointer-events-none opacity-20"
        style={{
          top: "0%",
          transform: "rotate(30deg)",
          transformOrigin: "left center",
        }}
      >
        <div className="flex animate-scroll ml-8">
          {[...Array(20)].map((_, i) => (
            <img
              key={`scroll2-${i}`}
              src="/img/logo/logo_green.png"
              alt="logo"
              className="h-20 mx-4 object-contain"
            />
          ))}
        </div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 text-[#1F1F1F] max-w-5xl mx-auto p-6">
        <h2 className="text-3xl lg:text-7xl font-extrabold pt-4">ROSTER</h2>
        <div>
          <p className="bg-customPurple1 rounded-4xl font-mono text-justify p-4 mt-6 shadow-lg">
            L&apos;origine de SYN Production, une envie partagée : explorer les silences dans la partition de nos vies prestissimo. Comment renouveler notre rapport à la Culture ? 
            Comment redécouvrir notre rapport aux autres et à soi ? Comment prendre de nouveau le temps ?
            Dans un monde d&apos;accélération et de quête de sens, nous souhaitons porter un projet où l&apos;on laisse place à l&apos;échange, à la création et à la réflexion.
            C&apos;est en créant des espaces de revalorisation de lien social et en favorisant l&apos;émergence et la diffusion du Beau que l&apos;on souhaite donner corps à SYN Production.
          </p>
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MediaPage;
