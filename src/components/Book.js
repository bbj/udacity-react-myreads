import React from "react";

const Book = ({ book, onUpdateShelf }) => {
    const thumbnail = book.imageLinks && book.imageLinks.thumbnail
        ? book.imageLinks.thumbnail
        : "";

    const handleShelfChange = (e) => {
        if (onUpdateShelf) {
            onUpdateShelf(book, e.target.value);
        }
    };

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${thumbnail})`
                        }}>
                    </div>
                    <div className="book-shelf-changer">
                        <select value={book.shelf || "none"} onChange={handleShelfChange}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">
                    {book.authors ? (Array.isArray(book.authors) ? book.authors.join(", ") : book.authors) : ""}
                </div>
            </div>
        </li>
    );
};

export default Book;
