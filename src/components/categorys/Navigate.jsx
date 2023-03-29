import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import logoGelam from "@/assets/logoGelam.jpg";

const Navigate = () => {
  const useScroll = () => {
    window.scroll({ top: 1425, left: 0, behavior: "smooth" });
  };
  return (
    <div className="flex flex-col lg:flex-row p-5 mb-12 gap-5 items-center justify-center ">
      <Link to="/gelam" onClick={useScroll}>
        <div className="flex  flex-col w-[260px] md:flex-row justify-center items-center md:gap-8 rounded-full shadow-lg shadow-[#7abd22] hover:scale-105 duration-200 px-12 p-3 cursor-pointer ">
          <div className="flex gap-4 items-center justify-center mx-2 pl-4">
            <img
              src={logoGelam}
              alt="contact us"
              className="rounded-full object-cover w-14 h-14 shadow-lg shadow-[#7abd22]   "
            />
            <p className="pl-4">&nbsp;&nbsp;Gelam&nbsp;&nbsp;</p>
          </div>
        </div>
      </Link>
      <Link to="/dyel" onClick={useScroll}>
        <div className="flex flex-col w-[260px] md:flex-row justify-center items-center gap-10 md:gap-10 rounded-full shadow-lg shadow-[#c36501] hover:scale-105 duration-200 px-14 p-3 cursor-pointer ">
          <div className="flex gap-4 items-center justify-center pl-2 ">
            <img
              src={logoGelam}
              alt="contact us"
              className="rounded-full object-cover w-14 h-14 shadow-lg shadow-[#c36501]   "
            />
            <p className="pl-2">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dyel&nbsp;&nbsp;
            </p>
          </div>
        </div>
      </Link>
      <Link to="/astralic" onClick={useScroll}>
        <div className="flex flex-col w-[260px] md:flex-row justify-center items-center gap-10 md:gap-10 rounded-full shadow-lg shadow-[#F7E300] hover:scale-105 duration-200 px-14 p-3 cursor-pointer ">
          <div className="flex gap-5 items-center justify-center pl-4  ">
            <img
              src={logoGelam}
              alt="contact us"
              className="rounded-full object-cover w-14 h-14 shadow-lg shadow-[#F7E300]  "
            />
            <p className="pl-4">Astralic</p>
          </div>
        </div>
      </Link>
      <Link to="/fajas" onClick={useScroll}>
        <div className="flex flex-col w-[260px] md:flex-row justify-center items-center gap-10 md:gap-10 rounded-full shadow-lg shadow-white hover:scale-105 duration-200 px-14 p-3 cursor-pointer ">
          <div className="flex gap-4 items-center justify-center pl-4 ">
            <img
              src={logoGelam}
              alt="contact us"
              className="rounded-full object-cover w-14 h-14 shadow-lg shadow-white  "
            />
            <p className="pl-4">&nbsp;&nbsp;&nbsp;Fajas&nbsp;&nbsp;</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navigate;
