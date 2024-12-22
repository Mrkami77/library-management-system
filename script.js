// Book Management System
const bookForm = document.getElementById('book-form');
const bookList = document.getElementById('book-list');
let books = [];

// Add book event
bookForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;

    if (title && author && year) {
        const newBook = { title, author, year, status: 'Available' };
        books.push(newBook);
        renderBooks();
        bookForm.reset();
    } else {
        alert('All fields are required!');
    }
});

// Render books
function renderBooks() {
    bookList.innerHTML = '';
    books.forEach((book, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.year}</td>
            <td>${book.status}</td>
            <td>
                ${book.status === 'Available'
                    ? `<button class="issue">Issue</button>`
                    : `<button class="return">Return</button>`
                }
                <button class="delete">Delete</button>
            </td>
        `;

        // Issue Book
        row.querySelector('.issue')?.addEventListener('click', () => {
            book.status = 'Issued';
            renderBooks();
        });

        // Return Book
        row.querySelector('.return')?.addEventListener('click', () => {
            book.status = 'Available';
            renderBooks();
        });

        // Delete Book
        row.querySelector('.delete').addEventListener('click', () => {
            books.splice(index, 1);
            renderBooks();
        });

        bookList.appendChild(row);
    });
}
