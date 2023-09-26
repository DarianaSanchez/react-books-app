import BooksGrid from '../components/books/BooksGrid';
import { ModalViewProvider } from '../context/ModalContext';
import { CollectionsProvider } from '../context/CollectionsContext';

const Books = () => {
	return (
		<ModalViewProvider>
			<CollectionsProvider>
				<div className="container mx-auto">
					<BooksGrid />
				</div>
			</CollectionsProvider>
		</ModalViewProvider>
	);
};

export default Books;
