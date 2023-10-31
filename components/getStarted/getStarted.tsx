import Image from "next/image";
import Padding from "../padding/padding";
import Kyoto from "@/assets/getStarted/kyoto.png";
import Location from "@/assets/hero/location.svg";
import {
  Container,
  Wrapper,
  ImageWrapper,
  LocationWrapper,
  PlaceText,
  DescWrapper,
  GetStartedTitle,
  GetStartedBtn,
} from "./getStarted.style";

export default function GetStarted() {
  return (
    <Padding>
      <Container>
        <Wrapper>
          <ImageWrapper>
            <Image className="kyoto" src={Kyoto} alt="kyoto img" />
            <LocationWrapper>
              <Image className="location" src={Location} alt="location icon" />
              <PlaceText>Kyoto, Japan</PlaceText>
            </LocationWrapper>
          </ImageWrapper>
          <DescWrapper>
            <GetStartedTitle>
              See the world, It’s yours to explore.
            </GetStartedTitle>
            <GetStartedBtn>Get started</GetStartedBtn>
          </DescWrapper>
        </Wrapper>
      </Container>
    </Padding>
  );
}
