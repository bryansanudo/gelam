import React from "react";
import PageSection from "@/components/PageSection";

import product1 from "@/assets/categorys/product1/product1.jpg";
import product2 from "@/assets/categorys/product1/product2.jpg";
import product3 from "@/assets/categorys/product1/product3.jpg";
import product4 from "@/assets/categorys/product1/product4.jpg";
import product5 from "@/assets/categorys/product1/product5.jpg";
import product6 from "@/assets/categorys/product1/product6.jpg";
import product7 from "@/assets/categorys/product1/product7.jpg";
import product8 from "@/assets/categorys/product1/product8.jpg";
import product9 from "@/assets/categorys/product1/product9.jpg";
import product10 from "@/assets/categorys/product1/product10.jpg";
import product11 from "@/assets/categorys/product1/product11.jpg";
import product12 from "@/assets/categorys/product1/product12.jpg";

import video1 from "@/assets/categorys/product1/video1.mp4";
import video2 from "@/assets/categorys/product1/video2.mp4";

import Navigate from "@/components/categorys/Navigate";
import IconInstagram from "@/icons/IconInstagram";
import IconWpp from "@/icons/IconWpp";

const Product1 = () => {
  const portfolios = [
    {
      id: 1,
      src: product1,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/CShygJ5HraW/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 2,
      src: product2,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/CjksAVPOCUG/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 3,
      src: product3,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/CbxjTJaONTJ/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 4,
      src: product4,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/CLpUAdVM9TU/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 5,
      src: product5,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/CLpMvSKrq1K/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 6,
      src: product6,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/Ce1hAm7OKB8/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 7,
      src: product7,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/CLpHUn9r1mo/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 8,
      src: product8,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/COsnRtInkyy/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 9,
      src: product9,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/CbX59G-Otmu/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 10,
      src: product10,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/CgnP1yoOeSm/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 11,
      src: product11,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/CiTKW6aODfW/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
    {
      id: 12,
      src: product12,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/Ci5Z0KFuzMO/?hl=es",
      codeWpp: "https://api.whatsapp.com/send?phone=573045571083",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto h-fit">
      <div className="my-40 mx-8 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl text-center">
          ¡Bienvenidos a Gel<span className="text-[#7abd22]">am </span>
          Bienestar!
        </h1>
        <p className="my-8">
          Estás buscando los potenciadores perfectos para tus rutinas de
          entreno? Nuestros productos son 100% naturales y contamos con registro
          Invima. ¡No esperes más y compra tus suplementos! Mira nuestra amplia
          selección de productos.
        </p>

        <div className="w-full bg-gradient-to-b from-gray-800 to-black text-white">
          <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4 ">
            <Navigate />
            <div className="grid gap-8 md:px-12 grid-cols-1 sm:grid-cols-2  lg:grid-cols-2">
              <div className="rounded-lg shadow-lg shadow-[#7abd22] group">
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
                      <a href="" target="_blank" rel="noreferrer">
                        <IconInstagram />
                      </a>
                    </article>
                    <article className="group-hover:scale-125 duration-300">
                      <a href="" target="_blank" rel="noreferrer">
                        <IconWpp />
                      </a>
                    </article>
                  </div>
                </div>
              </div>

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
                  <p className="m-4 capitalize text-sm md:text-lg">Título</p>
                  <div className="flex gap-5">
                    <p>Info</p>
                  </div>
                  <div className="m-4 capitalize text-sm md:text-lg flex items-center justify-center gap-5">
                    <article className="group-hover:scale-125 duration-300">
                      <a href="" target="_blank" rel="noreferrer">
                        <IconInstagram />
                      </a>
                    </article>
                    <article className="group-hover:scale-125 duration-300">
                      <a href="" target="_blank" rel="noreferrer">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product1;