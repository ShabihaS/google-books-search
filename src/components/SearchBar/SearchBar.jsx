

import classes from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <section className={classes.searchBar}>
      <input 
        type="text"
        placeholder="Search books..."
      />
      <button>Search</button>
    </section>
  );
};

export default SearchBar;