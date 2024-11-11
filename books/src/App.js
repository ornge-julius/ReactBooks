import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';


function App() {
  const [books, setBooks] = useState([]);

  
  const createBook = (title) => {
    // We only do this because we don;t ahve a backend database generating an ID
    const id = Math.round(Math.random() * 999);
    const updatedBooks = [...books, { id: id, title }];
    setBooks(updatedBooks);
  };

  const editBook = () => {

  };

  const deleteBookByID = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };
	
  return(

    <div className="app">
      <BookList books={books} onDelete={deleteBookByID}/>
      <BookCreate onCreate={createBook} />
    </div>
  );

}

export default App;