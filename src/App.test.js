import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders login prompt", () => {
  render(<App />);
  expect(screen.getByText(/Please Login\./i)).toBeInTheDocument();
});
