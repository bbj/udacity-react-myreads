# MyReads: A Book Tracking App

MyReads is a React-based application that allows users to categorize and track books. It provides a visual bookshelf with three shelves: **Currently Reading**, **Want to Read**, and **Read**. Users can search for new books, add them to a shelf, or move existing books between shelves.

This project was built as the final assessment project for Udacity's React Fundamentals course, transitioning a static template into an interactive, stateful web application.

---

## Features

- **Interactive Bookshelf Categorization**: Organizes books into three shelves: "Currently Reading", "Want to Read", and "Read".
- **Dynamic Shelf Switching**: Drop-down menus on each book allow seamless movement between shelves (including removing them from shelves by selecting "None").
- **Live Search Functionality**: Search for books by title, author, or ISBN via the Search page.
- **Consistent State Alignment**: Search results show the correct current shelf for any books already on the user's bookshelves.
- **Responsive Navigation**: Leverages `react-router-dom` for smooth client-side routing between the main shelves list view and the search view.
- **Robust Component Architecture**: Modularized codebase with reusable React components (e.g., `Book`, `ListBooks`, `SearchBooks`).

---

## File Structure

```text
├── README.md
├── SEARCH_TERMS.md          # List of valid search terms supported by the backend
├── package.json             # NPM package configurations and scripts
├── public/
│   ├── favicon.ico
│   └── index.html
└── src/
    ├── App.css              # Main stylesheet containing layout and custom shelf styling
    ├── App.js               # Root component managing application state and routing
    ├── BooksAPI.js          # JavaScript utility wrappers for the backend API
    ├── components/
    │   ├── Book.js          # Reusable component representing an individual book cover & controls
    │   ├── ListBooks.js     # Component for displaying the bookshelves grid and shelves
    │   └── SearchBooks.js   # Component managing searching inputs, API queries, and matching states
    ├── icons/               # SVG icons used in navigation and selection lists
    ├── index.css            # Global base styles
    └── index.js             # React DOM rendering entry point
```

---

## Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
1. Clone the repository or navigate to the project directory:
   ```bash
   cd myreads
   ```
2. Install the project dependencies:
   ```bash
   npm install
   ```

### Running the Application
To start the local development server:
```bash
npm start
```
The application will open automatically in your browser at [http://localhost:3000/](http://localhost:3000/).

---

## Backend API

The backend server is provided by Udacity. The [`src/BooksAPI.js`](src/BooksAPI.js) file contains helper methods to communicate with this backend:

### `getAll()`
- **Purpose**: Retrieves all books currently assigned to any of the user's shelves.
- **Returns**: A `Promise` resolving to an array of book objects.

### `update(book, shelf)`
- **Purpose**: Moves a book to a different shelf.
- **Parameters**: 
  - `book`: `<Object>` containing at least an `id` property.
  - `shelf`: `<String>` must be one of: `"currentlyReading"`, `"wantToRead"`, `"read"`, or `"none"`.
- **Returns**: A `Promise` resolving to a JSON object showing the IDs of the books on each shelf.

### `search(query)`
- **Purpose**: Queries the backend database for books matching a search query.
- **Parameters**:
  - `query`: `<String>`.
- **Returns**: A `Promise` resolving to an array of search result book objects.
> [!IMPORTANT]
> The backend server only accepts a whitelisted set of search terms. These terms are listed in [SEARCH_TERMS.md](SEARCH_TERMS.md). Any searches outside this list will not return results.
