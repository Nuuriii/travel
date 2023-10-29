import { screen, render } from "@testing-library/react";
import Experience from "./experience";

describe("check text and image", () => {
  test("check text", () => {
    render(<Experience />);
    const experienceText = screen.getByText("Our experience");
    const trustedText = screen.getByText(
      "Trusted for years, by travelers like you.",
    );
    const travelText = screen.getByText(
      "Travel with piece of mind with one of our customized travel packages to fit your specific needs and interests.",
    );
    const happyText = screen.getByText("Happy Customers");
    const yearsText = screen.getByText("Years of Experience");
    const awardsText = screen.getByText("Awards Won");
    const happyCost = screen.getByText("50m+");
    const yearCost = screen.getByText("22+");
    const awardsCost = screen.getByText("50+");
    const thailandText = screen.getByText("Thailand");
    const joshuaTreeText = screen.getByText("Joshua Tree");

    expect(experienceText).toBeInTheDocument();
    expect(trustedText).toBeInTheDocument();
    expect(travelText).toBeInTheDocument();
    expect(happyText).toBeInTheDocument();
    expect(yearsText).toBeInTheDocument();
    expect(awardsText).toBeInTheDocument();
    expect(happyCost).toBeInTheDocument();
    expect(yearCost).toBeInTheDocument();
    expect(awardsCost).toBeInTheDocument();
    expect(thailandText).toBeInTheDocument();
    expect(joshuaTreeText).toBeInTheDocument();
  });
});
