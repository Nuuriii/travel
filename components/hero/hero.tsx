import Image from "next/image";
import Padding from "../padding/padding";
import {
  Container,
  Information,
  HeroTitle,
  HeroText,
  SearchInfo,
} from "./hero.style";
import Romantic from "@/assets/hero/Romantic.png";

export default function Hero() {
  return (
    <Padding>
      <Container>
        <Information>
          <HeroTitle>Experience the world, one adventure at a time</HeroTitle>
          <HeroText>
            Whether you're looking for a relaxing beach vacation or an
            adventurous trip to a new city, we have something for everyone.
          </HeroText>
          <SearchInfo>
            <div>
              <div>
                <span>Location</span>
                <Image src="" alt="" />
              </div>
              <div>
                <p>Dubai, UAE</p>
              </div>
            </div>
            <div>
              <div>
                <span>Location</span>
                <Image src="" alt="" />
              </div>
              <div>
                <p>Dubai, UAE</p>
              </div>
            </div>
            <div>
              <div>
                <span>Location</span>
                <Image src="" alt="" />
              </div>
              <div>
                <p>Dubai, UAE</p>
              </div>
            </div>
            <div>
              <Image src="" alt="" />
            </div>
          </SearchInfo>
        </Information>
        <div>
          <Image src={Romantic} alt="" />
        </div>
      </Container>
    </Padding>
  );
}
