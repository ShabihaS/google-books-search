import classes from "./BookCard.module.scss";

function BookCard({ book }) {
  const {
    title,
    authors,
    description,
    imageLinks,
  } = book.volumeInfo;

  return (
    <article className={classes.card}>

      <img
        className={classes.image}
        src={imageLinks?.thumbnail || "/placeholder.png"}
        alt={title}
      />

      <div className={classes.content}>
        <h2 className={classes.title}>
          {title}
        </h2>

        <p className={classes.author}>
          {authors?.join(", ") || "Unknown author"}
        </p>

        <p className={classes.description}>
          {description || "No description available"}
        </p>
      </div>

    </article>
  );
}

export default BookCard;