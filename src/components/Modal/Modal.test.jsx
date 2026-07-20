import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal", () => {

  const mockBook = {
    volumeInfo: {
      title: "The Hobbit",
      authors: ["J.R.R. Tolkien"],
      description: "A fantasy adventure book",
      publishedDate: "1937",
      categories: ["Fantasy"],
      language: "en",
    },
  };


  test("renders book details", () => {

    render(
      <Modal
        book={mockBook}
        onClose={() => {}}
      />
    );


    expect(
      screen.getByText("The Hobbit")
    ).toBeInTheDocument();


    expect(
      screen.getByText("J.R.R. Tolkien")
    ).toBeInTheDocument();


    expect(
      screen.getByText("A fantasy adventure book")
    ).toBeInTheDocument();

  });



  test("calls onClose when close button is clicked", () => {

    const handleClose = vi.fn();


    render(
      <Modal
        book={mockBook}
        onClose={handleClose}
      />
    );


    fireEvent.click(
      screen.getByText("X")
    );


    expect(handleClose)
      .toHaveBeenCalled();

  });


});