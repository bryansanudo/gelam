import React, { useEffect } from "react";
import PageSection from "@/components/PageSection";
import { AiOutlineArrowUp, AiFillFire } from "react-icons/ai";

import product1 from "@/assets/categorys/astralic/astralicProduct.jpg";
import { useLocation } from "react-router-dom";

import video1 from "@/assets/categorys/astralic/video1.mp4";
import AstralicBanner from "@/components/categorys/astralic/AstralicBanner";
import Navigate from "@/components/categorys/Navigate";
import IconInstagram from "@/icons/IconInstagram";
import IconWpp from "@/icons/IconWpp";
import Home from "@/components/Home";

const Astralic = () => {
  const portfolios = [
    {
      id: 1,
      src: product1,
      category: "Contenido de Astralic generado por gelam",
      codeInstagram: "https://www.instagram.com/p/CjQfuzeO7q4/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 2,
      src: product1,
      category: "Contenido de Astralic generado por gelam",
      codeInstagram: "https://www.instagram.com/p/CeeliknO3FR/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 3,
      src: product1,
      category: "Contenido de Astralic generado por gelam",
      codeInstagram: "https://www.instagram.com/p/CdJehGglrHz/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 4,
      src: product1,
      category: "Contenido de Astralic generado por gelam",
      codeInstagram: "https://www.instagram.com/p/CR1uoR8Ltww/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 5,
      src: product1,
      category: "Contenido de Astralic generado por gelam",
      codeInstagram: "https://www.instagram.com/p/Ci5f_5POfDb/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 6,
      src: product1,
      category: "Contenido de Astralic generado por gelam",
      codeInstagram: "https://www.instagram.com/p/CnSPahJusWo/?hl=es",
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
        <h1 className="text-4xl lg:text-5xl text-[#F7E300] text-center md:mb-20 mb-10">
          Astralic
        </h1>
        <div className="grid gap-8 md:px-12 grid-cols-1 sm:grid-cols-2  lg:grid-cols-2">
          <AstralicBanner />
        </div>

        <p className="my-6 text-center border-l-4 pl-4 border-[#F7E300] lg:text-center lg:border-black">
          (TEXTO <span className="text-[#F7E300]">ASTRALIC</span> ) Complementa
          tus rutinas y cuidados con productos creados especialmente para tus
          necesidades.
        </p>
        <p className="my-6 text-center border-l-4 pl-4 border-[#F7E300] lg:text-center lg:border-black">
          (TEXTO <span className="text-[#F7E300]">ASTRALIC</span> ) Nuestro Gel
          Liporeductor moldea tu figura de forma inteligente.
        </p>
        <p className="my-6 text-center border-l-4 pl-4 border-[#F7E300] lg:text-center lg:border-black">
          (TEXTO <span className="text-[#F7E300]">ASTRALIC</span> ) Es ideal
          para momentos en que estarás activa, ir a caminar, hacer tus labores
          en el hogar o ir al gimnasio.
        </p>
        <div className="w-full bg-gradient-to-b from-gray-800 to-black text-white mt-12">
          <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4 ">
            <div className="grid gap-8 md:px-12 grid-cols-1 sm:grid-cols-2  lg:grid-cols-2">
              <div className="rounded-lg shadow-lg shadow-[#F7E300] group">
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
                  <p className="m-4 capitalize text-sm md:text-lg">
                    Sara modelando 1 uso del producto
                  </p>
                  <div className="flex gap-5 flex-col">
                    <p>"comida fit o pre entreno"</p>
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
                    className="rounded-lg shadow-lg shadow-[#F7E300] group"
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
                        <p>Beneficios</p>
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
              <AiOutlineArrowUp className="text-[#F7E300] " size={40} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Astralic;
