"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { X, CirclePlus } from "lucide-react";
import artists from "../../public/data/artists.json";
import AOS from "aos";
import Modal from "../components/Modal";
import "aos/dist/aos.css";

type Rotation = { x: number; y: number };

const RosterPage = () => {
  const [baseRotations, setBaseRotations] = useState<{ [key: number]: Rotation }>({});
  const [hoverRotations, setHoverRotations] = useState<{ [key: number]: Rotation }>({});
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  // AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Random rotations
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

    setHoverRotations(prev => ({
      ...prev,
      [index]: { x: rotateX, y: rotateY },
    }));
  };

  const handleMouseLeave = (index: number) => {
    setHoverRotations(prev => ({
      ...prev,
      [index]: baseRotations[index],
    }));
  };

  const openModal = (index: number) => setModalIndex(index);
  const closeModal = () => setModalIndex(null);

  const getYouTubeEmbedUrl = (url: string): string | null => {
    try {
      const parsedUrl = new URL(url);
      let videoId = "";
      if (parsedUrl.hostname === "youtu.be") {
        videoId = parsedUrl.pathname.slice(1);
      } else if (parsedUrl.hostname.includes("youtube.com")) {
        videoId = parsedUrl.searchParams.get("v") || "";
      }
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    } catch {
      return null;
    }
  };

  return (
    <div className="relative w-full text-center text-white pb-20 overflow-hidden">
      {/* Background */}
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

      <div className="relative z-10 max-w-[1300px] mx-auto px-4">
        <h2 className="text-3xl lg:text-7xl font-extrabold pt-4 mb-8" data-aos="fade-up">
          ARTISTES
        </h2>

        {/* Cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {artists.map((artist, index) => (
            <div
              key={index}
              data-aos="flip-left"
              className="relative w-full max-w-xs h-[360px] mx-auto group perspective-[1000px] cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div
                className="transition-transform duration-200 ease-out transform rounded-lg w-full h-full shadow-lg"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
                style={{
                  transform: `rotateX(${hoverRotations[index]?.x ?? 0}deg) rotateY(${hoverRotations[index]?.y ?? 0}deg)`,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.7), 0 15px 25px rgba(44, 93, 50, 0.4)",
                }}
              >
                <div className="relative w-full h-[320px] rounded-lg overflow-hidden">
                  <Image src={artist.image} alt={artist.name} fill className="object-cover rounded-lg" />
                </div>

                <div className="absolute bottom-0 w-full rounded-b-lg px-4 py-4 backdrop-blur-sm bg-gradient-to-t from-[rgba(44,93,50,0.7)] to-[rgba(44,93,50,0.3)] group-hover:bg-[rgba(44,93,50,0.85)]">
                  <h3 className="text-xl font-semibold text-white drop-shadow-md">{artist.name}</h3>
                  <p className="text-sm font-black text-[#d6e7d1] drop-shadow-md">{artist.title}</p>
                </div>

                {/* CirclePlus Button */}
                <div className="absolute bottom-4 right-4">
                  <CirclePlus className="w-10 h-10 p-2 bg-green-700 text-white rounded-full shadow-lg hover:bg-green-800 hover:scale-110 transition-transform duration-200 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalIndex !== null && (
        <Modal>
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[999] flex justify-center items-center p-4"
            onClick={closeModal}
          >
            <div
              className="relative bg-black/90 border border-green-900 p-6 max-w-4xl w-full rounded-lg overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="absolute top-4 right-4" onClick={closeModal}>
                <X className="text-white hover:text-green-400" />
              </button>

              {(() => {
                const artist = artists[modalIndex];
                return (
                  <div className="flex flex-col lg:flex-row gap-6 text-left">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white">{artist.name}</h3>
                      {artist.title && <p className="mb-2">{artist.title}</p>}
                      {artist.location && (
                        <p className="text-sm text-green-200 italic mb-2">{artist.location}</p>
                      )}

                      {artist.details?.map((detail: string, i: number) => (
                        <p key={i} className="mt-4 text-white leading-relaxed">{detail}</p>
                      ))}

                      {artist.syn && (
                        <p className="mt-4 text-green-300 italic text-sm">{artist.syn}</p>
                      )}

                      {artist.contact && (
                        <p className="mt-2 text-white">Contact : <span className="font-bold">{artist.contact}</span></p>
                      )}

                      <div className="text-center mt-6">
                        <button
                          onClick={closeModal}
                          className="px-6 py-2 bg-green-700 text-white rounded-xl hover:bg-green-800 transition"
                        >
                          Fermer
                        </button>
                      </div>
                    </div>

                    {artist.poster ? (
                      <div className="w-full lg:w-[50%] aspect-video relative rounded-lg overflow-hidden">
                        <Image src={artist.poster} alt={`${artist.name} poster`} fill className="object-cover rounded-lg" />
                      </div>
                    ) : artist.video ? (
                      <div className="w-full lg:w-[50%] aspect-video">
                        <iframe
                          className="w-full h-full rounded-lg"
                          src={getYouTubeEmbedUrl(artist.video) || ""}
                          title={artist.name}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ) : null}
                  </div>
                );
              })()}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default RosterPage;
