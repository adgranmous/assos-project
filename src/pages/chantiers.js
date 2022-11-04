import React from "react";
import Footer from "../components/Footer";
import InfoSection from "../components/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";
import TheNavBar from "../components/TheNavbar";

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
