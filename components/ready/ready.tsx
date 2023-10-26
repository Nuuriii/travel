import { Container, ReadyText, WhitePlane } from "./ready.style";
import AirPlane from "@/assets/ready/whitePlane.svg";
import Image from "next/image";

export default function Ready() {
  return (
    <Container>
      <ReadyText>Ready to travel?</ReadyText>
      <WhitePlane>
        <Image src={AirPlane} alt="" />
      </WhitePlane>
    </Container>
  );
}
