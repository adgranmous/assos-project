import React from "react";
import Footer from "../components/Footer/Footer";
import InfoSection from "../components/InfoSection/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";
import TheNavBar from "../components/TheNavbar/TheNavBar";

const ChantiersPage = () => {
  return (
    <>
      <TheNavBar />
      <InfoSection {...homeObjOne} />
      <Footer />
    </>
  );
};

export default ChantiersPage;
