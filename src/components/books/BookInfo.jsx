import NoBookCover from '../../images/no-book-cover.jpg';


const BookInfo = ({ id, isbn, authors, thumbnailUrl, shortDescription }) => {
	return (
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			{/*  Single book thumbnail */}
			<div className="w-full sm:w-1/4 text-left">
				<div className="mb-10 sm:mb-0">
					<img
						src={thumbnailUrl || NoBookCover}
						alt={isbn}
						className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
					/>
				</div>
			</div>

			{/* Single book details */}
			<div className="w-full sm:w-2/4 text-left mt-10 sm:mt-0">
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
						Details
					</p>
					<ul className="leading-loose">
						<li
							key="isbn"
							className="font-general-regular text-ternary-dark dark:text-ternary-light"
						>
							<span className="font-semibold duration-300">ISBN: </span>
							<span className="text-indigo-400 duration-300">{isbn}</span>
						</li>
						<li
							key="author"
							className="font-general-regular text-ternary-dark dark:text-ternary-light"
						>
							<span className="font-semibold duration-300">Author(s): </span>
							<span className="text-indigo-400 duration-300">{authors && authors.map((x => x.full_name)).join(", ")}</span>
						</li>
					</ul>
				</div>

				{/* Single project objectives */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						Description
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						{shortDescription}
					</p>
				</div>
			</div>
		</div>
	);
};

export default BookInfo;
