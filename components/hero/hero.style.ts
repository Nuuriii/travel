import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 44rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (width >= 1488px) {
    width: 100vw;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 0rem 0 0 0;
  position: relative;
  display: flex;
  align-items: center;
  @media (width >= 1488px) {
    width: 75rem;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5rem 0 0;
`;

export const HeroTitle = styled.h1`
  font-family: "Jua", sans-serif;
  color: #263238;
  font-size: 3.2rem;
`;

export const HeroText = styled.p`
  margin: 3rem 0 3rem 0;
  color: rgba(38, 50, 56, 0.5);
  font-size: 1.1rem;
  font-family: "interRegular", sans-serif;
`;

export const ImageWrapper = styled.div`
  display: flex;
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
