import styled from "styled-components";
import Trips from "./trips";

export const Container = styled.div`
  width: 100%;
  padding: 2rem 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TripsText = styled.div`
  margin: 0 0 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PopularText = styled.p`
  margin: 0 0 0.5rem 0;
  font-family: "Jua", serif;
  text-transform: uppercase;
  color: #75a3c8;
`;

export const PopularTitle = styled.h2`
  font-family: "outfitSemiBold", serif;
  font-size: 2rem;
  color: #263238;
`;
