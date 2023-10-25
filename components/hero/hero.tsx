import Image from "next/image";
import Padding from "../padding/padding";
import {
  Container,
  Wrapper,
  Information,
  HeroTitle,
  ImageWrapper,
  HeroText,
  SearchInfo,
  TitleInfo,
  ChevronText,
  TextInfo,
  LocationContainer,
  DateContainer,
  SearchImg,
  MobileImg,
  PriceContainer,
  LocationNow,
} from "./hero.style";
import Romantic from "@/assets/hero/Romantic.svg";
import Chevron from "@/assets/hero/chevronDown.svg";
import Location from "@/assets/hero/location.svg";
import Search from "@/assets/hero/search.svg";

export default function Hero() {
  return (
    <Padding>
      <Container>
        <Wrapper>
          <MobileImg>
            <Image src={Romantic} alt="" />
          </MobileImg>
          <Information>
            <HeroTitle>Experience the world, one adventure at a time</HeroTitle>
            <HeroText>
              Whether you're looking for a relaxing beach vacation or an
              adventurous trip to a new city, we have something for everyone.
            </HeroText>
            <SearchInfo>
              <LocationContainer>
                <ChevronText>
                  <TitleInfo>Location</TitleInfo>
                  <Image src={Chevron} alt="" />
                </ChevronText>
                <div>
                  <TextInfo>Dubai, UAE</TextInfo>
                </div>
              </LocationContainer>
              <DateContainer>
                <ChevronText>
                  <TitleInfo>Date</TitleInfo>
                  <Image src={Chevron} alt="" />
                </ChevronText>
                <div>
                  <TextInfo>Tue, Nov 10</TextInfo>
                </div>
              </DateContainer>
              <PriceContainer>
                <ChevronText>
                  <TitleInfo>Average price</TitleInfo>
                  <Image src={Chevron} alt="" />
                </ChevronText>
                <div>
                  <TextInfo>$523 - $849</TextInfo>
                </div>
              </PriceContainer>
              <SearchImg>
                <Image src={Search} alt="" />
              </SearchImg>
            </SearchInfo>
          </Information>
          <LocationNow>
            <Image src={Location} alt="location icon" />
            <span>Maui, Hawaii</span>
          </LocationNow>
          <ImageWrapper>
            <Image src={Romantic} alt="" />
          </ImageWrapper>
        </Wrapper>
      </Container>
    </Padding>
  );
}
