import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 900;
  font-family: "outfitRegular", serif;

  .icon {
    height: 5rem;
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
  }
`;
