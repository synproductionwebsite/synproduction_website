"use client";

import React from "react";
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
    title: "ATELEIR DE MÉDIATION",
    subtitle: "SYN Production",
    author: "",
    image: "/img/article/atelier.jpg",
    description: [
      "blabla"
    ],
    reverse: false,
  },
];

const ActusPage = () => {
  return (
    <div className="w-full mx-auto text-center pb-10 bg-gradient-to-r from-[#685A96] via-[#685A96] to-[#2c5d32]">
      <h2 className="text-3xl lg:text-7xl font-extrabold pt-4 mb-8 text-white">
        ACTUS
      </h2>

      <div className="mt-12 space-y-16 px-4">
        {articles.map((article, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              article.reverse ? "md:flex-row-reverse" : ""
            } items-stretch overflow-hidden rounded-2xl mx-auto max-w-5xl 
              backdrop-blur-md bg-white/10
              transition-transform duration-300 ease-in-out 
              hover:scale-[1.02] hover:shadow-2xl hover:ring-2 hover:ring-white/30`}
          >
            {/* Image */}
            <div className="md:w-1/2 relative h-[300px] md:h-auto">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Texte */}
            <div className="md:w-1/2 flex flex-col justify-center p-6 text-left space-y-4 text-white">
              <h3 className="text-4xl font-bold">{article.title}</h3>
              <p className="text-2xl italic">{article.subtitle}</p>
              {article.author && (
                <p className="text-sm opacity-80">Par {article.author}</p>
              )}
              {article.description?.map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed font-mono">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActusPage;
