import Image from "next/image";
import Icon from "@/assets/navbar/Icon.svg";
import Link from "next/link";
import Padding from "../padding/padding";
import {
  Nav,
  IconWrapper,
  ListWrapper,
  List,
  AuthBtn,
  NavWrapper,
  Menu,
} from "./navbar.style";

export default function Navbar() {
  return (
    <Nav>
      <Padding>
        <NavWrapper>
          <IconWrapper>
            <Link href="/">
              <Image className="icon" src={Icon} alt="" />
            </Link>
          </IconWrapper>
          <Menu>
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
