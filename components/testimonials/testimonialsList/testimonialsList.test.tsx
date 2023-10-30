import { screen, render } from "@testing-library/react";
import TestimonialList from "./testimonialsList";

describe("check text and alt image", () => {
  test("check text", () => {
    render(<TestimonialList />);
    const firstName = screen.getByText("Liam S.");
    const secondName = screen.getByText("Kendra P.");
    const thirdName = screen.getByText("Angel C.");
    const fourName = screen.getByText("Jake B.");
    const firstPlace = screen.getByText("Hollywood, CA");
    const secondPlace = screen.getByText("Lake Placid, FL, TX");
    const thirdPlace = screen.getByText("Topeka, KS, TX");
    const fourPlace = screen.getByText("Houston, TX");
    const testimoni = screen.getAllByText(
      "I booked a custom getaway to Paris (for myself) at great price and the website even helped me book tours and activities. The customer service was excellent and I was reimbursed for lost luggage!",
    );

    expect(firstName).toBeInTheDocument();
    expect(secondName).toBeInTheDocument();
    expect(thirdName).toBeInTheDocument();
    expect(fourName).toBeInTheDocument();
    expect(firstPlace).toBeInTheDocument();
    expect(secondPlace).toBeInTheDocument();
    expect(thirdPlace).toBeInTheDocument();
    expect(fourPlace).toBeInTheDocument();
    expect(testimoni[0]).toBeInTheDocument();
    expect(testimoni[1]).toBeInTheDocument();
    expect(testimoni[2]).toBeInTheDocument();
    expect(testimoni[3]).toBeInTheDocument();
  });
  test("check alt image", () => {
    render(<TestimonialList />);
    const whiteStars = screen.getAllByAltText("white stars");
    const blueStars = screen.getAllByAltText("blue stars");

    expect(whiteStars[0]).toBeVisible();
    expect(blueStars[0]).toBeVisible();
    expect(whiteStars[1]).toBeVisible();
    expect(blueStars[1]).toBeVisible();
  });
});
