import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <h1 className={classes.header__title}>
          Discover{" "}
          <span className={classes.gradient}>Books</span>{" "}
          you'll love to read
        </h1>

        <p className={classes.header__subtitle}>
          Explore millions of books, discover new authors, and find your next favourite story.
        </p>
      </div>
    </header>
  );
};

export default Header;
