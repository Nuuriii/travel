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
  @media (width <= 748px) {
    width: 100%;
    padding: 4rem 0 0 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
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
  margin: 0 5rem 0 0;
  display: flex;
  flex-direction: column;
  @media (width <= 1029px) {
    width: 100%;
    margin: 0;
    align-items: center;
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
    width: 100%;
    display: flex;
    justify-content: center;
  }

  img {
    height: 25rem;
    width: auto;
    @media (width <= 548px) {
      height: auto;
      width: 100%;
      margin: 0;
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
  border: 2px solid #ddeffd;
  border-radius: 3rem;
  background: #fff;
  cursor: pointer;
  font-family: "outfitRegular", sans-serif;
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
  padding: 0.8rem 1.5rem;
  position: absolute;
  bottom: -1rem;
  display: flex;
  align-items: center;
  box-shadow: 0px 6px 15px 0px #ddeffd;
  border-radius: 2.9rem;
  background-color: #fff;
  @media (width <= 1029px) {
    bottom: -6rem;
    display: none;
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
  font-family: "interRegular", sans-serif;
  color: rgba(38, 50, 56, 0.6);
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
  display: flex;
  flex-direction: column;
  border-right: 2px solid #90caf9;
`;

export const DateContainer = styled.div`
  padding: 0 2rem 0 2rem;
  display: flex;
  flex-direction: column;
  border-right: 2px solid #90caf9;
`;

export const PriceContainer = styled.div`
  padding: 0 2rem 0 2rem;
  display: flex;
  flex-direction: column;
`;
