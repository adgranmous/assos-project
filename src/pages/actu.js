import React from "react";
import TheNavBar from "../components/TheNavbar/TheNavBar";
import Footer from "../components/Footer/Footer";
import InfoSection from "../components/InfoSection/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";

const ActuPage = () => {
  return (
    <>
      <TheNavBar />
      <InfoSection {...homeObjOne} />
      <Footer />
    </>
  );
};

export default ActuPage;
