import Padding from "../padding/padding";
import {
  Container,
  Responsive,
  ExperienceWrapper,
  Description,
  ExperienceText,
  ExperienceTitle,
  ExperienceDescription,
  Superiority,
  SuperiorityItems,
  SuperiorityText,
  CostText,
  PlaceItem1,
  PlaceItem2,
  PlaceText,
  PlaceWrapper,
  PlaceContainer,
} from "./experience.style";
import Image from "next/image";
import Stars from "@/assets/experience/Stars.svg";

export default function Experience() {
  return (
    <Container>
      <Responsive>
        <Padding>
          <ExperienceWrapper>
            <Description>
              <ExperienceText>Our experience</ExperienceText>
              <ExperienceTitle>
                Trusted for years, by travelers like you.
              </ExperienceTitle>
              <ExperienceDescription>
                Travel with piece of mind with one of our customized travel
                packages to fit your specific needs and interests.
              </ExperienceDescription>
              <Superiority>
                <SuperiorityItems>
                  <SuperiorityText>Happy Customers</SuperiorityText>
                  <CostText>50m+</CostText>
                </SuperiorityItems>
                <SuperiorityItems>
                  <SuperiorityText>Years of Experience</SuperiorityText>
                  <CostText>22+</CostText>
                </SuperiorityItems>
                <SuperiorityItems>
                  <SuperiorityText>Awards Won</SuperiorityText>
                  <CostText>50+</CostText>
                </SuperiorityItems>
              </Superiority>
            </Description>
            <PlaceContainer>
              <PlaceItem1>
                <PlaceText>
                  <PlaceWrapper>
                    <h3>Thailand</h3>
                    <Image src={Stars} alt="stars" />
                  </PlaceWrapper>
                </PlaceText>
              </PlaceItem1>
              <PlaceItem2>
                <PlaceText>
                  <PlaceWrapper>
                    <h3>Joshua Tree</h3>
                    <Image src={Stars} alt="stars" />
                  </PlaceWrapper>
                </PlaceText>
              </PlaceItem2>
            </PlaceContainer>
          </ExperienceWrapper>
        </Padding>
      </Responsive>
    </Container>
  );
}
