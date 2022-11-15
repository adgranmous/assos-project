import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const GalleryContainer = styled.div`
  background-color: #000;
  -webkit-column-count: 3;
  -webkit-column-count: 3;
  column-count: 3;
  -webkit-column-width: 33%;
  -moz-column-width: 33%;
  column-width: 33%;
  padding: 0 12px 10px;

  @media (max-width: 700px) {
    -webkit-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
  }
`;

export const GalleryLDJ = styled.div`
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  cursor: pointer;
  margin-bottom: 12px;
`;

export const LdjH1 = styled.h2`
  padding: 170px 0px 40px;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
`;

export const LDJimg = styled.img`
  width: 100%;
  filter: opacity(0.5);

  :hover {
    filter: opacity(1);
    transform: scale(1.01);
  }
`;

export const Panorama = styled.div`
  &.model {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(0 0 0 / 84%);
    transition: opacity 0.4s ease, visibility 0.4s ease,
      transform 0.5s ease-in-out;
    opacity: 0;
    transform: scale(0);
    overflow: hidden;
    z-index: 999;
  }

  &.model.open {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
`;

export const PanoramaImg = styled.img`
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: 100%;
  display: block;
  line-height: 0;
  box-sizing: border-box;
  padding: 20px 0 20px;
  margin: 0 auto;
`;

export const CloseIcon = styled(FaTimes)`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 2rem;
  height: 2rem;
  padding: 5px;
  color: #ffffff;
  cursor: pointer;

  :hover {
    color: #01bf71;
  }
`;
