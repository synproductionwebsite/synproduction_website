"use client";

import React from "react";
import Image from "next/image";

// ✅ Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// ✅ Hook
import { useMediaQuery } from "../hooks/useMediaQuery";

const MediaPage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  // ✅ Liste images + videos (bento 1)
  const gallery3 = [
    { type: "image", src: "/img/media/decolonized1.jpg" },
    { type: "image", src: "/img/media/decolonized2.jpg" },
    { type: "video", src: "/video/media/decolonized3.mp4" },
    { type: "video", src: "/video/media/decolonized4.mp4" },
  ];

  // ✅ Liste images + videos (bento 2)
  const gallery1 = [
    { type: "image", src: "/img/media/batik1.jpg" },
    { type: "image", src: "/img/media/batik4.jpg" },
    { type: "video", src: "/video/media/batik.mp4" },
    { type: "image", src: "/img/media/batik3.jpg" },
  ];

  // ✅ Liste images + videos (bento 3)
  const gallery2 = [
    { type: "image", src: "/img/media/tempon1.jpg" },
    { type: "video", src: "/video/media/tempon.mp4" },
    { type: "video", src: "/video/media/lino.mp4" },
  ];

  return (
    <div className="relative bg-[#fff9f2] overflow-hidden">

      {/* ✅ Bandeaux SYN — inchangés */}
      {[
        "/img/logo/logo_green.png",
        "/img/logo/logo_purple.png",
        "/img/logo/logo_black.png",
        "/img/logo/logo_black.png",
        "/img/logo/logo_green.png",
        "/img/logo/logo_purple.png",
        "/img/logo/logo_black.png",
        "/img/logo/logo_green.png",
        "/img/logo/logo_purple.png",
      ].map((src, i) => (
        <div
          key={i}
          className="absolute w-[200%] h-0 flex items-center pointer-events-none opacity-50"
          style={{
            left: `${30 - i * 40}%`,
            top: "0%",
            transform: "rotate(30deg)",
            transformOrigin: "left center",
          }}
        >
          <div className="flex animate-scroll ml-8">
            {[...Array(50)].map((_, j) => (
              <Image
                key={`${i}-${j}`}
                src={src}
                alt="logo"
                width={160}
                height={160}
                className="mx-4 object-contain"
              />
            ))}
          </div>
        </div>
      ))}

      {/* Contenu principal */}
      <div className="bg-[#fff9f2]">
        <h2 className="text-3xl lg:text-7xl font-extrabold pt-4 text-[#1F1F1F] text-center" data-aos="fade-up">
          SYN EN VADROUILLE
        </h2>

        {/* ------------------------------------------------------- */}
        {/* SECTION 1 */}
        {/* ------------------------------------------------------- */}
        <div className="relative z-10 text-[#1F1F1F] max-w-5xl mx-auto p-6" data-aos="fade-left">
          <h3 className="lg:text-5xl">Festival DECOLONIZED</h3>

          <div className="bg-white/90 rounded-4xl font-mono text-justify p-4 mt-6 shadow-lg">
            <p className="mb-5">Produit par le collectif HUITCENTHUIT</p>

            <p>
              Le 12 octobre 2025, SYN Production a été invité à tenir un stand
              au festival DECOLONIZED, événement caritatif de soutien aux
              causes palestinienne, soudanaise et kanak…
            </p>

            <p className="mb-5">
              Nous avons échangé, lu, joué et puis nous nous sommes inspiré.e.s
              pour la suite...
            </p>
          </div>

          {/* ✅ BENTO → Carrousel si mobile */}
          <div className="mt-4">
            {isMobile ? (
              <Swiper
                slidesPerView={1}
                spaceBetween={16}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
              >
                {gallery3.map((item, i) => (
                  <SwiperSlide key={i}>
                    {item.type === "image" ? (
                      <Image
                        src={item.src}
                        alt=""
                        width={500}
                        height={500}
                        className="rounded-2xl w-full h-[400px] object-cover shadow-md"
                      />
                    ) : (
                      <video
                        autoPlay
                        loop
                        muted
                        className="rounded-2xl w-full h-[400px] object-cover shadow-md"
                      >
                        <source src={item.src} type="video/mp4" />
                      </video>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              /* ✅ Desktop */
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-md flex h-[500px]">
                  <video autoPlay loop muted className="w-full h-full object-cover">
                    <source src="/video/media/decolonized4.mp4" type="video/mp4" />
                  </video>
                </div>

                <div className="flex flex-col gap-4 h-[500px]">
                  <div className="rounded-2xl overflow-hidden shadow-md h-[50%]">
                    <Image
                      src="/img/media/decolonized1.jpg"
                      alt=""
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-md h-[50%]">
                    <Image
                      src="/img/media/decolonized2.jpg"
                      alt=""
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-md flex h-[500px]">
                  <video autoPlay loop muted className="w-full h-full object-cover">
                    <source src="/video/media/decolonized3.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ------------------------------------------------------- */}
        {/* SECTION 2 */}
        {/* ------------------------------------------------------- */}
        <div className="relative z-10 text-[#1F1F1F] max-w-5xl mx-auto p-6" data-aos="fade-left">
          <h3 className="lg:text-5xl">
            Tampons et précision, l&apos;art de la linogravure
          </h3>

          <div className="bg-white/90 rounded-4xl font-mono text-justify p-4 mt-6 shadow-lg">
            <p>
              Atelier linogravure avec l&apos;artiste Marilyn Depagne…
            </p>
          </div>

          <div className="mt-4">
            {isMobile ? (
              <Swiper
                slidesPerView={1}
                spaceBetween={16}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
              >
                {gallery2.map((item, i) => (
                  <SwiperSlide key={i}>
                    {item.type === "image" ? (
                      <Image
                        src={item.src}
                        alt=""
                        width={500}
                        height={500}
                        className="rounded-2xl w-full h-[400px] object-cover shadow-md"
                      />
                    ) : (
                      <video
                        autoPlay
                        loop
                        muted
                        className="rounded-2xl w-full h-[400px] object-cover shadow-md"
                      >
                        <source src={item.src} type="video/mp4" />
                      </video>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-4 h-[500px]">
                  <div className="rounded-2xl overflow-hidden shadow-md h-[50%]">
                    <Image
                      src="/img/media/tempon1.jpg"
                      alt=""
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-md h-[50%]">
                    <video autoPlay loop muted className="w-full h-full object-cover">
                      <source src="/video/media/tempon.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>

                <div className="flex flex-col gap-4 h-[500px] rounded-2xl">
                  <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover rounded-2xl"
                  >
                    <source src="/video/media/lino.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* ------------------------------------------------------- */}
        {/* SECTION 3 */}
        {/* ------------------------------------------------------- */}
        <div className="relative z-10 text-[#1F1F1F] max-w-5xl mx-auto p-6" data-aos="fade-right">
          <h3 className="lg:text-5xl">
            Découverte du batik : notre étendard en cinghalais
          </h3>

          <div className="bg-white/90 rounded-4xl font-mono text-justify p-4 mt-6 shadow-lg">
            <p className="mb-5">
              Lors d&apos;un séjour au Sri Lanka, nous avons expérimenté le batik…
            </p>

            <p>Nous en avons profité pour créer un étendard à notre effigie…</p>
          </div>

          {/* ✅ BENTO mobile */}
          <div className="mt-4">
            {isMobile ? (
              <Swiper
                slidesPerView={1}
                spaceBetween={16}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
              >
                {gallery1.map((item, i) => (
                  <SwiperSlide key={i}>
                    {item.type === "image" ? (
                      <Image
                        src={item.src}
                        alt=""
                        width={500}
                        height={500}
                        className="rounded-2xl w-full h-[400px] object-cover shadow-md"
                      />
                    ) : (
                      <video
                        autoPlay
                        loop
                        muted
                        className="rounded-2xl w-full h-[400px] object-cover shadow-md"
                      >
                        <source src={item.src} type="video/mp4" />
                      </video>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              /* ✅ Desktop */
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-4 h-[500px]">
                  <div className="rounded-2xl overflow-hidden shadow-md h-[50%]">
                    <Image
                      src="/img/media/batik1.jpg"
                      alt=""
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-md h-[50%]">
                    <Image
                      src="/img/media/batik4.jpg"
                      alt=""
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-md flex h-[500px]">
                  <video autoPlay loop muted className="w-full h-full object-cover">
                    <source src="/video/media/batik.mp4" type="video/mp4" />
                  </video>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-md flex h-[500px]">
                  <Image
                    src="/img/media/batik3.jpg"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
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
