import { useEffect } from "react";
import classes from "./Modal.module.scss";
import Button from "../Button/Button";

function Modal({ book, onClose }) {

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const {
    title,
    authors,
    description,
    publishedDate,
    categories,
    language,
  } = book.volumeInfo;

  return (
    <div 
      className={classes.overlay}
      onClick={onClose}
    >

      <div 
        className={classes.modal}
        onClick={(event) => event.stopPropagation()}
      >

        <Button
          className={classes.closeButton}
          onClick={onClose}
        >
          X
        </Button>

        <h2>{title}</h2>

        <p>
          <strong>Author:</strong>{" "}
          {authors?.join(", ") || "Unknown"}
        </p>

        <p>
          <strong>Published:</strong>{" "}
          {publishedDate || "Unknown"}
        </p>

        <p>
          <strong>Language:</strong>{" "}
          {language || "Unknown"}
        </p>

        <p>
          <strong>Categories:</strong>{" "}
          {categories?.join(", ") || "Unknown"}
        </p>

        <p>
          {description || "No description available."}
        </p>

      </div>

    </div>
  );
}

export default Modal;