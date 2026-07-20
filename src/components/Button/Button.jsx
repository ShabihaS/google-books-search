import classes from "./Button.module.scss";

function Button({ children, onClick, className = "", type = "button" }) {
  return (
    <button
      type={type}
      className={`${classes.button} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;