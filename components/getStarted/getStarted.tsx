import Image from "next/image";
import Padding from "../padding/padding";
import Kyoto from "@/assets/getStarted/kyoto.png";
import Location from "@/assets/hero/location.svg";
import {
  Container,
  ImageWrapper,
  LocationWrapper,
  DescWrapper,
  GetStartedTitle,
  GetStartedBtn,
} from "./getStarted.style";

export default function GetStarted() {
  return (
    <Padding>
      <Container>
        <ImageWrapper>
          <Image className="kyoto" src={Kyoto} alt="kyoto img" />
          <LocationWrapper>
            <Image src={Location} alt="location icon" />
            <p>Kyoto, Japan</p>
          </LocationWrapper>
        </ImageWrapper>
        <DescWrapper>
          <GetStartedTitle>
            See the world, It’s yours to explore.
          </GetStartedTitle>
          <GetStartedBtn>Get started</GetStartedBtn>
        </DescWrapper>
      </Container>
    </Padding>
  );
}
