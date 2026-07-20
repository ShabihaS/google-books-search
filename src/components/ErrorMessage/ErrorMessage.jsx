import styles from "./ErrorMessage.module.scss";

function ErrorMessage({ message }) {
  return (
    <div className={styles.error}>
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;