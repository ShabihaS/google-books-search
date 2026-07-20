import BookCard from "../BookCard/BookCard";
import classes from "./BookGrid.module.scss";

function BookGrid({ books }) {
  return (
    <section className={classes.bookGrid}>
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
        />
      ))}
    </section>
  );
}

export default BookGrid;