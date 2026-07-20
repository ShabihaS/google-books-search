import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import App from "./App";


// Mock API so we don't call Google Books during testing
vi.mock("./services/bookApi", () => ({
  searchBooks: vi.fn(() =>
    Promise.resolve([
      {
        id: "1",
        volumeInfo: {
          title: "The Hobbit",
          authors: ["J.R.R. Tolkien"],
          description: "A fantasy adventure",
          publishedDate: "1937",
          categories: ["Fantasy"],
          language: "en",
          imageLinks: {
            thumbnail: "image.jpg",
          },
        },
      },
    ])
  ),
}));


describe("App", () => {

  test("opens modal when View Details button is clicked", async () => {

    render(<App />);


    const searchInput = screen.getByRole("textbox");


    fireEvent.change(searchInput, {
      target: {
        value: "hobbit",
      },
    });


    const searchButton = screen.getByRole("button", {
      name: /search/i,
    });


    fireEvent.click(searchButton);


    await waitFor(() =>
      expect(
        screen.getByText("The Hobbit")
      ).toBeInTheDocument()
    );


    fireEvent.click(
      screen.getByText("View Details")
    );


   expect(
  screen.getByText(/Author:/)
).toBeInTheDocument();


expect(
  screen.getByText(/Published:/)
).toBeInTheDocument();


expect(
  screen.getByText(/Language:/)
).toBeInTheDocument();

  });

});