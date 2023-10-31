import { screen, render } from "@testing-library/react";
import GetStarted from "./getStarted";

describe("check text and img alt text", () => {
  test("check text", () => {
    render(<GetStarted />);
    const placeText = screen.getByText("Kyoto, Japan");
    const getStartedTitle = screen.getByText(
      "See the world, It’s yours to explore.",
    );
    const btnText = screen.getByText("Get started");

    expect(placeText).toBeInTheDocument();
    expect(getStartedTitle).toBeInTheDocument();
    expect(btnText).toBeInTheDocument();
  });
});
