import { useState } from 'react';
import BookCreate from './components/BookCreate';


function App() {
  const [books, setBooks] = useState([]);

  const updatedBooks = [...books, ]
  
  const createBook = (title) => {
    setBooks(updatedBooks);
    console.log('Book title: ', title);
  };

  const editBook = () => {

  };

  const deleteBook = () => {

  };
	
  return(

    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );

}

export default App;