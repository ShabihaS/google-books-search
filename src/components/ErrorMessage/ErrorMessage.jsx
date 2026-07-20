import classes from "./ErrorMessage.module.scss";

function ErrorMessage({ message }) {
  return (
    <div className={classes.error}>
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;