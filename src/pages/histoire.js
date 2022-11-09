import React from "react";
import Footer from "../components/Footer/Footer";
import TheNavBar from "../components/TheNavbar/TheNavBar";
import InfoSection from "../components/InfoSection/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";

const HistoirePage = () => {
  return (
    <>
      <TheNavBar />
      <InfoSection {...homeObjOne} />

      <Footer />
    </>
  );
};

export default HistoirePage;
