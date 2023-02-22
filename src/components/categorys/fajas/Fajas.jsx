import React, { useEffect } from "react";
import PageSection from "@/components/PageSection";
import { AiOutlineArrowUp, AiFillFire } from "react-icons/ai";

import product1 from "@/assets/categorys/fajas/product1.jpg";
import product2 from "@/assets/categorys/fajas/product2.jpg";
import product3 from "@/assets/categorys/fajas/product3.jpg";
import product4 from "@/assets/categorys/fajas/product4.jpg";
import product5 from "@/assets/categorys/fajas/product5.jpg";
import product6 from "@/assets/categorys/fajas/product6.jpg";

import { useLocation } from "react-router-dom";

import video2 from "@/assets/categorys/dyel/video2.mp4";
import FajasBanner from "@/components/categorys/fajas/FajasBanner";
import Navigate from "@/components/categorys/Navigate";
import IconInstagram from "@/icons/IconInstagram";
import IconWpp from "@/icons/IconWpp";
import Home from "@/components/Home";

const Fajas = () => {
  const portfolios = [
    {
      id: 1,
      src: product1,
      category: "Contenido Gelam",
      codeInstagram: "https://www.instagram.com/p/CofvzRIPoAr/",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 2,
      src: product2,
      category: "Contenido Gelam",
      codeInstagram: "https://www.instagram.com/p/CiK6rLZu47D/",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 3,
      src: product3,
      category: "Contenido Gelam",
      codeInstagram: "https://www.instagram.com/p/CnSPahJusWo/",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 4,
      src: product4,
      category: "Contenido Gelam",
      codeInstagram: "https://www.instagram.com/p/CoxBb-jOVug/",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 5,
      src: product5,
      category: "Contenido Gelam",
      codeInstagram: "https://www.instagram.com/p/CgnP1yoOeSm/",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 6,
      src: product6,
      category: "Contenido Gelam",
      codeInstagram: "https://www.instagram.com/p/CiTKW6aODfW/",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
  ];

  const useScroll = () => {
    window.scroll({ top: 580, left: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-screen-xl mx-auto h-fit">
      <Home />
      <div className="my-10 mx-8 text-center lg:text-center lg:border-black">
        <h1 className="text-4xl lg:text-5xl text-white text-center md:mb-20 mb-10">
          Fajas
        </h1>
        <div className="grid gap-8 md:px-12 grid-cols-1 sm:grid-cols-2  lg:grid-cols-2">
          <FajasBanner />
        </div>

        <p className="my-6 text-center border-l-4 pl-4 border-white lg:text-center lg:border-black">
          (TEXTO <span className="text-[#c36501]">FAJAS</span> )Complementa tus
          rutinas y cuidados con productos creados especialmente para tus
          necesidades.
        </p>
        <p className="my-6 text-center border-l-4 pl-4 border-white lg:text-center lg:border-black">
          (TEXTO <span className="text-[#c36501]">FAJAS</span> ) Nuestro Gel
          Liporeductor moldea tu figura de forma inteligente.
        </p>
        <p className="my-6 text-center border-l-4 pl-4 border-white lg:text-center lg:border-black">
          (TEXTO <span className="text-[#c36501]">FAJAS</span> ) Es ideal para
          momentos en que estarás activa, ir a caminar, hacer tus labores en el
          hogar o ir al gimnasio.
        </p>
        <div className="w-full bg-gradient-to-b from-gray-800 to-black text-white mt-12">
          <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4 ">
            <div className="grid gap-8 md:px-12 grid-cols-1 sm:grid-cols-2  lg:grid-cols-2">
              <div className="rounded-lg shadow-lg shadow-white group">
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
                  <p className="m-4 capitalize text-sm md:text-lg">
                    Sara modelando 1 uso del producto
                  </p>
                  <div className="flex gap-5 flex-col">
                    <p>"modo de uso del producto"</p>
                    <p>precio del producto $$$</p>
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
                    className="rounded-lg shadow-lg shadow-white group"
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
              <AiOutlineArrowUp className="text-white " size={40} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fajas;
