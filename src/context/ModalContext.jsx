import { useState, createContext } from 'react';

const ModalContext = createContext();

export const ModalViewProvider = ({ children }) => {
	const [showBookModal, setShowBookModal] = useState(false);
	const [showAuthorModal, setShowAuthorModal] = useState(false);

	const toogleBookModal = () => {
		setShowBookModal(!showBookModal);
	}
	const toogleAuthorModal = () => {
		if (showAuthorModal) localStorage.removeItem('current-author');
		setShowAuthorModal(!showAuthorModal);
	}

	return (
		<ModalContext.Provider
			value={{
				showBookModal,
				showAuthorModal,
				toogleBookModal,
				toogleAuthorModal,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalContext;
