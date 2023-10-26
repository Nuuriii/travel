import {
  Container,
  ReadyText,
  WhitePlane,
  ReadyResponsive,
  ReadyWrapper,
} from "./ready.style";
import AirPlane from "@/assets/ready/whitePlane.svg";
import Image from "next/image";
import Padding from "../padding/padding";

export default function Ready() {
  return (
    <Container>
      <ReadyResponsive>
        <Padding>
          <ReadyWrapper>
            <ReadyText>Ready to travel?</ReadyText>
            <WhitePlane>
              <Image src={AirPlane} alt="air plane" />
            </WhitePlane>
          </ReadyWrapper>
        </Padding>
      </ReadyResponsive>
    </Container>
  );
}
