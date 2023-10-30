import Padding from "../padding/padding";
import {
  Container,
  TestimonialContainer,
  TestimonialDesc,
  TestimonialText,
  TestimonialsTitle,
  TestimonialParaph,
} from "./testimonials.style";

export default function Testimonials() {
  return (
    <Padding>
      <Container>
        <TestimonialContainer>
          <TestimonialDesc>
            <TestimonialText>Testimonials</TestimonialText>
            <TestimonialsTitle>Read our Raving Reviews</TestimonialsTitle>
            <TestimonialParaph>
              Written by real travelers, just like you!
            </TestimonialParaph>
          </TestimonialDesc>
        </TestimonialContainer>
      </Container>
    </Padding>
  );
}
