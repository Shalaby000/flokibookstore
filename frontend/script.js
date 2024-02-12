// Placeholder JavaScript for frontend functionality
document.addEventListener('DOMContentLoaded', () => {
    // Fetch list of books and display them on the page
    fetchBooks();
  });
  
  async function fetchBooks() {
    try {
      const response = await fetch('/api/books');
      const data = await response.json();
      const booksList = document.getElementById('books-list');
      booksList.innerHTML = `<p>${data.message}</p>`;
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }
  