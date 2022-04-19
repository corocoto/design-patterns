import Book from './Book';

const books = new Map();

const createBook = (title, author, isbn) => {
  const isBookExist = books.has(isbn);

  if (isBookExist) {
    return books.get(isbn);
  }

  const book = new Book(title, author, isbn);
  books.set(isbn, book);
  return book;
};

export default createBook;
