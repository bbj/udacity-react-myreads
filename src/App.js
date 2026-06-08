import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAll, update } from "./BooksAPI";
import ListBooks from "./components/ListBooks";
import SearchBooks from "./components/SearchBooks";

function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getInitialBooks = async () => {
      const res = await getAll();
      setBooks(res);
    };
    getInitialBooks();
  }, []);

  const updateBookshelf = (book, shelf) => {
    update(book, shelf);
    setBooks((prevBooks) => {
      const bookExists = prevBooks.some((b) => b.id === book.id);
      if (bookExists) {
        if (shelf === "none") {
          return prevBooks.filter((b) => b.id !== book.id);
        }
        return prevBooks.map((b) => (b.id === book.id ? { ...b, shelf } : b));
      } else {
        if (shelf !== "none") {
          return [...prevBooks, { ...book, shelf }];
        }
        return prevBooks;
      }
    });
  };

  return (
    <Routes>
      <Route exact path="/" element={
        <ListBooks books={books} onUpdateShelf={updateBookshelf} />
      }>
      </Route>
      <Route exact path="/search" element={
        <SearchBooks books={books} onUpdateShelf={updateBookshelf} />
      }>
      </Route>
    </Routes>
  );
}

export default App;
