import classes from "./Loader.module.scss";

function Loader() {
  return (
    <div className={classes.loader}>
      <p>Loading books...</p>
    </div>
  );
}

export default Loader;