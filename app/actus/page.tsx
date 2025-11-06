"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import articles from "../../public/data/actus.json"
import AOS from "aos";
import "aos/dist/aos.css";

const ActusPage = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // ✅ TRIER → + récent → + vieux
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="w-full mx-auto text-center pb-10 bg-gradient-to-r from-[#685A96] via-[#685A96] to-[#2c5d32]">
      <h2 className="text-3xl lg:text-7xl font-extrabold pt-4 mb-10 text-white">
        ACTUS
      </h2>

      {/* ⭐ GRID RESPONSIVE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
        {sortedArticles.slice(0, visibleCount).map((article, index) => (
          <div
            key={index}
            data-aos="fade-left" 
            className="bg-white/10 shadow-xl rounded-2xl overflow-hidden backdrop-blur-md flex flex-col"
          >
            {/* IMAGE */}
            <div className="relative w-full h-60">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>

            {/* TEXTE */}
            <div className="flex flex-col text-left p-6 space-y-4 text-white">
              <h3 className="text-2xl font-bold">{article.title}</h3>
              <p className="italic">{article.subtitle}</p>

              {article.author && (
                <p className="text-sm opacity-80">Par {article.author}</p>
              )}

              {/* ✅ DESCRIPTION DISPLAY - juste 3 lignes */}
              <p className="line-clamp-3 font-mono text-white text-justify">
                {article.description.join(" ")}
              </p>

              <button
                onClick={() => setSelectedArticle(index)}
                className="text-purple-300 underline text-sm"
              >
                Voir plus
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ⭐ Show More Button */}
      {visibleCount < sortedArticles.length && (
        <button
          onClick={handleShowMore}
          className="mt-10 px-6 py-3 text-white bg-purple-700 hover:bg-purple-800 transition rounded-xl"
        >
          Voir plus d’actus
        </button>
      )}

      {/* ⭐ MODAL */}
      {selectedArticle !== null && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
        <div className="bg-[#fff9f2] rounded-2xl max-w-3xl w-full overflow-auto max-h-[90vh] shadow-xl relative">
          {/* Croix en haut à droite */}
          <button
            onClick={() => setSelectedArticle(null)}
            className="absolute top-4 right-4 text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            &times;
          </button>

          <div className="relative w-full h-64">
            <Image
              src={sortedArticles[selectedArticle].image}
              alt={sortedArticles[selectedArticle].title}
              fill
              className="object-cover rounded-t-2xl"
            />
          </div>

          <div className="p-6 text-left text-gray-800 space-y-4">
            <h3 className="text-3xl font-bold">
              {sortedArticles[selectedArticle].title}
            </h3>
            <p className="italic">{sortedArticles[selectedArticle].subtitle}</p>
            {sortedArticles[selectedArticle].author && (
              <p className="text-sm opacity-80">
                Par {sortedArticles[selectedArticle].author}
              </p>
            )}
            {sortedArticles[selectedArticle].description.map((text, i) => (
              <p key={i} className="text-justify">
                {text}
              </p>
            ))}

            {/* Bouton Fermer en bas */}
            <div className="text-center mt-4">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2 bg-purple-700 text-white rounded-xl hover:bg-purple-800 transition"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
    </div>
  );
};

export default ActusPage;