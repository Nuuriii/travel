import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 44rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (width <= 1029px) {
    padding: 9rem 0 0 0;
  }
  @media (width >= 1488px) {
    width: 100vw;
  }
  @media (width <= 748px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 0rem 0 0 0;
  position: relative;
  display: flex;
  align-items: center;
  @media (width <= 1029px) {
    flex-direction: column;
  }
  @media (width >= 1488px) {
    width: 75rem;
  }
  @media (width <= 748px) {
    align-items: center;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5rem 0 0;
  @media (width <= 1029px) {
    align-items: center;
    width: 100%;
    margin: 0;
  }
  @media (width <= 748px) {
    width: 100%;
    margin: 0;
  }
`;

export const HeroTitle = styled.h1`
  font-family: "Jua", sans-serif;
  color: #263238;
  font-weight: 400;
  font-size: 3.2rem;
  @media (width <= 1029px) {
    width: 40rem;
    text-align: center;
    font-size: 2.8rem;
  }
  @media (width <= 688px) {
    width: 90%;
    font-size: 2rem;
  }
`;

export const HeroText = styled.p`
  margin: 3rem 0 3rem 0;
  color: rgba(38, 50, 56, 0.5);
  font-size: 1.1rem;
  font-family: "interRegular", sans-serif;
  @media (width <= 1029px) {
    width: 37rem;
    margin: 1rem 0 1rem 0;
    text-align: center;
  }
  @media (width <= 748px) {
    width: 90%;
    font-size: 1rem;
  }
`;

export const MobileImg = styled.div`
  display: none;
  @media (width <= 1029px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  img {
    height: 25rem;
    width: auto;
    @media (width <= 548px) {
      margin: 0;
      height: auto;
      width: 100%;
    }
  }
`;

export const LocationNow = styled.button`
  padding: 0.2rem 1rem;
  position: absolute;
  top: 30%;
  left: 46%;
  display: flex;
  align-items: center;
  font-family: "outfitRegular", sans-serif;
  border: 2px solid #ddeffd;
  border-radius: 3rem;
  background: #fff;
  cursor: pointer;
  font-size: 1.1rem;
  @media (width <= 1029px) {
    top: 2rem;
    left: 40%;
  }
  @media (width <= 688px) {
    left: 1rem;
    top: 3.5rem;
    font-size: 0.8rem;
  }
  &:hover {
    transform: scale(1.023);
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  @media (width <= 1029px) {
    display: none;
  }
  img {
    height: 31rem;
    width: auto;
  }
`;

export const SearchImg = styled.div`
  background-color: #90caf9;
  padding: 0.6rem 0.6rem;
  border-radius: 90%;
  img {
    height: 2rem;
  }
`;

export const SearchInfo = styled.div`
  padding: 1.1rem 2rem;
  position: absolute;
  bottom: -1rem;
  display: flex;
  align-items: center;
  box-shadow: 0px 6px 15px 0px #ddeffd;
  border-radius: 2.9rem;
  background-color: #fff;
  @media (width <= 1029px) {
    bottom: -6rem;
    border-radius: 5rem;
    padding: 0.4rem 2rem;
  }
  @media (width <= 748px) {
    width: 100%;
    display: none;
  }
`;

export const TitleInfo = styled.span`
  font-size: 0.8rem;
  color: rgba(38, 50, 56, 0.6);
  font-family: "interRegular", sans-serif;
`;

export const ChevronText = styled.div`
  display: flex;
  align-items: center;
`;

export const TextInfo = styled.p`
  margin: 0.3rem 0 0 0;
  color: #263238;
  font-family: "interSemiBold", sans-serif;
`;

export const LocationContainer = styled.div`
  padding: 0 2rem 0 0;
  border-right: 2px solid #90caf9;
  display: flex;
  flex-direction: column;
`;

export const DateContainer = styled.div`
  padding: 0 2rem 0 2rem;
  border-right: 2px solid #90caf9;
  display: flex;
  flex-direction: column;
`;

export const PriceContainer = styled.div`
  padding: 0 2rem 0 2rem;
  display: flex;
  flex-direction: column;
`;
