const api = "https://reactnd-books-api.udacity.com";

/*
  At first visit, generate a random token and save it to localStorage.
  The token is used to authenticate the user.
*/
let token = localStorage.token;
if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8);
}

/*
  The headers object is used to authenticate the user.
  It is used in all the fetch requests to the API.
  Authorization header is used to pass the token to the API.

  API Isolation:
    - The token is passed in the Authorization header on every HTTP request.
    - The Udacity mock backend uses this header value to segment data.
    - Each distinct token gets its own virtual database instance.
    - Your book selections and shelf assignments are saved separately from other users.
*/
const headers = {
  Accept: "application/json",
  Authorization: token,
};

export const get = (bookId) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then((res) => res.json())
    .then((data) => data.book);

export const getAll = () =>
  fetch(`${api}/books`, { headers })
    .then((res) => res.json())
    .then((data) => data.books);

export const update = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ shelf }),
  }).then((res) => res.json());

export const search = (query, maxResults) =>
  fetch(`${api}/search`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, maxResults }),
  })
    .then((res) => res.json())
    .then((data) => data.books);
