import createBook from './createBook.js';

const bookList = [];

const addBook = (title, author, isbn, availability, sales) => {
  const book = {
    ...createBook(title, author, isbn),
    availability,
    sales
  };

  bookList.push(book);
  return book;
}

export {addBook, bookList};
