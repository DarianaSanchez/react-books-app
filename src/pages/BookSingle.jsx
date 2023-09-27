import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { motion } from 'framer-motion';
import BookHeader from '../components/books/BookHeader';
import BookInfo from '../components/books/BookInfo';
import CollectionsContext from '../context/CollectionsContext';
import { getBooks } from "../services/books-api";

const BookSingle = () => {
	const { id } = useParams();
	const { singleBook, setSingleBook } = useContext(CollectionsContext);

	useEffect(() => {
		let isCancelled = false;

		getBooks(id)
			.then((result) => {
				if (!isCancelled) setSingleBook(result);
			});

		return () => isCancelled = true;
		
	}, [id, setSingleBook]);

	return (
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
					title={singleBook.title}
					pageCount={singleBook.pageCount}
					categories={singleBook.categories}
				/>
				<BookInfo
					isbn={singleBook.isbn}
					authors={singleBook.authors}
					thumbnailUrl={singleBook.thumbnailUrl}
					shortDescription={singleBook.shortDescription}
				/>
			</motion.div>
	);
};

export default BookSingle;
