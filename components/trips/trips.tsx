import Padding from "../padding/padding";
import TypeList from "./tripsType/typeList";
import {
  Container,
  Wrapper,
  TripsText,
  PopularText,
  PopularTitle,
} from "./trips.style";

export default function Trips() {
  return (
    <Padding>
      <Container>
        <Wrapper>
          <TripsText>
            <PopularText>Popular Trips</PopularText>
            <PopularTitle>Our Most Popular Trips</PopularTitle>
          </TripsText>

          <TypeList />

          <div></div>
        </Wrapper>
      </Container>
    </Padding>
  );
}
