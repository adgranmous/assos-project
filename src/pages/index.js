import React, { useState } from "react";
import Chantiers from "../components/Chantiers";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "../components/InfoSection/Data";
import Navbar from "../components/Navbar/index";
import Sidebar from "../components/SideBar/index";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Chantiers />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <Footer />
    </>
  );
}

export default Home;
