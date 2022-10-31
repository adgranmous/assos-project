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
} from "./ServicesElements";

const Chantiers = () => {
  return (
    <ChantiersContainer id="chantiers">
      <ChantiersH1>Nos Chantiers</ChantiersH1>
      <ChantiersWrapper>
        <ChantiersCard>
          <ChantiersIcon src={Icon1} />
          <ChantiersH2>Chantier en cours</ChantiersH2>
          <ChantiersP>le lavoir du pere Ridonbrouillat</ChantiersP>
        </ChantiersCard>

        <ChantiersCard>
          <ChantiersIcon src={Icon2} />
          <ChantiersH2>Chantier récent</ChantiersH2>
          <ChantiersP>
            terminé le 20 juin 2022, bla bla bouidbeejnfzzjk
          </ChantiersP>
        </ChantiersCard>

        <ChantiersCard>
          <ChantiersIcon src={Icon3} />
          <ChantiersH2>Prochain chantier</ChantiersH2>
          <ChantiersP>
            Début courant 2023 et la mairie vzceivzi zefzev
          </ChantiersP>
        </ChantiersCard>
      </ChantiersWrapper>
    </ChantiersContainer>
  );
};

export default Chantiers;
