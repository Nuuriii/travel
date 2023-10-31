import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  height: 15rem;
  width: 50rem;
  margin: 8rem 0 4rem 0;
  padding: 2.5rem 4rem;
  display: flex;
  justify-content: space-between;
  background-color: #bcdffb;
  border-radius: 5rem;
  @media (width <= 758px) {
    height: 25rem;
    width: 22rem;
    padding: 2rem 3rem;
    border-radius: 2rem;
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  @media (width <= 758px) {
    height: 60%;
    width: 100%;
  }
  .kyoto {
    height: 19rem;
    width: auto;
    position: absolute;
    bottom: -2.5rem;
    @media (width <= 758px) {
      bottom: 0;
      left: -1rem;
    }
  }
`;

export const LocationWrapper = styled.div`
  height: 2rem;
  width: 10rem;
  position: absolute;
  top: -2rem;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 2rem;
  z-index: 1;
  @media (width <= 758px) {
    top: -1rem;
    right: -2rem;
  }
  .location {
    height: 1.5rem;
  }
`;

export const PlaceText = styled.p`
  font-family: "outfitRegular", sans-serif;
`;

export const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (width <= 758px) {
    height: 37%;
  }
`;

export const GetStartedTitle = styled.h1`
  width: 19rem;
  font-family: "outfitSemiBold", sans-serif;
  font-size: 2rem;
  color: #263238;
  text-align: center;
  @media (width <= 758px) {
    font-size: 1.5rem;
  }
`;

export const GetStartedBtn = styled.button`
  height: 2.5rem;
  width: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 2rem;
  background-color: #ffffff;
  transition: all 0.2s;
  font-size: 1rem;
  font-family: "outfitRegular", sans-serif;
  cursor: pointer;
  &:hover {
    transform: scale(1.055);
  }
  &:active {
    transform: scale(0.99);
  }
`;
