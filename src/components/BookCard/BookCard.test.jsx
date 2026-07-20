import { render, screen } from "@testing-library/react";
import BookCard from "./BookCard";


describe("BookCard", () => {

  const mockBook = {
    volumeInfo: {
      title: "The Hobbit",
      authors: ["J.R.R. Tolkien"],
      description: "A fantasy adventure",
      imageLinks: {
        thumbnail: "image.jpg",
      },
    },
  };


  test("renders book information", () => {

    render(
      <BookCard
        book={mockBook}
        onSelect={() => {}}
      />
    );


    expect(
      screen.getByText("The Hobbit")
    ).toBeInTheDocument();


    expect(
      screen.getByText("J.R.R. Tolkien")
    ).toBeInTheDocument();


    expect(
      screen.getByText("A fantasy adventure")
    ).toBeInTheDocument();

  });

  test("shows no image message when image is missing", () => {

  const bookWithoutImage = {
    volumeInfo: {
      title: "No Cover Book",
      authors: ["Unknown"],
      description: "Test book",
    },
  };


  render(
    <BookCard
      book={bookWithoutImage}
      onSelect={() => {}}
    />
  );


  expect(
    screen.getByText("No Image Available")
  ).toBeInTheDocument();

});


});