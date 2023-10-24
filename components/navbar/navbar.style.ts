import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  position: fixed;
  backdrop-filter: blur(12px);
  font-weight: 900;
  font-family: "outfitRegular", serif;
`;

export const NavWrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (width <= 1029px) {
    position: absolute;
    top: -100%;
  }
`;

export const ListWrapper = styled.ul`
  display: flex;
  list-style: none;
`;

export const List = styled.li`
  margin: 0 5rem 0 0;
  a {
    font-size: 1.2rem;
    text-decoration: none;
    color: #263238;
  }
  a:hover {
    color: #75a3c8;
  }
`;

export const AuthBtn = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  .login {
    margin: 0 2rem 0 0;
    text-decoration: none;
    color: #75a3c8;
    &:hover {
      color: #263238;
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
  }
`;
