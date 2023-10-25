import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  position: fixed;
  backdrop-filter: blur(12px);
  font-weight: 900;
  font-family: "outfitRegular", serif;
  z-index: 30;
  @media (width >= 1488px) {
    width: 100vw;
    display: flex;
    justify-content: center;
  }
`;

export const NavResponsive = styled.div`
  height: 100%;
  @media (width >= 1488px) {
    width: 75rem;
  }
  @media (width <= 748px) {
    width: 100%;
  }
`;

export const NavWrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (width <= 748px) {
  }
`;

export const IconWrapper = styled.div`
  height: 3rem;
  width: 16rem;
  position: relative;
  a {
    position: absolute;
    top: 0.5rem;
    left: -2rem;
  }
  .icon {
    height: 5rem;
  }
  @media (width <= 748px) {
    width: 10rem;
  }
`;

export const HamburgerIcon = styled.div<{ $height: boolean }>`
  display: none;
  justify-content: flex-end;
  img {
    width: auto;
    height: 4rem;
    cursor: pointer;
  }
  @media (width <= 1029px) {
    display: flex;
  }
`;

export const Menu = styled.div<{ $show: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (width <= 1029px) {
    padding: 1rem 1rem;
    position: absolute;
    border-radius: 0.5rem;
    top: 5rem;
    right: ${(props) => (props.$show ? "1.8rem" : "-100%")};
    transition: all 0.3s;
    background-color: #90caf9;
    flex-direction: column;
    align-items: start;
  }
`;

export const ListWrapper = styled.ul`
  display: flex;
  list-style: none;
  @media (width <= 1029px) {
    flex-direction: column;
  }
`;

export const List = styled.li`
  margin: 0 5rem 0 0;
  @media (width <= 1029px) {
    margin-bottom: 0.5rem;
  }
  a {
    font-size: 1.2rem;
    text-decoration: none;
    color: #263238;
    @media (width <= 1029px) {
      color: white;
    }
  }
  a:hover {
    color: #75a3c8;
    @media (width <= 1029px) {
      color: #263238;
    }
  }
`;

export const AuthBtn = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  @media (width <= 1029px) {
    margin-top: 1rem;
  }
  .login {
    height: 2.5rem;
    width: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    margin: 0 2rem 0 0;
    text-decoration: none;
    color: #75a3c8;
    &:hover {
      color: #263238;
    }
    @media (width <= 1029px) {
      margin: 0 1rem 0 0;
      color: #75a3c8;
      background-color: #fff;
      &:hover {
        color: #fff;
        border: 2px solid #fff;
        background-color: #90caf9;
      }
    }
  }
  .signup {
    height: 2.5rem;
    width: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    background-color: #90caf9;
    text-decoration: none;
    color: #fff;
    &:hover {
      background-color: #fff;
      border: 2px solid #90caf9;
      color: #90caf9;
    }
    @media (width <= 1029px) {
      border: 2px solid #fff;
    }
  }
`;
