import { FiFileText, FiTag } from 'react-icons/fi';


const BookHeader = ({ id, title, pageCount, categories }) => {
	return (
		<div>
			<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
				{title}
			</p>
			<div className="flex">
				<div className="flex items-center mr-10">
					<FiFileText className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{pageCount} pages
					</span>
				</div>
				<div className="flex items-center">
					<FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{categories &&
							categories.map((category) => (
								<span 
									key={category}
									class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-xs dark:bg-blue-900 dark:text-blue-300"
								>
									{category}
								</span>
							))
						}
					</span>
				</div>
			</div>
		</div>
	);
};

export default BookHeader;
