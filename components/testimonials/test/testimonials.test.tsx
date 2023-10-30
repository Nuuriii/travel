import { screen, render } from "@testing-library/react";
import Testimonials from "../testimonials";

describe("check text", () => {
  test("check text", () => {
    render(<Testimonials />);
    const testimonialText = screen.getByText("Testimonials");
    const testimonialTitle = screen.getByText("Read our Raving Reviews");
    const testimonialParaph = screen.getByText(
      "Written by real travelers, just like you!",
    );

    expect(testimonialText).toBeInTheDocument();
    expect(testimonialTitle).toBeInTheDocument();
    expect(testimonialParaph).toBeInTheDocument();
  });
});
