import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>A PROPOS</FooterLinkTitle>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/contact">A propos</FooterLink>
              <FooterLink to="/contact">Reseaux Sociaux</FooterLink>
              <FooterLink to="/contact"></FooterLink>
              <FooterLink to="/contact"></FooterLink>
              <FooterLink to="/contact"></FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>A PROPOS</FooterLinkTitle>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/contact">A propos</FooterLink>
              <FooterLink to="/contact">Reseaux Sociaux</FooterLink>
              <FooterLink to="/contact"></FooterLink>
              <FooterLink to="/contact"></FooterLink>
              <FooterLink to="/contact"></FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>A PROPOS</FooterLinkTitle>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/contact">A propos</FooterLink>
              <FooterLink to="/contact">Reseaux Sociaux</FooterLink>
              <FooterLink to="/contact"></FooterLink>
              <FooterLink to="/contact"></FooterLink>
              <FooterLink to="/contact"></FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>A PROPOS</FooterLinkTitle>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/contact">A propos</FooterLink>
              <FooterLink to="/contact">Reseaux Sociaux</FooterLink>
              <FooterLink to="/contact"></FooterLink>
              <FooterLink to="/contact"></FooterLink>
              <FooterLink to="/contact"></FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              A2PMP
            </SocialLogo>
            <WebsiteRights>A2PMP 2022</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
