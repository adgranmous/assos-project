import React, { useState } from "react";
import Navbar from "./Navbar/index";
import SideBar from "./SideBar/index";

const TheNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  );
};

export default TheNavBar;
