import React, { useState } from "react";
import {
  GalleryContainer,
  GalleryLDJ,
  LDJimg,
  Panorama,
  PanoramaImg,
  CloseIcon,
} from "./GalleryElements";

import Img1 from "../../images/LDJ/LDJ1.jpg";
import Img2 from "../../images/LDJ/LDJ2.jpg";
import Img3 from "../../images/LDJ/LDJ3.jpg";
import Img4 from "../../images/LDJ/LDJ4.jpg";
import Img5 from "../../images/LDJ/LDJ5.jpg";
import Img6 from "../../images/LDJ/LDJ6.JPG";
import Img7 from "../../images/LDJ/LDJ7.jpg";
import Img8 from "../../images/LDJ/LDJ8.jpg";
import Img9 from "../../images/LDJ/LDJ9.jpg";
import Img10 from "../../images/LDJ/LDJ10.JPG";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 8,
      imgSrc: Img8,
    },
    {
      id: 9,
      imgSrc: Img9,
    },
    {
      id: 10,
      imgSrc: Img10,
    },
  ];

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
      <GalleryContainer>
        {data.map((item, index) => {
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
