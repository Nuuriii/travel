import { screen, render } from "@testing-library/react";
import Navbar from "../navbar";

describe("testing Navbar", () => {
  test("check text", () => {
    const homeText = "Home";
    const aboutText = "About";
    const tripsText = "Trips";
    const servicesText = "Services";
    const loginText = "Login";
    const signupText = "Sign up";

    render(<Navbar />);
    const findHome = screen.getByText(homeText);
    const findAbout = screen.getByText(aboutText);
    const findTrips = screen.getByText(tripsText);
    const findService = screen.getByText(servicesText);
    const findLogin = screen.getByText(loginText);
    const findSignup = screen.getByText(signupText);

    expect(findHome).toBeInTheDocument();
    expect(findAbout).toBeInTheDocument();
    expect(findTrips).toBeInTheDocument();
    expect(findService).toBeInTheDocument();
    expect(findLogin).toBeInTheDocument();
    expect(findSignup).toBeInTheDocument();
  });
  test("check image", () => {
    render(<Navbar />);
    const icon = screen.getByAltText("travel icon");
    const hamburger = screen.getByAltText("hamburger icon");

    expect(icon).toBeInTheDocument();
    expect(hamburger).toBeInTheDocument();
  });
});
