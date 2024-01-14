import { screen, render } from "@testing-library/react";
import Hero from "../hero";

describe("check hero text and image", () => {
  test("check text", () => {
    const title = "Experience the world, one adventure at a time";
    const description =
      "Whether you're looking for a relaxing beach vacation or an adventurous trip to a new city, we have something for everyone.";
    const location = "Location";
    const locationText = "Dubai, UAE";
    const date = "Date";
    const dateText = "Tue, Nov 10";
    const price = "Average price";
    const priceText = "$523 - $849";

    render(<Hero />);
    const findTitle = screen.getByText(title);
    const findDesc = screen.getByText(description);
    const findLocation = screen.getByText(location);
    const findLocText = screen.getByText(locationText);
    const findDate = screen.getByText(date);
    const findDateText = screen.getByText(dateText);
    const findPrice = screen.getByText(price);
    const findPriceText = screen.getByText(priceText);

    expect(findTitle).toBeInTheDocument();
    expect(findDesc).toBeInTheDocument();
    expect(findLocation).toBeInTheDocument();
    expect(findLocText).toBeInTheDocument();
    expect(findDate).toBeInTheDocument();
    expect(findDateText).toBeInTheDocument();
    expect(findPrice).toBeInTheDocument();
    expect(findPriceText).toBeInTheDocument();
  });
  test("check alt image", () => {
    render(<Hero />);
    const romanticMobile = screen.getByAltText("romantic mobile");
    const romanticDesktop = screen.getByAltText("romantic dekstop");
    const chevron = screen.getAllByAltText("chevron");
    const search = screen.getByAltText("search icon");
    const location = screen.getByAltText("location icon");

    expect(romanticMobile).toBeInTheDocument();
    expect(romanticDesktop).toBeVisible();
    expect(chevron[0]).toBeVisible();
    expect(chevron[1]).toBeVisible();
    expect(chevron[2]).toBeVisible();
    expect(search).toBeVisible();
    expect(location).toBeVisible();
  });
});
