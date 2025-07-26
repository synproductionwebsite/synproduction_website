"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const articles = [
  {
    title: "MAZE EN STEREO",
    subtitle: "Maze",
    author: "",
    image: "/img/article/maze.jpg",
    description: [
      "Maze décide enfin de lancer une soirée en son nom. Voilà plus de 10 ans que le magazine promeut l’émergence et la nouvelle scène française comme internationale. Ayant traversé les genres musicaux pendant des années, nous sommes aujourd’hui un des médias qui aide les jeunes artistes à valoriser une image, une vitrine à présenter à leurs publics.",
      "C’est pour cela que Maze décide d’aller plus loin que les mots en organisant un évènement dans la salle mythique du POPUP!, temple sonore qui prône la découverte où de nombreux artistes y ont chanté et joué leurs premières notes de musique en concert.",
      "Pour cette première fête au POPUP!, nous avons décidé de vous présenter une lineup exclusivement féminine. Vous serez charmé·e·s par la voix soul de Carel, chanteuse parisienne, aux productions mélangeant groove, pop et r’n’b. Puis vous pourrez découvrir ou redécouvrir l’artiste Nalla qui jongle entre la pop, le jazz et quelques sonorités hip hop. Pleine d’extravagance, elle sera la dose d’énergie folle parfaite pour se déhancher sur la touche finale de notre soirée : le DJ set de Monsamp et ses musiques disco funk afin de vous faire danser jusqu’au bout de la nuit.",
      "Une programmation éclectique à l’image de Maze et de ses valeurs. De la bonne musique et de belles personnes, tout ce qu’il faut pour passer une soirée mémorable."
    ],
    reverse: false,
  },
  {
    title: "ATELIER DE MÉDIATION",
    subtitle: "SYN Production",
    author: "",
    image: "/img/article/atelier.jpg",
    description: [
      "Premier atelier de SYN au studio de l'association Demain Nos Enfants. L'objectif de cette première rencontre était de prendre un temps pour réfléchir les processus de création. Plusieurs artistes (photographes, musiciens-compositeurs, cinéastes) ont prit le temps de réfléchir à des méthodes d'organisation et des sources d'inspiration. Nous avons conclu cette rencontre par l'enregistrement d'un podcast - publication TBA."
    ],
    reverse: false,
  },
];

type ArticleDescriptionProps = {
  description: string[];
  expanded: boolean;
  onExpandChange: (expanded: boolean) => void;
};

const MAX_HEIGHT = 180;

const ArticleDescription = ({ description, expanded, onExpandChange }: ArticleDescriptionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      setIsOverflowing(el.scrollHeight > MAX_HEIGHT);
    }
  }, [description]);

  return (
    <>
      <div
        ref={containerRef}
        style={{
          maxHeight: expanded ? "none" : MAX_HEIGHT,
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
        className="text-justify"
      >
        {description.map((paragraph, i) => (
          <p key={i} className="text-base leading-relaxed font-mono text-white">
            {paragraph}
          </p>
        ))}
      </div>

      {isOverflowing && (
        <button
          onClick={() => onExpandChange(!expanded)}
          className="mt-2 inline-block px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition"
        >
          {expanded ? "Voir moins" : "Lire la suite"}
        </button>
      )}
    </>
  );
};

// Hook pour détecter si on est en mobile (largeur < 768px)
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

const ActusPage = () => {
  const isMobile = useIsMobile();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Effet carrousel uniquement en desktop
  useEffect(() => {
    if (isMobile || isUserInteracting) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % articles.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isMobile, isUserInteracting]);

  const handleArticleClick = (index: number) => {
    if (isMobile) return; // en mobile pas de sélection
    setCurrentIndex(index);
    setIsUserInteracting(true);
  };

  const handleExpandChange = (index: number, expanded: boolean) => {
    setExpandedIndex(expanded ? index : null);
  };

  return (
    <div className="w-full mx-auto text-center pb-10 bg-gradient-to-r from-[#685A96] via-[#685A96] to-[#2c5d32]">
      <h2 className="text-3xl lg:text-7xl font-extrabold pt-4 mb-8 text-white">ACTUS</h2>

      <div
        className={`flex ${isMobile ? "flex-col" : "flex-row"} justify-center gap-6 px-4 max-w-full overflow-x-auto`}
      >
        {articles.map((article, index) => {
          // En desktop, on affiche uniquement le currentIndex en grand, les autres plus petits
          // En mobile, on affiche tous les articles plein largeur, sans opacité ni échelle
          const isActive = !isMobile && index === currentIndex;
          const isExpanded = index === expandedIndex;

          return (
            <div
              key={index}
              onClick={() => handleArticleClick(index)}
              className={`cursor-pointer rounded-2xl transition-all duration-300 ease-in-out
                ${
                  isMobile
                    ? "w-full bg-white/10 shadow-md scale-100 opacity-100 mb-8"
                    : isActive
                    ? "w-full md:w-[600px] lg:w-[700px] bg-white/10 shadow-2xl scale-100 opacity-100"
                    : "w-full md:w-[300px] lg:w-[350px] bg-white/5 opacity-50 scale-80"
                }
                flex flex-col md:flex-row items-stretch overflow-visible`}
              style={{
                minHeight: "600px",
                maxHeight: isExpanded ? "none" : "600px",
              }}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden
                  ${
                    isMobile
                      ? "w-full h-[300px] rounded-2xl"   // arrondi sur tous les coins + hauteur min fixe
                      : "md:w-1/2 h-[300px] md:h-auto rounded-l-2xl rounded-r-none"  // desktop, arrondi côté gauche uniquement
                  }
                `}
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Texte */}
              <div
                className={`flex flex-col justify-center p-6 text-left space-y-4 ${
                  isMobile ? "w-full" : "md:w-1/2"
                }`}
                style={{ height: "100%", overflow: "visible" }}
              >
                <h3 className={`font-bold text-white transition-all duration-300 ${isActive ? "text-4xl" : "text-2xl"}`}>
                  {article.title}
                </h3>
                <p className={`italic text-white transition-all duration-300 ${isActive ? "text-2xl" : "text-xl"}`}>
                  {article.subtitle}
                </p>
                {article.author && (
                  <p className="text-sm opacity-80 text-white">Par {article.author}</p>
                )}

                <ArticleDescription
                  description={article.description}
                  expanded={isExpanded}
                  onExpandChange={(expanded) => handleExpandChange(index, expanded)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActusPage;
