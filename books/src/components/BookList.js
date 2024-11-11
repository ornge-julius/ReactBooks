import BookShow from './BookShow';


function BookList ({ books, onDelete}) {
  let renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} onDelete={onDelete} />
  });

  return (
    <div>{renderedBooks}</div>
  );
};

export default BookList;