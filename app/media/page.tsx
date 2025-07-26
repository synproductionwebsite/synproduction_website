"use client";

import React from "react";
import Image from "next/image";

const MediaPage = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Bandeau défilant incliné */}
      <div
        className="absolute left-[30%] w-[200%] h-0 flex items-center pointer-events-none opacity-50"
        style={{
          top: "0%",
          transform: "rotate(30deg)",
          transformOrigin: "left center",
        }}
      >
        <div className="flex animate-scroll ml-8">
          {[...Array(20)].map((_, i) => (
            <Image
              key={`scroll2-${i}`}
              src="/img/logo/logo_green.png"
              alt="logo"
              width={160}
              height={160}
              className="mx-4 object-contain"
            />
          ))}
        </div>
      </div>

      <div
        className="absolute left-[-10%] w-[200%] h-0 flex items-center pointer-events-none opacity-50"
        style={{
          top: "0%",
          transform: "rotate(30deg)",
          transformOrigin: "left center",
        }}
      >
        <div className="flex animate-scroll ml-8">
          {[...Array(20)].map((_, i) => (
            <Image
              key={`scroll2-${i}`}
              src="/img/logo/logo_purple.png"
              alt="logo"
              width={160}
              height={160}
              className="mx-4 object-contain"
            />
          ))}
        </div>
      </div>

      <div
        className="absolute left-[70%] w-[200%] h-0 flex items-center pointer-events-none opacity-50"
        style={{
          top: "0%",
          transform: "rotate(30deg)",
          transformOrigin: "left center",
        }}
      >
        <div className="flex animate-scroll ml-8">
          {[...Array(20)].map((_, i) => (
            <Image
              key={`scroll2-${i}`}
              src="/img/logo/logo_black.png"
              alt="logo"
              width={160}
              height={160}
              className="mx-4 object-contain"
            />
          ))}
        </div>
      </div>

      {/* Contenu principal */}
      <div className="bg-[#fff9f2]">
        <h2 className="text-3xl lg:text-7xl font-extrabold pt-4 text-[#1F1F1F] text-center">SYN EN VADROUILLE</h2>
        <div className="relative z-10 text-[#1F1F1F] max-w-5xl mx-auto p-6">
        <h3 className="lg:text-5xl">Découverte du batik : notre étendard en cinghalais</h3>

        <div className="bg-white/90 rounded-4xl font-mono text-justify p-4 mt-6 shadow-lg">
          <p className="mb-5">
            Lors d&apos;un séjour au Sri Lanka, nous avons expérimenté le batik. Cette technique indonésienne de création de motifs sur tissu est très répandue au pays du thé et de la cannelle.
          </p>
          <p>
            Nous en avons profité pour créer un étendard à notre effigie. Et même qu&apos;on nous a traduit notre nom en cinghalais !
          </p>
        </div>

        {/* Bento layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {/* Colonne images */}
          <div className="flex flex-col gap-4 h-[500px]">
            <div className="rounded-2xl overflow-hidden shadow-md h-[50%] md:h-1/2">
              <img
                src="/img/media/batik1.jpg"
                alt="Batik création 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md h-[50%] md:h-1/2">
              <img
                src="/img/media/batik4.jpg"
                alt="Batik création 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Colonne vidéo verticale pleine hauteur */}
          <div className="rounded-2xl overflow-hidden shadow-md flex h-[500px]">
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            >
              <source src="/video/media/batik.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéo.
            </video>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md flex h-[500px]">
            <img
              src="/img/media/batik3.jpg"
              alt="Batik création 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

        <div className="relative z-10 text-[#1F1F1F] max-w-5xl mx-auto p-6">
          <h3 className="lg:text-5xl">Tampons et précision, l&apos;art de la linogravure</h3>
          <div className="bg-white/90 rounded-4xl font-mono text-justify p-4 mt-6 shadow-lg">
            <p>
              Atelier linogravure avec l&apos;artiste Marilyn Depagne au Méditerraneo-Gare du Sud. Un instant suspendu où l&apos;on nous a transmis le savoir faire de cette technique qui requiert précision 
              et patience! On est reparti avec trois petits tampons aux traits de SYN.
            </p>
          </div>
          {/* Bento layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {/* Colonne images */}
          <div className="flex flex-col gap-4 h-[500px]">
            <div className="rounded-2xl overflow-hidden shadow-md h-[50%] md:h-1/2">
              <img
                src="/img/media/tempon1.jpg"
                alt="Batik création 1"
                className="w-full h-full object-cover"
              />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md h-[50%] md:h-1/2">
              <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              >
                <source src="/video/media/tempon.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéo.
              </video>
            </div>
          </div>

          {/* Colonne vidéo verticale pleine hauteur */}
          <div className="flex flex-col gap-4 h-[500px] rounded-2xl">
              <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover rounded-2xl"
              >
                <source src="/video/media/lino.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéo.
              </video>
          </div>
        </div>
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
