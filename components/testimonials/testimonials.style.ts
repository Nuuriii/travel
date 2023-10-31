import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 4rem 0 5rem 0;
  display: flex;
  justify-content: center;
`;

export const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (width >= 1488px) {
    width: 70rem;
  }
`;

export const TestimonialDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TestimonialText = styled.p`
  font-family: "Jua", sans-serif;
  text-transform: uppercase;
  color: #75a3c8;
`;

export const TestimonialsTitle = styled.h1`
  font-family: "outfitSemiBold", sans-serif;
  font-size: 2.4rem;
  text-align: center;
  color: #263238;
  @media (width <= 688px) {
    font-size: 2rem;
  }
`;

export const TestimonialParaph = styled.p`
  color: rgba(38, 50, 56, 0.5);
  font-family: "interRegular", sans-serif;
`;
