"use client";

import React from "react";

const CorePage = () => {
  return (
    <div className="relative overflow-hidden">

      {/* Contenu principal */}
      <div className="relative z-10 text-[#1F1F1F] max-w-5xl mx-auto p-6">
        <div>
          <p className="rounded-4xl font-mono text-justify bg-white/5 backdrop-blur-md p-6 text-black shadow-lg">
            L&apos;origine de SYN Production, une envie partagée : explorer les silences dans la partition de nos vies prestissimo. Comment renouveler notre rapport à la Culture ? 
            Comment redécouvrir notre rapport aux autres et à soi ? Comment prendre de nouveau le temps ?
            Dans un monde d&apos;accélération et de quête de sens, nous souhaitons porter un projet où l&apos;on laisse place à l&apos;échange, à la création et à la réflexion.
            C&apos;est en créant des espaces de revalorisation de lien social et en favorisant l&apos;émergence et la diffusion du Beau que l&apos;on souhaite donner corps à SYN Production.
          </p>
        </div>

        <div className="my-20">
          <h2 className="text-3xl lg:text-7xl mb-3">L&apos;ÉVÉNEMENTIEL</h2>
          <p className="lg:ml-15 rounded-4xl font-mono text-justify bg-white/20 backdrop-blur-md p-6 text-black shadow-lg">
            Nous mettons nos compétences en gestion de projets au service de la création d&apos;événements artistiques : représentations, festivals ou actions culturelles pour artistes, collectifs, associations ou médias culturels.
            Nous concrétisons la vision d&apos;autrui à travers des productions originales et immersives, en assurant un accompagnement complet de la conception à la réalisation.
            Nous produisons aussi nos propres événements sous le nom de SYN Production, pour valoriser les artistes avec qui nous collaborons, dans un esprit fidèle à nos valeurs.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-right mb-3 text-3xl lg:text-7xl">L&apos;ACCOMPAGNEMENT</h2>
          <p className="lg:mr-15 rounded-4xl font-mono text-justify bg-white/20 backdrop-blur-md p-6 text-black shadow-lg">
            Nous accompagnons les artistes émergents dans la structuration de leur projet artistique, en croisant diffusion, promotion et production.
            Ensemble, nous définissons une base solide et une stratégie de diffusion (live, communication, esthétique, représentation). Nous aidons aussi aux démarches administratives et à la constitution d&apos;un réseau.
            Spécialisés en diffusion, nous souhaitons tisser des liens avec labels, éditeurs et structures indépendantes.
            En parallèle, nous proposerons des sessions de conseil ponctuelles, ouvertes aux artistes semi-pros et structures culturelles.
          </p>
        </div>

        <div className="lg:flex">
          <h2 className="text-3xl lg:text-7xl mb-3">LA MÉDIATION CULTURELLE</h2>
          <p className="lg:ml-10 rounded-4xl font-mono text-justify bg-white/20 backdrop-blur-md p-6 text-black shadow-lg">
            Nous développons un cycle d&apos;ateliers et de rencontres autour du processus créatif et de la conception de projets culturels.
            Quatre cycles pour explorer les étapes de la création, de l&apos;inspiration à la narration. Ces ateliers sont ouverts à toutes celles et ceux qui souhaitent explorer leur imaginaire.
            Chaque cycle propose une approche transversale des arts, mêlant différentes pratiques pour révéler le potentiel de passage entre les disciplines.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CorePage;
