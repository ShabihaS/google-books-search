import BookCard from "../BookCard/BookCard";
import classes from "./BookGrid.module.scss";

function BookGrid({ books, onSelect }) {
  return (
    <section className={classes.bookGrid}>
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onSelect={onSelect}
        />
      ))}
    </section>
  );
}

export default BookGrid;