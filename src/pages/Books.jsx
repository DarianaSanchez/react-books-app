import BooksGrid from '../components/books/BooksGrid';
import { ModalViewProvider } from '../context/ModalContext';

const Books = () => {
	return (
		<ModalViewProvider>
			<div className="container mx-auto">
				<BooksGrid />
			</div>
		</ModalViewProvider>
	);
};

export default Books;
