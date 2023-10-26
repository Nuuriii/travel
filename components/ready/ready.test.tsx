import { screen, render } from "@testing-library/react";
import Ready from "./ready";

describe("check ready text and plane icon", () => {
  test("check text", () => {
    render(<Ready />);

    const ready = screen.getByText("Ready to travel?");

    expect(ready).toBeInTheDocument();
  });
  test("check image", () => {
    render(<Ready />);

    const plane = screen.getByAltText("air plane");

    expect(plane).toBeVisible();
  });
});
