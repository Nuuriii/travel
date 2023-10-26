import styled from "styled-components";

export const Grid = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const GridItem = styled.div`
  width: 22rem;
`;

export const ImagePlace = styled.div`
  margin: 0 0 1rem 0;
  img {
    height: 17rem;
    width: 100%;
    border-radius: 2rem;
  }
`;

export const TimeText = styled.p`
  font-family: "outfitRegular", sans-serif;
  color: #263238;
`;

export const CostText = styled.p`
  font-family: "OutfitSemiBold", sans-serif;
  color: #75a3c8;
`;

export const DescContainer = styled.div`
  margin: 0.5rem 0 1rem 0;
  display: flex;
  font-size: 1.2rem;
  font-family: "outfitSemiBold", sans-serif;
  color: #263238;
`;

export const KeyText = styled.p`
  padding: 0 0.3rem;
  position: relative;
`;

export const UnderlineEffect = styled.span`
  position: absolute;
  background-color: #bcdffb;
  z-index: -1;
  bottom: 0.1rem;
  left: 0;
  width: 100%;
  height: 0.5rem;
`;

export const LocationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "outfitRegular", sans-serif;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.2rem;
  width: 8rem;
  font-family: "outfitSemiBold", sans-serif;
  border: none;
  border-radius: 2rem;
  color: #fff;
  font-size: 1.1rem;
  background-color: #90caf9;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.023);
  }
  &:active {
    transform: scale(0.98);
  }
`;

export const JustifyBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
