import {useState} from 'react';
function BookCreate ({onCreate}) {
	
	const [title, setTitle] = useState("");

	const handleChange = (event) => {
		setTitle(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		onCreate(title);

		//clear the text in the input box
		setTitle("");
	};


	return(
		<div className="book-create">
			<h3>Add a book</h3>
			<form onSubmit={handleSubmit}>
				<label>Title: </label>
				<input type="text" value={title} onChange={handleChange} />
				<button>Create!</button>
			</form>
		</div>
	);
};

export default BookCreate;