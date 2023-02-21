import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import logoGelam from "@/assets/logoGelam.jpg";

const Navigate = () => {
  const useScroll = () => {
    window.scroll({ top: 1100, left: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="flex flex-col lg:flex-row p-5 mb-12 gap-5 items-center justify-center ">
        <Link to="/" onClick={useScroll}>
          <div className="flex flex-col w-full md:flex-row justify-center items-center md:gap-8 rounded-full shadow-lg shadow-[#7abd22] hover:scale-105 duration-200 px-12 p-3 cursor-pointer ">
            <div className="flex gap-4 items-center justify-center">
              <img
                src={logoGelam}
                alt="contact us"
                className="rounded-full object-cover w-14 h-14 shadow-lg shadow-[#7abd22]   "
              />
              <p>Gelam</p>
            </div>
          </div>
        </Link>
        <Link to="/producto2" onClick={useScroll}>
          <div className="flex flex-col w-full md:flex-row justify-center items-center gap-10 md:gap-10 rounded-full shadow-lg shadow-[#c36501] hover:scale-105 duration-200 px-14 p-3 cursor-pointer ">
            <div className="flex gap-4 items-center justify-center ">
              <img
                src={logoGelam}
                alt="contact us"
                className="rounded-full object-cover w-14 h-14 shadow-lg shadow-[#c36501]   "
              />
              <p>Dyel</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navigate;
