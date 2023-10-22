import { render, screen } from "@testing-library/react";
import Button from "./button";

describe("text", () => {
  it("gg", () => {
    render(<Button />);
    const text = screen.getByText("Halo");
    expect(text).toBeInTheDocument();
  });
});
