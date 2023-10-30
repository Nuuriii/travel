import styled from "styled-components";
import Thailand from "@/assets/experience/thailand.png";
import JoshuaTree from "@/assets/experience/joshua-tree.png";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #bcdffb;
  padding: 3rem 0;
  margin: 8rem 0 0 0;
`;

export const Responsive = styled.div`
  width: 100%;
  @media (width >= 1488px) {
    width: 82rem;
  }
`;

export const ExperienceWrapper = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: center;
  padding: 0.5rem 0;
  @media (width <= 1029px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Description = styled.div`
  width: 70rem;
  margin: 0 2rem 0 0;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const ExperienceText = styled.div`
  color: #fff;
  font-family: "Jua", sans-serif;
  text-transform: uppercase;
  font-size: 1.2rem;
  @media (width <= 1029px) {
    text-align: center;
  }
  @media (width <= 788px) {
    font-size: 1rem;
  }
`;

export const ExperienceTitle = styled.h2`
  font-family: "outfitSemiBold", sans-serif;
  font-size: 2.4rem;
  @media (width <= 1029px) {
    text-align: center;
  }
  @media (width <= 788px) {
    margin: 0 auto;
    font-size: 2rem;
    width: 30%;
  }
`;

export const ExperienceDescription = styled.p`
  margin: 1rem 0 2rem 0;
  color: rgba(38, 50, 56, 0.5);
  font-family: "interSemiBold", sans-serif;
  font-size: 1rem;
  @media (width <= 1029px) {
    text-align: center;
    margin: 1rem auto 2rem auto;
    width: 40rem;
  }
  @media (width <= 788px) {
    width: 30%;
  }
`;

export const Superiority = styled.div`
  display: flex;
  @media (width <= 1029px) {
    justify-content: center;
  }
  @media (width <= 788px) {
    margin: 0 auto;
    width: 10%;
  }
`;

export const SuperiorityItems = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 3rem 0 0;
  @media (width <= 788px) {
    margin: 0 1rem 0 0;
  }
`;

export const SuperiorityText = styled.p`
  color: rgba(38, 50, 56, 0.5);
  font-family: "interRegular";
  padding: 0;
  margin: 0;
  @media (width <= 788px) {
    text-align: center;
  }
`;

export const CostText = styled.h2`
  margin: 0;
  padding: 0;
  font-family: "rasaSemiBold", sans-serif;
  font-size: 3rem;
  @media (width <= 788px) {
    text-align: center;
    font-size: 2.2rem;
  }
`;

export const PlaceContainer = styled.div`
  display: flex;
`;

export const PlaceItem1 = styled.div`
  margin: 0 2rem 0 0;
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-image: url(${Thailand.src});
  height: 20rem;
  width: 20rem;
  overflow: hidden;
  border-radius: 1rem;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media (width <= 788px) {
    height: 10rem;
    width: 10rem;
  }
`;

export const PlaceItem2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-image: url(${JoshuaTree.src});
  height: 20rem;
  width: 20rem;
  overflow: hidden;
  border-radius: 1rem;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media (width <= 788px) {
    height: 10rem;
    width: 10rem;
  }
`;

export const PlaceText = styled.div`
  display: flex;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 9.25%,
    #bcdffb 63.97%
  );
  height: 6rem;
  padding: 0 1rem 0.4rem 1rem;
  align-items: end;
  color: #fff;
`;

export const PlaceWrapper = styled.div`
  width: 100%;
  display: flex;
  font-family: "Jua", sans-serif;
  align-items: center;
  justify-content: space-between;
  h3 {
    text-transform: uppercase;
  }
  img {
    height: 1rem;
    width: auto;
  }
`;
