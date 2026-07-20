import { useState } from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import BookCard from "./components/BookCard/BookCard";
import { searchBooks } from "./services/bookApi";
import BookGrid from "./components/BookGrid/BookGrid";

function App() {
  const [books, setBooks] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchBooks(query);

    console.log(results);

    setBooks(results);
  };

  return (
    <>
      <Header />

      <SearchBar onSearch={handleSearch} />

      <main>
        <h1>Google Books Search</h1>

       <BookGrid books={books} />

      </main>
    </>
  );
}

export default App;