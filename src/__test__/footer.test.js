import { render, screen } from "@testing-library/react";

import Footer from "../components/footer";

test("renders the footer", () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Contact us for creating websites/);
  expect(linkElement).toBeInTheDocument();
});
