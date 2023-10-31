import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #bcdffb;
  border: 2rem;
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  .kyoto {
    position: absolute;
  }
`;

export const LocationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 2rem;
`;

export const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GetStartedTitle = styled.h1`
  font-family: "outfitSemiBold", sans-serif;
  font-size: 2.4rem;
`;

export const GetStartedBtn = styled.button`
  height: 2rem;
  width: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;
