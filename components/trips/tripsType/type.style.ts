import styled from "styled-components";

export const TypeWrapper = styled.div`
  margin: 2rem 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .first {
    padding: 0.5rem 1rem 0.5rem 0;
  }
  .mid {
    padding: 0.5rem 1rem;
  }
  .last {
    padding: 0.5rem 0 0.5rem 1rem;
  }
`;

export const BtnType = styled.button<{
  $selected: boolean;
  $isFirst: any;
  $isOver: any;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: white;
  border-left: ${(props) => (props.$isFirst ? "2px solid #90caf9" : "")};
  cursor: pointer;
  @media (width <= 1029px) {
    display: ${(props) => (props.$isOver ? "none" : "flex")};
  }
  span {
    margin: 0 0.5rem 0 0;
    font-size: 1.2rem;
    font-family: ${(props) =>
        props.$selected ? "outfitSemiBold" : "outfitRegular"},
      serif;
  }
  img {
    height: 1rem;
  }
`;
