import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FlexItem = styled.div<{ $isBlue: any }>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.$isBlue ? "#bcdffb" : "#faf9ff")};
  border-radius: 10px;
  border: 2px solid #263238;
  box-shadow: 4px 4px 0px 0px #263238;
`;
