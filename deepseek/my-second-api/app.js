const express = require("express");
const app = express();

app.use(express.json());

let books = [
  {
    id: 1,
    title: "The Pragmatic Programmer",
    author: "Dave Thomas",
    year: 1999,
  },
  { id: 2, title: "Clean Code", author: "Robert C. Martin", year: 2008 },
];

// Helper function untuk generate ID unik
const generateId = () => {
  const maxId = books.length > 0 ? Math.max(...books.map((b) => b.id)) : 0;
  return maxId + 1;
};

// [GET] Home
app.get("/", (req, res) => {
  res.send("📚 Welcome to Bookstore API!");
});

// [GET] All books
app.get("/books", (req, res) => {
  res.json(books);
});

// [GET] Book by ID
app.get("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ error: "Book not found!" });
  res.json(book);
});

// [POST] Add new book
app.post("/books", (req, res) => {
  if (!req.body.title || !req.body.author) {
    return res.status(400).json({ error: "Title and author are required!" });
  }

  const newBook = {
    id: generateId(), // Pakai fungsi generateId
    title: req.body.title,
    author: req.body.author,
    year: req.body.year || null, // Year optional
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// [PATCH] Update book (partial update)
app.patch("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ error: "Book not found!" });

  // Update hanya field yang dikirim
  if (req.body.title) book.title = req.body.title;
  if (req.body.author) book.author = req.body.author;
  if (req.body.year) book.year = req.body.year;

  res.json(book);
});

// [DELETE] Remove book
app.delete("/books/:id", (req, res) => {
  const index = books.findIndex((b) => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Book not found!" });

  const deletedBook = books.splice(index, 1);
  res.json({ message: `Book "${deletedBook[0].title}" deleted.` });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
