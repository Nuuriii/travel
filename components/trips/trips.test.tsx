import { screen, render } from "@testing-library/react";
import Trips from "./trips";

describe("check text and image list trip", () => {
  test("check text", () => {
    const popular = "Popular Trips";

    render(<Trips />);
    const findPopular = screen.getByText(popular);

    expect(findPopular).toBeInTheDocument();
  });
});
