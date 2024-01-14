import { screen, render } from "@testing-library/react";
import TripList from "../tripsType/typeList";

describe("check text and image in TripList component", () => {
  test("check text", () => {
    render(<TripList />);
    const findDealsText = screen.getByText("Hot Deals");
    const findHoneymoonText = screen.getByText("Honeymoon");
    const findBackPackingText = screen.getByText("Backpacking");
    const EuropeText = screen.getByText("Europe");
    const AsiaText = screen.getByText("Asia");
    const MoreText = screen.getByText("More");

    expect(findDealsText).toBeInTheDocument();
    expect(findHoneymoonText).toBeInTheDocument();
    expect(findBackPackingText).toBeInTheDocument();
    expect(EuropeText).toBeInTheDocument();
    expect(AsiaText).toBeInTheDocument();
    expect(MoreText).toBeInTheDocument();
  });
  test("check img with alt text", () => {
    render(<TripList />);
    const Ellipse = screen.getByAltText("ellipse");

    expect(Ellipse).toBeInTheDocument();
  });
});
