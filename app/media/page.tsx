"use client";

import React from "react";

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
        className="absolute left-[-10%] w-[200%] h-0 flex items-center pointer-events-none opacity-50"
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
              src="/img/logo/logo_purple.png"
              alt="logo"
              className="h-20 mx-4 object-contain"
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
            <img
              key={`scroll2-${i}`}
              src="/img/logo/logo_black.png"
              alt="logo"
              className="h-20 mx-4 object-contain"
            />
          ))}
        </div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 text-[#1F1F1F] max-w-5xl mx-auto p-6">
        <h2 className="text-3xl lg:text-7xl font-extrabold pt-4">MEDIA</h2>
        <div>
          <p className="bg-customPurple1 rounded-4xl font-mono text-justify p-4 mt-6 shadow-lg">
            Ajouter du contenu !
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
