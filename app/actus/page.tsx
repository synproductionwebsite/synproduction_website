"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import articles from "../../public/data/actus.json";
import Modal from "../components/Modal";
import { X, CirclePlus } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const ActusPage = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const handleShowMore = () => setVisibleCount((prev) => prev + 3);
  const closeModal = () => setSelectedArticle(null);

  return (
    <div className="w-full mx-auto text-center pb-10 bg-gradient-to-r from-[#685A96] via-[#685A96] to-[#2c5d32]">
      <h2 className="text-3xl lg:text-7xl font-extrabold pt-4 mb-10 text-white" data-aos="fade-up">
        ACTUS
      </h2>

      {/* ⭐ GRID RESPONSIVE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
        {sortedArticles.slice(0, visibleCount).map((article, index) => (
          <div
          key={index}
          data-aos="fade-left"
          className="relative bg-white/10 shadow-xl rounded-2xl overflow-hidden backdrop-blur-md flex flex-col cursor-pointer"
          onClick={() => setSelectedArticle(index)}
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
        
            <p className="line-clamp-3 font-mono text-white text-justify">
              {article.description.join(" ")}
            </p>
          </div>
        
          {/* CirclePlus */}
          <CirclePlus
            className="
              absolute bottom-4 right-4 w-10 h-10 p-2 
              bg-purple-700 text-white rounded-full 
              shadow-lg hover:bg-purple-800 hover:scale-110 
              transition-transform duration-200 cursor-pointer
            "
          />
        </div>        
        ))}
      </div>

      {/* Show More Button */}
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
        <Modal>
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[999] flex justify-center items-center p-4"
            onClick={closeModal}
          >
            <div
              className="relative bg-[#fff9f2] rounded-2xl max-w-4xl w-full overflow-y-auto max-h-[90vh] shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CROIX EN HAUT */}
              <button
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/20 hover:bg-white/40 transition"
                onClick={closeModal}
              >
                <X className="text-gray-800 w-6 h-6" />
              </button>

              {/* IMAGE */}
              <div className="relative w-full h-64">
                <Image
                  src={sortedArticles[selectedArticle].image}
                  alt={sortedArticles[selectedArticle].title}
                  fill
                  className="object-cover rounded-t-2xl"
                />
              </div>

              {/* CONTENU */}
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

                {/* BOUTON FERMER EN BAS */}
                <div className="text-center mt-4">
                  <button
                    onClick={closeModal}
                    className="px-6 py-2 bg-purple-700 text-white rounded-xl hover:bg-purple-800 transition"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ActusPage;
