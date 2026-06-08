import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { search } from "../BooksAPI";
import Book from "./Book";

const SearchBooks = ({ books, onUpdateShelf }) => {
    // Returns a function that lets you navigate programmatically
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [searchedBooks, setSearchedBooks] = useState([]);

    useEffect(() => {
        if (query) { // only search when query state has value
            const getSearchedBooks = async () => {
                const res = await search(query);
                if (res && Array.isArray(res)) {
                    setSearchedBooks(res);
                } else {
                    setSearchedBooks([]);
                }
            };
            getSearchedBooks();
        } else {
            setSearchedBooks([]);
        }
    }, [query]); // effect only active when value of query state changes

    const displayBooks = searchedBooks.map((searchedBook) => {
        const matchingBook = books.find((b) => b.id === searchedBook.id);
        return {
            ...searchedBook,
            shelf: matchingBook ? matchingBook.shelf : "none"
        };
    });

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <a className="close-search" onClick={() => navigate('/')}>Close</a>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {displayBooks.map((book) => (
                        <Book key={book.id} book={book} onUpdateShelf={onUpdateShelf} />
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default SearchBooks;