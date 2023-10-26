import React, { useState } from "react";
import Ellipse from "@/assets/trips/blueEllipse.svg";
import Image from "next/image";
import { type } from "./type";
import { TypeWrapper, BtnType } from "./type.style";

const TripList = () => {
  const [selectedTrip, setSelectedTrip] = useState<string | null>(null);

  const handleClick = (tripName: string) => {
    if (selectedTrip !== tripName) {
      setSelectedTrip(tripName);
    }
  };

  const fisrtIndex = (number: number) => {
    return number === 0 ? false : true;
  };

  const handleClass = (num: number) => {
    return num === 0 ? "first" : type.length - 1 === num ? "last" : "mid";
  };

  const handleSelected = (select: string | null, name: string) => {
    return select === name || (select === null && name === "Hot Deals")
      ? true
      : false;
  };

  const handleEllipse = (select: string | null, name: string) => {
    return select === name || (select === null && name === "Hot Deals") ? (
      <Image src={Ellipse} alt="ellipse" />
    ) : (
      ""
    );
  };

  return (
    <TypeWrapper>
      {type.map((trip, index) => (
        <BtnType
          className={handleClass(index)}
          $isFirst={fisrtIndex(index)}
          $selected={handleSelected(selectedTrip, trip.name)}
          key={index}
        >
          <span onClick={() => handleClick(trip.name)}>{trip.name}</span>
          {handleEllipse(selectedTrip, trip.name)}
        </BtnType>
      ))}
    </TypeWrapper>
  );
};

export default TripList;
