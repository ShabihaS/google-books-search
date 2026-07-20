const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

const API_URL = "https://www.googleapis.com/books/v1/volumes";

export const searchBooks = async (query) => {
  if (!query.trim()) {
    return [];
  }

  try {
    const response = await fetch(
      `${API_URL}?q=${encodeURIComponent(query)}&key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }

    const data = await response.json();

    return data.items || [];
  } catch (error) {
    console.error("Book search error:", error);
    return [];
  }
};