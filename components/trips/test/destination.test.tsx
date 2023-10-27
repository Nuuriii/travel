import { screen, render } from "@testing-library/react";
import Destination from "../destination/destination";
import exp from "constants";

describe("check text and image in Destination component", () => {
  test("check text", () => {
    render(<Destination />);
    const timeItem1 = screen.getByText("7 Days, 6 Nights");
    const timeItem2 = screen.getByText("3 Days, 2 Nights");
    const timeItem3 = screen.getByText("4 days, 3 Nights");
    const costItem = screen.getAllByText("$348 /person");
    const descText1 = screen.getByText("Explore the");
    const descText2 = screen.getByText("Seek the");
    const descText3 = screen.getByText("Discover the");
    const beautyText1 = screen.getByText("of Venice");
    const beautyText2 = screen.getByText("of Paris");
    const beautyText3 = screen.getByText("of Agadir");
    const keyText1 = screen.getByText("beauty");
    const keyText2 = screen.getByText("elegance");
    const keyText3 = screen.getByText("culture");
    const placeText1 = screen.getByText("Venice, Italy");
    const placeText2 = screen.getByText("Paris, France");
    const placeText3 = screen.getByText("Agadir, Morocco");
    const btnText = screen.getAllByText("Discover");

    expect(timeItem1).toBeInTheDocument();
    expect(timeItem2).toBeInTheDocument();
    expect(timeItem3).toBeInTheDocument();
    expect(costItem[0]).toBeInTheDocument();
    expect(costItem[1]).toBeInTheDocument();
    expect(costItem[2]).toBeInTheDocument();
    expect(descText1).toBeInTheDocument();
    expect(descText2).toBeInTheDocument();
    expect(descText3).toBeInTheDocument();
    expect(beautyText1).toBeInTheDocument();
    expect(beautyText2).toBeInTheDocument();
    expect(beautyText3).toBeInTheDocument();
    expect(keyText1).toBeInTheDocument();
    expect(keyText2).toBeInTheDocument();
    expect(keyText3).toBeInTheDocument();
    expect(placeText1).toBeInTheDocument();
    expect(placeText2).toBeInTheDocument();
    expect(placeText3).toBeInTheDocument();
    expect(btnText[0]).toBeInTheDocument();
    expect(btnText[1]).toBeInTheDocument();
    expect(btnText[2]).toBeInTheDocument();
  });
});
