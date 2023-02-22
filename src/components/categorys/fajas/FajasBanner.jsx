import React from "react";
import video1 from "@/assets/categorys/dyel/video2.mp4";
import astralicNutrition from "@/assets/categorys/astralic/astralicNutrition.jpg";
import IconInstagram from "@/icons/IconInstagram";
import IconWpp from "@/icons/IconWpp";

const FajasBanner = () => {
  return (
    <>
      <div className="rounded-lg shadow-lg shadow-white group ">
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
          <p className="m-4 capitalize text-sm md:text-lg">Fajas</p>
          <div className="flex gap-5 flex-col">
            <p>Sara mostrando las fajas</p>
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
      <div className="rounded-lg shadow-lg shadow-white group">
        <div className="flex flex-col items-center justify-center">
          <img
            src={astralicNutrition}
            className="h-[330px] md:h-[500px]  w-full  object-cover rounded-t-xl "
          />
          <p className="m-4 capitalize text-sm md:text-lg">
            Beneficios y precauciones
          </p>
          <div className="flex gap-5 flex-col">
            <p>"imagen de prueba"</p>
            <p>post en instagram "muy detallado"</p>
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
    </>
  );
};
export default FajasBanner;
