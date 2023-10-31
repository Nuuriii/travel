import styled from "styled-components";
import Thailand from "@/assets/experience/thailand.png";
import JoshuaTree from "@/assets/experience/joshua-tree.png";

export const Container = styled.div`
  width: 100%;
  margin: 8rem 0 0 0;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bcdffb;
`;

export const Responsive = styled.div`
  width: 100%;
  @media (width >= 1488px) {
    width: 82rem;
  }
`;

export const ExperienceWrapper = styled.div`
  padding: 0.5rem 0;
  display: flex;
  overflow: hidden;
  justify-content: center;
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
  @media (width <= 1029px) {
    width: 100%;
    align-items: center;
  }
  @media (width <= 788px) {
    margin: 0;
  }
`;

export const ExperienceText = styled.div`
  font-family: "Jua", sans-serif;
  font-size: 1.2rem;
  text-transform: uppercase;
  color: #fff;
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
  color: #263238;
  @media (width <= 1029px) {
    text-align: center;
  }
  @media (width <= 788px) {
    width: 90%;
    font-size: 2rem;
  }
`;

export const ExperienceDescription = styled.p`
  margin: 1rem 0 2rem 0;
  font-family: "interSemiBold", sans-serif;
  font-size: 1rem;
  color: rgba(38, 50, 56, 0.5);
  @media (width <= 1029px) {
    width: 40rem;
    margin: 1rem 0 2rem 0;
    text-align: center;
  }
  @media (width <= 788px) {
    width: 90%;
  }
`;

export const Superiority = styled.div`
  display: flex;
  @media (width <= 1029px) {
    justify-content: center;
  }
  @media (width <= 788px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const SuperiorityItems = styled.div`
  margin: 0 3rem 0 0;
  display: flex;
  flex-direction: column;
  @media (width <= 788px) {
    margin: 0 1rem 0 0;
  }
`;

export const SuperiorityText = styled.p`
  margin: 0;
  padding: 0;
  font-family: "interRegular";
  color: rgba(38, 50, 56, 0.5);
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
  @media (width <= 788px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const PlaceItem1 = styled.div`
  height: 20rem;
  width: 20rem;
  margin: 0 2rem 0 0;
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-image: url(${Thailand.src});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media (width <= 788px) {
    height: 20rem;
    width: 20rem;
    margin: 1rem 0 0 0;
  }
`;

export const PlaceItem2 = styled.div`
  height: 20rem;
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-image: url(${JoshuaTree.src});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media (width <= 788px) {
    display: none;
  }
`;

export const PlaceText = styled.div`
  height: 6rem;
  padding: 0 1rem 0.4rem 1rem;
  display: flex;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 9.25%,
    #bcdffb 63.97%
  );
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
