import classes from "./Header.module.scss";

const Header = () => {
  return (
   <header className={classes.header}>
    <div className={classes.header__content}>
      <h1 className={classes.header__title}>Google Books Search</h1>
      <p className={classes.header__subtitle}> 
        Discover millions of books instantly.</p>

    </div>
   </header>
  );
}
;
export default Header;
