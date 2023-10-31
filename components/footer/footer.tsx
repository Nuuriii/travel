import Padding from "../padding/padding";
import Image from "next/image";
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
              <div>
                <h3>About us</h3>
                <div>
                  <p>About us</p>
                  <p>Creators</p>
                  <p>Philosophy</p>
                  <p>Contact us</p>
                </div>
              </div>
              <div>
                <h3>Company</h3>
                <div>
                  <p>Our team</p>
                  <p>Terms</p>
                  <p>How it works</p>
                  <p>Blog</p>
                </div>
              </div>
              <div>
                <h3>Services</h3>
                <div>
                  <p>Flights</p>
                  <p>Planning</p>
                  <p>Hotels</p>
                  <p>Booking</p>
                </div>
              </div>
              <div>
                <h3>Check us out</h3>
                <div>
                  <Image src={Facebook} alt="facebook icon" />
                  <Image src={Instagram} alt="instagram icon" />
                  <Image src={Linkedin} alt="linkedin icon" />
                </div>
              </div>
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
