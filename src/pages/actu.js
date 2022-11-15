import React from "react";
import TheNavBar from "../components/TheNavbar/TheNavBar";
import Footer from "../components/Footer/Footer";
import InfoSection from "../components/InfoSection/InfoSection";
import { homeObjActu } from "../components/InfoSection/Data";
import Actu from "../components/Actu/Actu";

const ActuPage = () => {
  return (
    <>
      <TheNavBar />
      <InfoSection {...homeObjActu} />
      <Actu />
      <Footer />
    </>
  );
};

export default ActuPage;
