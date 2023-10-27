import { screen, render } from "@testing-library/react";
import Trips from "../trips";

describe("check text and image list trip", () => {
  test("check text", () => {
    render(<Trips />);
    const findPopular = screen.getByText("Popular Trips");
    const findOurMost = screen.getByText("Our Most Popular Trips");

    expect(findPopular).toBeInTheDocument();
    expect(findOurMost).toBeInTheDocument();
  });
});
