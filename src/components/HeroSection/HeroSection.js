
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>A2PMP</HeroH1>
        <HeroP>
          Association pour la préservation du patrimoine et de la mémoire de
          Pian sur Garonne
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
