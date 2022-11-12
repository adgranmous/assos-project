import React from "react";
import Icon1 from "../../images/svg-2.svg";
import Icon2 from "../../images/svg-3.svg";
import Icon3 from "../../images/svg-4.svg";
import {
  ChantiersContainer,
  ChantiersH1,
  ChantiersH2,
  ChantiersWrapper,
  ChantiersCard,
  ChantiersIcon,
  ChantiersP,
} from "./CardsComponentElements";

const Chantiers = () => {
  return (
    <ChantiersContainer id="chantiers">
      <ChantiersH1>Nos Chantiers effectués</ChantiersH1>
      <ChantiersWrapper>
        <ChantiersCard>
          <ChantiersIcon src={Icon1} />
          <ChantiersH2>le lavoir "de Jacques"</ChantiersH2>
          <ChantiersP>lieu-dit Valade</ChantiersP>
        </ChantiersCard>

        <ChantiersCard>
          <ChantiersIcon src={Icon2} />
          <ChantiersH2>La créssonière</ChantiersH2>
          <ChantiersP>de Lataste</ChantiersP>
        </ChantiersCard>

        <ChantiersCard>
          <ChantiersIcon src={Icon3} />
          <ChantiersH2>Réouverture du bar</ChantiersH2>
          <ChantiersP>bourg</ChantiersP>
        </ChantiersCard>
      </ChantiersWrapper>
    </ChantiersContainer>
  );
};

export default Chantiers;
