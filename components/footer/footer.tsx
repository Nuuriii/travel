import Padding from "../padding/padding";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <Padding>
        <div>
          <div>
            <Image src={""} alt="" />
          </div>
          <div>
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
                <Image src={""} alt="" />
                <Image src={""} alt="" />
                <Image src={""} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Padding>
    </div>
  );
}
