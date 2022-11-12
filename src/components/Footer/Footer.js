import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLink,
  SocialLogo,
  WebsiteRights,
  DevBy,
  DevP,
  DevLogo,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <SocialLogo to="/" onClick={toggleHome}>
            A2PMP
          </SocialLogo>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLink to="/contact">Contact</FooterLink>
                <FooterLink to="/about">A propos</FooterLink>
                <FooterLink to="/chantiers">Chantiers</FooterLink>
                <FooterLink to="/histoire">Histoire</FooterLink>
                <FooterLink to="/temoignages">Témoignages</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>

          <WebsiteRights>© A2PMP 2022</WebsiteRights>
        </FooterWrap>
        <DevBy>
          <DevP>Developed by</DevP>
          <DevLogo>
            <FaArrowRight
              onClick={() => (window.location = "mailto:ad.mallie@gmail.com")}
            />
          </DevLogo>
        </DevBy>
      </FooterContainer>
    </>
  );
};

export default Footer;
