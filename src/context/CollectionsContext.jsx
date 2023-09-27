import { useState, createContext } from 'react';

const CollectionsContext = createContext();

export const CollectionsProvider = ({ children }) => {
	const [books, setBooks] = useState([]);
	const [singleBook, setSingleBook] = useState({});
	const [authors, setAuthors] = useState([]);

	return (
		<CollectionsContext.Provider
			value={{
				books,
				setBooks,
				singleBook,
				setSingleBook,
				authors,
				setAuthors,
			}}
		>
			{children}
		</CollectionsContext.Provider>
	);
};

export default CollectionsContext;
