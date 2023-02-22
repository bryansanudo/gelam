import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MobileBanner from "@/components/MobileBanner";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Astralic from "@/components/categorys/astralic/Astralic";
import Dyel from "@/components/categorys/dyel/Dyel";
import Gelam from "@/components/categorys/gelam/Gelam";
import Fajas from "@/components/categorys/fajas/Fajas";
import Home from "@/components/Home";

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <>
      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <HeroSection isMenuShown={isMenuShown} />
      <MobileBanner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gelam" element={<Gelam />} />
          <Route path="/dyel" element={<Dyel />} />
          <Route path="/astralic" element={<Astralic />} />
          <Route path="/fajas" element={<Fajas />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
