import classes from "./BookCard.module.scss";
import Button from "../Button/Button";

function BookCard({ book, onSelect }) {
  const {
    title,
    authors,
    description,
    imageLinks,
  } = book.volumeInfo;

  return (
    <article className={classes.card}>

      {imageLinks?.thumbnail ? (
        <img
          className={classes.image}
          src={imageLinks.thumbnail}
          alt={title}
        />
      ) : (
        <div className={classes.noImage}>
          No Image Available
        </div>
      )}

      <div className={classes.content}>
        <h2 className={classes.title}>{title}</h2>

        <p className={classes.author}>
          {authors?.join(", ") || "Unknown author"}
        </p>

        <p className={classes.description}>
          {description || "No description available."}
        </p>

        <Button onClick={() => onSelect(book)}>
          View Details
        </Button>

      </div>

    </article>
  );
}

export default BookCard;