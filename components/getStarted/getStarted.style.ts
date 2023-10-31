import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  padding: 2.5rem 4rem;
  margin: 8rem 0 4rem 0;
  height: 15rem;
  width: 50rem;
  display: flex;
  justify-content: space-between;
  background-color: #bcdffb;
  border-radius: 5rem;
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  width: 50%;
  flex-direction: column;
  .kyoto {
    position: absolute;
    height: 19rem;
    width: auto;
    bottom: -2.5rem;
  }
`;

export const LocationWrapper = styled.div`
  padding: 0.4rem 0.8rem;
  position: absolute;
  top: -2rem;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 2rem;
  z-index: 1;
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
`;

export const GetStartedTitle = styled.h1`
  width: 19rem;
  font-family: "outfitSemiBold", sans-serif;
  font-size: 2rem;
  color: #263238;
  text-align: center;
`;

export const GetStartedBtn = styled.button`
  height: 2.5rem;
  width: 8rem;
  font-size: 1rem;
  font-family: "outfitSemiBold", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 2rem;
  background-color: #ffffff;
`;
