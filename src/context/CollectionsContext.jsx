import { useState, createContext } from 'react';

const CollectionsContext = createContext();

export const CollectionsProvider = ({ children }) => {
	const [books, setBooks] = useState([]);
	const [authors, setAuthors] = useState([]);

	return (
		<CollectionsContext.Provider
			value={{
				books,
				setBooks,
				authors,
				setAuthors,
			}}
		>
			{children}
		</CollectionsContext.Provider>
	);
};

export default CollectionsContext;
