import { useState } from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import { searchBooks } from "./services/bookApi";
import BookGrid from "./components/BookGrid/BookGrid";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Modal from "./components/Modal/Modal";

function App() {
  const [books, setBooks] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // added for modal
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      setError("");

      const results = await searchBooks(query);

      if (results.length === 0) {
        setError("No books found.");
      }

      setBooks(results);

    } catch (error) {
      setError("Something went wrong. Please try again.");

    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <SearchBar onSearch={handleSearch} />

      <main>
        <h1>Google Books Search</h1>

        {loading && <Loader />}

        {error && <ErrorMessage message={error} />}

        {!loading && !error && (
          <BookGrid 
            books={books}
            onSelect={setSelectedBook}
          />
        )}

      </main>

      {selectedBook && (
        <Modal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}

    </>
  );
}

export default App;