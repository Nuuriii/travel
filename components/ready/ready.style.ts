import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 1.4rem 0;
  position: relative;
  background-color: #ddeffd;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (width <= 1029px) {
    margin: 4rem 0 0 0;
  }
  @media (width <= 688px) {
    margin: 3rem 0 0 0;
  }
  @media (width <= 488px) {
    margin: 1rem 0 0 0;
  }
`;

export const ReadyText = styled.h1`
  font-family: "outfitSemiBold", serif;
  font-size: 2rem;
  z-index: 1;
  @media (width <= 688px) {
    font-size: 1.5rem;
  }
`;

export const WhitePlane = styled.div`
  position: absolute;
  right: -3rem;
  z-index: 0;
  img {
    height: 5rem;
  }
`;
