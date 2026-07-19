import { useState } from "react";
import classes from "./SearchBar.module.scss";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <form className={classes.searchBar} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;