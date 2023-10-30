import styled from "styled-components";

export const Flex = styled.div`
  margin: 3rem 0 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FlexItem = styled.div<{ $isBlue: any }>`
  width: 30rem;
  margin: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.$isBlue ? "#bcdffb" : "#faf9ff")};
  border-radius: 10px;
  border: 2px solid #263238;
  box-shadow: 4px 4px 0px 0px #263238;
`;

export const Name = styled.h3<{ $isBlue: any }>`
  font-family: "interSemiBold", sans-serif;
  color: ${(props) => (props.$isBlue ? "#263238" : "#75A3C8")};
`;

export const PlaceText = styled.p`
  margin: 0.4rem 0;
  font-family: "interRegular", sans-serif;
  color: #263238;
`;

export const TestimoniText = styled.p`
  font-family: "interRegular", sans-serif;
  color: #263238;
`;

export const StarsWrapper = styled.div`
  display: flex;
  justify-content: end;
`;
