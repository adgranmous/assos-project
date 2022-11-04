import React from "react";
import Footer from "../components/Footer";
import TheNavBar from "../components/TheNavbar";
import InfoSection from "../components/InfoSection";
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
