import React, { useState } from "react";
import {
  GalleryContainer,
  GalleryLDJ,
  LDJimg,
  Panorama,
  PanoramaImg,
  CloseIcon,
  LdjH1,
} from "./GalleryElements";
import { data, data2, data3, data4 } from "./DataPhoto";

const Gallery = () => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <Panorama className={model ? "model open" : "model"}>
        <PanoramaImg alt="panorama" src={tempImgSrc} />
        <CloseIcon onClick={() => setModel(false)} />
      </Panorama>
      <LdjH1>Le lavoir de Jacques</LdjH1>
      <GalleryContainer>
        {data.map((item, index) => {
          return (
            <GalleryLDJ key={index} onClick={() => getImg(item.imgSrc)}>
              <LDJimg src={item.imgSrc} />
            </GalleryLDJ>
          );
        })}
      </GalleryContainer>
      <LdjH1>La créssonière</LdjH1>
      <GalleryContainer>
        {data2.map((item, index) => {
          return (
            <GalleryLDJ key={index} onClick={() => getImg(item.imgSrc)}>
              <LDJimg src={item.imgSrc} />
            </GalleryLDJ>
          );
        })}
      </GalleryContainer>
      <LdjH1>Le bar</LdjH1>
      <GalleryContainer>
        {data3.map((item, index) => {
          return (
            <GalleryLDJ key={index} onClick={() => getImg(item.imgSrc)}>
              <LDJimg src={item.imgSrc} />
            </GalleryLDJ>
          );
        })}
      </GalleryContainer>
      <LdjH1>Couturat</LdjH1>
      <GalleryContainer>
        {data4.map((item, index) => {
          return (
            <GalleryLDJ key={index} onClick={() => getImg(item.imgSrc)}>
              <LDJimg src={item.imgSrc} />
            </GalleryLDJ>
          );
        })}
      </GalleryContainer>
    </>
  );
};

export default Gallery;
