import React from "react";
import TheNavBar from "../components/TheNavbar";
import Footer from "../components/Footer";
import InfoSection from "../components/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";

const AboutPage = () => {
  return (
    <>
      <TheNavBar />
      <InfoSection {...homeObjOne} />
      <Footer />
    </>
  );
};

export default AboutPage;
