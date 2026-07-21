import { useState } from "react";
import classes from "./SearchBar.module.scss";
import searchIcon from "../../assets/icons/Search.svg";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedSearch = searchTerm.trim();

    if (!trimmedSearch) {
      setError("Please enter a book title");
      return;
    }

    setError("");
    onSearch(trimmedSearch);
  };

  return (
    <form className={classes.searchBar} onSubmit={handleSubmit}>
      <div className={classes.searchControls}>
        <div className={classes.inputWrapper}>
          <img
            className={classes.searchIcon}
            src={searchIcon}
            alt=""
          />

          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
              setError("");
            }}
          />
        </div>

        <button type="submit">
          Search
        </button>
      </div>

      {error && <p className={classes.error}>{error}</p>}
    </form>
  );
}

export default SearchBar;