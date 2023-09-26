import { useContext } from 'react';
import { FiFileText, FiTag, FiEdit } from 'react-icons/fi';
import BookFormModal from "./BookFormModal";
import ModalContext from '../../context/ModalContext';


const BookHeader = ({ title, pageCount, categories }) => {
	const { showBookModal, toogleBookModal } = useContext(ModalContext);

	return (
		<>
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
										className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-xs dark:bg-blue-900 dark:text-blue-300"
									>
										{category}
									</span>
								))
							}
						</span>
					</div>
				</div>
				<div onClick={toogleBookModal} className="flex justify-end items-center md:flex-row">
					<span
						className="text-md 
							font-general-medium
							bg-indigo-100 
							hover:border-indigo-500
							text-ternary-dark shadow-md 
							rounded-xl px-5 py-2.5
							duration-300"
						aria-label="Edit Book Button"
					>
						<FiEdit /><span>Edit</span>
					</span>
				</div>
			</div>
			
			{/* Book form modal */}
			<div>
				{showBookModal ? (
					<BookFormModal closeModal={toogleBookModal} />
				) : null}
				{showBookModal ? toogleBookModal : null}
			</div>
		</>
	);
};

export default BookHeader;
