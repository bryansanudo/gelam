import React, { useEffect } from "react";
import PageSection from "@/components/PageSection";
import { AiOutlineArrowUp, AiFillFire } from "react-icons/ai";

import product1 from "@/assets/categorys/gelam/product1.jpg";
import product2 from "@/assets/categorys/gelam/product2.jpg";
import product3 from "@/assets/categorys/gelam/product3.jpg";
import product4 from "@/assets/categorys/gelam/product4.jpg";
import product5 from "@/assets/categorys/gelam/product5.jpg";
import product6 from "@/assets/categorys/gelam/product6.jpg";
import product7 from "@/assets/categorys/gelam/product7.jpg";
import product8 from "@/assets/categorys/gelam/product8.jpg";
import product9 from "@/assets/categorys/gelam/product9.jpg";
import product10 from "@/assets/categorys/gelam/product10.jpg";
import product11 from "@/assets/categorys/gelam/product11.jpg";
import product12 from "@/assets/categorys/gelam/product12.jpg";
import { useLocation } from "react-router-dom";

import video2 from "@/assets/categorys/gelam/video2.mp4";
import GelamBanner from "@/components/categorys/gelam/GelamBanner";
import Navigate from "@/components/categorys/Navigate";
import IconInstagram from "@/icons/IconInstagram";
import IconWpp from "@/icons/IconWpp";
import Home from "@/components/Home";

const Gelam = () => {
  const portfolios = [
    {
      id: 1,
      src: product1,
      category: "Contenido de Gelam generado por @gelambienerstar025",
      codeInstagram: "https://www.instagram.com/p/CShygJ5HraW/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 2,
      src: product2,
      category: "Contenido de Gelam generado por @gelambienerstar025",
      codeInstagram: "https://www.instagram.com/p/CjksAVPOCUG/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 3,
      src: product3,
      category: "Contenido de Gelam generado por @gelambienerstar025",
      codeInstagram: "https://www.instagram.com/p/CbxjTJaONTJ/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 4,
      src: product4,
      category: "Contenido de Gelam generado por @gelambienerstar025",
      codeInstagram: "https://www.instagram.com/p/CLpUAdVM9TU/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 5,
      src: product5,
      category: "Contenido de Gelam generado por @gelambienerstar025",
      codeInstagram: "https://www.instagram.com/p/CLpMvSKrq1K/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 6,
      src: product6,
      category: "Contenido de Gelam generado por @gelambienerstar025",
      codeInstagram: "https://www.instagram.com/p/Ce1hAm7OKB8/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 7,
      src: product7,
      category: "Contenido de Gelam generado por @gelambienerstar025",
      codeInstagram: "https://www.instagram.com/p/CLpHUn9r1mo/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 8,
      src: product8,
      category: "Contenido de Gelam generado por @gelambienerstar025",
      codeInstagram: "https://www.instagram.com/p/COsnRtInkyy/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 9,
      src: product9,
      category: "Contenido de Gelam generado por @gelambienerstar025",
      codeInstagram: "https://www.instagram.com/p/CbX59G-Otmu/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 10,
      src: product10,
      category: "Contenido de Gelam generado por @gelambienerstar025",
      codeInstagram: "https://www.instagram.com/p/CgnP1yoOeSm/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 11,
      src: product11,
      category: "Contenido de Gelam generado por @gelambienerstar025",
      codeInstagram: "https://www.instagram.com/p/CiTKW6aODfW/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 12,
      src: product12,
      category: "Contenido de Gelam generado por @gelambienerstar025",
      codeInstagram: "https://www.instagram.com/p/Ci5Z0KFuzMO/?hl=es",
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
          Gel<span className="text-[#7abd22]">am </span>
        </h1>
        <div className="grid gap-8 md:px-12 grid-cols-1 sm:grid-cols-2  lg:grid-cols-2">
          <GelamBanner />
        </div>

        <p className="my-6 text-center border-l-4 pl-4 border-[#7abd22] lg:text-center lg:border-black">
          Te ayuda a depurar y desintoxicar el cuerpo de forma natural. Además
          de reducir el colesterol.
        </p>
        <p className="my-6 text-center border-l-4 pl-4 border-[#7abd22] lg:text-center lg:border-black">
          Es un diurético natural que reduce la retención de líquidos y ayuda a
          eliminar la grasa corporal, por lo que es perfecta para perder peso.
        </p>
        <p className="my-6 text-center border-l-4 pl-4 border-[#7abd22] lg:text-center lg:border-black">
          Posee bromelina, un poderoso antioxidante que funciona como un
          antiinflamatorio natural
        </p>
        <div className="w-full bg-gradient-to-b from-gray-800 to-black text-white mt-12">
          <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4 ">
            <div className="grid gap-8 md:px-12 grid-cols-1 sm:grid-cols-2  lg:grid-cols-2">
              <div className="rounded-lg shadow-lg shadow-[#7abd22] group">
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
                    className="rounded-lg shadow-lg shadow-[#7abd22] group"
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
                        <p>Beneficios del producto</p>
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
              <AiOutlineArrowUp className="text-[#7abd22] " size={40} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gelam;
