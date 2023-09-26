import { Link } from 'react-router-dom';
import Button from '../components/reusable/Button';
import AppBanner from '../components/shared/AppBanner';
import BooksGrid from '../components/books/BooksGrid';
import { ModalViewProvider } from '../context/ModalContext';
import { CollectionsProvider } from '../context/CollectionsContext';


const Home = () => {
	return (
		<div className="container mx-auto">
			<AppBanner />
			<ModalViewProvider>
				<CollectionsProvider>
					<BooksGrid />
				</CollectionsProvider>
			</ModalViewProvider>

			<div className="mt-8 sm:mt-10 flex justify-center">
				<Link
					to="/books"
					className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
					aria-label="Go to Books"
				>
					<Button title="Go to Books" />
				</Link>
			</div>
		</div>
	);
};

export default Home;
