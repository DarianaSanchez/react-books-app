import { useContext } from 'react';
import { motion } from 'framer-motion';
import { FiEdit } from 'react-icons/fi';
import ModalContext from '../../context/ModalContext';

const BookItem = ({ id, firstName, lastName }) => {
	const { toogleAuthorModal } = useContext(ModalContext);

	const handleClickEdit = () => {
		localStorage.setItem('current-author', id);
		toogleAuthorModal();
	}

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
			<div className="relative flex flex-row w-full h-full rounded-xl shadow-lg bg-clip-border cursor-pointer mb-10 sm:mb-0 bg-secondary-light px-4">
				<div className="relative m-0 sm:w-2/3 rounded-xl bg-white bg-clip-border text-gray-700">
					<p className="text-md text-ternary-dark dark:text-ternary-light mb-4 h-1/2">
						First Name: <span className="font-semibold">{firstName}</span>
					</p>
					<p className="text-md text-ternary-dark dark:text-ternary-light mb-4 h-1/2">
						Last Name: <span className="font-semibold">{lastName}</span>
					</p>
				</div>
				<div className="text-center items-center sm:w-1/3 max-w-sm h-full px-4 py-6">
					<div onClick={handleClickEdit} className="flex justify-end md:flex-row">
						<span
							className="text-md 
								font-general-medium
								bg-indigo-100 
								hover:border-indigo-500
								text-ternary-dark shadow-md 
								rounded-xl px-5 py-2.5
								duration-300"
							aria-label="Edit Author Button"
						>
							<FiEdit />
						</span>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default BookItem;
