import { screen, render } from "@testing-library/react";
import Footer from "./footer";

describe("check text and alt text", () => {
  test("check text", () => {
    render(<Footer />);

    const about = screen.getAllByText("About us");
    const creators = screen.getByText("Creators");
    const philosophy = screen.getByText("Philosophy");
    const contact = screen.getByText("Contact us");
    const company = screen.getByText("Company");
    const ourTeam = screen.getByText("Our team");
    const terms = screen.getByText("Terms");
    const howItWorks = screen.getByText("How it works");
    const blog = screen.getByText("Blog");
    const services = screen.getByText("Services");
    const flights = screen.getByText("Flights");
    const planning = screen.getByText("Planning");
    const hotels = screen.getByText("Hotels");
    const booking = screen.getByText("Booking");
    const checkUsOut = screen.getByText("Check us out");

    expect(about[0]).toBeInTheDocument();
    expect(about[1]).toBeInTheDocument();
    expect(creators).toBeInTheDocument();
    expect(philosophy).toBeInTheDocument();
    expect(contact).toBeInTheDocument();
    expect(company).toBeInTheDocument();
    expect(ourTeam).toBeInTheDocument();
    expect(terms).toBeInTheDocument();
    expect(howItWorks).toBeInTheDocument();
    expect(blog).toBeInTheDocument();
    expect(services).toBeInTheDocument();
    expect(flights).toBeInTheDocument();
    expect(planning).toBeInTheDocument();
    expect(hotels).toBeInTheDocument();
    expect(booking).toBeInTheDocument();
    expect(checkUsOut).toBeInTheDocument();
  });
  test("check alt text", () => {
    render(<Footer />);
    const planeIcon = screen.getByAltText("plane icon");
    const facebookIcon = screen.getByAltText("facebook icon");
    const instagramIcon = screen.getByAltText("instagram icon");
    const linkedinIcon = screen.getByAltText("linkedin icon");

    expect(planeIcon).toBeVisible();
    expect(facebookIcon).toBeVisible();
    expect(instagramIcon).toBeVisible();
    expect(linkedinIcon).toBeVisible();
  });
});
