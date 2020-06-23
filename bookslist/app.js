// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add Book to list
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById("book-list");
  // Create tr element
  const row = document.createElement("tr");
  // Insert cols
  row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;
  list.appendChild(row);
};

// Show Alert
UI.prototype.showAlert = function(message, className) {
  // Create div
  const div = document.createElement("div");
  // Add classes
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector(".container");
  // Get form
  const form = document.querySelector("#book-form");
  // Insert alert
  container.insertBefore(div, form);
  // Timeout
  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 3000);
};

// Clear form
UI.prototype.clearForm = function() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

// Delete Book
UI.prototype.deleteBook = function(target) {
  if (target.className === "delete") {
    target.parentElement.parentElement.remove();
  }
};

// Event Listeners Add Book
document.getElementById("book-form").addEventListener("submit", function(e) {
  // Form Values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;
  // Instantiate Book
  const book = new Book(title, author, isbn);
  // Instantiate UI
  const ui = new UI();
  // Validate
  if (title === "" || author === "" || isbn === "") {
    // Error Alert
    ui.showAlert("Please fill all fields", "error");
  } else {
    // Success Alert
    ui.showAlert("Book added!", "success");
    // Add Book to list
    ui.addBookToList(book);
    // Clear form
    ui.clearForm();
  }
  e.preventDefault();
});

// Event Listener Delete Book
document.getElementById("book-list").addEventListener("click", function(e) {
  // Instantiate UI
  const ui = new UI();
  // Delete Book
  ui.deleteBook(e.target);
  // Success Alert
  ui.showAlert("Book removed.", "success");
  e.preventDefault();
});
