import React, { useEffect } from "react";
import PageSection from "@/components/PageSection";
import { AiOutlineArrowUp, AiFillFire } from "react-icons/ai";

import product1 from "@/assets/categorys/product2/product1.jpg";
import product2 from "@/assets/categorys/product2/product2.jpg";
import product3 from "@/assets/categorys/product2/product3.jpg";
import product4 from "@/assets/categorys/product2/product4.jpg";
import product5 from "@/assets/categorys/product2/product5.jpg";
import product6 from "@/assets/categorys/product2/product6.jpg";
import { useLocation } from "react-router-dom";

import video1 from "@/assets/categorys/product2/video1.mp4";
import video2 from "@/assets/categorys/product2/video2.mp4";

import Navigate from "@/components/categorys/Navigate";
import IconInstagram from "@/icons/IconInstagram";
import IconWpp from "@/icons/IconWpp";

const Product2 = () => {
  const portfolios = [
    {
      id: 1,
      src: product1,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/CjQfuzeO7q4/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 2,
      src: product2,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/CeeliknO3FR/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 3,
      src: product3,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/CdJehGglrHz/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 4,
      src: product4,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/CR1uoR8Ltww/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 5,
      src: product5,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/Ci5f_5POfDb/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 6,
      src: product6,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/CnSPahJusWo/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
  ];

  const useScroll = () => {
    window.scroll({ top: 660, left: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-screen-xl mx-auto h-fit">
      <div className="my-10 mx-8 text-center lg:text-left">
        <Navigate />
        <h1 className="text-4xl lg:text-5xl text-[#fd6033] text-center">
          Dyel
        </h1>
        <p className="my-4 text-center">
          Complementa tus rutinas y cuidados con productos creados especialmente
          para tus necesidades.
        </p>
        <p className="my-4 text-center flex  items-center flex-col gap-2 text-lg">
          Nuestro Gel Liporeductor moldea tu figura de forma inteligente.
          <AiFillFire size={30} className="text-[#fd6033]" />
        </p>
        <p className="my-4 text-center">
          Es ideal para momentos en que estarás activa, ir a caminar, hacer tus
          labores en el hogar o ir al gimnasio.
        </p>
        <div className="w-full bg-gradient-to-b from-gray-800 to-black text-white mt-12">
          <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4 ">
            <div className="grid gap-8 md:px-12 grid-cols-1 sm:grid-cols-2  lg:grid-cols-2">
              <div className="rounded-lg shadow-lg shadow-[#fd6033] group">
                <div className="flex flex-col items-center justify-center">
                  <video
                    autoPlay
                    src={video1}
                    loop
                    type="video/mp4"
                    playsInline
                    muted
                    className="h-[330px] md:h-[500px]  w-full  object-cover rounded-t-xl"
                  />
                  <p className="m-4 capitalize text-sm md:text-lg">Título</p>
                  <div className="flex gap-5">
                    <p>Info</p>
                  </div>
                  <div className="m-4 capitalize text-sm md:text-lg flex items-center justify-center gap-5">
                    <article className="group-hover:scale-125 duration-300">
                      <a
                        href="https://www.instagram.com/p/Cf7cz_3AcWy/?hl=es"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <IconInstagram />
                      </a>
                    </article>
                    <article className="group-hover:scale-125 duration-300">
                      <a
                        href="https://api.whatsapp.com/send?phone=573045571083"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <IconWpp />
                      </a>
                    </article>
                  </div>
                </div>
              </div>

              <div className="rounded-lg shadow-lg shadow-[#fd6033] group">
                <div className="flex flex-col items-center justify-center">
                  <video
                    autoPlay
                    src={video2}
                    loop
                    type="video/mp4"
                    playsInline
                    muted
                    className="h-[330px] md:h-[500px]  w-full  object-cover rounded-t-xl"
                  />
                  <p className="m-4 capitalize text-sm md:text-lg">Título</p>
                  <div className="flex gap-5">
                    <p>Info</p>
                  </div>
                  <div className="m-4 capitalize text-sm md:text-lg flex items-center justify-center gap-5">
                    <article className="group-hover:scale-125 duration-300">
                      <a
                        href="https://www.instagram.com/p/CR9Yl5XHz6j/?hl=es"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <IconInstagram />
                      </a>
                    </article>
                    <article className="group-hover:scale-125 duration-300">
                      <a
                        href="https://api.whatsapp.com/send?phone=573045571083"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <IconWpp />
                      </a>
                    </article>
                  </div>
                </div>
              </div>

              {portfolios.map(
                ({ id, src, codeInstagram, category, codeWpp }) => (
                  <div
                    key={id}
                    className="rounded-lg shadow-lg shadow-[#fd6033] group"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <img
                        src={src}
                        className="h-[330px] md:h-[500px]  w-full  object-cover rounded-t-xl "
                      />
                      <p className="m-4 capitalize text-sm md:text-lg">
                        {category}
                      </p>
                      <div className="flex gap-5">
                        <p>Info</p>
                        <p>$$$</p>
                      </div>
                      <div className="m-4 capitalize text-sm md:text-lg flex items-center justify-center gap-5">
                        <article className="group-hover:scale-125 duration-300">
                          <a
                            href={codeInstagram}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <IconInstagram />
                          </a>
                        </article>
                        <article className="group-hover:scale-125 duration-300">
                          <a href={codeWpp} target="_blank" rel="noreferrer">
                            <IconWpp />
                          </a>
                        </article>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
            <button
              onClick={useScroll}
              className="flex items-center justify-center mt-10"
            >
              <AiOutlineArrowUp className="text-[#fd6033] " size={40} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product2;
