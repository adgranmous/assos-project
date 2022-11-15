import React from "react";
import {
  ActuArticleWrapper,
  ActuArticle,
  ActuImg,
  ActuImgWrapper,
} from "./ActuElement";

const Actu = () => {
  return (
    <>
      <ActuArticleWrapper>
        <ActuArticle>
          Les questions que nous nous posons sont nombreuses :
          <br />
          <br />
          Est-ce le rôle d’une association comme la nôtre de réhabiliter ces
          cabanes dont les propriétaires se sont désintéressés depuis des
          décennies ?<br />
          <br />
          Est-ce normal (comme c’est le cas ) que de l’argent public soit donné
          à des associations extérieures à notre commune pour réhabiliter ces
          vestiges abandonnés ?<br />
          <br />
          Ne serait-il pas plus logique qu’un propriétaire qui souhaite
          “retaper” sa cabane, signe une convention dans laquelle il est stipulé
          qu’il s'engage à financer le coût des travaux, à entretenir par la
          suite son bien tout en le mettant à la disposition de l’association
          avec laquelle il s’est engagé, à l’occasion d’animation ponctuelle ?
          <br />
          <br />
          Le débat est ouvert…
        </ActuArticle>
        <ActuImgWrapper>
          <ActuImg src={require("../../images/Cabanes/cabane1.JPG")} />
          <ActuImg src={require("../../images/Cabanes/cabane3.JPG")} />
        </ActuImgWrapper>
      </ActuArticleWrapper>
    </>
  );
};

export default Actu;
