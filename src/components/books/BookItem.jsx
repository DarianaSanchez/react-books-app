import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import NoBookCover from '../../images/no-book-cover.jpg';

const BookItem = ({ id, title, authors, categories, thumbnailUrl }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<Link to={`/books/${id}`} key={id} aria-label="Single Book">
				<div className="relative flex flex-row w-full h-full rounded-xl shadow-lg hover:shadow-xl bg-clip-border cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					<div className="relative m-0 w-2/5 rounded-xl bg-white bg-clip-border text-gray-700">
						<img
							src={thumbnailUrl || NoBookCover}
							alt="Single Book"
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="text-center px-4 py-6 max-w-sm">
						<p className="font-general-medium text-lg md:text-lg text-ternary-dark dark:text-ternary-light mb-4 h-1/4">
							{title}
						</p>
						<p className="text-md text-ternary-dark dark:text-ternary-light mb-4 h-1/4">
							{authors && authors.map((x => x.full_name)).join(", ")}
						</p>
						<div className="mb-4 h-1/4">
							{categories &&
								categories.map((category) => (
									<span 
										key={category}
										className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-xs dark:bg-blue-900 dark:text-blue-300"
									>
										{category}
									</span>
								))
							}
						</div>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default BookItem;
