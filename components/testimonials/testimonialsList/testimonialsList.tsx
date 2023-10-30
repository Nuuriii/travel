import Image from "next/image";
import WhiteStars from "@/assets/testimonials/whiteStars.svg";
import BlueStars from "@/assets/testimonials/blueStars.svg";
import { testimoniData } from "./testimoniData";
import {
  Flex,
  FlexItem,
  Name,
  PlaceText,
  TestimoniText,
  StarsWrapper,
} from "./testimonialsList.style";

export default function TestimonialList() {
  const handleIndex = (i: number) => {
    return i === 0 || i === 3 ? true : false;
  };

  const handleStars = (i: number) => {
    return i === 0 || i === 3 ? (
      <Image src={WhiteStars} alt="" />
    ) : (
      <Image src={BlueStars} alt="" />
    );
  };

  return (
    <Flex>
      {testimoniData.map((item, index) => (
        <FlexItem $isBlue={handleIndex(index)} key={index}>
          <Name $isBlue={handleIndex(index)}>{item.name}</Name>
          <PlaceText>{item.place}</PlaceText>
          <TestimoniText>{item.testimoni}</TestimoniText>
          <StarsWrapper>{handleStars(index)}</StarsWrapper>
        </FlexItem>
      ))}
    </Flex>
  );
}
