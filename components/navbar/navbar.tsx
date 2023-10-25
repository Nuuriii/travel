import Image from "next/image";
import Icon from "@/assets/navbar/Icon.svg";
import Hamburger from "@/assets/navbar/hamburger.svg";
import Close from "@/assets/navbar/close.svg";
import Link from "next/link";
import Padding from "@/components/padding/padding";
import {
  Nav,
  IconWrapper,
  ListWrapper,
  List,
  AuthBtn,
  NavWrapper,
  HamburgerIcon,
  Menu,
} from "./navbar.style";
import { useState } from "react";

export default function Navbar() {
  const [Show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!Show);
  };

  return (
    <Nav>
      <Padding>
        <NavWrapper>
          <IconWrapper>
            <Link href="/">
              <Image className="icon" src={Icon} alt="travel icon" />
            </Link>
          </IconWrapper>
          <HamburgerIcon $height={Show} onClick={handleShow}>
            <Image className="hamburger" src={Hamburger} alt="hamburger icon" />
          </HamburgerIcon>
          <Menu $show={Show}>
            <ListWrapper>
              <List>
                <Link href="/">Home</Link>
              </List>
              <List>
                <Link href="/">About</Link>
              </List>
              <List>
                <Link href="/">Trips</Link>
              </List>
              <List>
                <Link href="/">Services</Link>
              </List>
            </ListWrapper>
            <AuthBtn>
              <Link className="login" href={"/"}>
                Login
              </Link>
              <Link className="signup" href={"/"}>
                Sign up
              </Link>
            </AuthBtn>
          </Menu>
        </NavWrapper>
      </Padding>
    </Nav>
  );
}
