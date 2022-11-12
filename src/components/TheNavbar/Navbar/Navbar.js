import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

function Navbar({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              A2PMP
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="/chantiers"
                  smooth={true.toString()}
                  duration={500}
                  spy={true.toString()}
                  exact="true"
                  offset={-80}
                >
                  Chantiers
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/histoire"
                  smooth={true.toString()}
                  duration={500}
                  spy={true.toString()}
                  exact="true"
                  offset={-80}
                >
                  Histoire
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/temoignages"
                  smooth={true.toString()}
                  duration={500}
                  spy={true.toString()}
                  exact="true"
                  offset={-80}
                >
                  Témoignages
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/contact">Contact</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
