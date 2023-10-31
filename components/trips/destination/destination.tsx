import React from "react";
import Image from "next/image";
import { destinationData } from "./destinationData";
import Location from "@/assets/hero/location.svg";
import {
  Flex,
  FlexItem,
  ImagePlace,
  TimeText,
  CostText,
  JustifyBetween,
  DescContainer,
  KeyText,
  UnderlineEffect,
  LocationContainer,
  Button,
} from "./destination.style";

export default function Destination() {
  return (
    <Flex>
      {destinationData.map((item, index) => (
        <FlexItem key={index}>
          <ImagePlace>
            <Image src={item.img} alt={item.alt} />
          </ImagePlace>

          <JustifyBetween>
            <TimeText>{item.time}</TimeText>
            <CostText>{item.cost}</CostText>
          </JustifyBetween>

          <DescContainer>
            <p>{item.descText}</p>
            <KeyText>
              {item.key} <UnderlineEffect></UnderlineEffect>
            </KeyText>
            <p>{item.beautyText}</p>
          </DescContainer>

          <JustifyBetween>
            <LocationContainer>
              <Image src={Location} alt="location icon" />
              <p>{item.placeText}</p>
            </LocationContainer>
            <Button>{item.btnText}</Button>
          </JustifyBetween>
        </FlexItem>
      ))}
    </Flex>
  );
}
