import { useState, useEffect } from "react";
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
  const [width, setWidth] = useState(0);

  const handleResize = () => setWidth(window.innerWidth);

  console.log(width);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleIndex = (i: number) => {
    return i === 0 || i === 3 ? true : false;
  };

  const handleBg = (i: number) => {
    return i % 2 === 0 && width <= 688 ? true : false;
  };

  const handleStars = (i: number) => {
    return i === 0 || i === 3 ? (
      <Image src={WhiteStars} alt="white stars" />
    ) : (
      <Image src={BlueStars} alt="blue stars" />
    );
  };

  const mobileStars = (i: number) => {
    return i % 2 === 0 && width < 688 ? (
      <Image src={WhiteStars} alt="white stars" />
    ) : (
      <Image src={BlueStars} alt="blue stars" />
    );
  };

  return (
    <Flex>
      {testimoniData.map((item, index) => (
        <FlexItem
          $isBlue={handleIndex(index)}
          $isMobile={handleBg(index)}
          key={index}
        >
          <Name $isBlue={handleIndex(index)}>{item.name}</Name>
          <PlaceText>{item.place}</PlaceText>
          <TestimoniText>{item.testimoni}</TestimoniText>
          <StarsWrapper>
            {width < 688 ? mobileStars(index) : handleStars(index)}
          </StarsWrapper>
        </FlexItem>
      ))}
    </Flex>
  );
}
