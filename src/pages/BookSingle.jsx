import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from 'framer-motion';
import BookHeader from '../components/books/BookHeader';
import BookInfo from '../components/books/BookInfo';
import { ModalViewProvider } from '../context/ModalContext';
import { CollectionsProvider } from '../context/CollectionsContext';
import { getBooks } from "../services/books-api";

const BookSingle = () => {
	const { id } = useParams();
	const [book, setBook] = useState({});

	useEffect(() => {
		let isCancelled = false;

		getBooks(id)
			.then((result) => {
				if (!isCancelled) setBook(result);
			});

		return () => isCancelled = true;
		
	}, [id]);

	return (
		<ModalViewProvider>
			<CollectionsProvider>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, delay: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.6,
						delay: 0.15,
					}}
					className="container mx-auto mt-5 sm:mt-10"
				>
					<BookHeader
						title={book.title}
						pageCount={book.pageCount}
						categories={book.categories}
					/>
					<BookInfo
						isbn={book.isbn}
						authors={book.authors}
						thumbnailUrl={book.thumbnailUrl}
						shortDescription={book.shortDescription}
					/>
				</motion.div>
			</CollectionsProvider>
		</ModalViewProvider>
	);
};

export default BookSingle;
