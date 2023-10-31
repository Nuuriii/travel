import Padding from "../padding/padding";
import Image from "next/image";
import Link from "next/link";
import Plane from "@/assets/footer/Logo.svg";
import Linkedin from "@/assets/footer/linkedin.svg";
import Instagram from "@/assets/footer/instagram.svg";
import Facebook from "@/assets/footer/facebook.svg";
import {
  Container,
  Wrapper,
  Information,
  IconWrapper,
  LinkContainer,
  LinkItem,
  LinkTitle,
  LinkTextWrapper,
  SosmedContainer,
  LicenseWrapper,
} from "./footer.style";

export default function Footer() {
  return (
    <Container>
      <Padding>
        <Wrapper>
          <Information>
            <IconWrapper>
              <Image src={Plane} alt="plane icon" />
            </IconWrapper>
            <LinkContainer>
              <LinkItem>
                <LinkTitle>About us</LinkTitle>
                <LinkTextWrapper>
                  <Link href={"/"}>About us</Link>
                  <Link href={"/"}>Creators</Link>
                  <Link href={"/"}>Philosophy</Link>
                  <Link href={"/"}>Contact us</Link>
                </LinkTextWrapper>
              </LinkItem>
              <LinkItem>
                <LinkTitle>Company</LinkTitle>
                <LinkTextWrapper>
                  <Link href={"/"}>Our team</Link>
                  <Link href={"/"}>Terms</Link>
                  <Link href={"/"}>How it works</Link>
                  <Link href={"/"}>Blog</Link>
                </LinkTextWrapper>
              </LinkItem>
              <LinkItem>
                <LinkTitle>Services</LinkTitle>
                <LinkTextWrapper>
                  <Link href={"/"}>Flights</Link>
                  <Link href={"/"}>Planning</Link>
                  <Link href={"/"}>Hotels</Link>
                  <Link href={"/"}>Booking</Link>
                </LinkTextWrapper>
              </LinkItem>
              <LinkItem>
                <LinkTitle>Check us out</LinkTitle>
                <SosmedContainer>
                  <Link href={"/"}>
                    <Image src={Facebook} alt="facebook icon" />
                  </Link>
                  <Link href={"/"}>
                    <Image src={Instagram} alt="instagram icon" />
                  </Link>
                  <Link href={"/"}>
                    <Image src={Linkedin} alt="linkedin icon" />
                  </Link>
                </SosmedContainer>
              </LinkItem>
            </LinkContainer>
          </Information>
          <LicenseWrapper>
            <p>Copyright and All rights reserved.</p>
          </LicenseWrapper>
        </Wrapper>
      </Padding>
    </Container>
  );
}
