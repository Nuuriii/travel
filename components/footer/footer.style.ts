import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: #ddeffd;
  @media (width >= 1488px) {
    justify-content: center;
  }
`;

export const Responsive = styled.div`
  width: 100%;
  @media (width >= 1488px) {
    width: 70rem;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Information = styled.div`
  padding: 5rem 2rem;
  display: flex;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  display: flex;
  img {
    height: 4rem;
    width: auto;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
`;

export const LinkItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 3rem 0 0;
`;

export const LinkTitle = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1rem;
  font-family: "interSemiBold", sans-serif;
`;

export const LinkTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  a {
    margin: 0 0 0.5rem 0;
    font-size: 0.9rem;
    text-decoration: none;
    font-family: "interRegular", sans-serif;
    color: #263238;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SosmedContainer = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    transition: all 0.2s;
    &:hover {
      transform: scale(1.055);
    }
  }
`;

export const LicenseWrapper = styled.div`
  padding: 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid #75a3c8;
  font-family: "interRegular", sans-serif;
  color: #75a3c8;
`;
