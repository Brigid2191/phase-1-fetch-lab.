function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books", { timeout: 10000 }) // 10 seconds timeout
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Failed to fetch books");
      }
      return resp.json();
    })
    .then((json) => renderBooks(json))
    .catch((error) => console.error("Error fetching books:", error));
}



function renderBooks(books) {
  const main = document.querySelector('.main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});