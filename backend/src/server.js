const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/books', (req, res) => {
  // Placeholder route to fetch list of books
  res.json({ message: 'List of books' });
});

app.get('/api/books/:id', (req, res) => {
  // Placeholder route to fetch details of a book by ID
  const { id } = req.params;
  res.json({ message: `Details of book with ID ${id}` });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
