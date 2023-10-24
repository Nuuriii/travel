import Image from "next/image";
import Icon from "@/assets/navbar/Icon.svg";
import Link from "next/link";
import { Nav, ListWrapper, List, AuthBtn } from "./navbar.style";

export default function Navbar() {
  return (
    <Nav>
      <Image className="icon" src={Icon} alt="" />
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
    </Nav>
  );
}
